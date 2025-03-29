import { useState, useEffect } from "react";
import { Table, Tag, Button, message, TablePaginationConfig } from "antd";

const UsersTable = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 4,
        total: 0,
    });

    // Gọi API lấy danh sách người dùng
    const fetchUsers = async (page = 1, pageSize = 4) => {
        setLoading(true);
        try {
            const token = localStorage.getItem("accessToken"); // Lấy token từ localStorage
            if (!token) throw new Error("Unauthorized: No access token found");

            const response = await fetch(
                `https://stampingrobotapi-d0fpc6ghfggaf5az.southeastasia-01.azurewebsites.net/api/users?PageIndex=${page}&PageSize=${pageSize}&Role=Employee&IsDelete=false`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`, // Gửi token trong header
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Failed to fetch users");
            }

            const data = await response.json();
            const paginationHeader = response.headers.get("x-pagination");
            const paginationData = paginationHeader ? JSON.parse(paginationHeader) : null;

            setUsers(data);
            setPagination({
                current: paginationData?.CurrentPage || 1,
                pageSize: paginationData?.PageSize || 4,
                total: paginationData?.TotalCount || 0,
            });
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setLoading(false);
        }
    };


    // Gọi API khi component mount
    useEffect(() => {
        fetchUsers();
    }, []);

    // Khi người dùng chuyển trang
    const handleTableChange = (pagination: TablePaginationConfig) => {
        fetchUsers(pagination.current || 1, pagination.pageSize || 4);
    };

    // Hàm xử lý xóa người dùng (cập nhật isDeleted = true)
    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`https://stampingrobotapi-d0fpc6ghfggaf5az.southeastasia-01.azurewebsites.net/api/users/${id}`, {
                method: "DELETE", // Nếu API dùng phương thức khác như PUT thì thay đổi tại đây
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ isDeleted: true }),
            });

            if (!response.ok) {
                throw new Error("Failed to delete user");
            }

            message.success("Xóa người dùng thành công!");
            fetchUsers(); // Cập nhật danh sách sau khi xóa
        } catch (error) {
            console.error("Error deleting user:", error);
            message.error("Lỗi khi xóa người dùng!");
        }
    };

    interface UserRecord {
        id: number;
        fullName: string;
        phone: string;
        email: string;
        role: "Admin" | "Employee"; // Adjust roles as needed
        createdAt: string;
    }


    // Cấu hình cột trong bảng
    const columns = [
        {
            title: "Họ và Tên",
            dataIndex: "fullName",
            key: "fullName",
        },
        {
            title: "Số Điện Thoại",
            dataIndex: "phone",
            key: "phone",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Vai Trò",
            dataIndex: "role",
            key: "role",
            render: (role: UserRecord["role"]) => (
                <Tag color={role === "Admin" ? "red" : "blue"}>{role}</Tag>
            ),
        },
        {
            title: "Ngày Tạo",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (date: string) => new Date(date).toLocaleDateString(),
        },
        {
            title: "Hành động",
            key: "actions",
            render: (_: unknown, record: UserRecord) => (
                <Button type="primary" danger onClick={() => handleDelete(record.id)}>
                    Xóa
                </Button>
            ),
        },
    ];


    return (
        <Table
            columns={columns}
            dataSource={users}
            rowKey="id"
            loading={loading}
            pagination={{
                current: pagination.current,
                pageSize: pagination.pageSize,
                total: pagination.total,
                showSizeChanger: false,
            }}
            onChange={handleTableChange}
        />
    );
};

export default UsersTable;

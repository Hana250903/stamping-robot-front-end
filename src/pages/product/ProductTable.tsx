import { useState, useEffect } from "react";
import { Table, Button, Input, message, Spin, Popconfirm } from "antd";

interface Product {
    id: number;
    name: string;
    dimensions: string;
    material: string;
    createdAt: string | null;
    isDeleted: boolean;
}

const ProductTable = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [searchName, setSearchName] = useState<string>("");

    const fetchProducts = async (nameFilter = "") => {
        setLoading(true);
        try {
            const token = localStorage.getItem("accessToken");
            if (!token) throw new Error("Unauthorized: No access token found");

            const response = await fetch(
                `https://stampingrobotapi-d0fpc6ghfggaf5az.southeastasia-01.azurewebsites.net/api/products?Name=${nameFilter}&PageIndex=1&PageSize=1000`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }

            const data: Product[] = await response.json();
            const filteredData = data.filter((product) => !product.isDeleted);
            setProducts(filteredData);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            const token = localStorage.getItem("accessToken");
            if (!token) throw new Error("Unauthorized: No access token found");

            const response = await fetch(`https://stampingrobotapi-d0fpc6ghfggaf5az.southeastasia-01.azurewebsites.net/api/products/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (response.ok) {
                message.success("Xóa sản phẩm thành công!");
                fetchProducts();
            } else {
                message.error("Xóa thất bại!");
            }
        } catch (error) {
            console.error("Error deleting product:", error);
            message.error("Có lỗi xảy ra khi xóa!");
        }
    };

    const columns = [
        { title: "Tên sản phẩm", dataIndex: "name", key: "name" },
        { title: "Kích thước", dataIndex: "dimensions", key: "dimensions" },
        { title: "Chất liệu", dataIndex: "material", key: "material" },
        {
            title: "Ngày tạo",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (date: string | null) => date ? new Date(date).toLocaleDateString() : "N/A",
        },
        {
            title: "Hành động",
            key: "actions",
            render: (_: unknown, record: Product) => (
                <Popconfirm
                    title="Bạn có chắc chắn muốn xóa sản phẩm này?"
                    onConfirm={() => handleDelete(record.id)}
                    okText="Xóa"
                    cancelText="Hủy"
                >
                    <Button type="primary" danger>Xóa</Button>
                </Popconfirm>
            ),
        },
    ];

    return (
        <div>
            <h3 style={{ color: "black" }}>Danh sách Sản phẩm:</h3>

            <div style={{ marginBottom: 16, display: "flex", gap: "8px" }}>
                <Input
                    placeholder="Nhập tên sản phẩm..."
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    style={{ width: 200 }}
                />
                <Button type="primary" onClick={() => fetchProducts(searchName)}>
                    Tìm kiếm
                </Button>
            </div>

            {loading ? <Spin size="large" /> : (
                <Table columns={columns} dataSource={products} rowKey="id" pagination={false} />
            )}
        </div>
    );
};

export default ProductTable;
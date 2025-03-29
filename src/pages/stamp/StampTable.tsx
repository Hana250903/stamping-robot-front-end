import { useState, useEffect } from "react";
import { Table, Button, Input, Form, message, Spin, Popconfirm } from "antd";

interface Stamp {
  id: number;
  type: string;
  size: string;
  inkColor: string;
  createdAt?: string | null; // Optional
  isDeleted: boolean
}

const StampTable = () => {
  const [stamps, setStamps] = useState<Stamp[]>([]);
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);
  const [searchType, setSearchType] = useState("");

  const [newStamp, setNewStamp] = useState<Omit<Stamp, "id" | "createdAt" | "isDeleted">>({
    type: "",
    size: "",
    inkColor: "",
  });

  // Fetch stamps
  const fetchStamps = async (typeFilter = "", pageIndex = 1, pageSize = 100) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) throw new Error("Unauthorized: No access token found");

      const response = await fetch(
        `https://stampingrobotapi-d0fpc6ghfggaf5az.southeastasia-01.azurewebsites.net/api/stamps?Type=${typeFilter}&PageIndex=${pageIndex}&PageSize=${pageSize}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch stamps");

      const data: Stamp[] = await response.json();

      // 🔥 Filter out deleted stamps (if the API doesn't already)
      const filteredData = data.filter((stamp) => !stamp.isDeleted);

      setStamps(filteredData);
    } catch (error) {
      console.error("Error fetching stamps:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStamps();
  }, []);

  // Delete stamp
  const handleDelete = async (id: number) => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      message.error("Bạn chưa đăng nhập!");
      return;
    }

    try {
      const response = await fetch(
        `https://stampingrobotapi-d0fpc6ghfggaf5az.southeastasia-01.azurewebsites.net/api/stamps/${id}`,
        {
          method: "DELETE",
          headers: { "Authorization": `Bearer ${accessToken}` },
        }
      );

      if (response.ok) {
        message.success("Xóa con dấu thành công!");
        fetchStamps(); // Reload data
      } else {
        message.error("Xóa thất bại!");
      }
    } catch (error) {
      console.error("Error deleting stamp:", error);
      message.error("Có lỗi xảy ra khi xóa!");
    }
  };

  // Add new stamp
  const handleAddStamp = async () => {
    setAdding(true);
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) throw new Error("Unauthorized: No access token found");

      const response = await fetch(
        "https://stampingrobotapi-d0fpc6ghfggaf5az.southeastasia-01.azurewebsites.net/api/stamps",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          body: JSON.stringify(newStamp),
        }
      );

      if (!response.ok) throw new Error("Failed to add stamp");

      message.success("Thêm con dấu thành công!");
      setNewStamp({ type: "", size: "", inkColor: "" });
      fetchStamps();
    } catch (error) {
      console.error("Error adding stamp:", error);
      message.error("Thêm con dấu thất bại!");
    } finally {
      setAdding(false);
    }
  };

  // Columns definition
  const columns = [
    { title: "Loại", dataIndex: "type", key: "type" },
    { title: "Kích thước", dataIndex: "size", key: "size" },
    { title: "Màu mực", dataIndex: "inkColor", key: "inkColor" },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date: string | null) => (date ? new Date(date).toLocaleDateString() : "N/A"),
    },
    {
      title: "Hành động",
      key: "actions",
      render: (_: unknown, record: Stamp) => (
        <Popconfirm
          title="Bạn có chắc chắn muốn xóa con dấu này?"
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
      <h3 style={{ color: "black" }}>Danh sách Con Dấu:</h3>
      <div style={{ marginBottom: 16, display: "flex", gap: "8px" }}>
        <Input
          placeholder="Nhập loại con dấu..."
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          style={{ width: 200 }}
        />
        <Button type="primary" onClick={() => fetchStamps(searchType)}>
          Tìm kiếm
        </Button>
      </div>

      {loading ? (
        <Spin size="large" />
      ) : (
        <Table columns={columns} dataSource={stamps} rowKey="id" pagination={false} />
      )}

      <h3>Thêm Con Dấu Mới:</h3>
      <Form layout="inline">
        <Form.Item>
          <Input
            placeholder="Loại"
            value={newStamp.type}
            onChange={(e) => setNewStamp({ ...newStamp, type: e.target.value })}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder="Kích thước"
            value={newStamp.size}
            onChange={(e) => setNewStamp({ ...newStamp, size: e.target.value })}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder="Màu mực"
            value={newStamp.inkColor}
            onChange={(e) => setNewStamp({ ...newStamp, inkColor: e.target.value })}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleAddStamp} loading={adding}>
            Thêm Con Dấu
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default StampTable;

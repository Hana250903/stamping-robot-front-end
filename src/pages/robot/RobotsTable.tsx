import { useState, useEffect, useCallback } from "react";
import { Table, Tag, Select, Button, Input, Form, message, Spin, Popconfirm } from "antd";
import StampingSession from "./StampingSession";

const { Option } = Select;

interface Robot {
    id: number;
    name: string;
    model: string;
    status: string;
    createdAt: string;
    isDeleted: boolean;
}

const robotModels = ["IprHd6m90", "IprHd6ms90", "IprHd6m180", "IprHd6ms180"];

const RobotsTable = () => {
    const [robots, setRobots] = useState<Robot[]>([]);
    const [loading, setLoading] = useState(false);
    const [adding, setAdding] = useState(false);
    const [selectedModel, setSelectedModel] = useState<string>(robotModels[0]);
    const [newRobot, setNewRobot] = useState<Omit<Robot, "id" | "createdAt" | "isDeleted" | "status">>({
        name: "",
        model: robotModels[0],
    });

    const fetchRobots = useCallback(async () => {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
            console.warn("No access token found, skipping fetch.");
            setLoading(false); // Ensure loading stops
            return;
        }
    
        setLoading(true);
        try {
            const response = await fetch(
                `https://stampingrobotapi-d0fpc6ghfggaf5az.southeastasia-01.azurewebsites.net/api/robots?PageIndex=1&PageSize=9999&Model=${selectedModel}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${accessToken}`,
                    },
                }
            );
            if (!response.ok) throw new Error("Failed to fetch robots");
            const data: Robot[] = await response.json();
            setRobots(data.filter(robot => !robot.isDeleted));
        } catch (error) {
            console.error("Error fetching robots:", error);
            // Optional: Notify the user
            // message.error("Không thể tải danh sách robot!");
        } finally {
            setLoading(false);
        }
    }, [selectedModel, setLoading, setRobots]); // Dependencies for useCallback
    
    useEffect(() => {
        fetchRobots();
    }, [fetchRobots]); // Now depends on memoized fetchRobots

    const handleModelChange = (value: string) => setSelectedModel(value);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewRobot({ ...newRobot, [e.target.name]: e.target.value });
    };
    const handleNewRobotModelChange = (value: string) => {
        setNewRobot({ ...newRobot, model: value });
    };

    const handleAddRobot = async () => {
        if (!newRobot.name.trim()) return message.error("Tên robot không được để trống!");
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) return;
    
        setAdding(true);
        try {
            const response = await fetch("https://stampingrobotapi-d0fpc6ghfggaf5az.southeastasia-01.azurewebsites.net/api/robots", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`,
                },
                body: JSON.stringify(newRobot),
            });
            if (!response.ok) throw new Error("Failed to add robot");
            message.success("Thêm robot thành công!");
            setNewRobot({ name: "", model: robotModels[0] });
            fetchRobots();
        } catch {
            message.error("Thêm robot thất bại!");
        } finally {
            setAdding(false);
        }
    };

    const handleDeleteRobot = async (id: number) => {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) return;

        try {
            const response = await fetch(`https://stampingrobotapi-d0fpc6ghfggaf5az.southeastasia-01.azurewebsites.net/api/robots/${id}`, {
                method: "DELETE",
                headers: { "Authorization": `Bearer ${accessToken}` },
            });
            if (!response.ok) throw new Error("Failed to delete robot");
            message.success("Xóa robot thành công!");
            fetchRobots();
        } catch {
            message.error("Xóa robot thất bại!");
        }
    };

    const columns = [
        { title: "Tên Robot", dataIndex: "name", key: "name" },
        { title: "Model", dataIndex: "model", key: "model" },
        { title: "Stamping Sessions", key: "stampingSessions", render: (_: unknown, record: Robot) => <StampingSession robotId={record.id} /> },
        { title: "Trạng Thái", dataIndex: "status", key: "status", render: (status: string) => <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag> },
        { title: "Ngày Tạo", dataIndex: "createdAt", key: "createdAt", render: (date: string) => new Date(date).toLocaleDateString() },
        { title: "Hành động", key: "actions", render: (_: unknown, record: Robot) => (<Popconfirm title="Bạn có chắc chắn muốn xóa robot này?" onConfirm={() => handleDeleteRobot(record.id)} okText="Xóa" cancelText="Hủy"><Button danger>Xóa</Button></Popconfirm>) },
    ];

    return (
        <div>
            <h3>Chọn Model Robot:</h3>
            <Select value={selectedModel} onChange={handleModelChange} style={{ width: 200, marginBottom: 16 }}>
                {robotModels.map(model => (<Option key={model} value={model}>{model}</Option>))}
            </Select>
            {loading ? <Spin size="large" /> : <Table columns={columns} dataSource={robots} rowKey="id" pagination={false} />}
            <h3>Thêm Robot Mới:</h3>
            <Form layout="inline">
                <Form.Item><Input name="name" placeholder="Nhập tên robot" value={newRobot.name} onChange={handleInputChange} /></Form.Item>
                <Form.Item><Select value={newRobot.model} onChange={handleNewRobotModelChange} style={{ width: 200 }}>{robotModels.map(model => (<Option key={model} value={model}>{model}</Option>))}</Select></Form.Item>
                <Form.Item><Button type="primary" onClick={handleAddRobot} loading={adding}>Thêm Robot</Button></Form.Item>
            </Form>
        </div>
    );
};

export default RobotsTable;

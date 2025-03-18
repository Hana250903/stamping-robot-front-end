import { Table, Badge, Button, Slider, Input, Card } from "antd";
import { VideoCameraOutlined } from "@ant-design/icons";

const ProcessManagement = () => {
    // Dữ liệu giả lập cho danh sách yêu cầu đóng dấu
    const stampingRequests = [
        {
            key: "1",
            orderId: "#12345",
            product: "Metal Sheet A4",
            qty: 500,
            status: "Pending",
        },
        {
            key: "2",
            orderId: "#12346",
            product: "Steel Plate B2",
            qty: 200,
            status: "In Progress",
        },
    ];

    return (
        <div className="flex min-h-screen bg-gray-900 text-white p-6 space-x-6">
            {/* Sidebar */}
            <div className="w-1/5 bg-gray-800 p-4 rounded-xl">
                <h2 className="text-lg font-bold mb-4">Navigation</h2>
                <div className="space-y-4">
                    <Button type="text" className="w-full text-left text-white">
                        Order List
                    </Button>
                    <Button type="text" className="w-full text-left text-gray-400">
                        Stamping Area Config
                    </Button>
                    <Button type="text" className="w-full text-left text-gray-400">
                        Quality Inspection
                    </Button>
                    <Button type="text" className="w-full text-left text-gray-400">
                        History & Logs
                    </Button>
                    <Button type="text" className="w-full text-left text-gray-400">
                        System Settings
                    </Button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 space-y-6">
                {/* Stamping Requests */}
                <Card className="bg-gray-800 text-white shadow-lg">
                    <div className="flex justify-between mb-4">
                        <h3 className="text-lg font-semibold">Stamping Requests</h3>
                        <div className="space-x-2">
                            <Button type="default">All</Button>
                            <Button type="default">Pending</Button>
                            <Button type="default">Active</Button>
                        </div>
                    </div>
                    <Table
                        dataSource={stampingRequests}
                        pagination={false}
                        columns={[
                            {
                                title: "Order ID",
                                dataIndex: "orderId",
                                key: "orderId",
                                render: (text) => <span className="text-blue-400">{text}</span>,
                            },
                            {
                                title: "Product",
                                dataIndex: "product",
                                key: "product",
                            },
                            {
                                title: "Qty",
                                dataIndex: "qty",
                                key: "qty",
                            },
                            {
                                title: "Status",
                                dataIndex: "status",
                                key: "status",
                                render: (status) => (
                                    <Badge
                                        status={status === "Pending" ? "warning" : "processing"}
                                        text={status}
                                    />
                                ),
                            },
                        ]}
                        className="bg-gray-800 text-white"
                    />
                </Card>

                {/* Parameters Configuration */}
                <div className="grid grid-cols-2 gap-6">
                    <Card className="bg-gray-800 text-white shadow-lg">
                        <h3 className="text-lg font-semibold mb-4">Parameters Configuration</h3>
                        <p>Stamping Pressure</p>
                        <Slider defaultValue={50} className="mb-4" />
                        <p>Speed</p>
                        <Slider defaultValue={75} className="mb-4" />
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p>X Position</p>
                                <Input defaultValue="150" />
                            </div>
                            <div>
                                <p>Y Position</p>
                                <Input defaultValue="200" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <p>Rotation (deg)</p>
                            <Input defaultValue="0" />
                        </div>
                        <div className="mt-6 h-20 flex justify-center items-center bg-gray-700 rounded-lg">
                            <span className="text-gray-400">Preview Area</span>
                        </div>
                    </Card>

                    {/* Quality Inspection */}
                    <Card className="bg-gray-800 text-white shadow-lg">
                        <h3 className="text-lg font-semibold mb-4">Quality Inspection</h3>
                        <div className="flex justify-center items-center h-32 bg-gray-700 rounded-lg">
                            <VideoCameraOutlined className="text-4xl text-gray-400" />
                            <span className="ml-2 text-gray-400">Live Camera Feed</span>
                        </div>
                        <div className="mt-4">
                            <p>Analysis Status: <span className="text-green-400 font-bold">PASS</span></p>
                        </div>
                        <div className="mt-2">
                            <p>Alignment: <span className="font-bold">98%</span></p>
                            <p>Depth: <span className="font-bold">95%</span></p>
                            <p>Clarity: <span className="font-bold">97%</span></p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ProcessManagement;

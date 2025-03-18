import { Card, Button, Badge } from "antd";
import { PlayCircleOutlined, PauseCircleOutlined, SyncOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const Dashboard = () => {
    // Dữ liệu giả lập cho biểu đồ
    const barChartData = [
        { hour: "08:00", stamps: 120 },
        { hour: "09:00", stamps: 150 },
        { hour: "10:00", stamps: 180 },
        { hour: "11:00", stamps: 130 },
    ];

    const lineChartData = [
        { time: "08:00", speed: 30 },
        { time: "09:00", speed: 35 },
        { time: "10:00", speed: 40 },
        { time: "11:00", speed: 38 },
    ];

    return (
        <div className="flex min-h-screen bg-gray-900 text-white p-6 space-x-6">
            {/* Sidebar */}
            <div className="w-1/5 bg-gray-800 p-4 rounded-xl">
                <h2 className="text-lg font-bold mb-4">RoboControl</h2>
                <div className="space-y-4">
                    <Button type="text" className="w-full text-left text-white">
                        Dashboard
                    </Button>
                    <Button type="text" className="w-full text-left text-gray-400">
                        History
                    </Button>
                    <Button type="text" className="w-full text-left text-gray-400">
                        Settings
                    </Button>
                    <Button type="text" className="w-full text-left text-gray-400">
                        Support
                    </Button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 space-y-6">
                {/* Robot Status */}
                <Card className="bg-gray-800 text-white shadow-lg">
                    <div className="flex justify-between">
                        <h3 className="text-lg font-semibold">Robot Status</h3>
                        <Badge status="success" text="Active" />
                    </div>
                    <div className="mt-4 space-y-2">
                        <p>
                            <strong>Robot Name:</strong> RB-2000X
                        </p>
                        <p>
                            <strong>Model:</strong> <span className="font-bold">Industrial Stamper v3</span>
                        </p>
                        <p>
                            <strong>ID:</strong> <span className="text-blue-400">#45892</span>
                        </p>
                        <p>
                            <strong>Firmware:</strong> <span className="text-blue-400">V2.31</span>
                        </p>
                    </div>
                    <div className="mt-4 flex space-x-3">
                        <Button type="primary" icon={<PlayCircleOutlined />} />
                        <Button danger icon={<PauseCircleOutlined />} />
                        <Button icon={<SyncOutlined />} />
                    </div>
                </Card>

                {/* Performance Metrics */}
                <div className="grid grid-cols-2 gap-6">
                    <Card className="bg-gray-800 text-white shadow-lg">
                        <h3 className="text-lg font-semibold mb-2">Performance Metrics</h3>
                        <ResponsiveContainer width="100%" height={150}>
                            <BarChart data={barChartData}>
                                <XAxis dataKey="hour" stroke="#ffffff" />
                                <YAxis stroke="#ffffff" />
                                <Tooltip />
                                <Bar dataKey="stamps" fill="#4F46E5" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>

                    <Card className="bg-gray-800 text-white shadow-lg">
                        <ResponsiveContainer width="100%" height={150}>
                            <LineChart data={lineChartData}>
                                <XAxis dataKey="time" stroke="#ffffff" />
                                <YAxis stroke="#ffffff" />
                                <Tooltip />
                                <Line type="monotone" dataKey="speed" stroke="#4F46E5" />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                </div>

                {/* Live Camera Feed */}
                <Card className="bg-gray-800 text-white shadow-lg">
                    <h3 className="text-lg font-semibold mb-2">Live Camera Feed</h3>
                    <div className="flex justify-center items-center h-40 bg-gray-700 rounded-lg">
                        <VideoCameraOutlined className="text-4xl text-gray-400" />
                        <span className="ml-2 text-gray-400">Live Stream Active</span>
                    </div>
                    <div className="mt-4 flex justify-between">
                        <span>AI Error Detection:</span>
                        <span className="text-green-400">No Issues Detected</span>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;

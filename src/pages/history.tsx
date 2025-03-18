import { Table, Card, Button, DatePicker, Select } from "antd";
import { DownloadOutlined, MailOutlined } from "@ant-design/icons";

const { Option } = Select;

const HistoryPage = () => {
    // Dữ liệu giả lập cho bảng Stamping History
    const stampingHistory = [
        {
            key: "1",
            timestamp: "2025-02-20 09:30",
            parameters: "P:100, S:50, Pos:X45",
            status: "✔",
        },
        {
            key: "2",
            timestamp: "2025-02-20 09:25",
            parameters: "P:98, S:50, Pos:X44",
            status: "✔",
        },
        {
            key: "3",
            timestamp: "2025-02-20 09:20",
            parameters: "P:95, S:48, Pos:X43",
            status: "✖",
        },
    ];

    // Dữ liệu giả lập cho Error Logs
    const errorLogs = [
        {
            key: "1",
            issue: "Sensor Issue",
            description: "Pressure sensor reading inconsistent",
            time: "08:20",
        },
        {
            key: "2",
            issue: "Print Head Failure",
            description: "Print head alignment required",
            time: "09:15",
        },
    ];

    return (
        <div className="flex min-h-screen bg-gray-900 text-white p-6 space-x-6">
            {/* Sidebar */}
            <div className="w-1/5 bg-gray-800 p-4 rounded-xl">
                <h2 className="text-lg font-bold mb-4">CommandUI</h2>
                <div className="space-y-4">
                    <Button type="text" className="w-full text-left text-white">
                        Activity History
                    </Button>
                    <Button type="text" className="w-full text-left text-gray-400">
                        Error Logs
                    </Button>
                    <Button type="text" className="w-full text-left text-gray-400">
                        Statistics
                    </Button>
                    <Button type="text" className="w-full text-left text-gray-400">
                        Report Export
                    </Button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 space-y-6">
                <h2 className="text-xl font-bold">Dashboard Overview</h2>

                {/* Stamping History */}
                <Card className="bg-gray-800 text-white shadow-lg">
                    <div className="flex justify-between mb-4">
                        <h3 className="text-lg font-semibold">Stamping History</h3>
                        <div className="flex space-x-2">
                            <DatePicker className="bg-gray-700 text-white" />
                            <Select defaultValue="All Status" className="bg-gray-700 text-white">
                                <Option value="all">All Status</Option>
                                <Option value="success">✔ Success</Option>
                                <Option value="failed">✖ Failed</Option>
                            </Select>
                        </div>
                    </div>
                    <Table
                        dataSource={stampingHistory}
                        pagination={false}
                        columns={[
                            {
                                title: "Timestamp",
                                dataIndex: "timestamp",
                                key: "timestamp",
                            },
                            {
                                title: "Parameters",
                                dataIndex: "parameters",
                                key: "parameters",
                            },
                            {
                                title: "Status",
                                dataIndex: "status",
                                key: "status",
                            },
                        ]}
                        className="bg-gray-800 text-white"
                    />
                </Card>

                {/* Error Logs & Error Statistics */}
                <div className="grid grid-cols-2 gap-6">
                    {/* Error Logs */}
                    <Card className="bg-gray-800 text-white shadow-lg">
                        <h3 className="text-lg font-semibold mb-4">Error Logs</h3>
                        {errorLogs.map((log) => (
                            <div key={log.key} className="mb-4">
                                <h4 className="text-md font-bold">{log.issue}</h4>
                                <p className="text-gray-400">{log.description}</p>
                                <p className="text-gray-500">{log.time}</p>
                            </div>
                        ))}
                    </Card>

                    {/* Error Statistics */}
                    <Card className="bg-gray-800 text-white shadow-lg">
                        <h3 className="text-lg font-semibold mb-4">Error Statistics</h3>
                        <div className="h-20 flex justify-center items-center bg-gray-700 rounded-lg">
                            <span className="text-gray-400">Bar Chart</span>
                        </div>
                        <div className="h-20 flex justify-center items-center bg-gray-700 rounded-lg mt-4">
                            <span className="text-gray-400">Pie Chart</span>
                        </div>
                        <div className="mt-4">
                            <p>✅ <span className="font-bold">95%</span> Success Rate</p>
                            <p>❌ <span className="font-bold">5%</span> Error Rate</p>
                        </div>
                    </Card>
                </div>

                {/* Export & Email Report Buttons */}
                <div className="flex justify-end space-x-4">
                    <Button type="default" icon={<DownloadOutlined />}>
                        Export CSV
                    </Button>
                    <Button type="default" icon={<MailOutlined />}>
                        Email Report
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HistoryPage;

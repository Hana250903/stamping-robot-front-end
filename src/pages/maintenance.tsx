import { Card, Button, Progress } from "antd";
import { FileExcelOutlined, FilePdfOutlined } from "@ant-design/icons";

const MaintenancePage = () => {
    // Dữ liệu giả lập cho Scheduled Maintenance
    const maintenanceTasks = [
        {
            key: "1",
            title: "Oil Replacement",
            unit: "#A123",
            date: "March 15, 2025 - 10:00 AM",
            status: "Upcoming",
            statusColor: "bg-blue-500",
        },
        {
            key: "2",
            title: "Motor Inspection",
            unit: "#B456",
            date: "March 12, 2025 - 2:30 PM",
            status: "Completed",
            statusColor: "bg-green-500",
        },
    ];

    // Dữ liệu giả lập cho Component Lifespan
    const componentLifespan = [
        { name: "Sensors", percentage: 75 },
        { name: "Motors", percentage: 45 },
        { name: "Oil Pumps", percentage: 15 },
    ];

    // Dữ liệu giả lập cho Error Alerts
    const errorAlerts = [
        {
            key: "1",
            title: "Motor Overload",
            unit: "#C789",
            description: "Critical Error",
            time: "2 hours ago",
        },
        {
            key: "2",
            title: "Sensor Failure",
            unit: "#D012",
            description: "Warning",
            time: "5 hours ago",
        },
    ];

    return (
        <div className="flex min-h-screen bg-gray-900 text-white p-6 space-x-6">
            {/* Sidebar */}
            <div className="w-1/5 bg-gray-800 p-4 rounded-xl">
                <h2 className="text-lg font-bold mb-4">MaintenanceAI</h2>
                <div className="space-y-4">
                    <Button type="text" className="w-full text-left text-white">
                        Maintenance Schedule
                    </Button>
                    <Button type="text" className="w-full text-left text-gray-400">
                        Component Lifespan
                    </Button>
                    <Button type="text" className="w-full text-left text-gray-400">
                        Error Alerts
                    </Button>
                    <Button type="text" className="w-full text-left text-gray-400">
                        Notification Settings
                    </Button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 space-y-6">
                <h2 className="text-xl font-bold">Scheduled Maintenance</h2>

                {/* Scheduled Maintenance */}
                <Card className="bg-gray-800 text-white shadow-lg">
                    <div className="flex space-x-4 mb-4">
                        <Button type="default" className="bg-blue-600 text-white">
                            All
                        </Button>
                        <Button type="default" className="bg-gray-700 text-white">
                            Completed
                        </Button>
                        <Button type="default" className="bg-gray-700 text-white">
                            Upcoming
                        </Button>
                        <Button type="default" className="bg-gray-700 text-white">
                            Overdue
                        </Button>
                    </div>
                    <div className="space-y-4">
                        {maintenanceTasks.map((task) => (
                            <div key={task.key} className="p-4 bg-gray-700 rounded-lg">
                                <h4 className="text-lg font-semibold">{task.title}</h4>
                                <p className="text-gray-400">Unit {task.unit}</p>
                                <p className="text-gray-500">{task.date}</p>
                                <span
                                    className={`px-3 py-1 rounded-full text-sm font-bold text-white ${task.statusColor}`}
                                >
                                    {task.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Component Lifespan & Error Alerts */}
                <div className="grid grid-cols-2 gap-6">
                    {/* Component Lifespan */}
                    <Card className="bg-gray-800 text-white shadow-lg">
                        <h3 className="text-lg font-semibold mb-4">Component Lifespan</h3>
                        {componentLifespan.map((component) => (
                            <div key={component.name} className="mb-4">
                                <p className="text-gray-400">{component.name}</p>
                                <Progress
                                    percent={component.percentage}
                                    strokeColor="#1890ff"
                                    showInfo={false}
                                />
                            </div>
                        ))}
                    </Card>

                    {/* Error Alerts */}
                    <Card className="bg-gray-800 text-white shadow-lg">
                        <h3 className="text-lg font-semibold mb-4">Error Alerts</h3>
                        {errorAlerts.map((alert) => (
                            <div key={alert.key} className="mb-4">
                                <h4 className="text-md font-bold">{alert.title}</h4>
                                <p className="text-gray-400">Unit {alert.unit} - {alert.description}</p>
                                <p className="text-gray-500">{alert.time}</p>
                            </div>
                        ))}
                    </Card>
                </div>

                {/* Export Reports */}
                <Card className="bg-gray-800 text-white shadow-lg p-4">
                    <h3 className="text-lg font-semibold mb-4">Export Reports</h3>
                    <div className="flex space-x-4">
                        <Button type="default" icon={<FileExcelOutlined />}>
                            Export CSV
                        </Button>
                        <Button type="default" icon={<FilePdfOutlined />}>
                            Export PDF
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default MaintenancePage;

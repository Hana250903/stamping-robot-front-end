import { Card, Button, Table, Tag, Dropdown, Menu, Select } from "antd";
import { UserAddOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Option } = Select;

const UserManagement = () => {
    // Dữ liệu giả lập cho danh sách người dùng
    const users = [
        {
            key: "1",
            username: "Alex Johnson",
            email: "alex@example.com",
            role: "Admin",
            status: "Active",
        },
    ];

    // Cột cho bảng người dùng
    const columns = [
        {
            title: "Username",
            dataIndex: "username",
            key: "username",
            render: (text: string, record: any) => (
                <div className="flex items-center space-x-3">
                    <img
                        src="https://i.pravatar.cc/40"
                        alt="User"
                        className="w-8 h-8 rounded-full"
                    />
                    <div>
                        <p className="font-semibold">{text}</p>
                        <p className="text-gray-400 text-sm">{record.email}</p>
                    </div>
                </div>
            ),
        },
        {
            title: "Role",
            dataIndex: "role",
            key: "role",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status: string) => (
                <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
            ),
        },
        {
            title: "Actions",
            key: "actions",
            render: () => (
                <Dropdown
                    overlay={
                        <Menu>
                            <Menu.Item key="edit" icon={<EditOutlined />}>
                                Edit
                            </Menu.Item>
                            <Menu.Item key="delete" icon={<DeleteOutlined />} danger>
                                Delete
                            </Menu.Item>
                        </Menu>
                    }
                >
                    <Button>...</Button>
                </Dropdown>
            ),
        },
    ];

    return (
        <div className="flex min-h-screen bg-gray-900 text-white p-6 space-x-6">
            {/* Sidebar */}
            <div className="w-1/5 bg-gray-800 p-4 rounded-xl">
                <h2 className="text-lg font-bold mb-4">Command</h2>
                <div className="space-y-4">
                    <Button type="text" className="w-full text-left text-white">
                        User Management
                    </Button>
                    <Button type="text" className="w-full text-left text-gray-400">
                        Role Permissions
                    </Button>
                    <Button type="text" className="w-full text-left text-gray-400">
                        Login History
                    </Button>
                    <Button type="text" className="w-full text-left text-gray-400">
                        Security Settings
                    </Button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 space-y-6">
                {/* User Accounts */}
                <Card className="bg-gray-800 text-white shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">User Accounts</h3>
                        <Button type="primary" icon={<UserAddOutlined />}>
                            Add User
                        </Button>
                    </div>
                    <Table
                        dataSource={users}
                        columns={columns}
                        pagination={false}
                        className="text-white"
                    />
                </Card>

                {/* Role Permissions & Recent Logins */}
                <div className="grid grid-cols-2 gap-6">
                    {/* Role Permissions */}
                    <Card className="bg-gray-800 text-white shadow-lg">
                        <h3 className="text-lg font-semibold mb-4">Role Permissions</h3>
                        <div className="mb-2">
                            <p className="font-semibold">Admin</p>
                            <p className="text-gray-400">✔ Full system control</p>
                        </div>
                        <div>
                            <p className="font-semibold">Technician</p>
                            <p className="text-gray-400">✔ Monitor robots</p>
                        </div>
                    </Card>

                    {/* Recent Logins */}
                    <Card className="bg-gray-800 text-white shadow-lg">
                        <h3 className="text-lg font-semibold mb-4">Recent Logins</h3>
                        <div className="flex items-center space-x-3">
                            <img
                                src="https://i.pravatar.cc/40"
                                alt="User"
                                className="w-8 h-8 rounded-full"
                            />
                            <div>
                                <p className="font-semibold">Alex Johnson</p>
                                <p className="text-gray-400 text-sm">192.168.1.1 - Chrome</p>
                                <p className="text-gray-500 text-xs">2 minutes ago</p>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Security Settings */}
                <Card className="bg-gray-800 text-white shadow-lg">
                    <h3 className="text-lg font-semibold mb-4">Security Settings</h3>
                    <div className="grid grid-cols-3 gap-4">
                        {/* 2FA */}
                        <Card className="bg-gray-700 text-white p-4">
                            <h4 className="font-semibold mb-2">Two-Factor Authentication</h4>
                            <p className="text-gray-400 text-sm">
                                Add an extra layer of security to your account
                            </p>
                            <Button type="primary" className="mt-2">
                                Enable 2FA
                            </Button>
                        </Card>

                        {/* Auto-Logout Timer */}
                        <Card className="bg-gray-700 text-white p-4">
                            <h4 className="font-semibold mb-2">Auto-Logout Timer</h4>
                            <p className="text-gray-400 text-sm">
                                Set session timeout duration
                            </p>
                            <Select defaultValue="30 minutes" className="mt-2 w-full">
                                <Option value="15 minutes">15 minutes</Option>
                                <Option value="30 minutes">30 minutes</Option>
                                <Option value="1 hour">1 hour</Option>
                            </Select>
                        </Card>

                        {/* Password Reset */}
                        <Card className="bg-gray-700 text-white p-4">
                            <h4 className="font-semibold mb-2">Password Reset</h4>
                            <p className="text-gray-400 text-sm">
                                Force password change for all users
                            </p>
                            <Button danger className="mt-2">
                                Reset Passwords
                            </Button>
                        </Card>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default UserManagement;

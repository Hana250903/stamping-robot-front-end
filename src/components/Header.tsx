import { Input, Badge, Dropdown, Avatar } from "antd";
import { BellOutlined, UserOutlined, SearchOutlined } from "@ant-design/icons";

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-gray-800 shadow-md rounded-lg">
            {/* Logo hoặc Tên hệ thống */}
            <h1 className="text-xl font-semibold text-white">RoboControl</h1>

            {/* Thanh tìm kiếm */}
            <div className="w-1/3">
                <Input
                    placeholder="Search..."
                    prefix={<SearchOutlined className="text-gray-400" />}
                    className="rounded-lg bg-gray-700 text-white border-none"
                />
            </div>

            {/* Nhóm nút bên phải */}
            <div className="flex items-center gap-6">
                {/* Nút thông báo */}
                <Badge count={3} size="small">
                    <BellOutlined className="text-white text-xl cursor-pointer hover:text-blue-400" />
                </Badge>

                {/* Avatar người dùng */}
                <Dropdown
                    overlay={
                        <div className="bg-gray-800 text-white p-3 rounded-lg shadow-md w-40">
                            <p className="text-sm">Alex Johnson</p>
                            <p className="text-xs text-gray-400">alex@example.com</p>
                            <hr className="my-2 border-gray-600" />
                            <button className="block w-full text-left px-2 py-1 hover:bg-gray-700 rounded-md text-sm">
                                Profile
                            </button>
                            <button className="block w-full text-left px-2 py-1 hover:bg-gray-700 rounded-md text-sm">
                                Logout
                            </button>
                        </div>
                    }
                    trigger={["click"]}
                >
                    <Avatar size="large" icon={<UserOutlined />} className="cursor-pointer bg-gray-600" />
                </Dropdown>
            </div>
        </header>
    );
};

export default Header;

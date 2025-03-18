import { useRouter } from "next/router";
import Link from "next/link";
import { Layout, Menu } from "antd";
import {
    DashboardOutlined,
    SettingOutlined,
    HistoryOutlined,
    ToolOutlined,
    UserOutlined
} from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar = () => {
    const router = useRouter();

    const menuItems = [
        { key: "/dashboard", icon: <DashboardOutlined />, label: "Dashboard" },
        { key: "/history", icon: <HistoryOutlined />, label: "History" },
        { key: "/settings", icon: <SettingOutlined />, label: "Settings" },
        { key: "/maintenance", icon: <ToolOutlined />, label: "Maintenance" },
        { key: "/user-management", icon: <UserOutlined />, label: "Users" }
    ];

    return (
        <Sider width={220} className="h-screen bg-gray-900 shadow-lg">
            {/* Logo */}
            <div className="h-16 flex items-center justify-center text-white text-xl font-semibold border-b border-gray-700">
                RoboControl
            </div>

            {/* Menu */}
            <Menu
                theme="dark"
                mode="inline"
                selectedKeys={[router.pathname]}
                className="bg-gray-900 text-white"
            >
                {menuItems.map((item) => (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link href={item.key}>{item.label}</Link>
                    </Menu.Item>
                ))}
            </Menu>
        </Sider>
    );
};

export default Sidebar;

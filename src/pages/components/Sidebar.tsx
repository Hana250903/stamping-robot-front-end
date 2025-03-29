import { useRouter } from "next/router";
import Link from "next/link";
import { Layout, Menu } from "antd";
import {
    RobotOutlined,
    ProductOutlined,
    ToolOutlined,
    UserOutlined
} from "@ant-design/icons";
import styles from "./sidebar.module.css"; // ✅ Import CSS Module

const { Sider } = Layout;

const Sidebar = () => {
    const router = useRouter();

    const menuItems = [
        { key: "/user", icon: <UserOutlined />, label: "Users" },
        { key: "/robot", icon: <RobotOutlined />, label: "Robot" },
        { key: "/stamp", icon: <ToolOutlined />, label: "Stamp" },
        { key: "/product", icon: <ProductOutlined />, label: "Products" }
    ];

    return (
        <Sider width={220} className={styles.sidebar}>
            {/* Logo */}
            <div className={styles.logo}>RoboControl</div>

            {/* Menu */}
            <Menu
                theme="dark"
                mode="inline"
                selectedKeys={[router.pathname]}
                className={styles.menu}
            >
                {menuItems.map((item) => (
                    <Menu.Item key={item.key} icon={item.icon} className={styles.menuItem}>
                        <Link href={item.key}>{item.label}</Link>
                    </Menu.Item>
                ))}
            </Menu>
        </Sider>
    );
};

export default Sidebar;

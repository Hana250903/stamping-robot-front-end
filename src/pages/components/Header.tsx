import { useRouter } from "next/router";
import { Avatar, Dropdown, MenuProps, Input } from "antd";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import styles from "./header.module.css";

const Header = () => {
    const router = useRouter();

    // Hàm xử lý Logout
    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        router.push("/login"); // Chuyển về trang login
    };

    // Define the menu items with explicit typing
    const menuItems: MenuProps = {
        items: [
            {
                key: "admin",
                label: <span className="text-sm">Admin</span>,
                disabled: true,
            },
            {
                type: "divider" as const,
            },
            {
                key: "logout",
                label: (
                    <button className={styles.menuItem} onClick={handleLogout}>
                        Logout
                    </button>
                ),
            },
        ],
    };

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>RoboControl</h1>

            {/* Add search input */}
            <div className={styles.searchContainer}>
                <Input
                    className={styles.searchInput}
                    placeholder="Search robots..."
                    prefix={<SearchOutlined className={styles.icon} />}
                />
            </div>

            <div className={styles.rightGroup}>
                <Dropdown menu={menuItems} trigger={["click"]}>
                    <Avatar size="large" icon={<UserOutlined />} className={styles.avatar} />
                </Dropdown>
            </div>
        </header>
    );
};

export default Header;
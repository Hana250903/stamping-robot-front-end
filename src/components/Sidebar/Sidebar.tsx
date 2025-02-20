// components/Sidebar/Sidebar.tsx
"use client"

import SidebarItem from "./SidebarItem";
import { SidebarData } from "./SidebarData";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.logo}>TailAdmin</h2>
      <div className={styles.menu}>
        {SidebarData.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

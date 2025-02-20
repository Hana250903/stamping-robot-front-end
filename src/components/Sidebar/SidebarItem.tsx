// components/Sidebar/SidebarItem.tsx
"use client"

import { useState } from "react";
import Link from "next/link";
import styles from "./Sidebar.module.css";

interface SidebarItemProps {
  item: {
    title: string;
    icon: string;
    path: string;
    subMenu?: { title: string; path: string }[];
  };
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className={styles.sidebarItem} onClick={() => setOpen(!open)}>
        <span className={styles.icon}>{item.icon}</span>
        <span className={styles.title}>{item.title}</span>
      </div>
      {item.subMenu && open && (
        <div className={styles.subMenu}>
          {item.subMenu.map((sub, index) => (
            <Link href={sub.path} key={index} className={styles.subItem}>
              {sub.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;

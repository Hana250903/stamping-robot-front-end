"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

interface HeaderItemProps {
  item: {
    title: string;
    path: string;
    subMenu?: { title: string; path: string }[];
  };
}

const HeaderItem: React.FC<HeaderItemProps> = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.headerItem} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link href={item.path} className={styles.title}>
        {item.title}
      </Link>
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

export default HeaderItem;

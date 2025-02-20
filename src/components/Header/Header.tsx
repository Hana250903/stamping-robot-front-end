"use client";

import { useState } from "react";
import styles from "./Header.module.css";
import { Bell } from "lucide-react";
import { HeaderData } from "./HeaderData";
import HeaderItem from "./HeaderItem";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.actions}>
        {/* Icon thông báo */}
        <button className={styles.iconButton}>
          <Bell size={20} />
          <span className={styles.badge}>3</span>
        </button>

        {/* Avatar admin */}
        <div className={styles.profile} onClick={() => setDropdownOpen(!dropdownOpen)}>
          <img src="/avatar.jpg" alt="Admin Avatar" className={styles.avatar} />
          <span>Musharof</span>

          {/* Dropdown menu */}
          {dropdownOpen && (
            <div className={styles.dropdownMenu}>
              <div className={styles.dropdownHeader}>
                <img src="/avatar.jpg" alt="Admin Avatar" className={styles.dropdownAvatar} />
                <div>
                  <strong>Musharof Chowdury</strong>
                  <p>randomuser@pimjo.com</p>
                </div>
              </div>
              <div className={styles.dropdownItems}>
                <a href="/profile" className={styles.dropdownItem}>👤 Edit profile</a>
                <a href="/settings" className={styles.dropdownItem}>⚙️ Account settings</a>
                <a href="/support" className={styles.dropdownItem}>❓ Support</a>
                <hr />
                <a href="/logout" className={styles.dropdownItemLogout}>🚪 Sign out</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

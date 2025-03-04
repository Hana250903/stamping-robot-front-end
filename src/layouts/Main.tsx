'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MenuOutlined, BellOutlined } from '@ant-design/icons';
import { Button, Layout } from 'antd';
import sidebarItems from '@/components/Layout/Full/vertical-sidebar/sidebarItem';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const { Sider, Header } = Layout;

const Sidebar = () => {
    const [sDrawer, setSDrawer] = useState(true);

    return (
        <Layout className="min-h-screen flex">
            {/* Sidebar */}
            <Sider
                className="bg-gray-900 text-white p-4"
                width={270}
                collapsible
                collapsed={!sDrawer}
            >
                <div className="py-4 pl-4">
                    <Link href="/">
                        <span className="text-lg font-bold">Your Logo</span>
                    </Link>
                </div>
                <PerfectScrollbar className="h-full">
                    <ul className="py-4 px-4">
                        {sidebarItems.map((item, index) => (
                            <li key={index} className="p-2 hover:bg-gray-700 rounded">
                                <Link href={item.path}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="py-4 px-6">
                        <Button type="primary" block>
                            <a href="https://www.wrappixel.com/" target="_blank" rel="noopener noreferrer">
                                Upgrade to Pro
                            </a>
                        </Button>
                    </div>
                </PerfectScrollbar>
            </Sider>

            {/* Main Layout */}
            <Layout className="flex-1">
                <Header className="bg-white shadow-md flex justify-between items-center px-4">
                    <Button
                        type="text"
                        icon={<MenuOutlined />}
                        onClick={() => setSDrawer(!sDrawer)}
                    />
                    <div className="flex items-center gap-4">
                        <BellOutlined className="text-lg" />
                        <Button type="primary">
                            <a href="https://www.wrappixel.com/" target="_blank" rel="noopener noreferrer">
                                Upgrade to Pro
                            </a>
                        </Button>
                    </div>
                </Header>
            </Layout>
        </Layout>
    );
};

export default Sidebar;

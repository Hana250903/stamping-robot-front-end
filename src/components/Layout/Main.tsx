import { useState } from "react";
import Link from "next/link";
import { Menu, Button } from "antd"; // Ensure you have the correct version of antd installed
import Drawer from "antd/es/drawer";
import { Menu as MenuIcon } from "lucide-react";
import sidebarItems from "./Full/vertical-sidebar/sidebarItem";
import LogoDark from "./Full/logo/LogoDark";
import Notification from "./Full/vertical-header/NotificationDD";
import ProfileDD from "./Full/vertical-header/ProfileDD";

const Sidebar: React.FC = () => {
  const [sDrawer, setSDrawer] = useState<boolean>(true);

  return (
    <>
      {/* Sidebar */}
      <Drawer
        open={sDrawer}
        placement="left"
        onClose={() => setSDrawer(false)}
        className="w-[270px] bg-gray-900 text-white"
      >
        <div className="p-5">
          <LogoDark />
        </div>

        {/* Navigation Menu */}
        <div className="overflow-auto h-[calc(100vh-120px)] px-4">
          <Menu theme="dark" mode="inline" style={{ backgroundColor: '#1f2937', border: 'none' }}>
            {sidebarItems.map((item, index) => (
              item.header ? (
                <Menu.ItemGroup key={index} title={<span className="uppercase text-xs text-gray-400">{item.header}</span>}>
                  {item.children?.map((child, childIndex) => (
                    <Menu.Item key={child.to || `${index}-${childIndex}`} icon={child.icon ? <child.icon size={18} /> : null}>
                      <Link href={child.to || "#"}>{child.title}</Link>
                    </Menu.Item>
                  ))}
                </Menu.ItemGroup>
              ) : (
                <Menu.Item key={item.to || index.toString()} icon={item.icon ? <item.icon size={18} /> : null}>
                  <Link href={item.to || "#"}>{item.title}</Link>
                </Menu.Item>
              )
            ))}
          </Menu>
        </div>

        {/* Upgrade Button */}
        <div className="p-4">
          <Button type="primary" block>
            <a href="https://www.wrappixel.com/templates/spike-nuxtjs-admin-template/?ref=33" target="_blank">
              Upgrade to Pro
            </a>
          </Button>
        </div>
      </Drawer>

      {/* Header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            {/* Sidebar Toggle Button */}
            <Button type="text" onClick={() => setSDrawer(!sDrawer)} icon={<MenuIcon size={20} />} />

            {/* Notifications */}
            <Notification />
          </div>

          <div className="flex items-center space-x-2">
            {/* Upgrade Button */}
            <Button type="primary">
              <a href="https://www.wrappixel.com/templates/spike-nuxtjs-admin-template/?ref=33" target="_blank">
                Upgrade to Pro
              </a>
            </Button>

            {/* User Profile */}
            <ProfileDD />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

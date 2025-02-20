// components/Sidebar/SidebarData.ts
export const SidebarData = [
    { title: "Dashboard", icon: "📊", path: "/" },
    { title: "Calendar", icon: "📅", path: "/calendar" },
    { title: "User Profile", icon: "👤", path: "/profile" },
    {
      title: "Forms",
      icon: "📝",
      path: "#",
      subMenu: [{ title: "Contact Form", path: "/forms/contact" }],
    },
    {
      title: "Tables",
      icon: "📋",
      path: "#",
      subMenu: [{ title: "Users Table", path: "/tables/users" }],
    },
    {
      title: "Pages",
      icon: "📄",
      path: "#",
      subMenu: [{ title: "Login", path: "/pages/login" }],
    },
  ];
  
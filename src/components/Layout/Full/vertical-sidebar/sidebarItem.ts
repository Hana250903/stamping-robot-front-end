import {
  LayoutDashboard,
  Table,
  AlertCircle,
  CircleDot,
  Box,
  LogIn,
  Smile,
  Aperture,
  UserPlus,
} from "lucide-react"; // Dùng lucide-react cho Next.js

export interface MenuItem {
  header?: string;
  title?: string;
  icon?: React.ElementType;
  to?: string;
  chip?: string;
  BgColor?: string;
  chipBgColor?: string;
  chipColor?: string;
  chipVariant?: "filled" | "outlined";
  chipIcon?: string;
  children?: MenuItem[];
  disabled?: boolean;
  type?: "external" | "internal";
  subCaption?: string;
}

const sidebarItems: MenuItem[] = [
  { header: "Home" },
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    to: "/",
  },
  { header: "UI Components" },
  {
    title: "Alert",
    icon: AlertCircle,
    to: "/ui-components/alerts",
  },
  {
    title: "Button",
    icon: CircleDot,
    to: "/ui-components/buttons",
  },
  {
    title: "Cards",
    icon: Box,
    to: "/ui-components/cards",
  },
  {
    title: "Tables",
    icon: Table,
    to: "/ui-components/tables",
  },
  { header: "Authentication" },
  {
    title: "Login",
    icon: LogIn,
    to: "/auth/login",
  },
  {
    title: "Register",
    icon: UserPlus,
    to: "/auth/register",
  },
  { header: "Extras" },
  {
    title: "Icons",
    icon: Smile,
    to: "/pages/icons",
  },
  {
    title: "Sample Page",
    icon: Aperture,
    to: "/pages/sample-page",
  },
];

export default sidebarItems;

import Layout from "antd/lib/layout";
import { ReactNode } from "react";

const { Content } = Layout;

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout className="min-h-screen">
      <Content>{children}</Content>
    </Layout>
  );
};

export default MainLayout;

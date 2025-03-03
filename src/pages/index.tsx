
import { Row, Col } from "antd";
import Typography from "antd/lib/typography";
import ProfitExpenseCard from "@/components/dashboards/ProfitExpense";
import TrafficDis
// import TrafficDistribution from "components/dashboards/TrafficDistribution";
// import ProductSales from "components/dashboards/ProductSales";
// import UpcomingSchedule from "components/dashboards/UpcomingSchedule";
// import TopPayingClients from "components/dashboards/TopPayingClients";
// import ProductCards from "components/dashboards/ProductCards";

const { Text, Link } = Typography;

export default function Dashboard() {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} lg={16}>
        <ProfitExpense />
      </Col>
      <Col xs={24} lg={8}>
        <div style={{ marginBottom: "24px" }}>
          <TrafficDistribution />
        </div>
        <ProductSales />
      </Col>
      <Col xs={24} lg={8}>
        <UpcomingSchedule />
      </Col>
      <Col xs={24} lg={16}>
        <TopPayingClients />
      </Col>
      <Col span={24}>
        <ProductCards />
      </Col>
      <Col span={24} style={{ textAlign: "center", marginTop: "16px" }}>
        <Text type="secondary">
          Distributed by{" "}
          <Link href="https://www.themewagon.com/" target="_blank">
            ThemeWagon
          </Link>
        </Text>
        <br />
        <Text type="secondary">
          Design and Developed by{" "}
          <Link href="https://www.wrappixel.com/" target="_blank">
            wrappixel.com
          </Link>
        </Text>
      </Col>
    </Row>
  );
}

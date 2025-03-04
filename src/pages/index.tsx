'use client';

import ProfitExpanse from '@/components/dashboards/ProfitExpense';
import TrafficDistribution from '@/components/dashboards/TrafficDistribution';
import ProductSales from '@/components/dashboards/ProductSales';
import UpcommingSchedule from '@/components/dashboards/UpcommingSchedule';
import TopPayingClients from '@/components/dashboards/TopPayingClients';
import ProductCards from '@/components/dashboards/ProductCards';
import { Row, Col } from 'antd';

const Dashboard = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} lg={16}>
        <ProfitExpanse />
      </Col>
      <Col xs={24} sm={24} lg={8}>
        <div className="mb-6">
          <TrafficDistribution />
        </div>
        <div>
          <ProductSales />
        </div>
      </Col>
      <Col xs={24} sm={24} lg={8}>
        <UpcommingSchedule />
      </Col>
      <Col xs={24} sm={24} lg={16}>
        <TopPayingClients />
      </Col>
      <Col xs={24} sm={24} lg={24}>
        <ProductCards />
      </Col>

      <Col span={24} className="text-center mt-2 flex justify-between">
        <p className="text-gray-500">
          Distributed by
          <a href="https://www.themewagon.com/" target="_blank" className="text-primary pl-1">ThemeWagon</a>
        </p>
        <p className="text-gray-500">
          Design and Developed by
          <a href="https://www.wrappixel.com/" target="_blank" className="text-primary pl-1">wrappixel.com</a>
        </p>
      </Col>
    </Row>
  );
};

export default Dashboard;

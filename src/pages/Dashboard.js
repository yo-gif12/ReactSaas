import React from "react";
import "antd/dist/antd.css";
import { Typography } from "antd";
import "../styles/_common.less";
import Lists from "../pages/List";
import ListDash from "../components/ListDash";

const { Title } = Typography;
function Dashboard() {
  return (
    <div id="Dashboard" className="Dashboard">
      <Title>Dashboard</Title>
      <div className="DashboardContain">
        <div className="div1">
          678
          <p>test</p>
        </div>
        <div className="div2">
          455
          <p>test</p>
        </div>
        <div className="div3">
          234
          <p>test</p>
        </div>
        <div className="div4">
          5676
          <p>test</p>
        </div>
      </div>
      <Lists />
      <ListDash />
    </div>
  );
}

export default Dashboard;

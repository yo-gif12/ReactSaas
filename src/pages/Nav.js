import React from "react";
// @import imgAvatr from "../img/avatar.png";
import "antd/dist/antd.css";
// import "../styles/_common.less";
import { Link } from "react-router-dom";

import "antd/dist/antd.css";
// import Dashboard from "./pages/Dashboard";
// import List from "./pages/List";
// import Login from "./pages/Login";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import "../styles/_common.less";

import {
  CalendarOutlined,
  PieChartOutlined,
  ToolOutlined,
  UnorderedListOutlined,
  BarChartOutlined,
  PrinterOutlined,
  SettingFilled,
  QuestionCircleFilled,
} from "@ant-design/icons";
const { Sider } = Layout;

function Nav() {
  return (
    <Sider className="site-layout-background siderNav">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Link to="/Dashboard">
          <Menu.Item
            key="1"
            className="styleMenuitem"
            icon={<PieChartOutlined />}
          >
            <span className="text-color"> Dashboard</span>
          </Menu.Item>
        </Link>
        {/* <Link to="/about">About</Link>*/}
        <Link to="/Calendar">
          <Menu.Item
            key="2"
            className="styleMenuitem"
            icon={<CalendarOutlined />}
          >
            <span className="text-color"> Planning</span>
          </Menu.Item>
        </Link>
        <Link to="/Lists">
          <Menu.Item
            key="3"
            className="styleMenuitem"
            icon={<UnorderedListOutlined />}
          >
            <span className="text-color"> Liste</span>
          </Menu.Item>
        </Link>
        <Link>
          <Menu.Item
            key="4"
            className="noHover styleMenuitem"
            icon={<BarChartOutlined />}
          >
            <span className="text-color"> Statistique</span>
          </Menu.Item>
        </Link>

        <Link>
          <Menu.Item
            key="5"
            className="noHover styleMenuitem"
            icon={<PrinterOutlined />}
          >
            <span className="text-color"> Impression</span>
          </Menu.Item>
        </Link>

        <Link>
          <Menu.Item
            key="6"
            className="noHover styleMenuitem"
            icon={<ToolOutlined />}
          >
            <span className="text-color largeText">
              Plus d’Outils
              <br />
              <span className="em">VERSION PRO</span>
            </span>
          </Menu.Item>
        </Link>

        <Menu.Item
          key="7"
          className="noHover BottomSettings"
          icon={<SettingFilled />}
        >
          <span className="spanSetting"> Paramètre</span>
        </Menu.Item>
        <Menu.Item key="8" className="noHover" icon={<QuestionCircleFilled />}>
          <span className="spanSetting"> Aide</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Nav;

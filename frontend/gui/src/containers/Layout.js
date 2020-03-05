import React from "react";

import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const CustomLayout = props => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="37">Fast and Fresh</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0" }}
        >
          <Sider className="site-layout-background" width={200}>
            <Menu mode="inline" style={{ height: "100%" }}>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <UserOutlined />
                    Tablas
                  </span>
                }
              >
                <Menu.Item onClick={"/product"}>Products</Menu.Item>
                <Menu.Item key="2">Batches</Menu.Item>
                <Menu.Item key="3">Type of Products</Menu.Item>
                <Menu.Item key="4">Product Types</Menu.Item>
                <Menu.Item key="5">Clients</Menu.Item>
                <Menu.Item key="6">Members</Menu.Item>
                <Menu.Item key="7">Zones</Menu.Item>
                <Menu.Item key="8">Cities</Menu.Item>
                <Menu.Item key="9">States</Menu.Item>
                <Menu.Item key="10">Stores</Menu.Item>
                <Menu.Item key="11">Store Bosses</Menu.Item>
                <Menu.Item key="12">Deliveries</Menu.Item>
                <Menu.Item key="13">Pick Ups</Menu.Item>
                <Menu.Item key="14">Bills</Menu.Item>
                <Menu.Item key="15">Bill Details</Menu.Item>
                <Menu.Item key="16">Cash Registers</Menu.Item>
                <Menu.Item key="17">Cash Registers Bills</Menu.Item>
                <Menu.Item key="18">Payments</Menu.Item>
                <Menu.Item key="19">Payment Methods</Menu.Item>
                <Menu.Item key="20">Currencies</Menu.Item>
                <Menu.Item key="21">Exchange Rates</Menu.Item>
                <Menu.Item key="22">Employees</Menu.Item>
                <Menu.Item key="23">Employee Stores</Menu.Item>
                <Menu.Item key="24">Jobs</Menu.Item>
                <Menu.Item key="25">IVAs</Menu.Item>
                <Menu.Item key="26">Providers</Menu.Item>
                <Menu.Item key="27">Provider Phones</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <LaptopOutlined />
                    Queries
                  </span>
                }
              >
                <Menu.Item key="28">Top 5 Products</Menu.Item>
                <Menu.Item key="29">Bottom 5 Products</Menu.Item>
                <Menu.Item key="30">Top 5 Special Products</Menu.Item>
                <Menu.Item key="31">Lost Products</Menu.Item>
                <Menu.Item key="32">Top Store</Menu.Item>
                <Menu.Item key="33">Special Products</Menu.Item>
                <Menu.Item key="34">Products Sales per Day</Menu.Item>
                <Menu.Item key="35">Cashiers Money per Day</Menu.Item>
                <Menu.Item key="36">Cashier Money in Period of Time</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {props.children}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default CustomLayout;

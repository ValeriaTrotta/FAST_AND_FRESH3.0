import React from "react";
import { Table, message } from "antd";

const columns = [
  {
    title: "Register from",
    dataIndex: "employee",
    key: "employee"
  },
  {
    title: "Money",
    dataIndex: "dinero",
    key: "dinero"
  }
];

const DineroIntervalo = props => {
  return <Table dataSource={props.data} columns={columns} />;
};

export default DineroIntervalo;

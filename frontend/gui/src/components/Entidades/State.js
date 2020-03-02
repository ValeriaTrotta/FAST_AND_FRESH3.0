import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "State ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "State Activa",
    dataIndex: "is_active",
    key: "is_active" + "id"
  },
  {
    title: "View",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <a href="/{id}">View</a>
  }
];

const States = props => {
  const lista = props.data.map;
  return <Table dataSource={props.data} columns={columns} />;
};

export default States;

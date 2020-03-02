import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Store's Boss ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Boss",
    dataIndex: "boss",
    key: "boss" + "id"
  },
  {
    title: "Store",
    dataIndex: "store",
    key: "provider" + "id"
  },
  {
    title: "Start Date",
    dataIndex: "start_date",
    key: "start_date" + "id"
  },
  {
    title: "Boss Activo",
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

const StoreBosses = props => {
  const lista = props.data.map;
  return <Table dataSource={props.data} columns={columns} />;
};

export default StoreBosses;

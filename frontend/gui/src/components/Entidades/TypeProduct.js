import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Product Type ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Product Type Name",
    dataIndex: "type",
    key: "type" + "id"
  },
  {
    title: "Activo",
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

const TypeProducts = props => {
  const lista = props.data.map;
  return <Table dataSource={props.data} columns={columns} />;
};

export default TypeProducts;

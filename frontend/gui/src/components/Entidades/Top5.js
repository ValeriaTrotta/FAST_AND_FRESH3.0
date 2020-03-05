import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Product Name",
    dataIndex: "producto",
    key: "producto"
  },
  {
    title: "Cantidad",
    dataIndex: "cantidad",
    key: "cantidad"
  }
];

const Top5 = props => {
  return <Table dataSource={props.data} columns={columns} />;
};

export default Top5;

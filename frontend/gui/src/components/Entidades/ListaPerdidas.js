import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Product Name",
    dataIndex: "producto",
    key: "producto"
  },
  {
    title: "Perdida",
    dataIndex: "cantidad",
    key: "cantidad"
  }
];

const ListaPerdidas = props => {
  return <Table dataSource={props.data} columns={columns} />;
};

export default ListaPerdidas;

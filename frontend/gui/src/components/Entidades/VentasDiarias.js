import React from "react";
import { Table, message } from "antd";

const columns = [
  {
    title: "Product Name",
    dataIndex: "Producto",
    key: "Producto"
  },
  {
    title: "Quantity",
    dataIndex: "Cantidad",
    key: "Cantidad"
  }
];

const VentasDiarias = props => {
  return <Table dataSource={props.data} columns={columns} />;
};

export default VentasDiarias;

import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Product Name",
    dataIndex: "Producto Especial",
    key: "Producto Especial"
  }
];

const ListaEspeciales = props => {
  return <Table dataSource={props.data} columns={columns} />;
};

export default ListaEspeciales;

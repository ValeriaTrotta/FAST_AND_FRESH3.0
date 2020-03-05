import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Store Name",
    dataIndex: "Sucursal",
    key: "Sucursal"
  },
  {
    title: "Money",
    dataIndex: "Cantidad",
    key: "Cantidad"
  }
];

const TopSucursal = props => {
  return <Table dataSource={props.data} columns={columns} />;
};

export default TopSucursal;

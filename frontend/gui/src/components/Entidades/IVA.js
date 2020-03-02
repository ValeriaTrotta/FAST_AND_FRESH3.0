import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Product ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "IVA",
    dataIndex: "iva_porcentaje",
    key: " iva_porcentaje" + "id"
  },
  {
    title: "Date",
    dataIndex: "iva_date",
    key: "iva_date" + "id"
  },
  {
    title: "View",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <a href="/{id}">View</a>
  }
];

const IVAs = props => {
  return <Table dataSource={props.data} columns={columns} />;
};

export default IVAs;

import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Payment ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Payment Amount",
    dataIndex: "payment_amount",
    key: "payment_amount" + "id"
  },
  {
    title: "Metodo",
    dataIndex: "payment_method",
    key: "payment_method" + "id"
  },
  {
    title: "Instrumento",
    dataIndex: "payment_method_instrument",
    key: "payment_method_instrument" + "id"
  },
  {
    title: "Bill",
    dataIndex: "bill",
    key: "bill" + "id"
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

const Payments = props => {
  return <Table dataSource={props.data} columns={columns} />;
};

export default Payments;

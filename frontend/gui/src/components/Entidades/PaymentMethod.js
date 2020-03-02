import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Payment Method ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Payment Method",
    dataIndex: "payment_method",
    key: "payment_method" + "id"
  },

  {
    title: "Payment Method Activo",
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

const PaymentMethods = props => {
  return <Table dataSource={props.data} columns={columns} />;
};

export default PaymentMethods;

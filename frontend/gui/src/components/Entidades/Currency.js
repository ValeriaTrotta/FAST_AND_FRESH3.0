import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Currency ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Currency",
    dataIndex: "currency_name",
    key: "currency_name" + "id"
  },

  {
    title: "Currency Activo",
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

const Currencies = props => {
  return <Table dataSource={props.data} columns={columns} />;
};

export default Currencies;

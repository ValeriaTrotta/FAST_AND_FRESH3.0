import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Exchange Rate ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Currency",
    dataIndex: "origin_currency",
    key: "origin_currency" + "id"
  },
  {
    title: "Exchange Rate",
    dataIndex: "exchange_rate",
    key: "exchange_rate" + "id"
  },
  {
    title: "Exchange Rate Date",
    dataIndex: "exchange_rate_date",
    key: "exchange_rate_date" + "id"
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

const ExchangeRates = props => {
  return <Table dataSource={props.data} columns={columns} />;
};

export default ExchangeRates;

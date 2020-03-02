import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Cash Register",
    dataIndex: "cash_register",
    key: "cash_register" + "id"
  },
  {
    title: "Bill",
    dataIndex: "bill",
    key: "bill" + "id"
  },

  {
    title: "View",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <a href="/{id}">View</a>
  }
];

const CashRegisterBills = props => {
  return <Table dataSource={props.data} columns={columns} />;
};

export default CashRegisterBills;

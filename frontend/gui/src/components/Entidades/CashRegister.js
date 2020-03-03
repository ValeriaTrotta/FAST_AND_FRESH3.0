import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Cash Register ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Employee Asigned",
    dataIndex: "employee_id",
    key: "product_name" + "id"
  },
  {
    title: "Cash Register Activo",
    dataIndex: "is_active",
    key: "is_active" + "id"
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
const CashRegisters = props => {
  return <Table dataSource={props.data} columns={columns} />;
};

export default CashRegisters;

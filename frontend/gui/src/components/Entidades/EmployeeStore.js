import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Store",
    dataIndex: "employee_store",
    key: "employee_store"
  },
  {
    title: "Employee",
    dataIndex: "employee",
    key: "employee" + "id"
  },
  {
    title: "Hired date",
    dataIndex: "hired_date",
    key: "hired_date" + "id"
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

const EmployeeStores = props => {
  return <Table dataSource={props.data} columns={columns} />;
};

export default EmployeeStores;

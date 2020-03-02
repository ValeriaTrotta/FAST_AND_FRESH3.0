import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Product ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Name",
    dataIndex: "employee_name",
    key: "employee_name" + "id"
  },
  {
    title: "Last Name",
    dataIndex: "employee_last_name",
    key: "employee_last_name" + "id"
  },
  {
    title: "Cedula",
    dataIndex: "employee_cedula ",
    key: "employee_cedula " + "id"
  },
  {
    title: "Gender",
    dataIndex: "employee_gender",
    key: "employee_gender" + "id"
  },
  {
    title: "Birth Date",
    dataIndex: "employee_birth_date",
    key: "employee_birth_date" + "id"
  },
  {
    title: "Phone",
    dataIndex: "employee_phone",
    key: "employee_phone" + "id"
  },
  {
    title: "Job",
    dataIndex: "employee_job",
    key: "employee_job" + "id"
  },
  {
    title: "Salary Bonus",
    dataIndex: "salary_bonus",
    key: "salary_bonus" + "id"
  },
  {
    title: "Email",
    dataIndex: "employee_email",
    key: "employee_email" + "id"
  },
  {
    title: "Producto Activo",
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

const Employees = props => {
  return <Table dataSource={props.data} columns={columns} />;
};

export default Employees;

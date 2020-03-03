import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Product ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Job",
    dataIndex: "job_name",
    key: "job_name" + "id"
  },
  {
    title: "Salary",
    dataIndex: "job_salary",
    key: "job_salary" + "id"
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

const Jobs = props => {
  return <Table dataSource={props.data} columns={columns} />;
};

export default Jobs;

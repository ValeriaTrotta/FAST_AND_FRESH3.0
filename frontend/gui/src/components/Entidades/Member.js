import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Member ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Member Client ID",
    dataIndex: "client",
    key: "product_name" + "id"
  },
  {
    title: "Member Points",
    dataIndex: "member_points",
    key: "member_points" + "id"
  },
  {
    title: "Start Date",
    dataIndex: "member_start_date",
    key: "member_start_date" + "id"
  },
  {
    title: "Birth Date",
    dataIndex: "member_birth_date",
    key: "member_birth_date" + "id"
  },
  {
    title: "Next Pay Date",
    dataIndex: "member_pay_date",
    key: "member_pay_date" + "id"
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

const Members = props => {
  const lista = props.data.map;
  return <Table dataSource={props.data} columns={columns} />;
};

export default Members;

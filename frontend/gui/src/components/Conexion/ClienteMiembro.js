import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Member ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Name",
    dataIndex: "client_name",
    key: "client_name" + "id"
  },
  {
    title: "Last Name",
    dataIndex: "client_last_name",
    key: "client_last_name" + "id"
  },
  {
    title: "Cedula",
    dataIndex: "client_cedula",
    key: "client_cedula" + "id"
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

const ClientMembers = props => {
  const lista = props.data.map;
  return <Table dataSource={props.data} columns={columns} />;
};

export default ClientMembers;

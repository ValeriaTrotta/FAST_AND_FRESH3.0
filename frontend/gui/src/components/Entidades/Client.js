import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Client ID",
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
    title: "Phone",
    dataIndex: "client_phone",
    key: "client_phone" + "id"
  },
  {
    title: "Gender",
    dataIndex: "client_gender",
    key: "client_gender" + "id"
  },
  {
    title: "Zona",
    dataIndex: "zona",
    key: "ona" + "id"
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

const Clients = props => {
  const lista = props.data.map;
  return <Table dataSource={props.data} columns={columns} />;
};

export default Clients;

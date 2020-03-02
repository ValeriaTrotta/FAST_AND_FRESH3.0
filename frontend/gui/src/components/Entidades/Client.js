import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Client ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Client Name",
    dataIndex: "client_name",
    key: "client_name" + "id"
  },
  {
    title: "Client Last Name",
    dataIndex: "client_last_name",
    key: "client_last_name" + "id"
  },
  {
    title: "Client Cedula",
    tags: ["client_cedula"],
    key: "client_cedula" + "id"
  },
  {
    title: "Client Phone",
    tags: ["client_phone"],
    key: "client_phone" + "id"
  },
  {
    title: "Client Phone",
    tags: ["client_phone"],
    key: "client_phone" + "id"
  },
  {
    title: "Client Gender",
    tags: ["client_gender"],
    key: "client_gender" + "id"
  },
  {
    title: "Client Zona",
    tags: ["client_zona"],
    key: "client_zona" + "id"
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

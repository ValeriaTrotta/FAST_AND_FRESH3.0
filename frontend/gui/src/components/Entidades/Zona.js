import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Zona ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Zona Name",
    dataIndex: "zona_name",
    key: "zona_name" + "id"
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city" + "id"
  },
  {
    title: "Zona Activa",
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

const Zonas = props => {
  const lista = props.data.map;
  return <Table dataSource={props.data} columns={columns} />;
};

export default Zonas;

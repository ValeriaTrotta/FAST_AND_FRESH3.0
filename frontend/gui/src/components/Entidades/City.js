import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "City ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "City Name",
    dataIndex: "city_name",
    key: "city_name" + "id"
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state" + "id"
  },
  {
    title: "Ciudad Activa",
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

const Cities = props => {
  const lista = props.data.map;
  return <Table dataSource={props.data} columns={columns} />;
};

export default Cities;

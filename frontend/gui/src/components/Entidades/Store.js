import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Store ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Store Name",
    dataIndex: "store_name",
    key: "store_name" + "id"
  },
  {
    title: "Zona",
    dataIndex: "zona",
    key: "zona" + "id"
  },
  {
    title: "Opening Time",
    dataIndex: "open_time",
    key: "open_time" + "id"
  },
  {
    title: "Closing Time",
    dataIndex: "closing_time",
    key: "closing_time" + "id"
  },
  {
    title: "Store Phone",
    dataIndex: "store_phone",
    key: "store_phone" + "id"
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

const Stores = props => {
  const lista = props.data.map;
  return <Table dataSource={props.data} columns={columns} />;
};

export default Stores;

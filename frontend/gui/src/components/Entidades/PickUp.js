import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Pick-Up ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Pick-Up Status",
    dataIndex: "pickup_status",
    key: "pickup_status" + "id"
  },
  {
    title: "Bill",
    dataIndex: "bill_id",
    key: "bill_id" + "id"
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

const PickUps = props => {
  const lista = props.data.map;
  return <Table dataSource={props.data} columns={columns} />;
};

export default PickUps;

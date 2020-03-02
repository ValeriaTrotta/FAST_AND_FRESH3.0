import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Delivery ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Delivery Price",
    dataIndex: "delivery_price",
    key: "delivery_price" + "id"
  },
  {
    title: "Employee Asigned",
    dataIndex: "employee",
    key: "employee" + "id"
  },
  {
    title: "Bill",
    dataIndex: "bill_id",
    key: "bill_id" + "id"
  },
  {
    title: "Delivery Status",
    dataIndex: "delivery_status",
    key: "delivery_status" + "id"
  },
  {
    title: "Zona",
    dataIndex: "zona",
    key: "zona" + "id"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address" + "id"
  },

  {
    title: "View",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <a href="/{id}">View</a>
  }
];

const Deliveries = props => {
  const lista = props.data.map;
  return <Table dataSource={props.data} columns={columns} />;
};

export default Deliveries;

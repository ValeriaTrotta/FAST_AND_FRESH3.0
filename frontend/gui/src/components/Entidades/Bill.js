import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Bill ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Client",
    dataIndex: "client_id",
    key: "client_id" + "id"
  },
  {
    title: "Subtotal",
    dataIndex: " bill_sub_total",
    key: "bill_sub_total" + "id"
  },
  {
    title: "IVA",
    dataIndex: "bill_iva",
    key: "bill_iva" + "id"
  },
  {
    title: "Time",
    dataIndex: "bill_time",
    key: "bill_time" + "id"
  },
  {
    title: "Earned Points",
    dataIndex: "bill_earned_points",
    key: "bill_earned_points" + "id"
  },
  {
    title: "Delivery",
    dataIndex: "bill_delivery",
    key: "bill_delivery" + "id"
  },
  {
    title: "PickUp",
    dataIndex: "bill_pickup",
    key: "bill_pickup" + "id"
  },
  {
    title: "Producto Activo",
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

const Bills = props => {
  const lista = props.data.map;
  return <Table dataSource={props.data} columns={columns} />;
};

export default Bills;

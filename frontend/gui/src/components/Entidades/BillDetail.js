import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Bill Detail ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Bill",
    dataIndex: "bill_id",
    key: "bill_id" + "id"
  },
  {
    title: "Product Batch",
    dataIndex: "product_batch_id",
    key: "product_batch_id" + "id"
  },
  {
    title: "Product Quantity",
    dataIndex: "product_quantity",
    key: "product_quantity" + "id"
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

const BillDetails = props => {
  const lista = props.data.map;
  return <Table dataSource={props.data} columns={columns} />;
};

export default BillDetails;

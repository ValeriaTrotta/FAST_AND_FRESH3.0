import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Batch Number",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Product",
    dataIndex: "product_name",
    key: "product_name" + "id"
  },
  {
    title: "Units Elaborated",
    dataIndex: "units",
    key: "units" + "id"
  },
  {
    title: "Elaboration Date",
    dataIndex: "elaboration_date",
    key: "elaboration_date" + "id"
  },
  {
    title: "Expiration Date",
    dataIndex: "expiration_date",
    key: "expiration_date" + "id"
  },
  {
    title: "Price in Dolars",
    dataIndex: "price_dolars_u",
    key: "price_dolars_u" + "id"
  },
  {
    title: "Units Sold",
    dataIndex: "units_sold",
    key: "units_sold" + "id"
  },
  {
    title: "Units Lost",
    dataIndex: "units_lost",
    key: "units_lost" + "id"
  },
  {
    title: "Discount",
    dataIndex: "discount",
    key: "units_sold" + "id"
  },
  {
    title: "Price in Points",
    dataIndex: "price_points",
    key: "units_sold" + "id"
  },
  {
    title: "Store",
    dataIndex: "store",
    key: "store" + "id"
  },
  {
    title: "Activo",
    dataIndex: "is_active",
    key: "is_active" + "id"
  },
  {
    title: "View",
    key: "View",
    fixed: "right",
    width: 100,
    render: () => <a href="/{id}">View</a>
  }
];

const Batches = props => {
  const lista = props.data.map;
  return <Table dataSource={props.data} columns={columns} />;
};

export default Batches;

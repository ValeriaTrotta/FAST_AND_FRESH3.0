import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Product ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Product Name",
    dataIndex: "product_name",
    key: "product_name" + "id"
  },
  {
    title: "Provider",
    dataIndex: "provider",
    key: "provider" + "id"
  },
  {
    title: "Producto Especial",
    tags: ["is_special"],
    key: "is_special" + "id"
  },
  {
    title: "Producto Activo",
    tags: ["is_active"],
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

const Products = props => {
  const lista = props.data.map;
  return <Table dataSource={props.data} columns={columns} />;
};

export default Products;

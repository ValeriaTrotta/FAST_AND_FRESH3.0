import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Product",
    dataIndex: "product_name",
    key: "product_name"
  },
  {
    title: "Provider",
    dataIndex: "provider",
    key: "provider" + "id"
  },
  {
    title: "Producto Especial",
    dataIndex: "is_special",
    key: "is_special" + "id"
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

const ProductsAndTypesC = props => {
  const lista = props.data.map;
  return <Table dataSource={props.data} columns={columns} />;
};

export default ProductsAndTypesC;

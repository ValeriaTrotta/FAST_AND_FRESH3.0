import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Product",
    dataIndex: "product_name",
    key: "product_name"
  },
  {
    title: "Type of Product",
    dataIndex: "type_of_product",
    key: "type_of_product" + "id"
  },
  {
    title: "View",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <a href="/{id}">View</a>
  }
];

const ProductsAndTypes = props => {
  const lista = props.data.map;
  return <Table dataSource={props.data} columns={columns} />;
};

export default ProductsAndTypes;

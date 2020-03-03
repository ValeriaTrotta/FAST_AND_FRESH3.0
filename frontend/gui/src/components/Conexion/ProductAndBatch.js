import React from "react";
import { Table } from "antd";

const columns = [
  //   {
  //     title: "Product Name",
  //     dataIndex: "product_name",
  //     key: "product_name" + "id"
  //   },
  //   {
  //     title: "Provider",
  //     dataIndex: "provider",
  //     key: "provider" + "id"
  //   },
  //   {
  //     title: "Producto Especial",
  //     dataIndex: "is_special",
  //     key: "is_special" + "id"
  //   },
  {
    title: "Batch Number",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Units Elaborated",
    dataIndex: "units",
    key: "units" + "id"
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
    title: "Store",
    dataIndex: "store",
    key: "store" + "id"
  },

  {
    title: "View",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <a href="/{id}">View</a>
  }
];

const ProductAndBatches = props => {
  return <Table dataSource={props.data} columns={columns} />;
};

export default ProductAndBatches;

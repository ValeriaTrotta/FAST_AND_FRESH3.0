import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Provider ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Name",
    dataIndex: "provider_name",
    key: "product_name" + "id"
  },
  {
    title: "Email",
    dataIndex: "provider_email",
    key: "provider" + "id"
  },
  {
    title: "Address",
    dataIndex: "provider_address",
    key: "is_special" + "id"
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

const Providers = props => {
  return <Table dataSource={props.data} columns={columns} />;
};

export default Providers;

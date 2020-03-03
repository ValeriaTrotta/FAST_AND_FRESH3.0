import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Provider's Phone ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Provider",
    dataIndex: "provider",
    key: "provider" + "id"
  },
  {
    title: "Phone",
    dataIndex: "provider_phone_number",
    key: "provider_phone_number" + "id"
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

const ProviderPhones = props => {
  return <Table dataSource={props.data} columns={columns} />;
};

export default ProviderPhones;

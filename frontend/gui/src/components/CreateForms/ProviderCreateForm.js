import React from "react";
import {
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  Radio,
  DatePicker,
  TimePicker
} from "antd";
import axios from "axios";
import moment from "moment";

const { Option } = Select;

function onChange(value) {
  console.log("changed", value);
}
const config = {
  rules: [{ type: "object", required: true, message: "Please select time!" }]
};

class ProviderCreateForm extends React.Component {
  formRef = React.createRef();

  onFinish = values => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  handleFormSubmit = event => {
    // event.preventDefault();
    var moment = require("moment");
    const provider_name = event.Nombre;
    const provider_email = event.Email;
    const is_active = event.Active;
    const provider_address = event.Direccion;

    return axios
      .post("http://127.0.0.1:8000/api/provider/", {
        provider_name: provider_name,
        is_active: is_active,
        provider_email: provider_email,
        provider_address: provider_address
      })
      .then(res => console.log(res))
      .catch(error => console.err(error));
  };

  render() {
    return (
      <Form
        ref={this.formRef}
        name="control-ref"
        onFinish={event =>
          this.handleFormSubmit(
            event,
            this.props.requestType,
            this.props.productID
          )
        }
      >
        <Form.Item
          name="Nombre"
          rules={[
            {
              required: true
            }
          ]}
          label="Nombre"
        >
          <Input name="name" placeholder="Nombre del Proveedor" />
        </Form.Item>
        <Form.Item
          name="Email"
          label="Email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!"
            },
            {
              required: true,
              message: "Please input your E-mail!"
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Direccion"
          rules={[
            {
              required: true
            }
          ]}
          label="Direccion"
        >
          <Input name="direccion" placeholder="Direccion del Proveedor" />
        </Form.Item>

        <Form.Item
          name="Active"
          label="Active"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select name="active" placeholder="Is it Active?">
            <Option value={true}>Yes</Option>
            <Option value={false}>No</Option>
          </Select>
        </Form.Item>

        <br />
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Crear
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default ProviderCreateForm;

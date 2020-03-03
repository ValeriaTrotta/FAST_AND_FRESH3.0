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

const { Option } = Select;

const config = {
  rules: [{ type: "object", required: true, message: "Please select time!" }]
};

const validateMessages = {
  required: "This field is required!",
  types: {
    number: "Not a validate number!"
  },
  number: {
    range: "Must be between ${min} and ${max}"
  }
};

function onChange(value) {
  console.log("changed", value);
}

class IVACreateForm extends React.Component {
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
    const iva_porcentaje = event.Metodo;
    const iva_date = moment(event.Date).format("YYYY-MM-DD");
    const is_active = event.Active;

    return axios
      .post("http://127.0.0.1:8000/api/iva/", {
        iva_porcentaje: iva_porcentaje,
        iva_date: iva_date,
        is_active: is_active
      })
      .then(res => console.log(res))
      .catch(error => console.error(error));
  };

  render() {
    return (
      <Form
        ref={this.formRef}
        name="control-ref"
        onFinish={event => this.handleFormSubmit(event)}
      >
        <Form.Item
          name="Metodo"
          rules={[
            {
              required: true
            }
          ]}
          label="Metodo"
        >
          <InputNumber name="name" placeholder="Nombre del metodo de pago" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true }]}
          name="Date"
          label="Date"
          {...config}
        >
          <DatePicker />
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
            Create
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default IVACreateForm;

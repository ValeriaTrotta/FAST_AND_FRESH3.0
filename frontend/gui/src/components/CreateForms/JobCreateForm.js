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

class JobCreateForm extends React.Component {
  formRef = React.createRef();

  onFinish = values => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  handleFormSubmit = event => {
    // event.preventDefault();

    const job_name = event.Nombre;
    const job_salary = event.Salario;
    const is_active = event.Active;

    return axios
      .post("http://127.0.0.1:8000/api/job/", {
        job_name: job_name,
        job_salary: job_salary,
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
          name="Nombre"
          rules={[
            {
              required: true
            }
          ]}
          label="Nombre"
        >
          <Input name="name" placeholder="Nombre del Puesto de Trabajo" />
        </Form.Item>
        <Form.Item
          name="Salario"
          rules={[
            {
              required: true
            }
          ]}
          label="Salario"
        >
          <InputNumber name="salario" placeholder="Ingrese Salario Base" />
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

export default JobCreateForm;

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

class StoreBossCreateForm extends React.Component {
  formRef = React.createRef();

  onFinish = values => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  state = {
    employees: [],
    stores: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/store/").then(res => {
      this.setState({
        stores: res.data
      });
    });

    axios.get("http://127.0.0.1:8000/api/employee/").then(res => {
      this.setState({
        employees: res.data
      });
    });
  }

  handleFormSubmit = event => {
    // event.preventDefault();
    var moment = require("moment");
    const store = event.Nombre;
    const boss = event.Boss;
    const start_date = moment(event.SDate).format("YYYY-MM-DD");
    const is_active = event.Active;

    return axios
      .post("http://127.0.0.1:8000/api/storeboss/", {
        store: store,
        boss: boss,
        start_date: start_date,
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
          label="Store"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select name="store" placeholder="Seleccione una Sucursal">
            {this.state.stores.map(provs => (
              <Option value={provs.id} key={provs.store_name}>
                {provs.store_name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="Boss"
          label="Boss"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select name="bos" placeholder="Seleccione un Empleado" allowClear>
            {this.state.employees.map(provs => (
              <Option value={provs.id} key={provs.employee_name}>
                {provs.employee_name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          rules={[{ required: true }]}
          name="SDate"
          label="Start Date"
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

export default StoreBossCreateForm;

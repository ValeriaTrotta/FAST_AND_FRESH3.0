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

class EmployeeStoreCreateForm extends React.Component {
  formRef = React.createRef();

  onFinish = values => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  state = {
    stores: [],
    employees: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/store/").then(res => {
      this.setState({
        clients: res.data
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
    const employee_store = event.Sucursal;
    const is_active = event.Active;
    const employee = event.Empleado;
    const hired_date = moment(event.Hdate).format("YYYY-MM-DD");

    return axios
      .post("http://127.0.0.1:8000/api/employeestore/", {
        employee_store: employee_store,
        employee: employee,
        is_active: is_active,
        hired_date: hired_date
      })
      .then(res => console.log(res))
      .catch(error => console.err(error));
  };

  render() {
    return (
      <Form
        ref={this.formRef}
        name="control-ref"
        onFinish={event => this.handleFormSubmit(event)}
      >
        <Form.Item
          name="Empleado"
          label="Empleado"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select name="empleado" placeholder="Choose an Employee">
            {this.state.employees.map(provs => (
              <Option value={provs.id} key={provs.employee_name}>
                {provs.employee_cedula}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="Sucursal"
          label="Sucursal"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select name="sucursal" placeholder="Choose a Store">
            {this.state.stores.map(provs => (
              <Option value={provs.id} key={provs.store_name}>
                {provs.store_name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          rules={[{ required: true }]}
          name="HDate"
          label="Hired Date"
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
            Crear
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default EmployeeStoreCreateForm;

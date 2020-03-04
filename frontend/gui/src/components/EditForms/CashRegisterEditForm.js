import React from "react";
import { Form, Input, Button, Select, InputNumber, Radio } from "antd";
import axios from "axios";

const { Option } = Select;

function onChange(value) {
  console.log("changed", value);
}
function onSearch(val) {
  console.log("search:", val);
}

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

class CashRegisterEditForm extends React.Component {
  formRef = React.createRef();

  onFinish = values => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  state = {
    employees: [],
    currCash: {},
    cashregisters: []
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get(`http://127.0.0.1:8000/api/cashregister/${this.props.id}`)
      .then(res => {
        this.setState({
          currCash: res.data
        });
      });
    axios.get("http://127.0.0.1:8000/api/employee/").then(res => {
      this.setState({
        employees: res.data
      });
    });
    axios.get("http://127.0.0.1:8000/api/cashregister/").then(res => {
      this.setState({
        cashregisters: res.data
      });
    });
  }

  handleFormSubmit = (event, productId) => {
    let valida = true;
    this.state.cashregisters.forEach(cashregister => {
      if (cashregister.employee_id == event.Empleado) {
        valida = false;
      }
    });

    if (valida) {
      // event.preventDefault();
      const employee_id = event.Empleado;
      const is_active = event.Active;

      return axios
        .put(`http://127.0.0.1:8000/api/cashregister/${productId}/`, {
          employee_id: employee_id,
          is_active: is_active
        })
        .then(res => console.log(res))
        .catch(error => console.err(error));
    } else {
      alert("Empleado ya tiene Caja");
    }
  };

  render() {
    return (
      <Form
        ref={this.formRef}
        name="control-ref"
        onFinish={event => this.handleFormSubmit(event, this.props.id)}
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
          <Select
            name="employee"
            defaultValue={this.state.currCash.employee_id}
            placeholder={this.state.currCash.employee_id}
          >
            {this.state.employees.map(provs => (
              <Option value={provs.id} key={provs.employee_name}>
                {provs.employee_name}
              </Option>
            ))}
          </Select>
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
          <Select
            defaultValue={this.state.currCash.is_active}
            placeholder={this.state.currCash.is_active}
            name="active"
            placeholder="Is it Active?"
          >
            <Option value={true}>Yes</Option>
            <Option value={false}>No</Option>
          </Select>
        </Form.Item>

        <br />
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Edit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default CashRegisterEditForm;

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

class CashRegsiterBillsCreateForm extends React.Component {
  formRef = React.createRef();

  onFinish = values => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  state = {
    bills: [],
    cashregisters: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/bill/").then(res => {
      this.setState({
        bills: res.data
      });
    });

    axios.get("http://127.0.0.1:8000/api/cashregister/").then(res => {
      this.setState({
        cashregisters: res.data
      });
    });
  }

  handleFormSubmit = event => {
    // event.preventDefault();

    const cash_register = event.Caja;
    const bill = event.Factura;
    const is_active = event.Active;

    return axios
      .post("http://127.0.0.1:8000/api/cashregisterbills/", {
        cash_register: cash_register,
        bill: bill,
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
          name="Caja"
          label="Caja"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select
            defaultValue={this.state.currBatch.product_name}
            name="caja"
            placeholder="Selecciona una Caja"
            allowClear
          >
            {this.state.cashregisters.map(provs => (
              <Option value={provs.id} key={provs.id}>
                {provs.id}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="Factura"
          label="Factura"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select
            defaultValue={this.state.currBatch.product_name}
            name="factura"
            placeholder="Selecciona una Factura"
          >
            {this.state.bills.map(provs => (
              <Option value={provs.id} key={provs.id}>
                {provs.id}
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

export default CashRegsiterBillsCreateForm;

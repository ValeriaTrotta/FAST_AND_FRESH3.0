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

class PaymentCreateForm extends React.Component {
  formRef = React.createRef();

  onFinish = values => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  state = {
    paymentmethods: [],
    bills: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/bill/").then(res => {
      this.setState({
        bills: res.data
      });
    });

    axios.get("http://127.0.0.1:8000/api/paymentmethod/").then(res => {
      this.setState({
        cpaymentmethods: res.data
      });
    });
  }

  handleFormSubmit = event => {
    // event.preventDefault();

    const payment_amount = event.Monto;
    const payment_method = event.Metodo;
    const payment_method_instrument = event.Instrumento;
    const bill = event.Factura;
    const is_active = event.Active;

    return axios
      .post("http://127.0.0.1:8000/api/cashregisterbills/", {
        payment_amount: payment_amount,
        payment_method: payment_method,
        payment_method_instrument: payment_method_instrument,
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
          name="Monto"
          label="Monto"
          rules={[{ required: true, type: "number", min: 0 }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="Metodo"
          label="Metodo"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select name="metodo" placeholder="Seleccione un Metodo" allowClear>
            {this.state.paymentmethods.map(provs => (
              <Option value={provs.id} key={provs.payment_method}>
                {provs.payment_method}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="Instrumento"
          label="Instrumento"
          rules={[{ required: true, type: "string" }]}
        >
          <Input />
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
          <Select name="factura" placeholder="Selecciona una Factura">
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

export default PaymentCreateForm;

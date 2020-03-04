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

class ExchangeRateCreateForm extends React.Component {
  formRef = React.createRef();

  onFinish = values => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  state = {
    currencies: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/currency/").then(res => {
      this.setState({
        currencies: res.data
      });
    });
  }

  handleFormSubmit = event => {
    // event.preventDefault();

    const origin_currency = event.Currency;
    const exchange_rate = event.Rate;
    const exchange_rate_date = event.Instrumento;
    const is_active = event.Active;

    return axios
      .post("http://127.0.0.1:8000/api/exchangerate/", {
        origin_currency: origin_currency,
        exchange_rate: exchange_rate,
        exchange_rate_date: exchange_rate_date,
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
          name="Currency"
          label="Currency"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select name="currency" placeholder="Seleccione un Currency">
            {this.state.currencies.map(provs => (
              <Option value={provs.id} key={provs.currency_name}>
                {provs.currency_name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="Rate"
          label="Rate"
          rules={[{ required: true, type: "number", min: 0 }]}
        >
          <InputNumber />
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

export default ExchangeRateCreateForm;

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
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";

const { Option } = Select;

const currencyLabel = "Moneda utilizada:";
const amountLabel = "Monto a pagar:";
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 }
  }
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 24, offset: 0 }
  }
};

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
    bill: {},
    products: [],
    quantity: [],
    currency: [],
    amount: [],
    method: [],
    accountHolder: [],
    accountNumber: [],
    currencies: [],
    methods: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/currency/").then(res => {
      this.setState({
        currencies: res.data
      });
    });
    axios.get("http://127.0.0.1:8000/api/paymentmethod/").then(res => {
      this.setState({
        methods: res.data
      });
    });
  }

  onReset = () => {
    this.formRef.current.resetFields();
  };

  handleCurrency = (value, index) => {
    this.state.currencies[index] = value;

    this.setState({
      ...this.state,
      currency: this.state.currency
    });
  };
  handleAmount = (value, index) => {
    this.state.amount[index] = value;

    this.setState({
      ...this.state,
      amountOnline: this.state.amount
    });
  };

  handleMethod = (value, index) => {
    this.state.method[index] = value;

    this.setState({
      ...this.state,
      method: this.state.method
    });
  };

  handleAccountHolder = (value, index) => {
    this.state.accountHolder[index] = value;

    this.setState({
      ...this.state,
      accountHolder: this.state.accountHolder
    });
  };
  handleAccountNumber = (value, index) => {
    this.state.accountNumber[index] = value;

    this.setState({
      ...this.state,
      accountNumber: this.state.accountNumber
    });
  };

  handleRemove(index) {
    this.state.currency.splice(index, 1);
    this.state.amount.splice(index, 1);
    this.state.accountHolder.splice(index, 1);
    this.state.accountNumber.splice(index, 1);
    this.state.method.splice(index, 1);
    this.setState({
      ...this.state,
      currency: this.state.currencyOnline,
      amount: this.state.amountOnline,
      accountHolder: this.state.accountHolder,
      accountNumber: this.state.accountNumber,
      method: this.state.method
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
      <div>
        <h2>Métodos de pago</h2>
        <Form
          ref={this.formRef}
          name="formCash"
          onFinish={this.handleFormSubmit}
        >
          <Form.List name="formPayments">
            {(fields, { add, remove }) => {
              return (
                <div>
                  {fields.map((field, index) => (
                    <div key={"divCash" + field.key}>
                      <Form.Item
                        {...(index === 0
                          ? formItemLayout
                          : formItemLayoutWithOutLabel)}
                        label={index === 0 ? "" : ""}
                        required={true}
                        key={"currencyCash." + field.key}
                      >
                        <Select
                          onChange={value => this.handleCurrency(value, index)}
                          style={{ width: 200 }}
                          placeholder="Currency"
                        >
                          {this.state.currencies.map(currency => (
                            <Option value={currency.id} key={currency.id}>
                              {currency.currency_name}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>
                      <Form.Item
                        {...(index === 0
                          ? formItemLayout
                          : formItemLayoutWithOutLabel)}
                        label={index === 0 ? "" : ""}
                        required={true}
                        key={"method." + field.key}
                      >
                        <Select
                          onChange={value => this.handleMethod(value, index)}
                          style={{ width: 200 }}
                          placeholder="Method"
                        >
                          {this.state.methods.map(method => (
                            <Option value={method.id} key={method.id}>
                              {method.payment_method}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>
                      <Form.Item
                        {...(index === 0
                          ? formItemLayout
                          : formItemLayoutWithOutLabel)}
                        label={index === 0 ? "" : ""}
                        required={true}
                        key={"amountCash." + field.key}
                      >
                        <InputNumber
                          placeholder="Amount to Pay"
                          style={{ width: 200 }}
                          min={1}
                          max={this.state.bill.total}
                          onChange={value => this.handleAmount(value, index)}
                        />
                      </Form.Item>

                      <Form.Item rules={[{ required: true }]}>
                        <Input
                          placeholder="Account Number"
                          style={{ width: 200 }}
                          allowClear
                          onChange={value =>
                            this.handleAccountNumberOnline(value, index)
                          }
                        />
                      </Form.Item>

                      {fields.length > 0 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button"
                          onClick={() => {
                            remove(field.name);
                            this.handleRemove(index);
                          }}
                        />
                      ) : null}
                    </div>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => {
                        add();
                        this.setState({
                          ...this.state,
                          hasPayment: true
                        });
                      }}
                      style={{ width: 200 }}
                    >
                      <PlusOutlined /> Añadir pago
                    </Button>
                  </Form.Item>
                </div>
              );
            }}
          </Form.List>
        </Form>

        <Button
          type="primary"
          htmlType="submit"
          style={{ width: 200 }}
          onClick={this.handleFormSubmit}
        >
          Pagar
        </Button>
      </div>
    );
  }
}

// <Form
//   ref={this.formRef}
//   name="control-ref"
//   onFinish={event => this.handleFormSubmit(event)}
// >
//   <Form.Item
//     name="Monto"
//     label="Monto"
//     rules={[{ required: true, type: "number", min: 0 }]}
//   >
//     <InputNumber />
//   </Form.Item>
//   <Form.Item
//     name="Metodo"
//     label="Metodo"
//     rules={[
//       {
//         required: true
//       }
//     ]}
//   >
//     <Select name="metodo" placeholder="Seleccione un Metodo" allowClear>
//       {this.state.paymentmethods.map(provs => (
//         <Option value={provs.id} key={provs.payment_method}>
//           {provs.payment_method}
//         </Option>
//       ))}
//     </Select>
//   </Form.Item>

//   <Form.Item
//     name="Instrumento"
//     label="Instrumento"
//     rules={[{ required: true, type: "string" }]}
//   >
//     <Input />
//   </Form.Item>

//   <Form.Item
//     name="Factura"
//     label="Factura"
//     rules={[
//       {
//         required: true
//       }
//     ]}
//   >
//     <Select name="factura" placeholder="Selecciona una Factura">
//       {this.state.bills.map(provs => (
//         <Option value={provs.id} key={provs.id}>
//           {provs.id}
//         </Option>
//       ))}
//     </Select>
//   </Form.Item>

//   <Form.Item
//     name="Active"
//     label="Active"
//     rules={[
//       {
//         required: true
//       }
//     ]}
//   >
//     <Select name="active" placeholder="Is it Active?">
//       <Option value={true}>Yes</Option>
//       <Option value={false}>No</Option>
//     </Select>
//   </Form.Item>

//   <br />
//   <Form.Item>
//     <Button type="primary" htmlType="submit">
//       Create
//     </Button>
//   </Form.Item>
// </Form>

export default PaymentCreateForm;

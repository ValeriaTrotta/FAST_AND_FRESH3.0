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

class ProviderPhoneCreateForm extends React.Component {
  formRef = React.createRef();

  onFinish = values => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  state = {
    providers: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/provider/").then(res => {
      this.setState({
        providers: res.data
      });
    });
  }

  handleFormSubmit = event => {
    // event.preventDefault();

    const provider = event.Proveedor;
    const provider_phone_number = event.Telefono;
    const is_active = event.Active;

    return axios
      .post("http://127.0.0.1:8000/api/providerphone/", {
        provider: provider,
        is_active: is_active,
        provider_phone_number: provider_phone_number
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
          name="Proveedor"
          label="Proveedor"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select
            name="provider"
            placeholder="Selecciona un proveedor"
            allowClear
          >
            {this.state.providers.map(provs => (
              <Option value={provs.id} key={provs.provider_name}>
                {provs.provider_name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="Telefono"
          rules={[
            {
              required: true
            }
          ]}
          label="Telefono"
        >
          <Input name="telefono" placeholder="Telefono del Proveedor" />
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

export default ProviderPhoneCreateForm;

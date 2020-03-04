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

class MemberCreateForm extends React.Component {
  formRef = React.createRef();

  onFinish = values => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  state = {
    clients: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/client/").then(res => {
      this.setState({
        clients: res.data
      });
    });
  }

  handleFormSubmit = event => {
    // event.preventDefault();
    var moment = require("moment");
    const member_points = 0;
    const member_email = event.Email;
    const is_active = event.Active;
    const member_start_date = moment().format("YYYY-MM-DD");
    const member_pay_date = moment()
      .add(365, "day")
      .calendar();
    const client = event.Cliente;
    const member_birth_date = moment(event.BDate).format("YYYY-MM-DD");

    console.log(member_pay_date);

    return axios
      .post("http://127.0.0.1:8000/api/member/", {
        member_points: member_points,
        member_email: member_email,
        is_active: is_active,
        member_start_date: member_start_date,
        member_pay_date: moment(member_pay_date).format("YYYY-MM-DD"),
        client: client,
        member_birth_date: member_birth_date
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
          name="Email"
          label="Email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!"
            },
            {
              required: true,
              message: "Please input your E-mail!"
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          rules={[{ required: true }]}
          name="BDate"
          label="Birth Date"
          {...config}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          name="Cliente"
          label="Cliente"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select name="client" placeholder="Choose a Client">
            {this.state.clients.map(provs => (
              <Option value={provs.id} key={provs.client_name}>
                {provs.client_name}
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
            Crear
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default MemberCreateForm;

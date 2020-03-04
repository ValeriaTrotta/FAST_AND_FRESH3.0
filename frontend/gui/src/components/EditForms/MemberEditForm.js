import React from "react";
import {
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  Radio,
  DatePicker
} from "antd";
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

class MemberEditForm extends React.Component {
  formRef = React.createRef();

  onFinish = values => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  state = {
    clients: [],
    currMem: {},
    clients2: [],
    client: {},
    members: []
  };

  componentDidMount() {
    console.log(this.props);
    axios.get(`http://127.0.0.1:8000/api/member/${this.props.id}`).then(res => {
      this.setState({
        currMem: res.data
      });
      axios
        .get(`http://127.0.0.1:8000/api/client/${this.state.currMem.client}`)
        .then(res => {
          this.setState({
            client: res.data
          });
          console.log(this.state.client);
        });
    });

    axios.get("http://127.0.0.1:8000/api/member/").then(res => {
      this.setState({
        members: res.data
      });
      console.log(this.state.providers);
    });
    axios.get("http://127.0.0.1:8000/api/client/").then(res => {
      this.setState({
        clients: res.data
      });
      console.log(this.state.providers);
    });

    const lista = [];
  }

  handleFormSubmit = (event, productId) => {
    // event.preventDefault();
    var moment = require("moment");
    const member_points = 0;
    const member_email = event.Email;
    const is_active = event.Active;
    const member_start_date = moment().format("YYYY-MM-DD");
    const member_pay_date = moment(event.PDate)
      .add(365, "day")
      .calendar();
    const client = event.Cliente;
    const member_birth_date = moment(event.BDate).format("YYYY-MM-DD");

    return axios
      .put(`http://127.0.0.1:8000/api/member/${productId}/`, {
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
        onFinish={event => this.handleFormSubmit(event, this.props.productID)}
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
              message: "Please input your E-mail!"
            }
          ]}
        >
          <Input
            placeholder={this.state.currMem.member_email}
            defaultValue={this.state.currMem.member_email}
          />
        </Form.Item>

        <Form.Item
          rules={[{ required: false }]}
          name="BDate"
          label="Birth Date"
          {...config}
        >
          <DatePicker
            placeholder={this.state.currMem.member_birth_date}
            defaultValue={this.state.currMem.member_birth_date}
          />
        </Form.Item>

        <Form.Item
          rules={[{ required: false }]}
          name="PDate"
          label="Pay Date"
          {...config}
        >
          <DatePicker
            placeholder={this.state.currMem.member_pay_date}
            defaultValue={this.state.currMem.member_pay_date}
          />
        </Form.Item>

        <Form.Item
          name="Cliente"
          label="Cliente"
          rules={[
            {
              required: false
            }
          ]}
        >
          <Select
            name="client"
            placeholder={this.state.currMem.client}
            defaultValue={this.state.currMem.client}
          >
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
              required: false
            }
          ]}
        >
          <Select
            placeholder={this.state.currMem.is_active}
            defaultValue={this.state.currMem.is_active}
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

export default MemberEditForm;

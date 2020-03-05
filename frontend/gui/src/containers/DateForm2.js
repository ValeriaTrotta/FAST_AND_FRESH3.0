import { DatePicker } from "antd";
import React from "react";
import { Form, Input, Button, Select, InputNumber, Radio } from "antd";
import axios from "axios";
import { Redirect, Route, Link } from "react-router-dom";

const { Option } = Select;

function onChange(value) {
  console.log("changed", value);
}

const layout = {
  labelCol: {
    span: 11
  }
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

class DateForm2 extends React.Component {
  formRef = React.createRef();

  onFinish = values => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  handleFormSubmit = event => {
    // event.preventDefault();
    var moment = require("moment");
    const date = moment(event.Date).format("DD-MM-YYYY");
    console.log(date);
    this.setState({ redirect: `/dinerocaja/${date}` });
    console.log("link", this.state.redirect);
  };

  state = {
    redirect: null
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect}></Redirect>;
    }
    return (
      <Form onFinish={event => this.handleFormSubmit(event)}>
        <Form.Item rules={[{ required: true }]} name="Date" label="Date">
          <DatePicker />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Buscar
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default DateForm2;

// function onChange(date, dateString) {
//   console.log(date, dateString);
// }

// ReactDOM.render(
//   <div>
//     <DatePicker onChange={onChange} />
//     <br />
//     <DatePicker onChange={onChange} picker="week" />
//     <br />
//     <DatePicker onChange={onChange} picker="month" />
//     <br />
//     <DatePicker onChange={onChange} picker="year" />
//   </div>,
//   mountNode,
// );

import { DatePicker } from "antd";
import React from "react";
import { Form, Input, Button, Select, InputNumber, Radio } from "antd";
import axios from "axios";
import { Redirect, Route, Link } from "react-router-dom";

const { RangePicker } = DatePicker;
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

class DateForm3 extends React.Component {
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
    const date1 = moment(event.Dates[0]).format("DD-MM-YYYY");
    const date2 = moment(event.Dates[1]).format("DD-MM-YYYY");

    this.setState({ redirect: `/dinerointervalo/${date1}/${date2}` });
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
        <Form.Item rules={[{ required: true }]} name="Dates" label="Date">
          <RangePicker />
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

export default DateForm3;

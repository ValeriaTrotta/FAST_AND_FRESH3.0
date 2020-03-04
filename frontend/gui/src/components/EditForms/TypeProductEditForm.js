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

class TypeProductEditForm extends React.Component {
  formRef = React.createRef();

  onFinish = values => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  state = {
    providers: [],
    currTypeProd: {}
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get(`http://127.0.0.1:8000/api/type_of_product/${this.props.id}`)
      .then(res => {
        this.setState({
          currTypeProd: res.data
        });
      });
  }

  handleFormSubmit = (event, productId) => {
    // event.preventDefault();
    const type = event.Tipo;
    const is_active = event.Active;
    console.log(event);

    axios
      .put(`http://127.0.0.1:8000/api/type_of_product/${productId}/`, {
        type: type,
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
        onFinish={event => this.handleFormSubmit(event, this.props.id)}
      >
        <Form.Item
          rules={[
            {
              required: true
            }
          ]}
          name="Tipo"
          label="Tipo"
        >
          <Input
            defaultValue={this.state.currTypeProd.type}
            placeholder={this.state.currTypeProd.type}
          />
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
            defaultValue={this.state.currTypeProd.is_active}
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

export default TypeProductEditForm;

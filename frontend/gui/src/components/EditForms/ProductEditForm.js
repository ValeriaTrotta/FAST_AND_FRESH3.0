import React from "react";
import { Form, Input, Button, Select } from "antd";
import axios from "axios";

const { Option } = Select;

function onSearch(val) {
  console.log("search:", val);
}

class ProductEditForm extends React.Component {
  formRef = React.createRef();

  onFinish = values => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  state = {
    providers: [],
    currProd: {}
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get(`http://127.0.0.1:8000/api/product/${this.props.id}`)
      .then(res => {
        this.setState({
          currProd: res.data
        });
      });
    axios.get("http://127.0.0.1:8000/api/provider/").then(res => {
      this.setState({
        providers: res.data
      });
      console.log(this.state.providers);
    });
  }

  handleFormSubmit = (event, productId) => {
    // event.preventDefault();
    const product_name = event.Nombre;
    const provider = event.Proveedor;
    const is_active = event.Active;
    const is_special = event.Special;

    return axios
      .put(`http://127.0.0.1:8000/api/product/${productId}/`, {
        provider: provider,
        product_name: product_name,
        is_active: is_active,
        is_special: is_special
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
        <Form.Item name="Nombre" label="Nombre">
          <Input
            defaultValue={this.state.currProd.product_name}
            name="name"
            placeholder={this.state.currProd.product_name}
            rules={[
              {
                required: true
              }
            ]}
          />
        </Form.Item>

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
            style={{ width: 150 }}
            showSearch
            name="provider"
            defaultValue={this.state.currProd.provider}
            placeholder={this.state.currProd.provider}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {this.state.providers.map(provs => (
              <Option value={provs.id} key={provs.provider_name}>
                {provs.provider_name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="Special"
          label="Special"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select
            defaultValue={this.state.currProd.is_special}
            name="special"
            placeholder="Is it Special?"
          >
            <Option value={true}>Yes</Option>
            <Option value={false}>No</Option>
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
          <Select
            defaultValue={this.state.currProd.is_active}
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

export default ProductEditForm;

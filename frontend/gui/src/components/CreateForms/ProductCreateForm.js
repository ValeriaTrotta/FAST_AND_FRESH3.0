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

class ProductCreateForm extends React.Component {
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
    if (this.props.productID !== null) {
      axios
        .get(`http://127.0.0.1:8000/api/product/${this.props.productID}/`)
        .then(res => {
          this.setState({
            currProd: res.data
          });
          console.log("current", this.props.producID);
        });
    }
    axios.get("http://127.0.0.1:8000/api/provider/").then(res => {
      this.setState({
        providers: res.data
      });
      console.log(this.state.providers);
    });
  }

  handleFormSubmit = event => {
    // event.preventDefault();
    const product_name = event.Nombre;
    const provider = event.Proveedor;
    const is_active = event.Active;
    const is_special = event.Special;

    return axios
      .post("http://127.0.0.1:8000/api/product/", {
        provider: provider,
        product_name: product_name,
        is_active: is_active,
        is_special: is_special
      })
      .then(res => console.log(res))
      .catch(error => console.err(error));
  };

  render() {
    return (
      <Form
        ref={this.formRef}
        name="control-ref"
        onFinish={event => this.handleFormSubmit(event)}
      >
        <Form.Item
          name="Nombre"
          rules={[
            {
              required: true
            }
          ]}
          label="Nombre"
        >
          <Input name="name" placeholder="Nombre del producto" />
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
            showSearch
            name="provider"
            placeholder="Selecciona un proveedor"
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
          <Select name="special" placeholder="Is it Special?" allowClear>
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

export default ProductCreateForm;

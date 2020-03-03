import React from "react";
import { Form, Input, Button, Select, InputNumber, Radio } from "antd";
import axios from "axios";

const { Option } = Select;

function onChange(value) {
  console.log("changed", value);
}

class ProductAndTypeCreateForm extends React.Component {
  formRef = React.createRef();

  onFinish = values => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  state = {
    products: [],
    typeproducts: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/product/").then(res => {
      this.setState({
        products: res.data
      });
    });
    axios.get("http://127.0.0.1:8000/api/type_of_product/").then(res => {
      this.setState({
        typeproducts: res.data
      });
    });
  }

  handleFormSubmit = event => {
    // event.preventDefault();
    const product_name = event.Nombre;
    const type_of_product = event.Tipo;
    const is_active = event.Active;

    return axios
      .post("http://127.0.0.1:8000/api/product_type/", {
        product_name: product_name,
        type_of_product: type_of_product,
        is_active: is_active
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
          name="Nombre"
          label="Nombre"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select name="product" placeholder="Selecciona un Producto">
            {this.state.products.map(provs => (
              <Option value={provs.id} key={provs.product_name}>
                {provs.product_name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="Tipo"
          label="Tipo"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select name="type" placeholder="Selecciona una Categoria">
            {this.state.typeproducts.map(provs => (
              <Option value={provs.id} key={provs.type}>
                {provs.type}
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
            {this.props.btnText}
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default ProductAndTypeCreateForm;

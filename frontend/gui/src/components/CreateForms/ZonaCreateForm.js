import React from "react";
import { Form, Input, Button, Select, InputNumber, Radio } from "antd";
import axios from "axios";

const { Option } = Select;

function onChange(value) {
  console.log("changed", value);
}

class ZonaCreateForm extends React.Component {
  formRef = React.createRef();

  onFinish = values => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  state = {
    cities: [],
    currProd: {}
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/city/").then(res => {
      this.setState({
        cities: res.data
      });
    });
  }

  handleFormSubmit = event => {
    // event.preventDefault();
    const zona_name = event.Nombre;
    const city = event.Ciudad;
    const is_active = event.Active;

    return axios
      .post("http://127.0.0.1:8000/api/zona/", {
        zona_name: zona_name,
        city: city,
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
          rules={[
            {
              required: true
            }
          ]}
          label="Nombre"
        >
          <Input name="name" placeholder="Nombre de la Zona" />
        </Form.Item>

        <Form.Item
          name="Ciudad"
          label="Ciudad"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select name="city" placeholder="Selecciona una Ciudad" allowClear>
            {this.state.cities.map(provs => (
              <Option value={provs.id} key={provs.city_name}>
                {provs.city_name}
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

export default ZonaCreateForm;

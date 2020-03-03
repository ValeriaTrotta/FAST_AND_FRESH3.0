import React from "react";
import { Form, Input, Button, Select, InputNumber, Radio } from "antd";
import axios from "axios";

const { Option } = Select;

function onChange(value) {
  console.log("changed", value);
}

class CityCreateForm extends React.Component {
  formRef = React.createRef();

  onFinish = values => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  state = {
    states: [],
    currProd: {}
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/state/").then(res => {
      this.setState({
        states: res.data
      });
    });
  }

  handleFormSubmit = event => {
    // event.preventDefault();
    const city_name = event.Nombre;
    const state = event.Estado;
    const is_active = event.Active;

    return axios
      .post("http://127.0.0.1:8000/api/city/", {
        city_name: city_name,
        state: state,
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
          <Input name="name" placeholder="Nombre de la Ciudad" />
        </Form.Item>

        <Form.Item
          name="Estado"
          label="Estado"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select name="state" placeholder="Selecciona un Estado">
            {this.state.states.map(provs => (
              <Option value={provs.id} key={provs.state_name}>
                {provs.state_name}
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

export default CityCreateForm;

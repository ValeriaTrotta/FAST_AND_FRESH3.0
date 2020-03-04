import React from "react";
import { Form, Input, Button, Select, InputNumber, Radio, message } from "antd";
import axios from "axios";

const { Option } = Select;

class ClientCreateForm extends React.Component {
  formRef = React.createRef();

  onFinish = values => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  state = {
    zonas: [],
    clients: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/zona/").then(res => {
      this.setState({
        zonas: res.data
      });
    });
    axios.get("http://127.0.0.1:8000/api/client/").then(res => {
      this.setState({
        clients: res.data
      });
    });
  }

  onChange = value => {
    this.state.clients.map(client => {
      if (client.client_cedula == value) {
        return console.log("son iguales");
      } else {
        return (message = "Son diferentes");
      }
    });
  };

  handleFormSubmit = event => {
    let valida = true;
    this.state.clients.forEach(client => {
      console.log("entre");
      if (client.client_cedula == event.Cedula) {
        valida = false;
        console.log("ENTREw");
      }
    });

    if (valida) {
      const client_name = event.Nombre;
      const client_last_name = event.Apellido;
      const client_cedula = event.Cedula;
      const client_phone = event.Telefono.toString();
      const client_gender = event.Genero;
      const zona = event.Zona;
      const is_active = event.Active;

      return axios
        .post("http://127.0.0.1:8000/api/client/", {
          client_name: client_name,
          client_last_name: client_last_name,
          client_cedula: client_cedula,
          client_phone: client_phone,
          client_gender: client_gender,
          zona: zona,
          is_active: is_active
        })
        .then(res => console.log(res))
        .catch(error => console.error(error));
    } else {
      alert("La Cedula ya existe");
    }

    // event.preventDefault();
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
          <Input name="name" placeholder="Nombre del Cliente" />
        </Form.Item>

        <Form.Item
          name="Apellido"
          rules={[
            {
              required: true
            }
          ]}
          label="Apellido"
        >
          <Input name="lastname" placeholder="Apellido del Cliente" />
        </Form.Item>

        <Form.Item
          name="Cedula"
          rules={[
            {
              required: true,
              type: "number",
              min: 1
            }
          ]}
          label="Cedula"
        >
          <InputNumber name="cedula" placeholder="Cedula del Cliente" />
        </Form.Item>

        <Form.Item
          name="Telefono"
          rules={[
            {
              required: true,
              type: "number",
              min: 4100000000,
              max: 4270000000
            }
          ]}
          label="Telefono"
        >
          <InputNumber name="telefono" placeholder="Telefono del Cliente" />
        </Form.Item>

        <Form.Item
          name="Genero"
          label="Genero"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select name="genero" placeholder="Sexo" allowClear>
            <Option value="F">Femenino</Option>
            <Option value="M">Masculino</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="Zona"
          label="Zona"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select name="zona" placeholder="Selecciona una Zona" allowClear>
            {this.state.zonas.map(provs => (
              <Option value={provs.id} key={provs.zona_name}>
                {provs.zona_name}
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

export default ClientCreateForm;

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

class ClientEditForm extends React.Component {
  formRef = React.createRef();

  onFinish = values => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  state = {
    zonas: [],
    currCli: {},
    clients: []
  };

  componentDidMount() {
    console.log(this.props);
    axios.get(`http://127.0.0.1:8000/api/client/${this.props.id}`).then(res => {
      this.setState({
        currCli: res.data
      });
      console.log(this.state.currCli);
    });
    axios.get("http://127.0.0.1:8000/api/zona/").then(res => {
      this.setState({
        zonas: res.data
      });
    });
    axios.get("http://127.0.0.1:8000/api/clients/").then(res => {
      this.setState({
        clients: res.data
      });
    });
  }

  handleFormSubmit = (event, productId) => {
    let valida = true;
    console.log(this.state.clients);
    this.state.clients.forEach(client => {
      console.log("entre");
      if (client.client_cedula == event.Cedula) {
        valida = false;
        if (client.id == this.state.client.id) {
          valida = true;
        }
      }
    });
    if (valida) {
      // event.preventDefault();
      const client_name = event.Nombre;
      const client_last_name = event.Apellido;
      const client_cedula = event.Cedula.toString();
      const client_phone = event.Telefono.toString();
      const client_gender = event.Genero;
      const zona = event.Zona;
      const is_active = event.Active;
      console.log(event);

      return axios
        .put(`http://127.0.0.1:8000/api/client/${productId}/`, {
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
      alert("Cedula ya existe");
    }
  };

  render() {
    return (
      <Form
        ref={this.formRef}
        name="control-ref"
        onFinish={event => this.handleFormSubmit(event, this.props.id)}
      >
        <Form.Item
          rules={[{ required: true }]}
          name="Nombre"
          label="Nombre"
          key={this.state.currCli.client_name}
        >
          <Input name="name" placeholder={this.state.currCli.client_name} />
        </Form.Item>

        <Form.Item
          rules={[{ required: true }]}
          name="Apellido"
          label="Apellido"
        >
          <Input
            name="lastname"
            placeholder={this.state.currCli.client_last_name}
            key={this.state.currCli.client_last_name}
          />
        </Form.Item>

        <Form.Item
          rules={[{ required: true }]}
          name="Cedula"
          label="Cedula"
          rules={[{ type: "number", min: 1 }]}
          key={this.state.currCli.client_cedula}
        >
          <InputNumber
            name="cedula"
            placeholder={this.state.currCli.client_cedula}
          />
        </Form.Item>

        <Form.Item
          rules={[{ required: true }]}
          name="Telefono"
          label="Telefono"
          rules={[{ type: "number", min: 4100000000, max: 4270000000 }]}
          key={this.state.currCli.client_phone}
        >
          <InputNumber
            name="telefono"
            placeholder={this.state.currCli.client_phone}
          />
        </Form.Item>

        <Form.Item rules={[{ required: true }]} name="Genero" label="Genero">
          <Select
            name="genero"
            placeholder="Sexo"
            key={this.state.currCli.client_gender}
          >
            <Option value="F">Femenino</Option>
            <Option value="M">Masculino</Option>
          </Select>
        </Form.Item>

        <Form.Item
          rules={[{ required: true }]}
          name="Zona"
          label="Zona"
          key={this.state.currCli.zona}
        >
          <Select name="zona" placeholder={this.state.currCli.zona}>
            {this.state.zonas.map(provs => (
              <Option value={provs.id} key={provs.zona_name}>
                {provs.zona_name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          rules={[{ required: true }]}
          name="Active"
          label="Active"
          key={this.state.currCli.is_active}
        >
          <Select name="active" placeholder="Is it Active?">
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

export default ClientEditForm;

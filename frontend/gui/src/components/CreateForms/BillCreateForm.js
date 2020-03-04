import React from "react";
import {
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  Radio,
  DatePicker,
  TimePicker
} from "antd";
import axios from "axios";

const { Option } = Select;

const config = {
  rules: [{ type: "object", required: true, message: "Please select time!" }]
};

const validateMessages = {
  required: "This field is required!",
  types: {
    number: "Not a validate number!"
  },
  number: {
    range: "Must be between ${min} and ${max}"
  }
};

function onChange(value) {
  console.log("changed", value);
}

class BillCreateForm extends React.Component {
  formRef = React.createRef();

  onFinish = values => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  state = {
    clients: [],
    ivas: [],
    members: [],
    member: {}
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/client/").then(res => {
      this.setState({
        clients: res.data
      });
    });
    axios.get("http://127.0.0.1:8000/api/member/").then(res => {
      this.setState({
        members: res.data
      });
    });

    axios.get("http://127.0.0.1:8000/api/iva/").then(res => {
      this.setState({
        ivas: res.data
      });
    });
  }

  handleFormSubmit = event => {
    // event.preventDefault();

    var puntos = "";
    this.state.members.map(member => {
      if (member.client == event.Cliente) {
        puntos = event.Subtotal / 10;
      } else {
        puntos = 0;
      }
    });

    const client_id = event.Cliente;
    const bill_sub_total = event.Subtotal;
    const bill_iva = event.Iva;
    const bill_date = event.Fecha;
    const bill_time = event.Hora;
    const bill_earned_points = puntos;
    const bill_delivery = event.Delivery;
    const bill_pickup = event.PickUp;
    const is_active = event.Active;

    return axios
      .post("http://127.0.0.1:8000/api/bill/", {
        client_id: client_id,
        bill_sub_total: bill_sub_total,
        bill_iva: bill_iva,
        bill_date: bill_date,
        bill_time: bill_time,
        bill_earned_points: bill_earned_points,
        bill_delivery: bill_delivery,
        bill_pickup: bill_pickup,
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
        onFinish={event => this.handleFormSubmit(event)}
      >
        <Form.Item
          name="Cliente"
          label="Cliente"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select name="cliente" placeholder="Seleccione a un Cliente">
            {this.state.clients.map(provs => (
              <Option value={provs.id} key={provs.client_name}>
                {provs.cedula} {provs.cedula}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="Factura"
          label="Factura"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select name="factura" placeholder="Seleccione una Factura">
            {this.state.bills.map(provs => (
              <Option value={provs.id} key={provs.id}>
                {provs.id}
              </Option>
            ))}
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
          <Select name="zona" placeholder="Seleccione una Zona">
            {this.state.zonas.map(provs => (
              <Option value={provs.id} key={provs.zona_name}>
                {provs.zona_name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="Direccion"
          rules={[
            {
              required: true
            }
          ]}
          label="Direccion"
        >
          <Input name="name" placeholder="Direccion" />
        </Form.Item>

        <Form.Item
          name="Status"
          label="Status"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select name="status" placeholder="Status">
            <Option value="Entregado">Entregado</Option>
            <Option value="No Entregado">No Entregado</Option>
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

export default DeliveryCreateForm;

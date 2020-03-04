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

class DeliveryCreateForm extends React.Component {
  formRef = React.createRef();

  onFinish = values => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  state = {
    employees: [],
    stores: [],
    bills: [],
    zonas: [],
    precio: {}
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/store/").then(res => {
      this.setState({
        stores: res.data
      });
    });

    axios.get("http://127.0.0.1:8000/api/employee/").then(res => {
      this.setState({
        employees: res.data
      });
    });

    axios.get("http://127.0.0.1:8000/api/bill/").then(res => {
      this.setState({
        bills: res.data
      });
    });

    axios.get("http://127.0.0.1:8000/api/zona/").then(res => {
      this.setState({
        zonas: res.data
      });
    });
  }

  handleFormSubmit = event => {
    var precio = "";
    this.state.stores.map(store => {
      if (store.zona == event.Zona) {
        precio = 2;
      } else {
        precio = 5;
      }
    });
    // event.preventDefault();

    const delivery_price = precio;
    const employee = event.Empleado;
    const bill_id = event.Factura;
    const delivery_status = event.Status;
    const zona = event.Zona;
    const address = event.Direccion;
    const is_active = event.Active;

    return axios
      .post("http://127.0.0.1:8000/api/delivery/", {
        delivery_price: delivery_price,
        employee: employee,
        bill_id: bill_id,
        delivery_status: delivery_status,
        zona: zona,
        address: address,
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
          name="Empleado"
          label="Empleado"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select name="employee" placeholder="Seleccione a un Empleado">
            {this.state.employees.map(provs => (
              <Option value={provs.id} key={provs.employee_name}>
                {provs.employee_name}
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

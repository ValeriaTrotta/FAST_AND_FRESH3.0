import React from "react";
import {
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  Radio,
  DatePicker
} from "antd";
import axios from "axios";

const { Option } = Select;

function onChange(value) {
  console.log("changed", value);
}
const config = {
  rules: [{ type: "object", required: true, message: "Please select time!" }]
};
class EmployeeCreateForm extends React.Component {
  formRef = React.createRef();

  onFinish = values => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  state = {
    jobs: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/job/").then(res => {
      this.setState({
        jobs: res.data
      });
    });
  }

  handleFormSubmit = event => {
    // event.preventDefault();
    var moment = require("moment");
    const employee_name = event.Nombre;
    const employee_last_name = event.Apellido;
    const employee_cedula = event.Cedula;
    const employee_phone = event.Telefono;
    const employee_gender = event.Genero;
    const employee_birth_date = moment(event.BDate).format("YYYY-MM-DD");
    const employee_job = event.Trabajo;
    const salary_bonus = event.Bono;
    const employee_email = event.Email;
    const is_active = event.Active;

    return axios
      .post("http://127.0.0.1:8000/api/employee/", {
        employee_name: employee_name,
        employee_last_name: employee_last_name,
        employee_cedula: employee_cedula,
        employee_phone: employee_phone,
        employee_gender: employee_gender,
        employee_birth_date: employee_birth_date,
        employee_job: employee_job,
        salary_bonus: salary_bonus,
        employee_email: employee_email,
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
          <Input name="name" placeholder="Nombre del Empleado" />
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
          <Input name="lastname" placeholder="Apellido del Empleado" />
        </Form.Item>

        <Form.Item
          name="Cedula"
          rules={[
            {
              required: true
            }
          ]}
          label="Cedula"
        >
          <Input name="cedula" placeholder="Cedula del Empleado" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true }]}
          name="BDate"
          label="Birth Date"
          {...config}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="Telefono"
          rules={[
            {
              required: true
            }
          ]}
          label="Telefono"
        >
          <Input name="telefono" placeholder="Telefono del Empleado" />
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
          name="Trabajo"
          label="Trabajo"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select name="trabajo" placeholder="Selecciona un Trabajo">
            {this.state.jobs.map(provs => (
              <Option value={provs.id} key={provs.job_name}>
                {provs.job_name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="Bono"
          rules={[
            {
              required: true
            }
          ]}
          label="Bono"
        >
          <InputNumber name="bono" placeholder="Bono Salarial del Empleado" />
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

        <Form.Item
          name="Email"
          label="Email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!"
            },
            {
              required: true,
              message: "Please input your E-mail!"
            }
          ]}
        >
          <Input />
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

export default EmployeeCreateForm;

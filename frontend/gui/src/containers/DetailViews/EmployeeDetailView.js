import React from "react";
import Employees from "../../components/Entidades/Employee";
import axios from "axios";
import { Card } from "antd";
// import ProductEditForm from "../components/EditForms/ProductEditForm";

class EmployeeDetail extends React.Component {
  state = {
    employee: {},
    job: {}
  };

  componentDidMount() {
    const employeeId = this.props.match.params.employeeId;
    axios.get(`http://127.0.0.1:8000/api/employee/${employeeId}`).then(res => {
      this.setState({
        employee: res.data
      });
      axios
        .get(`http://127.0.0.1:8000/api/provider/${this.state.employee.job}`)
        .then(res => {
          this.setState({
            job: res.data
          });
        });
    });
  }
  render() {
    const titulo =
      "Empleado " +
      `${this.state.employee.employee_name}` +
      " " +
      `${this.state.employee.employee_last_name}`;

    let item = [];
    // if (this.state.employee.is_active) {
    item = [
      {
        id: this.state.employee.id,
        employee_name: this.state.employee.employee_name,
        employee_last_name: this.state.employee.employee_last_name,
        employee_cedula: this.state.employee.employee_cedula,
        employee_gender: this.state.employee.employee_gender,
        employee_birth_date: this.state.employee.employee_birth_date,
        employee_phone: this.state.employee.employee_phone,
        employee_job: this.state.employee.employee_job,
        salary_bonus: this.state.employee.salary_bonus,
        employee_email: this.state.employee.employee_email,
        is_active: "Activo"
      }
    ];
    // } else {
    //   item = {
    //     id: this.state.employee.id,
    //     employee_name: this.state.employee.employee_name,
    //     employee_last_name: this.state.employee.employee_last_name,
    //     employee_cedula: this.state.employee.employee_cedula,
    //     employee_gender: this.state.employee.employee_gender,
    //     employee_birth_date: this.state.employee.employee_birth_date,
    //     employee_phone: this.state.employee.employee_phone,
    //     employee_job: this.state.employee.employee_job,
    //     salary_bonus: this.state.employee.salary_bonus,
    //     employee_email: this.state.employee.employee_email,
    //     is_active: "Inactivo"
    //   };
    // }

    return (
      <div>
        <Card title={titulo}>
          <Employees data={item} />
          <br />
        </Card>
        <h3>Edit Product</h3>
        {/* <ProductEditForm id={this.props.match.params.productId} /> */}
      </div>
    );
  }
}

export default EmployeeDetail;

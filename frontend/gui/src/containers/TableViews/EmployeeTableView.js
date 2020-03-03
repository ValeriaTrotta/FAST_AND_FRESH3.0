import React from "react";
import Employees from "../../components/Entidades/Employee";
import ProductCreateForm from "../../components/CreateForms/ProductCreateForm";
import axios from "axios";

class EmployeeTable extends React.Component {
  state = {
    employees: [],
    products2: [],
    provide: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/employee/").then(res => {
      this.setState({
        employees: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.employees.map(employee => {
      if (employee.is_active) {
        const item = {
          id: employee.id,
          employee_name: employee.employee_name,
          employee_last_name: employee.employee_last_name,
          employee_cedula: employee.employee_cedula,
          employee_gender: employee.employee_gender,
          employee_birth_date: employee.employee_birth_date,
          employee_phone: employee.employee_phone,
          employee_job: employee.employee_job,
          salary_bonus: employee.salary_bonus,
          employee_email: employee.employee_email,
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!employee.is_active) {
        const item = {
          id: employee.id,
          employee_name: employee.employee_name,
          employee_last_name: employee.employee_last_name,
          employee_cedula: employee.employee_cedula,
          employee_gender: employee.employee_gender,
          employee_birth_date: employee.employee_birth_date,
          employee_phone: employee.employee_phone,
          employee_job: employee.employee_job,
          salary_bonus: employee.salary_bonus,
          employee_email: employee.employee_email,
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });
    console.log(lista);
    return (
      <div>
        <Employees data={lista} />
        <h2>Create Product</h2>
        <ProductCreateForm requestType="post" btnText="Add" productID={null} />
      </div>
    );
  }
}

export default EmployeeTable;

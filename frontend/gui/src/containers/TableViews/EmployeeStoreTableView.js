import React from "react";
import EmployeeStores from "../../components/Entidades/EmployeeStore";
import ProductCreateForm from "../../components/CreateForms/ProductCreateForm";
import axios from "axios";

class EmployeeStoreTable extends React.Component {
  state = {
    employeestores: [],
    products2: [],
    provide: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/employeestore/").then(res => {
      this.setState({
        employeestores: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.employeestores.map(employeestore => {
      if (employeestore.is_active) {
        const item = {
          id: employeestore.id,
          employee_store: employeestore.employee_store,
          employee: employeestore.employee,
          hired_date: employeestore.hired_date,
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!employeestore.is_active) {
        const item = {
          id: employeestore.id,
          employee_store: employeestore.employee_store,
          employee: employeestore.employee,
          hired_date: employeestore.hired_date,
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });
    console.log(lista);
    return (
      <div>
        <EmployeeStores data={lista} />
        <h2>Create Product</h2>
        <ProductCreateForm requestType="post" btnText="Add" productID={null} />
      </div>
    );
  }
}

export default EmployeeStoreTable;

import React from "react";
import CashRegisters from "../../components/Entidades/CashRegister";
import axios from "axios";
import { Card } from "antd";
import CashRegisterEditForm from "../../components/EditForms/CashRegisterEditForm";

class CashRegisterDetail extends React.Component {
  state = {
    cashregister: {},
    employees: [],
    employee: {}
  };

  componentDidMount() {
    const cashregisterId = this.props.match.params.cashregisterId;
    axios
      .get(`http://127.0.0.1:8000/api/cashregister/${cashregisterId}`)
      .then(res => {
        this.setState({
          cashregister: res.data
        });
        axios
          .get(
            `http://127.0.0.1:8000/api/employee/${this.state.cashregister.employee_id}`
          )
          .then(res => {
            this.setState({
              employee: res.data
            });
          });
      });

    axios.get("http://127.0.0.1:8000/api/employee/").then(res => {
      this.setState({
        employees: res.data
      });
    });
  }
  render() {
    const lista = [];
    const titulo = "Caja " + `${this.state.cashregister.id}`;
    this.state.employees.map(employee => {
      if (
        employee.id == this.state.cashregister.employee_id &&
        employee.is_active
      ) {
        const item = {
          id: this.state.cashregister.id,
          employee_id: employee.employee_cedula,
          is_active: "Activo"
        };
        lista.push(item);
      }
    });

    console.log(lista);
    return (
      <div>
        <Card title={titulo}>
          <CashRegisters data={lista} />
        </Card>
        <br />
        <Card title={titulo}>
          <h3>Edit Product</h3>
          <CashRegisterEditForm id={this.props.match.params.cashregisterId} />
          <br />
        </Card>
      </div>
    );
  }
}

export default CashRegisterDetail;

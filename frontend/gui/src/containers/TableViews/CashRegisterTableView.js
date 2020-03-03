import React from "react";
import CashRegisters from "../../components/Entidades/CashRegister";
import CashRegisterCreateForm from "../../components/CreateForms/CashRegisterCreateForm";
import axios from "axios";

class CashRegisterTable extends React.Component {
  state = {
    cashregisters: [],
    products2: [],
    provide: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/cashregister/").then(res => {
      this.setState({
        deliveries: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.cashregisters.map(cashregister => {
      if (cashregister.is_active) {
        const item = {
          id: cashregister.id,
          employee_id: cashregister.employee_id,
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!cashregister.is_active) {
        const item = {
          id: cashregister.id,
          employee_id: cashregister.employee_id,
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });
    console.log(lista);
    return (
      <div>
        <CashRegisters data={lista} />
        <h2>Create Cash Register</h2>
        <CashRegisterCreateForm />
      </div>
    );
  }
}

export default CashRegisterTable;

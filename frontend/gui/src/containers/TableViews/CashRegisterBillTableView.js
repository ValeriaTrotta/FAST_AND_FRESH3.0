import React from "react";
import CashRegisterBills from "../../components/Entidades/CashRegisterBills";
import CashRegisterBillsCreateForm from "../../components/CreateForms/CashRegisterBillsCreateForm";
import axios from "axios";

class CashRegisterBillTable extends React.Component {
  state = {
    cashregisterbills: [],
    products2: [],
    provide: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/cashregisterbill/").then(res => {
      this.setState({
        deliveries: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.cashregisterbills.map(cashregisterbill => {
      if (cashregisterbill.is_active) {
        const item = {
          id: cashregisterbill.id,
          bill: cashregisterbill.bill,
          cash_register: cashregisterbill.employee_id,
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!cashregisterbill.is_active) {
        const item = {
          id: cashregisterbill.id,
          bill: cashregisterbill.bill,
          cash_register: cashregisterbill.employee_id,
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });
    console.log(lista);
    return (
      <div>
        <CashRegisterBills data={lista} />
        <h2>Create Product</h2>
        <CashRegisterBillsCreateForm />
      </div>
    );
  }
}

export default CashRegisterBillTable;

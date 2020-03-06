import React from "react";
import Bills from "../../components/Entidades/Bill";
import BillCreateForm from "../../components/CreateForms/BillCreateForm";
import axios from "axios";

class BillTable extends React.Component {
  state = {
    bills: [],
    products2: [],
    provide: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/bill/").then(res => {
      this.setState({
        bills: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.bills.map(bill => {
      if (bill.is_active && bill.bill_delivery) {
        const item = {
          id: bill.id,
          bill_sub_total: bill.bill_sub_total,
          bill_iva: bill.bill_iva,
          bill_date: bill.bill_date,
          bill_time: bill.bill_time,
          bill_earned_points: bill.bill_earned_points,
          bill_delivery: "Si",
          bill_pickup: "No",
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!bill.is_active && bill.bill_delivery) {
        const item = {
          id: bill.id,
          bill_sub_total: bill.bill_sub_total,
          bill_iva: bill.bill_iva,
          bill_date: bill.bill_date,
          bill_time: bill.bill_time,
          bill_earned_points: bill.bill_earned_points,
          bill_delivery: "Si",
          bill_pickup: "No",
          is_active: "Inactivo"
        };
        lista.push(item);
      }
      if (!bill.is_active && bill.bill_pickup) {
        const item = {
          id: bill.id,
          bill_sub_total: bill.bill_sub_total,
          bill_iva: bill.bill_iva,
          bill_date: bill.bill_date,
          bill_time: bill.bill_time,
          bill_earned_points: bill.bill_earned_points,
          bill_delivery: "No",
          bill_pickup: "Si",
          is_active: "Inactivo"
        };
        lista.push(item);
      }
      if (bill.is_active && bill.bill_pickup) {
        const item = {
          id: bill.id,
          bill_sub_total: bill.bill_sub_total,
          bill_iva: bill.bill_iva,
          bill_date: bill.bill_date,
          bill_time: bill.bill_time,
          bill_earned_points: bill.bill_earned_points,
          bill_delivery: "No",
          bill_pickup: "Si",
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (bill.is_active && !bill.bill_pickup && !bill.bill_delivery) {
        const item = {
          id: bill.id,
          bill_sub_total: bill.bill_sub_total,
          bill_iva: bill.bill_iva,
          bill_date: bill.bill_date,
          bill_time: bill.bill_time,
          bill_earned_points: bill.bill_earned_points,
          bill_delivery: "No",
          bill_pickup: "No",
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!bill.is_active && !bill.bill_pickup && !bill.bill_delivery) {
        const item = {
          id: bill.id,
          bill_sub_total: bill.bill_sub_total,
          bill_iva: bill.bill_iva,
          bill_date: bill.bill_date,
          bill_time: bill.bill_time,
          bill_earned_points: bill.bill_earned_points,
          bill_delivery: "No",
          bill_pickup: "No",
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });
    console.log(lista);
    return (
      <div>
        <Bills data={lista} />
        <h2>Compra</h2>
        <BillCreateForm />
      </div>
    );
  }
}

export default BillTable;

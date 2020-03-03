import React from "react";
import Bills from "../../components/Entidades/Bill";
import ProductCreateForm from "../../components/CreateForms/ProductCreateForm";
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
      if (bill.is_active) {
        const item = {
          id: bill.id,
          bill_sub_total: bill.bill_sub_total,
          bill_iva: bill.bill_iva,
          bill_date: bill.bill_date,
          bill_time: bill.bill_time,
          bill_earned_points: bill.bill_earned_points,
          bill_delivery: bill.bill_delivery,
          bill_pickup: bill.bill_pickup,
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!bill.is_active) {
        const item = {
          id: bill.id,
          bill_sub_total: bill.bill_sub_total,
          bill_iva: bill.bill_iva,
          bill_date: bill.bill_date,
          bill_time: bill.bill_time,
          bill_earned_points: bill.bill_earned_points,
          bill_delivery: bill.bill_delivery,
          bill_pickup: bill.bill_pickup,
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });
    console.log(lista);
    return (
      <div>
        <Bills data={lista} />
        <h2>Create Product</h2>
        <ProductCreateForm requestType="post" btnText="Add" productID={null} />
      </div>
    );
  }
}

export default BillTable;

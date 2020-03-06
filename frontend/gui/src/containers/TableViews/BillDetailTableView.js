import React from "react";
import BillDetails from "../../components/Entidades/BillDetail";
import BillDetailsCreateForm from "../../components/CreateForms/BillDetailsCreateForm";
import axios from "axios";

class BillDetailTable extends React.Component {
  state = {
    billdetails: [],
    products2: [],
    provide: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/billdetail/").then(res => {
      this.setState({
        billdetails: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.billdetails.map(billdetail => {
      if (billdetail.is_active) {
        const item = {
          id: billdetail.id,
          bill_id: billdetail.bill_id,
          product_batch_id: billdetail.product_batch_id,
          product_quantity: billdetail.product_quantity,
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!billdetail.is_active) {
        const item = {
          id: billdetail.id,
          bill_id: billdetail.bill_id,
          product_batch_id: billdetail.product_batch_id,
          product_quantity: billdetail.product_quantity,
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });
    console.log(lista);
    return (
      <div>
        <BillDetails data={lista} />
      </div>
    );
  }
}

export default BillDetailTable;

import React from "react";
import Payments from "../../components/Entidades/Payment";
import PaymentCreateForm from "../../components/CreateForms/PaymentCreateForm";
import axios from "axios";

class PaymentTable extends React.Component {
  state = {
    payments: [],
    products2: [],
    provide: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/payment/").then(res => {
      this.setState({
        payments: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.payments.map(payment => {
      if (payment.is_active) {
        const item = {
          id: payment.id,
          payment_amount: payment.payment_amount,
          payment_method: payment.payment_method,
          payment_method_instrument: payment.payment_method_instrument,
          bill: payment.bill,
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!payment.is_active) {
        const item = {
          id: payment.id,
          payment_amount: payment.payment_amount,
          payment_method: payment.payment_method,
          payment_method_instrument: payment.payment_method_instrument,
          bill: payment.bill,
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });
    console.log(lista);
    return (
      <div>
        <Payments data={lista} />
        <h2>Create Payment</h2>
        <PaymentCreateForm />
      </div>
    );
  }
}

export default PaymentTable;

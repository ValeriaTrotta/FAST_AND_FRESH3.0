import React from "react";
import PaymentMethods from "../../components/Entidades/PaymentMethod";
import ProductCreateForm from "../../components/CreateForms/ProductCreateForm";
import axios from "axios";

class PaymentMethodTable extends React.Component {
  state = {
    paymentmethods: [],
    products2: [],
    provide: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/paymentmethod/").then(res => {
      this.setState({
        paymentmethods: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.paymentmethods.map(paymentmethod => {
      if (paymentmethod.is_active) {
        const item = {
          id: paymentmethod.id,
          payment_method: paymentmethod.payment_method,
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!paymentmethod.is_active) {
        const item = {
          id: paymentmethod.id,
          payment_method: paymentmethod.payment_method,
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });
    console.log(lista);
    return (
      <div>
        <PaymentMethods data={lista} />
        <h2>Create Product</h2>
        <ProductCreateForm requestType="post" btnText="Add" productID={null} />
      </div>
    );
  }
}

export default PaymentMethodTable;

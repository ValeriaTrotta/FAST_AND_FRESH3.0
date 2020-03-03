import React from "react";
import Deliveries from "../../components/Entidades/Delivery";
import DeliveryCreateForm from "../../components/CreateForms/DeliveryCreateForm";
import axios from "axios";

class DeliveryTable extends React.Component {
  state = {
    deliveries: [],
    products2: [],
    provide: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/delivery/").then(res => {
      this.setState({
        deliveries: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.deliveries.map(delivery => {
      if (delivery.is_active) {
        const item = {
          id: delivery.id,
          delivery_price: delivery.delivery_price,
          employee: delivery.employee,
          bill_id: delivery.bill_id,
          delivery_status: delivery.delivery_status,
          zona: delivery.zona,
          address: delivery.address,
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!delivery.is_active) {
        const item = {
          id: delivery.id,
          delivery_price: delivery.delivery_price,
          employee: delivery.employee,
          bill_id: delivery.bill_id,
          delivery_status: delivery.delivery_status,
          zona: delivery.zona,
          address: delivery.address,
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });
    console.log(lista);
    return (
      <div>
        <Deliveries data={lista} />
        <h2>Create Delivery</h2>
        <DeliveryCreateForm />
      </div>
    );
  }
}

export default DeliveryTable;

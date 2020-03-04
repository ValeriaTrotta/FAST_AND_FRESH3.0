import React from "react";
import PickUps from "../../components/Entidades/PickUp";
import PickUpCreateForm from "../../components/CreateForms/PickUpCreateForm";
import axios from "axios";

class PickUpTable extends React.Component {
  state = {
    pickups: [],
    products2: [],
    provide: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/pickup/").then(res => {
      this.setState({
        pickups: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.pickups.map(pickup => {
      if (pickup.is_active) {
        const item = {
          id: pickup.id,
          pickup_status: pickup.pickup_status,
          bill_id: pickup.bill_id,
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!pickup.is_active) {
        const item = {
          id: pickup.id,
          pickup_status: pickup.pickup_status,
          bill_id: pickup.bill_id,
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });
    console.log(lista);
    return (
      <div>
        <PickUps data={lista} />
        <h2>Create Product</h2>
        <PickUpCreateForm />
      </div>
    );
  }
}

export default PickUpTable;

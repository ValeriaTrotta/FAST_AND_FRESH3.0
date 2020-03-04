import React from "react";
import Batches from "../../components/Entidades/Batch";
import BatchCreateForm from "../../components/CreateForms/BatchCreateForm";
import axios from "axios";

class BatchTable extends React.Component {
  state = {
    batches: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/batch/").then(res => {
      this.setState({
        batches: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.batches.map(batch => {
      if (batch.is_active) {
        const item = {
          id: batch.id,
          product_name: batch.product_name,
          units: batch.units,
          elaboration_date: batch.elaboration_date,
          expiration_date: batch.expiration_date,
          price_dolars_u: batch.price_dolars_u,
          units_sold: batch.units_sold,
          units_lost: batch.units_lost,
          discount: batch.discount,
          price_points: batch.price_points,
          store: batch.store,
          is_active: "Activo"
        };
        lista.push(item);
      }
      // if (!batch.is_active) {
      //   const item = {
      //     id: batch.id,
      //     product_name: batch.product_name,
      //     units: batch.units,
      //     elaboration_date: batch.elaboration_date,
      //     expiration_date: batch.expiration_date,
      //     price_dolars_u: batch.price_dolars_u,
      //     units_sold: batch.units_sold,
      //     units_lost: batch.units_lost,
      //     discount: batch.discount,
      //     price_points: batch.price_points,
      //     store: batch.store,
      //     is_active: "Inactivo"
      //   };
      //   lista.push(item);
      // }
    });
    return (
      <div>
        <Batches data={lista} />
        <h2>Create Batch</h2>
        <BatchCreateForm />
      </div>
    );
  }
}

export default BatchTable;

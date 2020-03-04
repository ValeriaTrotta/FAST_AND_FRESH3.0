import React from "react";
import StoreBosses from "../../components/Entidades/StoreBoss";
import StoreBossCreateForm from "../../components/CreateForms/StoreBossCreateForm";
import axios from "axios";

class StoreBossTable extends React.Component {
  state = {
    storebosses: [],
    products2: [],
    provide: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/storeboss/").then(res => {
      this.setState({
        storebosses: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.storebosses.map(storeboss => {
      if (storeboss.is_active) {
        const item = {
          id: storeboss.id,
          store: storeboss.store,
          boss: storeboss.boss,
          start_date: storeboss.start_date,
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!storeboss.is_active) {
        const item = {
          id: storeboss.id,
          store: storeboss.store,
          boss: storeboss.boss,
          start_date: storeboss.start_date,
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });
    console.log(lista);
    return (
      <div>
        <StoreBosses data={lista} />
        <h2>Asign Store Boss</h2>
        <StoreBossCreateForm />
      </div>
    );
  }
}

export default StoreBossTable;

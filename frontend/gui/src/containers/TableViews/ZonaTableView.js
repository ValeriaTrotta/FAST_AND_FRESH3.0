import React from "react";
import Zonas from "../../components/Entidades/Zona";
import ZonaCreateForm from "../../components/CreateForms/ZonaCreateForm";
import axios from "axios";

class ZonaTable extends React.Component {
  state = {
    zonas: [],
    products2: [],
    provide: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/zona/").then(res => {
      this.setState({
        zonas: res.data
      });
      console.log(res.data);
    });
  }
  render() {
    const lista = [];
    this.state.zonas.map(zona => {
      if (zona.is_active) {
        const item = {
          id: zona.id,
          zona_name: zona.zona_name,
          city: zona.city,
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!zona.is_active) {
        const item = {
          id: zona.id,
          zona_name: zona.zona_name,
          city: zona.city,
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });
    console.log("hola", lista);
    return (
      <div>
        <Zonas data={lista} />
        <h2>Create Zona</h2>
        <ZonaCreateForm />
      </div>
    );
  }
}

export default ZonaTable;

import React from "react";
import IVAs from "../../components/Entidades/IVA";
import IVACreateForm from "../../components/CreateForms/IVACreateForm";
import axios from "axios";

class IVATable extends React.Component {
  state = {
    ivas: [],
    products2: [],
    provide: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/iva/").then(res => {
      this.setState({
        ivas: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.ivas.map(iva => {
      if (iva.is_active) {
        const item = {
          id: iva.id,
          iva_porcentaje: iva.iva_porcentaje,
          iva_date: iva.iva_date,
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!iva.is_active) {
        const item = {
          id: iva.id,
          iva_porcentaje: iva.iva_porcentaje,
          iva_date: iva.iva_date,
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });
    console.log(lista);
    return (
      <div>
        <IVAs data={lista} />
        <h2>Create IVA</h2>
        <IVACreateForm />
      </div>
    );
  }
}

export default IVATable;

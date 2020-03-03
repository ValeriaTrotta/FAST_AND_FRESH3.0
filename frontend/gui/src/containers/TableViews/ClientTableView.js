import React from "react";
import Clients from "../../components/Entidades/Client";
import ProductCreateForm from "../../components/CreateForms/ProductCreateForm";
import axios from "axios";

class ClientTable extends React.Component {
  state = {
    clients: [],
    products2: [],
    provide: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/client/").then(res => {
      this.setState({
        clients: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.clients.map(client => {
      if (client.is_active) {
        const item = {
          id: client.id,
          client_name: client.client_name,
          client_last_name: client.client_last_name,
          client_cedula: client.client_cedula,
          client_phone: client.client_phone,
          client_gender: client.client_gender,
          zona: client.zona,
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!client.is_active) {
        const item = {
          id: client.id,
          client_name: client.client_name,
          client_last_name: client.client_last_name,
          client_cedula: client.client_cedula,
          client_phone: client.client_phone,
          client_gender: client.client_gender,
          zona: client.zona,
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });

    console.log(lista);
    return (
      <div>
        <Clients data={lista} />
        <h2>Create Product</h2>
        {/* <ProductCreateForm requestType="post" btnText="Add" productID={null} /> */}
      </div>
    );
  }
}

export default ClientTable;

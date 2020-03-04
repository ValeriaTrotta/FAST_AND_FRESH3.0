import React from "react";
import Clients from "../../components/Entidades/Client";
import axios from "axios";
import { Card } from "antd";
import ClientEditForm from "../../components/EditForms/ClientEditForm";

class ClientDetail extends React.Component {
  state = {
    client: {},
    zonas: [],
    zona: {}
  };

  componentDidMount() {
    const clientId = this.props.match.params.clientId;
    console.log(clientId);
    axios.get(`http://127.0.0.1:8000/api/client/${clientId}`).then(res => {
      this.setState({
        client: res.data
      });

      axios
        .get(`http://127.0.0.1:8000/api/zona/${this.state.client.zona}`)
        .then(res => {
          this.setState({
            zona: res.data
          });
        });
    });

    axios.get("http://127.0.0.1:8000/api/zona/").then(res => {
      this.setState({
        zonas: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.zonas.map(zona => {
      if (zona.id == this.state.client.zona && zona.is_active) {
        const item = {
          id: this.state.client.id,
          client_name: this.state.client.client_name,
          client_last_name: this.state.client.client_last_name,
          client_cedula: this.state.client.client_cedula,
          client_phone: this.state.client.client_phone,
          client_gender: this.state.client.client_gender,
          zona: zona.zona_name,
          is_active: "Activo"
        };
        lista.push(item);
      }
    });
    console.log(this.props.match.params.productId);
    return (
      <div>
        <Card title={this.state.client.client_cedula}>
          <Clients data={lista} />
          <br />
        </Card>

        <h3>Edit Client</h3>
        <ClientEditForm id={this.props.match.params.clientId} />
      </div>
    );
  }
}

export default ClientDetail;

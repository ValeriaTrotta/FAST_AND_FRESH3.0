import React from "react";
import BillDetails from "../../components/Entidades/BillDetail";
import Clients from "../../components/Entidades/Client";
import axios from "axios";
import { Card } from "antd";
import ClientEditForm from "../../components/EditForms/ClientEditForm";

class BillDetail extends React.Component {
  state = {
    bill: {},
    client: {},
    billdetails: [],
    zonas: []
  };

  componentDidMount() {
    const billId = this.props.match.params.billId;

    axios.get(`http://127.0.0.1:8000/api/bill/${billId}`).then(res => {
      this.setState({
        bill: res.data
      });

      axios
        .get(`http://127.0.0.1:8000/api/client/${this.state.bill.client_id}`)
        .then(res => {
          this.setState({
            client: res.data
          });
        });
    });

    axios.get("http://127.0.0.1:8000/api/zona/").then(res => {
      this.setState({
        zonas: res.data
      });
    });
    axios.get("http://127.0.0.1:8000/api/billdetails/").then(res => {
      this.setState({
        billdetails: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.billdetails.map(detail => {
      if (detail.bill_id == this.state.bill.id && detail.is_active) {
        const item = {
          id: detail.id,
          bill_id: detail.bill_id,
          product_batch_id: detail.product_batch_id,
          product_quantity: detail.product_quantity,
          is_active: "Activo"
        };
        lista.push(item);
      }
    });
    const lista2 = [];
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
        lista2.push(item);
      }
    });
    console.log(this.props.match.params.productId);
    return (
      <div>
        <Card title={this.state.bill.id}>
          <Clients data={lista2} />
          <BillDetails data={lista} />
          <br />
        </Card>

        <h3>Edit Bill</h3>
        {/* <ClientEditForm id={this.props.match.params.billId} /> */}
      </div>
    );
  }
}

export default BillDetail;

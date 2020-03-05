import React from "react";
import PickUps from "../../components/Entidades/PickUp";
import axios from "axios";
import { Card } from "antd";


class PickUpDetail extends React.Component {
  state = {
    pickup: {},
    bill:[]
  };

  componentDidMount() {
    const pickupId = this.props.match.params.pickupId;
    axios.get(`http://127.0.0.1:8000/api/pickup/${pickupId}`).then(res => {
      this.setState({
        pickup: res.data
      });
      axios
        .get(`http://127.0.0.1:8000/api/bill/${this.state.pickup.bill_id}`)
        .then(res => {
          this.setState({
            bill: res.data
          });
        });
    });
  }
  
  render() {
    const titulo = "PickUp" + `${this.state.pickup.id}`;
    const lista = [
            {
              id: this.state.pickup.id,
              pickup_status: this.state.pickup.pickup_status,
              bill_id: this.state.pickup.bill_id
            }
        ];

    return (
      <div>
        <Card title={titulo}>
          <PickUps data={lista} />
          <br />
        </Card>
        <h3>Edit Member</h3>
  
      </div>
    );
  }
}

export default PickUpDetail;

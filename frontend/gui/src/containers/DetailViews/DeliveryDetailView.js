import React from "react";
import Deliveries from "../../components/Entidades/Delivery";
import axios from "axios";
import { Card } from "antd";
import MemberEditForm from "../../components/EditForms/MemberEditForm";

class DeliveryDetail extends React.Component {
  state = {
    delivery: {},
    employee: [],
    bill:[],
    zona:[]
  };

  componentDidMount() {
    const deliveryId = this.props.match.params.deliveryId;
    axios.get(`http://127.0.0.1:8000/api/delivery/${deliveryId}`).then(res => {
      this.setState({
        delivery: res.data
      });

      axios
        .get(`http://127.0.0.1:8000/api/employee/${this.state.delivery.employee}`)
        .then(res => {
          this.setState({
            employee: res.data
          });
          axios
        .get(`http://127.0.0.1:8000/api/bill/${this.state.delivery.bill_id}`)
        .then(res => {
          this.setState({
            bill: res.data
                });
                axios
        .get(`http://127.0.0.1:8000/api/zona/${this.state.delivery.zona}`)
        .then(res => {
          this.setState({
            zona: res.data
                    });
                });
            });
        });
    });
  }
  
  render() {
    const titulo = "Delivery" + `${this.state.delivery.id}`;
    let lista = []
    if(this.state.delivery.is_active){
        lista = [
            {
              id: this.state.delivery.id,
              delivery_price: this.state.delivery.delivery_price,
              employee: this.state.employee.employee_name,
              bill_id: this.state.delivery.bill_id,
              delivery_status: this.state.delivery.delivery_status,
              zona: this.state.zona.zona_name,
              address: this.state.delivery.address,
              bill_time: this.state.delivery.bill_time,
              is_active: "Activo"
            }
        ];
    } else{
        lista = [
            {
              id: this.state.delivery.id,
              delivery_price: this.state.delivery.delivery_price,
              employee: this.state.employee.employee_name,
              bill_id: this.state.bill.bill_sub_total,
              delivery_status: this.state.delivery.delivery_status,
              zona: this.state.zona.zona_name,
              address: this.state.delivery.address,
              bill_time: this.state.delivery.bill_time,
              is_active: "Inactivo"
            }
        ];
    }

    return (
      <div>
        <Card title={titulo}>
          <Deliveries data={lista} />
          <br />
        </Card>
        <h3>Edit Member</h3>
        <MemberEditForm id={this.props.match.params.memberId} />
      </div>
    );
  }
}

export default DeliveryDetail;

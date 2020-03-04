import React from "react";
import ClientMembers from "../../components/Conexion/ClienteMiembro";
import axios from "axios";
import { Card } from "antd";
import MemberEditForm from "../../components/EditForms/MemberEditForm";

class ZonaDetail extends React.Component {
  state = {
    zona: {},
    city: []
  };

  componentDidMount() {
    const zonaId = this.props.match.params.memberId;
    axios.get(`http://127.0.0.1:8000/api/member/${memberId}`).then(res => {
      this.setState({
        member: res.data
      });
      axios
        .get(`http://127.0.0.1:8000/api/client/${this.state.member.client}`)
        .then(res => {
          this.setState({
            client: res.data
          });
        });
    });

    axios.get("http://127.0.0.1:8000/api/batch/").then(res => {
      this.setState({
        batches: res.data
      });
    });
  }
  render() {
    const titulo = "Member " + `${this.state.member.id}`;
    const lista = [
      {
        id: this.state.member.id,
        member_points: this.state.member.member_points,
        member_email: this.state.member.member_email,
        member_start_date: this.state.member.member_start_date,
        member_pay_date: this.state.member.member_pay_date,
        client_name: this.state.client.client_name,
        client_last_name: this.state.client.client_last_name,
        client_cedula: this.state.client.client_cedula,
        is_active: "Activo"
      }
    ];

    return (
      <div>
        <Card title={titulo}>
          <ClientMembers data={lista} />
          <br />
        </Card>
        <h3>Edit Member</h3>
        <MemberEditForm id={this.props.match.params.memberId} />
      </div>
    );
  }
}

export default MemberDetail;

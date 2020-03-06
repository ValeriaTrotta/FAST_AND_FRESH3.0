import React from "react";
import States from "../../components/Entidades/State";
import axios from "axios";
import { Card } from "antd";
import MemberEditForm from "../../components/EditForms/MemberEditForm";

class StateDetail extends React.Component {
  state = {
    state: {}
  };

  componentDidMount() {
    const stateId = this.props.match.params.stateId;
    axios.get(`http://127.0.0.1:8000/api/state/${stateId}`).then(res => {
      this.setState({
        state: res.data
      });
    });
  }
  
  render() {
    const titulo = "State" + `${this.state.state.id}`;
    let lista = []
    if(this.state.state.is_active){
        lista = [
            {
              id: this.state.state.id,
              state_name: this.state.state.state_name,
              is_active: "Activo"
            }
        ];
    } else{
        lista = [
            {
              id: this.state.state.id,
              state_name: this.state.state.state_name,
              is_active: "Inactivo"
            }
        ];
    }

    return (
      <div>
        <Card title={titulo}>
          <States data={lista} />
          <br />
        </Card>
        <h3>Edit Member</h3>
        <MemberEditForm id={this.props.match.params.memberId} />
      </div>
    );
  }
}

export default StateDetail;

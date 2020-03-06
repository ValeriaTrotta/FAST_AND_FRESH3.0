import React from "react";
import StoreBosses from "../../components/Entidades/StoreBoss";
import axios from "axios";
import { Card } from "antd";
import MemberEditForm from "../../components/EditForms/MemberEditForm";

class StoreBossDetail extends React.Component {
  state = {
    storeBoss: {},
    store: [],
    employee:[]
  };

  componentDidMount() {
    const storeBossId = this.props.match.params.storebossId;
    axios.get(`http://127.0.0.1:8000/api/storeboss/${storeBossId}`).then(res => {
      this.setState({
        storeBoss: res.data
      });
      axios
        .get(`http://127.0.0.1:8000/api/store/${this.state.storeBoss.store}`)
        .then(res => {
          this.setState({
            store: res.data
          });
          axios
        .get(`http://127.0.0.1:8000/api/employee/${this.state.storeBoss.boss}`)
        .then(res => {
          this.setState({
            employee: res.data
          });
        });
      });
    });
  }
  
  render() {
    const titulo = "Store Boss" + `${this.state.storeBoss.id}`;
    let lista = []
    if(this.state.storeBoss.is_active){
        lista = [
            {
              id: this.state.storeBoss.id,
              store: this.state.store.store_name,
              boss: this.state.employee.employee_name, 
              start_date: this.state.storeBoss.start_date,
              is_active: "Activo"
            }
        ];
    } else{
        lista = [
            {
              id: this.state.storeBoss.id,
              store: this.state.store.store_name,
              boss: this.state.employee.employee_name,
              start_date: this.state.storeBoss.start_date,
              is_active: "Inactivo"
            }
        ];
    }
console.log(lista)
    return (
      <div>
        <Card title={titulo}>
          <StoreBosses data={lista} />
          <br />
        </Card>
        <h3>Edit Member</h3>
        <MemberEditForm id={this.props.match.params.memberId} />
      </div>
    );
  }
}

export default StoreBossDetail;

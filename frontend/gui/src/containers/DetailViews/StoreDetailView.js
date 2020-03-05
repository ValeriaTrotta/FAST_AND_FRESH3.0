import React from "react";
import Stores from "../../components/Entidades/Store";
import axios from "axios";
import { Card } from "antd";
import MemberEditForm from "../../components/EditForms/MemberEditForm";

class StoreDetail extends React.Component {
  state = {
    store:{},
    zona:{}
  };

  componentDidMount() {
    const storeId = this.props.match.params.storeId;
    axios.get(`http://127.0.0.1:8000/api/store/${storeId}`).then(res => {
      this.setState({
        store: res.data
      });

      axios
        .get(`http://127.0.0.1:8000/api/zona/${this.state.store.zona}`)
        .then(res => {
          this.setState({
            zona: res.data
          });
        });
    });
  }
  
  render() {
    const titulo = "Store" + `${this.state.store.id}`;
    let lista = []
    if(this.state.store.is_active){
        lista = [
            {
              id: this.state.store.id,
              store_name: this.state.store.store_name,
              zona: this.state.zona.zona_name,
              open_time: this.state.store.open_time,
              closing_time: this.state.store.closing_time,
              store_phone: this.state.store.store_phone,
              is_active: "Activo"
            }
        ];
    } else{
        lista = [
            {
              id: this.state.store.id,
              store_name: this.state.store.store_name,
              zona: this.state.zona.zona_name,
              open_time: this.state.store.open_time,
              closing_time: this.state.store.closing_time,
              store_phone: this.state.store.store_phone,
              is_active: "Activo"
            }
        ];
    }

    return (
      <div>
        <Card title={titulo}>
          <Stores data={lista} />
          <br />
        </Card>
        <h3>Edit Member</h3>
        <MemberEditForm id={this.props.match.params.memberId} />
      </div>
    );
  }
}

export default StoreDetail;

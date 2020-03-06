import React from "react";
import Zonas from "../../components/Entidades/Zona";
import axios from "axios";
import { Card } from "antd";
import MemberEditForm from "../../components/EditForms/MemberEditForm";

class ZonaDetail extends React.Component {
  state = {
    zona: {},
    city: {}
  };

  componentDidMount() {
    const zonaId = this.props.match.params.zonaId;
    axios.get(`http://127.0.0.1:8000/api/zona/${zonaId}`).then(res => {
      this.setState({
        zona: res.data
      });

      axios
        .get(`http://127.0.0.1:8000/api/city/${this.state.zona.city}`)
        .then(res => {
          this.setState({
            city: res.data
          });
        });
    });
  }

  render() {
    const titulo = "Zona" + `${this.state.zona.id}`;
    let lista = []
    if(this.state.zona.is_active){
        lista = [
            {
              id: this.state.zona.id,
              zona_name: this.state.zona.zona_name,
              city: this.state.city.city_name,
              is_active: "Activo"
            }
        ];
    } else{
        lista = [
            {
              id: this.state.zona.id,
              zona_name: this.state.zona.zona_name,
              city: this.state.city.city_name,
              is_active: "Inactivo"
            }
        ];
    }

    return (
      <div>
        <Card title={titulo}>
          <Zonas data={lista} />
          <br />
        </Card>
        <h3>Edit Member</h3>
        <MemberEditForm id={this.props.match.params.memberId} />
      </div>
    );
  }
}

export default ZonaDetail;

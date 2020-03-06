import React from "react";
import Cities from "../../components/Entidades/City";
import axios from "axios";
import { Card } from "antd";
import MemberEditForm from "../../components/EditForms/MemberEditForm";

class CityDetail extends React.Component {
  state = {
    city: {},
    state: {}
  };

  componentDidMount() {
    const cityId = this.props.match.params.cityId;
    axios.get(`http://127.0.0.1:8000/api/city/${cityId}`).then(res => {
      this.setState({
        city: res.data
      });

      axios
        .get(`http://127.0.0.1:8000/api/state/${this.state.city.state}`)
        .then(res => {
          this.setState({
            state: res.data
          });
        });
    });
  }
  
  render() {
    const titulo = "City" + `${this.state.city.id}`;
    let lista = []
    if(this.state.city.is_active){
        lista = [
            {
              id: this.state.city.id,
              city_name: this.state.city.city_name,
              state: this.state.state.state_name,
              is_active: "Activo"
            }
        ];
    } else{
        lista = [
            {
                id: this.state.city.id,
                city_name: this.state.city.city_name,
                state: this.state.state.state_name,
                is_active: "Inactivo"
            }
        ];
    }

    return (
      <div>
        <Card title={titulo}>
          <Cities data={lista} />
          <br />
        </Card>
        <h3>Edit Member</h3>
        <MemberEditForm id={this.props.match.params.memberId} />
      </div>
    );
  }
}

export default CityDetail;

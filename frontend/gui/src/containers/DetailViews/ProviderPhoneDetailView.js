import React from "react";
import ProviderPhones from "../../components/Entidades/ProviderPhone";
import axios from "axios";
import { Card } from "antd";

class ProviderDetail extends React.Component {
  state = {
    providerphone: {},
    provider: {}
  };

  componentDidMount() {
    const providerphoneId = this.props.match.params.providerphoneId;
    axios.get(`http://127.0.0.1:8000/api/providerphone/${providerphoneId}`).then(res => {
      this.setState({
        providerphone: res.data
      });
      axios.get(`http://127.0.0.1:8000/api/provider/${this.state.providerphone.provider}`).then(res => {
      this.setState({
        provider: res.data
            });
        });
    });
  }
  
  render() {
    const titulo = "Provider Phone" + `${this.state.providerphone.id}`;
    let lista = []
    if(this.state.providerphone.is_active){
        lista = [
            {
              id: this.state.provider.id,
              provider: this.state.provider.provider_name,
              provider_phone_number: this.state.providerphone.provider_phone_number,
              is_active: "Activo"
            }
        ];
    } else{
        lista = [
            {
            id: this.state.provider.id,
              provider: this.state.provider.provider_name,
              provider_phone_number: this.state.providerphone.provider_phone_number,
              is_active: "Activo"
            }
        ];
    }

    return (
      <div>
        <Card title={titulo}>
          <ProviderPhones data={lista} />
          <br />
        </Card>
        <h3>Edit Member</h3>
      </div>
    );
  }
}

export default ProviderDetail;

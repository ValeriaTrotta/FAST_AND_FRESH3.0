import React from "react";
import Providers from "../../components/Entidades/Provider";
import axios from "axios";
import { Card } from "antd";

class ProviderDetail extends React.Component {
  state = {
    provider: {}
  };

  componentDidMount() {
    const providerId = this.props.match.params.providerId;
    axios.get(`http://127.0.0.1:8000/api/provider/${providerId}`).then(res => {
      this.setState({
        provider: res.data
      });
    });
  }
  
  render() {
    const titulo = "Provider" + `${this.state.provider.id}`;
    let lista = []
    if(this.state.provider.is_active){
        lista = [
            {
              id: this.state.provider.id,
              provider_name: this.state.provider.provider_name,
              provider_email: this.state.provider.provider_email,
              provider_address: this.state.provider.provider_address,
              is_active: "Activo"
            }
        ];
    } else{
        lista = [
            {
                id: this.state.provider.id,
                provider_name: this.state.provider.provider_name,
                provider_email: this.state.provider.provider_email,
                provider_address: this.state.provider.provider_address,
                is_active: "Activo"
            }
        ];
    }

    return (
      <div>
        <Card title={titulo}>
          <Providers data={lista} />
          <br />
        </Card>
        <h3>Edit Member</h3>
      </div>
    );
  }
}

export default ProviderDetail;

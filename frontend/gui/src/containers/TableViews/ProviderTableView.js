import React from "react";
import Providers from "../../components/Entidades/Provider";
import ProviderCreateForm from "../../components/CreateForms/ProviderCreateForm";
import axios from "axios";

class ProviderTable extends React.Component {
  state = {
    providers: [],
    products2: [],
    provide: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/provider/").then(res => {
      this.setState({
        providers: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.providers.map(provider => {
      if (provider.is_active) {
        const item = {
          id: provider.id,
          provider_name: provider.provider_name,
          provider_email: provider.provider_email,
          provider_address: provider.provider_address,
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!provider.is_active) {
        const item = {
          id: provider.id,
          provider_name: provider.provider_name,
          provider_email: provider.provider_email,
          provider_address: provider.provider_address,
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });
    console.log(lista);
    return (
      <div>
        <Providers data={lista} />
        <h2>Add Provider</h2>
        <ProviderCreateForm />
      </div>
    );
  }
}

export default ProviderTable;

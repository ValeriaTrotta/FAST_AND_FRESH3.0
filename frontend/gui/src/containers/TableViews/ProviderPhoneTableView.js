import React from "react";
import ProviderPhones from "../../components/Entidades/ProviderPhone";
import ProviderPhoneCreateForm from "../../components/CreateForms/ProviderPhoneCreateForm";
import axios from "axios";

class ProviderPhoneTable extends React.Component {
  state = {
    providerphones: [],
    products2: [],
    provide: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/providerphone/").then(res => {
      this.setState({
        providerphones: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.providerphones.map(providerphone => {
      if (providerphone.is_active) {
        const item = {
          id: providerphone.id,
          provider: providerphone.provider,
          provider_phone_number: providerphone.provider_phone_number,
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!providerphone.is_active) {
        const item = {
          id: providerphone.id,
          provider: providerphone.provider,
          provider_phone_number: providerphone.provider_phone_number,
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });
    console.log(lista);
    return (
      <div>
        <ProviderPhones data={lista} />
        <h2>Create Provider Phone</h2>
        <ProviderPhoneCreateForm />
      </div>
    );
  }
}

export default ProviderPhoneTable;

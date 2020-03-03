import React from "react";
import Currencies from "../../components/Entidades/Currency";
import CurrencyCreateForm from "../../components/CreateForms/CurrencyCreateForm";
import axios from "axios";

class CurrencyTable extends React.Component {
  state = {
    currencies: [],
    products2: [],
    provide: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/currency/").then(res => {
      this.setState({
        currencies: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.currencies.map(currency => {
      if (currency.is_active) {
        const item = {
          id: currency.id,
          delivery_price: currency.currency_name,
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!currency.is_active) {
        const item = {
          id: currency.id,
          delivery_price: currency.currency_name,
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });
    console.log(lista);
    return (
      <div>
        <Currencies data={lista} />
        <h2>Create Product</h2>
        <CurrencyCreateForm />
      </div>
    );
  }
}

export default CurrencyTable;

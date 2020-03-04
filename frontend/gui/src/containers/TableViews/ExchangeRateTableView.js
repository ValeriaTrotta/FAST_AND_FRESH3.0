import React from "react";
import ExchangeRates from "../../components/Entidades/ExchangeRate";
import ExchangeRateCreateForm from "../../components/CreateForms/ExchangeRateCreateForm";
import axios from "axios";

class ExchangeRateTable extends React.Component {
  state = {
    exchangerates: [],
    products2: [],
    provide: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/exchangerate/").then(res => {
      this.setState({
        exchangerates: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.exchangerates.map(exchangerate => {
      if (exchangerate.is_active) {
        const item = {
          id: exchangerate.id,
          origin_currency: exchangerate.origin_currency,
          exchange_rate: exchangerate.exchange_rate,
          exchange_rate_date: exchangerate.exchange_rate_date,
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!exchangerate.is_active) {
        const item = {
          id: exchangerate.id,
          origin_currency: exchangerate.origin_currency,
          exchange_rate: exchangerate.exchange_rate,
          exchange_rate_date: exchangerate.exchange_rate_date,
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });
    console.log(lista);
    return (
      <div>
        <ExchangeRates data={lista} />
        <h2>Create Product</h2>
        <ExchangeRateCreateForm />
      </div>
    );
  }
}

export default ExchangeRateTable;

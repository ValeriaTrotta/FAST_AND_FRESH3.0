import React from "react";
import ExchangeRates from "../../components/Entidades/ExchangeRate";
import axios from "axios";
import { Card } from "antd";
import MemberEditForm from "../../components/EditForms/MemberEditForm";

class ExchangeRateDetail extends React.Component {
  state = {
    exchangerate: {},
    currency: []
  };

  componentDidMount() {
    const exchangerateId = this.props.match.params.exchangerateId;
    axios.get(`http://127.0.0.1:8000/api/exchangerate/${exchangerateId}`).then(res => {
      this.setState({
        exchangerate: res.data
      });
      axios
        .get(`http://127.0.0.1:8000/api/currency/${this.state.exchangerate.origin_currency}`)
        .then(res => {
          this.setState({
            currency: res.data
          });
        });
    });
  }
  
  render() {
    const titulo = "Exchange Rate" + `${this.state.exchangerate.id}`;
    let lista = []
    if(this.state.exchangerate.is_active){
        lista = [
            {
              id: this.state.exchangerate.id,
              origin_currency: this.state.exchangerate.origin_currency,
              exchange_rate: this.state.exchangerate.exchange_rate,
              exchange_rate_date: this.state.exchangerate.exchange_rate_date,
              is_active: "Activo"
            }
        ];
    } else{
        lista = [
            {
                id: this.state.exchangerate.id,
                origin_currency: this.state.exchangerate.origin_currency,
                exchange_rate: this.state.exchangerate.exchange_rate,
                exchange_rate_date: this.state.exchangerate.exchange_rate_date,
                is_active: "Inactivo"
            }
        ];
    }

    return (
      <div>
        <Card title={titulo}>
          <ExchangeRates data={lista} />
          <br />
        </Card>
        <h3>Edit Member</h3>
        <MemberEditForm id={this.props.match.params.memberId} />
      </div>
    );
  }
}

export default ExchangeRateDetail;

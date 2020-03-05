import React from "react";
import Currencies from "../../components/Entidades/Currency";
import axios from "axios";
import { Card } from "antd";

class CurrencyDetail extends React.Component {
  state = {
    currency: {}
  };

  componentDidMount() {
    const currencyId = this.props.match.params.currencyId;
    axios.get(`http://127.0.0.1:8000/api/currency/${currencyId}`).then(res => {
      this.setState({
        currency: res.data
      });
    });
  }
  
  render() {
    const titulo = "Currency" + `${this.state.currency.id}`;
    let lista = []
    if(this.state.currency.is_active){
        lista = [
            {
              id: this.state.currency.id,
              currency_name: this.state.currency.currency_name,
              is_active: "Activo"
            }
        ];
    } else{
        lista = [
            {
              id: this.state.currency.id,
              currency_name: this.state.currency.currency_name,
              is_active: "Inactivo"
            }
        ];
    }

    return (
      <div>
        <Card title={titulo}>
          <Currencies data={lista} />
          <br />
        </Card>
        <h3>Edit Member</h3>

      </div>
    );
  }
}

export default CurrencyDetail;

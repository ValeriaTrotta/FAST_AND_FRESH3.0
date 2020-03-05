import React from "react";
import axios from "axios";
import DineroIntervalo from "../../components/Entidades/DineroIntervalo";

class DineroIntervaloTable extends React.Component {
  state = {
    cajaventas: []
  };

  componentDidMount() {
    const start = this.props.match.params.start;
    const end = this.props.match.params.end;
    console.log(start);
    axios
      .get(`http://127.0.0.1:8000/dinero_intervalo_dias/${start}/${end}`)
      .then(res => {
        this.setState({
          cajaventas: res.data.algo
        });
        console.log(this.state.cajaventas);
      });
  }
  render() {
    return (
      <div>
        <h1>Daily Sales by Cashier in Period of Time</h1>
        <DineroIntervalo data={this.state.cajaventas} />
      </div>
    );
  }
}

export default DineroIntervaloTable;

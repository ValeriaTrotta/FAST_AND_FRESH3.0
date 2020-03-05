import React from "react";
import axios from "axios";
import DineroCaja from "../../components/Entidades/DineroCaja";

class DineroCajaTable extends React.Component {
  state = {
    cajaventas: []
  };

  componentDidMount() {
    const start = this.props.match.params.start;
    console.log(start);
    axios.get(`http://127.0.0.1:8000/dinero_caja_dia/${start}`).then(res => {
      this.setState({
        cajaventas: res.data.algo
      });
      console.log(this.state.cajaventas);
    });
  }
  render() {
    return (
      <div>
        <h1>Daily Sales by Cashier</h1>
        <DineroCaja data={this.state.cajaventas} />
      </div>
    );
  }
}

export default DineroCajaTable;

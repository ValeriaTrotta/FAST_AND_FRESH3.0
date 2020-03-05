import React from "react";
import axios from "axios";
import VentasDiarias from "../../components/Entidades/VentasDiarias";

class VentasDiariasTable extends React.Component {
  state = {
    tops: []
  };

  componentDidMount() {
    const start = this.props.match.params.start;
    console.log(start);
    axios.get(`http://127.0.0.1:8000/ventas_diarias/${start}`).then(res => {
      this.setState({
        tops: res.data.algo
      });
      console.log(this.state.tops);
    });
  }
  render() {
    return (
      <div>
        <h1>Daily Sales by Product</h1>
        <VentasDiarias data={this.state.tops} />
      </div>
    );
  }
}

export default VentasDiariasTable;

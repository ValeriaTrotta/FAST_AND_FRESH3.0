import React from "react";
import axios from "axios";
import TopSucursal from "../../components/Entidades/TopSucursal";

class TopSucursalTable extends React.Component {
  state = {
    tops: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/sucursal_mas_ventas/").then(res => {
      this.setState({
        tops: res.data.algo
      });
      console.log(this.state.tops);
    });
  }
  render() {
    return (
      <div>
        <h1>Sucursal con mas Ventas</h1>
        <TopSucursal data={this.state.tops} />
      </div>
    );
  }
}

export default TopSucursalTable;

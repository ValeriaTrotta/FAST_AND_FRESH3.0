import React from "react";
import axios from "axios";
import ListaPerdidas from "../../components/Entidades/ListaPerdidas";

class ListaPerdidasTable extends React.Component {
  state = {
    tops: []
  };

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/lista_productos_mas_perdidas/")
      .then(res => {
        this.setState({
          tops: res.data.algo
        });
        console.log(this.state.tops);
      });
  }
  render() {
    return (
      <div>
        <h1>Pérdidas por Producto</h1>
        <ListaPerdidas data={this.state.tops} />
      </div>
    );
  }
}

export default ListaPerdidasTable;

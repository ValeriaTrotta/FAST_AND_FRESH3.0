import React from "react";
import axios from "axios";
import ListaEspeciales from "../../components/Entidades/ListaEspeciales";

class ListaEspecialesTable extends React.Component {
  state = {
    tops: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/productos_especiales/").then(res => {
      this.setState({
        tops: res.data.algo
      });
      console.log(this.state.tops);
    });
  }
  render() {
    return (
      <div>
        <h1>Special Products</h1>
        <ListaEspeciales data={this.state.tops} />
      </div>
    );
  }
}

export default ListaEspecialesTable;

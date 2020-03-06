import React from "react";
import axios from "axios";
import Top5Miembros from "../../components/Entidades/Top5Miembros";

class Top5MiembrosTable extends React.Component {
  state = {
    tops: []
  };

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/top_5_productos_mas_vendidos_miembros/")
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
        <h1>Product Top 5 Miembros</h1>
        <Top5Miembros data={this.state.tops} />
      </div>
    );
  }
}

export default Top5MiembrosTable;

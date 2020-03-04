import React from "react";
import axios from "axios";
import Top5 from "../../components/Entidades/Top5Menos";
import Top5Menos from "../../components/Entidades/Top5Menos";

class Top5MenosTable extends React.Component {
  state = {
    tops: []
  };

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/top_5_productos_menos_vendidos/")
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
        <h1>Product Bottom 5</h1>
        <Top5Menos data={this.state.tops} />
      </div>
    );
  }
}

export default Top5MenosTable;

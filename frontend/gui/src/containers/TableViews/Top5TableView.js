import React from "react";
import axios from "axios";
import Top5 from "../../components/Entidades/Top5";

class Top5Table extends React.Component {
  state = {
    tops: []
  };

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/top_5_productos_mas_vendidos/")
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
        <h1>Product Top 5</h1>
        <Top5 data={this.state.tops} />
      </div>
    );
  }
}

export default Top5Table;

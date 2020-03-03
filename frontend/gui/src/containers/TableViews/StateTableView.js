import React from "react";
import States from "../../components/Entidades/State";
import ProductCreateForm from "../../components/CreateForms/ProductCreateForm";
import axios from "axios";

class StateTable extends React.Component {
  state = {
    states: [],
    products2: [],
    provide: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/state/").then(res => {
      this.setState({
        states: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.states.map(state => {
      if (state.is_active) {
        const item = {
          id: state.id,
          state_name: state.state_name,
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!state.is_active) {
        const item = {
          id: state.id,
          state_name: state.state_name,
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });
    console.log("hola", lista);
    return (
      <div>
        <States data={lista} />
        <h2>Create Product</h2>
        <ProductCreateForm requestType="post" btnText="Add" productID={null} />
      </div>
    );
  }
}

export default StateTable;

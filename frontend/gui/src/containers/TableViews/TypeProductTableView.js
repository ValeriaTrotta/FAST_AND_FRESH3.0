import React from "react";
import TypeProducts from "../../components/Entidades/TypeProduct";
import TypeProductCreateForm from "../../components/CreateForms/TypeProductCreateForm";
import axios from "axios";

class TypeProductTable extends React.Component {
  state = {
    typeproducts: [],
    products2: [],
    provide: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/type_of_product/").then(res => {
      this.setState({
        typeproducts: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.typeproducts.map(typeproduct => {
      if (typeproduct.is_active) {
        const item = {
          id: typeproduct.id,
          type: typeproduct.type,
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!typeproduct.is_active) {
        const item = {
          id: typeproduct.id,
          type: typeproduct.type,
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });

    console.log(lista);
    return (
      <div>
        <TypeProducts data={lista} />
        <h2>Create Type of Product</h2>
        <TypeProductCreateForm />
      </div>
    );
  }
}

export default TypeProductTable;

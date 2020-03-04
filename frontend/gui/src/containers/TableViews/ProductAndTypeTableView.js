import React from "react";
import ProductAndTypes from "../../components/Entidades/ProductAndType";
import ProductAndTypeCreateForm from "../../components/CreateForms/ProductAndTypeCreateForm";
import axios from "axios";

class ProductAndTypeTable extends React.Component {
  state = {
    typeandproducts: [],
    products2: [],
    provide: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/product_type/").then(res => {
      this.setState({
        typeandproducts: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.typeandproducts.map(typeandproduct => {
      if (typeandproduct.is_active) {
        const item = {
          id: typeandproduct.id,
          product_name: typeandproduct.product_name,
          type_of_product: typeandproduct.type_of_product,
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!typeandproduct.is_active) {
        const item = {
          id: typeandproduct.id,
          product_name: typeandproduct.product_name,
          type_of_product: typeandproduct.type_of_product,
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });
    return (
      <div>
        <ProductAndTypes data={lista} />
        <h2>Asign Category to a Product</h2>
        <ProductAndTypeCreateForm />
      </div>
    );
  }
}

export default ProductAndTypeTable;

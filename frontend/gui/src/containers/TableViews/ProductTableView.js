import React from "react";
import Products from "../../components/Entidades/Product";
import ProductCreateForm from "../../components/CreateForms/ProductCreateForm";
import axios from "axios";

class ProductTable extends React.Component {
  state = {
    products: [],
    products2: [],
    provide: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/product/").then(res => {
      this.setState({
        products: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.products.map(product => {
      if (product.is_active && product.is_special) {
        const item = {
          id: product.id,
          product_name: product.product_name,
          provider: product.provider,
          is_special: "Si",
          is_active: "Activo"
        };
        lista.push(item);
      }
      // if (!product.is_active && product.is_special) {
      //   const item = {
      //     id: product.id,
      //     product_name: product.product_name,
      //     provider: product.provider,
      //     is_special: "Si",
      //     is_active: "Inactivo"
      //   };
      //   lista.push(item);
      // }
      if (product.is_active && !product.is_special) {
        const item = {
          id: product.id,
          product_name: product.product_name,
          provider: product.provider,
          is_special: "No",
          is_active: "Activo"
        };
        lista.push(item);
      }
      // if (!product.is_active && !product.is_special) {
      //   const item = {
      //     id: product.id,
      //     product_name: product.product_name,
      //     provider: product.provider,
      //     is_special: "No",
      //     is_active: "Inactivo"
      //   };
      //   lista.push(item);
      // }
    });
    console.log(this.state.products);
    console.log("hola", lista);
    return (
      <div>
        <Products data={lista} />
        <h2>Create Product</h2>
        <ProductCreateForm />
      </div>
    );
  }
}

export default ProductTable;

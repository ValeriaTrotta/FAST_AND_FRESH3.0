import React from "react";
import Products from "../components/Entidades/Product";
import ProductCreateForm from "../components/CreateForms/ProductCreateForm";
import axios from "axios";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street"
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street"
  }
];

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
    this.setState({
      pLength: this.state.products.length
    });

    // const Product =  => {
    //   let info = [];
    //   for(let i = 0; i < lista.length; i++)
    // };

    // for (let i = 0; i < this.state.products.length; i++) {
    //   console.log("entre");
    //   info.push({
    //     id: `props.data[${i}].id`,
    //     product_name: `props.data[${i}].product_name`,
    //     provider: `props.data[${i}].provider`,
    //     is_special: `props.data[${i}].is_special`,
    //     is_active: `props.data[${i}].is_active`
    //   });
    // }
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
      if (!product.is_active && product.is_special) {
        const item = {
          id: product.id,
          product_name: product.product_name,
          provider: product.provider,
          is_special: "Si",
          is_active: "Inactivo"
        };
        lista.push(item);
      }
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
      if (!product.is_active && !product.is_special) {
        const item = {
          id: product.id,
          product_name: product.product_name,
          provider: product.provider,
          is_special: "No",
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });
    console.log(this.state.products);
    console.log(lista);
    return (
      <div>
        <Products data={lista} />
        <h2>Create Product</h2>
        <ProductCreateForm requestType="post" btnText="Add" productID={null} />
      </div>
    );
  }
}

export default ProductTable;

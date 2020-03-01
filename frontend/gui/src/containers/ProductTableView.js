import React from "react";
import Products from "../components/Product";
import ProductForm from "../components/ProductForm";
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
  }
  render() {
    return (
      <div>
        <Products data={this.state.products} />
        <h2>Create Product</h2>
        <ProductForm requestType="post" btnText="Add" productID={null} />
      </div>
    );
  }
}

export default ProductTable;

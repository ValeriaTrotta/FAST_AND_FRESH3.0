import React from "react";
import Products from "../components/Entidades/Product";
import axios from "axios";
import { Card } from "antd";
import ProductCreateForm from "../components/CreateForms/ProductCreateForm";

class ProductDetail extends React.Component {
  state = {
    product: {},
    batches: [],
    provider: ""
  };

  componentDidMount() {
    const productId = this.props.match.params.productId;
    axios.get(`http://127.0.0.1:8000/api/product/${productId}`).then(res => {
      this.setState({
        product: res.data
      });
      axios
        .get(
          `http://127.0.0.1:8000/api/provider/${this.state.product.provider}`
        )
        .then(res => {
          this.setState({
            provider: res.data
          });
        });
    });

    axios.get("http://127.0.0.1:8000/api/batch/").then(res => {
      this.setState({
        batches: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.batches.map(product => {
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
    });
    return (
      <div>
        <Card title={this.state.product.product_name}>
          <h3>Provider: {this.state.product.provider}</h3>
          <h3>Is it Special: {this.state.product.is_special}</h3>
          <h3>Is it Active?: {this.state.product.is_active}</h3>
        </Card>
      </div>
    );
  }
}

export default ProductDetail;

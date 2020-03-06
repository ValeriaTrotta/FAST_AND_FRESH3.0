import React from "react";
import ProductAndBatches from "../components/Conexion/ProductAndBatch";
import axios from "axios";
import { Card } from "antd";
import ProductEditForm from "../components/EditForms/ProductEditForm";

class ProductDetail extends React.Component {
  state = {
    product: {},
    batches: [],
    provider: " "
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
    this.state.batches.map(batch => {
      if (batch.product_name == this.state.product.id && batch.is_active) {
        const item = {
          id: batch.id,
          units: batch.units,
          product_name: batch.product_name,
          elaboration_date: batch.elaboration_date,
          expiration_date: batch.expiration_date,
          price_dolars_u: batch.price_dolars_u,
          units_sold: batch.units_sold,
          units_lost: batch.units_lost,
          discount: batch.discount,
          price_points: batch.price_points,
          store: batch.store,
          is_active: "Activo"
        };
        lista.push(item);
      }
    });
    console.log(this.props.match.params.productId);
    return (
      <div>
        <Card title={this.state.product.product_name}>
          <h3>Provider: {this.state.provider.provider_name}</h3>
          <br />
        </Card>
        <br />
        <h3>Edit Product</h3>
        <ProductEditForm id={this.props.match.params.productId} />
        <ProductAndBatches data={lista} />
      </div>
    );
  }
}

export default ProductDetail;

import React from "react";
import Products from "../components/Entidades/Product";
import axios from "axios";
import { Card } from "antd";
import ProductCreateForm from "../components/CreateForms/ProductCreateForm";

class ProductDetail extends React.Component {
  state = {
    product: {}
  };

  componentDidMount() {
    const productId = this.props.match.params.productId;
    axios.get(`http://127.0.0.1:8000/api/product/${productId}`).then(res => {
      this.setState({
        product: res.data
      });
    });
  }
  render() {
    return (
      <div>
        <Card title={this.state.product.product_name}>
          <h3>Provider: {this.state.product.provider}</h3>
          <h3>Is it Special: {this.state.product.is_special}</h3>
          <h3>Is it Active?: {this.state.product.is_active}</h3>
        </Card>
        <ProductCreateForm
          requestType="put"
          btnText="Modify"
          productID={this.state.product.id}
        />
      </div>
    );
  }
}

export default ProductDetail;

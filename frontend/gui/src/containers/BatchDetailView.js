import React from "react";
import axios from "axios";
import { Card } from "antd";
import BatchEditForm from "../components/EditForms/BatchEditForm";

class BatchDetail extends React.Component {
  state = {
    batch: {},
    product: {},
    provider: {}
  };

  componentDidMount() {
    const batchId = this.props.match.params.batchId;
    axios.get(`http://127.0.0.1:8000/api/batch/${batchId}`).then(res => {
      this.setState({
        batch: res.data
      });
      axios
        .get(
          `http://127.0.0.1:8000/api/product/${this.state.batch.product_name}`
        )
        .then(res => {
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
    });
  }

  render() {
    return (
      <div>
        <Card title="Batch">
          <h3>Product: {this.state.product.product_name}</h3>
          <h3>Provider: {this.state.provider.provider_name}</h3>
          <h3>Units Elaborated: {this.state.batch.units}</h3>
          <h3>Elaboration Date: {this.state.batch.elaboration_date}</h3>
          <h3>Expiration Date: {this.state.batch.expiration_date}</h3>
          <h3>Price in Dolars: {this.state.batch.price_dolars_u}</h3>
          <h3>Price in Points: {this.state.batch.price_points}</h3>
          <h3>Units Sold: {this.state.batch.units_sold}</h3>
          <h3>Units Lost: {this.state.batch.units_lost}</h3>
          <h3>Discount: {this.state.batch.discount}</h3>
          <h3>Store: {this.state.batch.store}</h3>
        </Card>
        <BatchEditForm id={this.props.match.params.batchId} />
      </div>
    );
  }
}

export default BatchDetail;

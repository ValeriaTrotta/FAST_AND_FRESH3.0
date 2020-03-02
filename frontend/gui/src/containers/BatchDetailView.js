import React from "react";
import axios from "axios";
import { Card } from "antd";
import BatchCreateForm from "../components/CreateForms/BatchCreateForm";

class BatchDetail extends React.Component {
  state = {
    batch: {}
  };

  componentDidMount() {
    const batchId = this.props.match.params.batchId;
    axios.get(`http://127.0.0.1:8000/api/product/${batchId}`).then(res => {
      this.setState({
        batch: res.data
      });
    });
  }
  render() {
    return (
      <div>
        <Card title={this.state.batch.product_name}>
          <h3>Provider: {this.state.batch.provider}</h3>
          <h3>Is it Special: {this.state.batch.is_special}</h3>
          <h3>Is it Active?: {this.state.batch.is_active}</h3>
        </Card>
        <BatchCreateForm
          requestType="put"
          btnText="Modify"
          batchID={this.state.batch.id}
        />
      </div>
    );
  }
}

export default BatchDetail;

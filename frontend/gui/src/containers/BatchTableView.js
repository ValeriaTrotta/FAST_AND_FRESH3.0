import React from "react";
import Batches from "../components/Batch";
import BatchForm from "../components/BatchForm";
import axios from "axios";

class BatchTable extends React.Component {
  state = {
    batches: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/batch/").then(res => {
      this.setState({
        batches: res.data
      });
    });
  }
  render() {
    return (
      <div>
        <Batches data={this.state.batches} />
        <h2>Create Batch</h2>
        {/* <BatchForm requestType="post" btnText="Add" batchID={null} /> */}
      </div>
    );
  }
}

export default BatchTable;

import React from "react";
import TypeProducts from "../components/Entidades/TypeProduct";
import axios from "axios";
import { Card } from "antd";
import TypeProductEditForm from "../components/EditForms/TypeProductEditForm";

class TypeProductDetail extends React.Component {
  state = {
    typeproduct: {},
    batches: []
  };

  isActive = () => {
    return this.state.typeproduct.is_active === true ? "Activo" : "Inactivo";
  };

  componentDidMount() {
    const typeproductId = this.props.match.params.typeproductId;
    axios
      .get(`http://127.0.0.1:8000/api/type_of_product/${typeproductId}`)
      .then(res => {
        this.setState({
          typeproduct: res.data
        });
      });
  }
  render() {
    return (
      <div>
        <Card title={this.state.typeproduct.type}>
          {<h3>{this.isActive()}</h3>}
          <br />
        </Card>
        <h3>Edit Product</h3>
        <TypeProductEditForm id={this.props.match.params.typeproductId} />
      </div>
    );
  }
}

export default TypeProductDetail;

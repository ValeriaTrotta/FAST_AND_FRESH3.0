import React from "react";
import ProductAndTypes from "../../components/Entidades/ProductAndType";
import ProductCreateForm from "../../components/CreateForms/ProductCreateForm";
import axios from "axios";

class ProductAndTypeTable extends React.Component {
  state = {
    typeandproducts: [],
    products2: [],
    provide: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/product_type/").then(res => {
      this.setState({
        typeandproducts: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.typeandproducts.map(typeandproduct => {
      if (typeandproduct.is_active) {
        const item = {
          id: typeandproduct.id,
          type: typeandproduct.product_name,
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!typeandproduct.is_active) {
        const item = {
          id: typeandproduct.id,
          type: typeandproduct.product_name,
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });
    return (
      <div>
        <ProductAndTypes data={this.state.typeandproducts} />
        <h2>Create Product</h2>
        {/* <ProductAndTypeCreateForm requestType="post" btnText="Add" productID={null} /> */}
      </div>
    );
  }
}

export default ProductAndTypeTable;

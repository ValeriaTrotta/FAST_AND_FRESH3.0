import React from "react";
import ProductAndTypesCon from "../components/Conexion/ProductAndTypeCon";
import axios from "axios";
import { Card } from "antd";
import ProductAndTypeEditForm from "../components/EditForms/ProductAndTypeEditForm";

class ProductAndTypeDetail extends React.Component {
  state = {
    productandtype: {},
    typeofproduct: {},
    products: [],
    product: {}
  };

  isActive = () => {
    return this.state.productandtype.is_active === true ? "Activo" : "Inactivo";
  };

  componentDidMount() {
    const productandtypeId = this.props.match.params.productandtypeId;
    axios
      .get(`http://127.0.0.1:8000/api/product_type/${productandtypeId}`)
      .then(res => {
        this.setState({
          productandtype: res.data
        });
        console.log("hola", this.state.productandtype);
        axios
          .get(
            `http://127.0.0.1:8000/api/type_of_product/${this.state.productandtype.type_of_product}`
          )
          .then(res => {
            this.setState({
              typeofproduct: res.data
            });
            axios
              .get(
                `http://127.0.0.1:8000/api/product/${this.state.productandtype.product_name}`
              )
              .then(res => {
                this.setState({
                  product: res.data
                });
              });
          });
      });

    axios.get("http://127.0.0.1:8000/api/product/").then(res => {
      this.setState({
        products: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.products.map(product => {
      if (
        product.id == this.state.productandtype.product_name &&
        product.is_active &&
        product.is_special &&
        this.state.productandtype.type_of_product == this.state.typeofproduct.id
      ) {
        const item = {
          id: product.id,
          product_name: product.product_name,
          provider: product.provider,
          is_special: "Si",
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (
        product.id == this.state.productandtype.product_name &&
        product.is_active &&
        !product.is_special &&
        this.state.productandtype.type_of_product == this.state.typeofproduct.id
      ) {
        const item = {
          id: product.id,
          product_name: product.product_name,
          provider: product.provider,
          is_special: "No",
          is_active: "Activo"
        };
        lista.push(item);
      }
    });

    return (
      <div>
        <Card title={this.state.typeofproduct.type}>
          <h3>{this.state.product.product_name}</h3>
          <h3>{this.isActive()}</h3>
          <br />
        </Card>
        <h3>Edit Product</h3>
        <ProductAndTypeEditForm id={this.props.match.params.productandtypeId} />
        <h3>Otros Productos en la misma categoria</h3>
        <ProductAndTypesCon data={lista} />
      </div>
    );
  }
}

export default ProductAndTypeDetail;

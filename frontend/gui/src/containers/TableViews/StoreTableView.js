import React from "react";
import Stores from "../../components/Entidades/Store";
import ProductCreateForm from "../../components/CreateForms/ProductCreateForm";
import axios from "axios";

class StoreTable extends React.Component {
  state = {
    stores: [],
    products2: [],
    provide: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/store/").then(res => {
      this.setState({
        stores: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.stores.map(store => {
      if (store.is_active) {
        const item = {
          id: store.id,
          store_name: store.store_name,
          zona: store.zona,
          open_time: store.open_time,
          closing_time: store.closing_time,
          store_phone: store.store_phone,
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!store.is_active) {
        const item = {
          id: store.id,
          store_name: store.store_name,
          zona: store.zona,
          open_time: store.open_time,
          closing_time: store.closing_time,
          store_phone: store.store_phone,
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });
    console.log(lista);
    return (
      <div>
        <Stores data={lista} />
        <h2>Create Product</h2>
        <ProductCreateForm requestType="post" btnText="Add" productID={null} />
      </div>
    );
  }
}

export default StoreTable;

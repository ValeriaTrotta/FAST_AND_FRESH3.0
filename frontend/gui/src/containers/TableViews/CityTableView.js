import React from "react";
import Cities from "../../components/Entidades/City";
import ProductCreateForm from "../../components/CreateForms/ProductCreateForm";
import axios from "axios";

class CityTable extends React.Component {
  state = {
    cities: [],
    products2: [],
    provide: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/city/").then(res => {
      this.setState({
        cities: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.cities.map(city => {
      if (city.is_active) {
        const item = {
          id: city.id,
          city_name: city.city_name,
          state: city.state,
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!city.is_active) {
        const item = {
          id: city.id,
          city_name: city.city_name,
          state: city.state,
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });
    console.log("hola", lista);
    return (
      <div>
        <Cities data={lista} />
        <h2>Create Product</h2>
        <ProductCreateForm requestType="post" btnText="Add" productID={null} />
      </div>
    );
  }
}

export default CityTable;

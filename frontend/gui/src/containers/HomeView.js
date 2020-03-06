import React from "react";
import axios from "axios";
import { Card } from "antd";
import DateForm from "./DateForm";
import DateForm2 from "./DateForm2";
import DateForm3 from "./DateForm3";

class HomeView extends React.Component {
  state = {
    client: {},
    zonas: [],
    zona: {}
  };

  render() {
    return (
      <div>
        <Card title="Buscar las ventas de productos de un día">
          <br />
          <DateForm />
        </Card>
        <Card title="Buscar dinero recaudado por caja en un día">
          <br />
          <DateForm2 />
        </Card>
        <Card title="Buscar dinero recaudado en un intervalo de días">
          <br />
          <DateForm3 />
        </Card>
      </div>
    );
  }
}

export default HomeView;

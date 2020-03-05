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
        <Card title="Date">
          <br />
          <DateForm />
        </Card>
        <Card title="Dinero Caja Dia">
          <br />
          <DateForm2 />
        </Card>
        <Card title="Dinero Intervalo">
          <br />
          <DateForm3 />
        </Card>
      </div>
    );
  }
}

export default HomeView;

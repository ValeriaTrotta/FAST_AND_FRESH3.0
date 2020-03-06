import React from "react";
import IVAs from "../../components/Entidades/IVA";
import axios from "axios";
import { Card } from "antd";

class IVADetail extends React.Component {
  state = {
    iva:{}
  };

  componentDidMount() {
    const ivaId = this.props.match.params.ivaId;
    axios.get(`http://127.0.0.1:8000/api/iva/${ivaId}`).then(res => {
      this.setState({
        iva: res.data
      });
    });
  }
  
  render() {
    const titulo = "IVA" + `${this.state.iva.id}`;
    let lista = []
    if(this.state.iva.is_active){
        lista = [
            {
              id: this.state.iva.id,
              iva_porcentaje: this.state.iva.iva_porcentaje,
              iva_date: this.state.iva.iva_date,
              is_active: "Activo"
            }
        ];
    } else{
        lista = [
            {
                id: this.state.iva.id,
                iva_porcentaje: this.state.iva.iva_porcentaje,
                iva_date: this.state.iva.iva_date,
                is_active: "Inactivo"
            }
        ];
    }

    return (
      <div>
        <Card title={titulo}>
          <IVAs data={lista} />
          <br />
        </Card>
        <h3>Edit Member</h3>
      </div>
    );
  }
}

export default IVADetail;

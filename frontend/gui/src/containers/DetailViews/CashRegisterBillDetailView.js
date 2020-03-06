import React from "react";
import CashRegisterBills from "../../components/Entidades/CashRegisterBills";
import axios from "axios";
import { Card } from "antd";
import MemberEditForm from "../../components/EditForms/MemberEditForm";

class CashRegisterBillDetail extends React.Component {
  state = {
    cashregisterbill: {},
    cashregister: [],
    bill:[]
  };

  componentDidMount() {
    const cashregisterbillId = this.props.match.params.cashregisterbillId;
    axios.get(`http://127.0.0.1:8000/api/cashregisterbills/${cashregisterbillId}`).then(res => {
      this.setState({
        cashregisterbill: res.data
      });
      axios
        .get(`http://127.0.0.1:8000/api/cashregister/${this.state.cashregisterbill.cash_register}`)
        .then(res => {
          this.setState({
            cashregister: res.data
          });
          axios
        .get(`http://127.0.0.1:8000/api/bill/${this.state.cashregisterbill.bill}`)
        .then(res => {
          this.setState({
            bill: res.data
                });
            });
        });
    });
  }
  
  render() {
    const titulo = "Cash Register Bill" + `${this.state.cashregisterbill.id}`;
    let lista = []
    if(this.state.cashregisterbill.is_active){
        lista = [
            {
              id: this.state.cashregisterbill.id,
              cash_register: this.state.cashregisterbill.cash_register,
              bill: this.state.cashregisterbill.bill,
              is_active: "Activo"
            }
        ];
    } else{
        lista = [
            {
                id: this.state.cashregisterbill.id,
                cash_register: this.state.cashregisterbill.cash_register,
                bill: this.state.cashregisterbill.bill,
                is_active: "Inactivo"
            }
        ];
    }

    return (
      <div>
        <Card title={titulo}>
          <CashRegisterBills data={lista} />
          <br />
        </Card>
        <h3>Edit Member</h3>
        <MemberEditForm id={this.props.match.params.memberId} />
      </div>
    );
  }
}

export default CashRegisterBillDetail;

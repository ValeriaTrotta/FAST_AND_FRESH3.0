import React from "react";
import Members from "../../components/Entidades/Member";
import ProductCreateForm from "../../components/CreateForms/ProductCreateForm";
import axios from "axios";

class MemberTable extends React.Component {
  state = {
    members: [],
    products2: [],
    provide: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/member/").then(res => {
      this.setState({
        members: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.members.map(member => {
      if (member.is_active) {
        const item = {
          id: member.id,
          member_points: member.member_points,
          member_email: member.member_email,
          member_start_date: member.member_start_date,
          member_pay_date: member.member_pay_date,
          client: member.client,
          member_birth_date: member.member_birth_date,
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!member.is_active) {
        const item = {
          id: member.id,
          member_points: member.member_points,
          member_email: member.member_email,
          member_start_date: member.member_start_date,
          member_pay_date: member.member_pay_date,
          client: member.client,
          member_birth_date: member.member_birth_date,
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });

    return (
      <div>
        <Members data={lista} />
        <h2>Create Product</h2>
        <ProductCreateForm requestType="post" btnText="Add" productID={null} />
      </div>
    );
  }
}

export default MemberTable;

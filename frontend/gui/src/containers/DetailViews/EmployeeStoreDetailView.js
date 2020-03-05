import React from "react";
import EmployeeStores from "../../components/Entidades/EmployeeStore";
import axios from "axios";
import { Card } from "antd";

class EmployeeStoreDetail extends React.Component {
  state = {
    employeestore: {},
    store: [],
    employee:[]
  };

  componentDidMount() {
    const employeestoreId = this.props.match.params.employeestoreId;
    axios.get(`http://127.0.0.1:8000/api/employeestore/${employeestoreId}`).then(res => {
      this.setState({
        employeestore: res.data
      });

      axios
        .get(`http://127.0.0.1:8000/api/store/${this.state.employeestore.employee_store}`)
        .then(res => {
          this.setState({
            store: res.data
          });
          axios
        .get(`http://127.0.0.1:8000/api/employee/${this.state.employeestore.employee}`)
        .then(res => {
          this.setState({
            employee: res.data
                });
            });
        });
    });
  }
  
  render() {
    const titulo = "Employee Store" + `${this.state.employeestore.id}`;
    let lista = []
    if(this.state.employeestore.is_active){
        lista = [
            {
              id: this.state.employeestore.id,
              employee_store: this.state.employeestore.employee_store,
              employee: this.state.employee.employee_cedula,
              hired_date: this.state.employeestore.hired_date,
              is_active: "Activo"
            }
        ];
    } else{
        lista = [
            {
                id: this.state.employeestore.id,
                employee_store: this.state.employeestore.employee_store,
                employee: this.state.employeestore.employee,
                hired_date: this.state.employeestore.hired_date,
                is_active: "Inactivo"
            }
        ];
    }

    return (
      <div>
        <Card title={titulo}>
          <EmployeeStores data={lista} />
          <br />
        </Card>
        <h3>Edit Member</h3>
      </div>
    );
  }
}

export default EmployeeStoreDetail;

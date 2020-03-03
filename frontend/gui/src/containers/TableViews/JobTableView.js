import React from "react";
import Jobs from "../../components/Entidades/Job";
import ProductCreateForm from "../../components/CreateForms/ProductCreateForm";
import axios from "axios";

class JobTable extends React.Component {
  state = {
    jobs: [],
    products2: [],
    provide: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/job/").then(res => {
      this.setState({
        jobs: res.data
      });
    });
  }
  render() {
    const lista = [];
    this.state.jobs.map(job => {
      if (job.is_active) {
        const item = {
          id: job.id,
          job_name: job.job_name,
          job_salary: job.job_salary,
          is_active: "Activo"
        };
        lista.push(item);
      }
      if (!job.is_active) {
        const item = {
          id: job.id,
          job_name: job.job_name,
          job_salary: job.job_salary,
          is_active: "Inactivo"
        };
        lista.push(item);
      }
    });
    console.log(lista);
    return (
      <div>
        <Jobs data={lista} />
        <h2>Create Product</h2>
        <ProductCreateForm requestType="post" btnText="Add" productID={null} />
      </div>
    );
  }
}

export default JobTable;

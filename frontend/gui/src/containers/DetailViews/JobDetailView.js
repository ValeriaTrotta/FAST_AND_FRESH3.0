import React from "react";
import Jobs from "../../components/Entidades/Job";
import axios from "axios";
import { Card } from "antd";

class JobDetail extends React.Component {
  state = {
    job:{}
  };

  componentDidMount() {
    const jobId = this.props.match.params.jobId;
    axios.get(`http://127.0.0.1:8000/api/job/${jobId}`).then(res => {
      this.setState({
        job: res.data
      });
    });
  }
  
  render() {
    const titulo = "Job" + `${this.state.job.id}`;
    let lista = []
    if(this.state.job.is_active){
        lista = [
            {
              id: this.state.job.id,
              job_name: this.state.job.job_name,
              job_salary: this.state.job.job_salary,
              is_active: "Activo"
            }
        ];
    } else{
        lista = [
            {
                id: this.state.job.id,
                job_name: this.state.job.job_name,
                job_salary: this.state.job.job_salary,
                is_active: "Inactivo"
            }
        ];
    }

    return (
      <div>
        <Card title={titulo}>
          <Jobs data={lista} />
          <br />
        </Card>
        <h3>Edit Member</h3>
      </div>
    );
  }
}

export default JobDetail;

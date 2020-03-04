import React from "react";
import {
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  Radio,
  DatePicker,
  TimePicker
} from "antd";
import axios from "axios";

const { Option } = Select;

const config = {
  rules: [{ type: "object", required: true, message: "Please select time!" }]
};

const validateMessages = {
  required: "This field is required!",
  types: {
    number: "Not a validate number!"
  },
  number: {
    range: "Must be between ${min} and ${max}"
  }
};

function onChange(value) {
  console.log("changed", value);
}

class StoreCreateForm extends React.Component {
  formRef = React.createRef();

  onFinish = values => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  state = {
    zonas: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/zona/").then(res => {
      this.setState({
        zonas: res.data
      });
    });
  }

  handleFormSubmit = event => {
    // event.preventDefault();
    var moment = require("moment");
    const store_name = event.Nombre;
    const zona = event.Zona;
    const open_time = moment(event.OTime).format("hh:mm:ss");
    const closing_time = moment(event.CTime).format("hh:mm:ss");
    const store_phone = event.Telefono;
    const is_active = event.Active;

    return axios
      .post("http://127.0.0.1:8000/api/store/", {
        store_name: store_name,
        zona: zona,
        open_time: open_time,
        closing_time: closing_time,
        store_phone: store_phone,
        is_active: is_active
      })
      .then(res => console.log(res))
      .catch(error => console.error(error));
  };

  render() {
    return (
      <Form
        ref={this.formRef}
        name="control-ref"
        onFinish={event =>
          this.handleFormSubmit(
            event,
            this.props.requestType,
            this.props.batchID
          )
        }
      >
        <Form.Item
          name="Nombre"
          label="Nombre"
          rules={[{ required: true, type: "string" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="Zona"
          label="Zona"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select name="zona" placeholder="Selecciona una Zona" allowClear>
            {this.state.zonas.map(provs => (
              <Option value={provs.id} key={provs.zona_name}>
                {provs.zona_name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="OTime" label="TimePicker" {...config}>
          <TimePicker />
        </Form.Item>

        <Form.Item name="CTime" label="TimePicker" {...config}>
          <TimePicker />
        </Form.Item>

        <Form.Item
          name="Telefono"
          label="Telefono"
          rules={[{ required: true, type: "string", min: 0 }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="Active"
          label="Active"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select name="active" placeholder="Is it Active?">
            <Option value={true}>Yes</Option>
            <Option value={false}>No</Option>
          </Select>
        </Form.Item>

        <br />
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default StoreCreateForm;

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

class BatchCreateForm extends React.Component {
  formRef = React.createRef();

  onFinish = values => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  state = {
    products: [],
    stores: [],
    currBatch: {}
  };

  componentDidMount() {
    if (this.props.batchID !== null) {
      axios
        .get(`http://127.0.0.1:8000/api/product/${this.props.batchID}/`)
        .then(res => {
          this.setState({
            currBatch: res.data
          });
          console.log("current", this.props.batchID);
        });
    }
    axios.get("http://127.0.0.1:8000/api/product/").then(res => {
      this.setState({
        products: res.data
      });
    });

    axios.get("http://127.0.0.1:8000/api/store/").then(res => {
      this.setState({
        stores: res.data
      });
    });
  }

  handleFormSubmit = (event, requestType, batchID) => {
    // event.preventDefault();
    var moment = require("moment");
    const product_name = event.Nombre;
    const units = event.Unidades;
    const elaboration_date = moment(event.ElDate).format("YYYY-MM-DD");
    const expiration_date = moment(event.ExDate).format("YYYY-MM-DD");
    const price_dolars_u = event.PriceD;
    const units_sold = event.USold;
    const units_lost = event.ULost;
    const discount = event.Descuento;
    const price_points = 10 * parseInt(event.PriceD);
    const store = event.Sucursal;

    console.log(price_points);

    switch (requestType) {
      case "post":
        console.log("entre");
        return axios
          .post("http://127.0.0.1:8000/api/batch/", {
            product_name: product_name,
            units: units,
            elaboration_date: elaboration_date,
            expiration_date: expiration_date,
            price_dolars_u: price_dolars_u,
            units_sold: units_sold,
            units_lost: units_lost,
            discount: discount,
            price_points: price_points,
            store: store
          })
          .then(res => console.log(res))
          .catch(error => console.error(error));

      case "put":
        return axios
          .put(`http://127.0.0.1:8000/api/batch/${batchID}/`, {
            product_name: product_name,
            units: units,
            elaboration_date: elaboration_date,
            expiration_date: expiration_date,
            price_dolars_u: price_dolars_u,
            units_sold: units_sold,
            units_lost: units_lost,
            discount: discount,
            price_points: price_points,
            store: store
          })
          .then(res => console.log(res))
          .catch(error => console.err(error));
    }
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
          label="Producto"
          rules={[
            {
              required: true
            }
          ]}
          key={this.state.currBatch.product_name}
        >
          <Select
            defaultValue={this.state.currBatch.product_name}
            name="nombre"
            placeholder="Selecciona un Producto"
            allowClear
          >
            {this.state.products.map(provs => (
              <Option value={provs.id} key={provs.product_name}>
                {provs.product_name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="Unidades"
          label="Units"
          rules={[{ required: true, type: "number", min: 0 }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="ElDate"
          rules={[{ required: true }]}
          label="Elaboration Date"
          {...config}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          rules={[{ required: true }]}
          name="ExDate"
          label="Expiration Date"
          {...config}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="PriceD"
          label="Price in dolars"
          rules={[{ required: true, type: "number", min: 0 }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="USold"
          label="Units Sold"
          rules={[{ type: "number", min: 0 }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="ULost"
          label="Units Lost"
          rules={[{ type: "number", min: 0 }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="Descuento"
          label="Discount"
          rules={[{ required: true, type: "number", min: 0.01, max: 1 }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="Sucursal"
          label="Store"
          rules={[
            {
              required: true
            }
          ]}
          key={this.state.currBatch.store}
        >
          <Select
            defaultValue={this.state.currBatch.store}
            name="store"
            placeholder="Selecciona una Sucursal"
            allowClear
          >
            {this.state.stores.map(provs => (
              <Option value={provs.id} key={provs.store_name}>
                {provs.store_name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <br />
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {this.props.btnText}
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default BatchCreateForm;

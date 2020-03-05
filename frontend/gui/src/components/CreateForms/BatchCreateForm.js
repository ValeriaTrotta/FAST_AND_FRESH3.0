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
import ProductCreateForm from "./ProductCreateForm";

const { Option } = Select;
const { MonthPicker, RangePicker } = DatePicker;
const rangeConfig = {
  rules: [{ type: "array", required: true, message: "Please select time!" }]
};

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

  getActives = array => {
    const activos = array.filter(x => x.is_active === true);

    return activos;
  };

  componentDidMount() {
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

  handleFormSubmit = event => {
    var moment = require("moment");
    const product_name = event.Nombre;
    const units = event.Unidades;
    const elaboration_date = moment(event.Dates[0]).format("YYYY-MM-DD");
    const expiration_date = moment(event.Dates[1]).format("YYYY-MM-DD");
    const price_dolars_u = event.PriceD;
    const units_sold = 0;
    const units_lost = 0;
    const discount = event.Descuento;
    const price_points = 10 * parseInt(event.PriceD);
    const store = event.Sucursal;
    const is_active = true;

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
        store: store,
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
          label="Producto"
          rules={[
            {
              required: true
            }
          ]}
          key={this.state.currBatch.product_name}
        >
          <Select name="nombre" placeholder="Selecciona un Producto" allowClear>
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
        <Form.Item name="Dates" label="RangePicker" {...rangeConfig}>
          <RangePicker />
        </Form.Item>

        <Form.Item
          name="PriceD"
          label="Price in dolars"
          rules={[{ required: true, type: "number", min: 0 }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="Descuento"
          label="Discount"
          rules={[{ required: true, type: "number", min: 0.0, max: 1 }]}
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
          <Select name="store" placeholder="Selecciona una Sucursal" allowClear>
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
            Create
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default BatchCreateForm;

import React from "react";
import { Form, Input, Button, Select, InputNumber, TimePicker } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 }
  }
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 24, offset: 0 }
  }
};

class BillDetailsCreateForm extends React.Component {
  formRef = React.createRef();

  onReset = () => {
    this.formRef.current.resetFields();
  };

  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      members: [],
      products: [],
      batches: [],
      stores: [],
      cashregisters: [],
      hasProducts: false,
      productsSelected: [],
      quantitiesSelected: [],
      batchesSelected: [],
      zonas: [],
      hasPickUp: true,
      hasDelivery: false,
      currBill: {},
      employees: []
    };
    this.handleDelivery = this.handleDelivery.bind(this);
    this.handlePickUp = this.handlePickUp.bind(this);
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/client/").then(res => {
      this.setState({
        clients: res.data
      });
    });
    axios.get("http://127.0.0.1:8000/api/member/").then(res => {
      this.setState({
        members: res.data
      });
    });
    axios.get("http://127.0.0.1:8000/api/product/").then(res => {
      this.setState({
        products: res.data
      });
    });
    axios.get("http://127.0.0.1:8000/api/batch/").then(res => {
      this.setState({
        batches: res.data
      });
    });
    axios.get("http://127.0.0.1:8000/api/store/").then(res => {
      this.setState({
        stores: res.data
      });
    });
    axios.get("http://127.0.0.1:8000/api/zona/").then(res => {
      this.setState({
        zonas: res.data
      });
    });
    axios.get("http://127.0.0.1:8000/api/employee/").then(res => {
      this.setState({
        employees: res.data
      });
    });
    axios.get("http://127.0.0.1:8000/api/cashregister/").then(res => {
      this.setState({
        cashregisters: res.data
      });
    });
    // this.setState({
    //   ...this.state,
    //   hasDelivery: true
    // });
  }

  handleProducts = (value, index) => {
    this.state.productsSelected[index] = value;

    this.setState({
      productsSelected: this.state.productsSelected
    });
  };

  handleQuantity = (value, index) => {
    this.state.quantitiesSelected[index] = value;

    this.setState({
      quantitiesSelected: this.state.quantitiesSelected
    });
  };

  handleBatch = (value, index) => {
    this.state.batchesSelected[index] = value;

    this.setState({
      quantitiesSelected: this.state.quantitiesSelected
    });
  };

  handleRemove(index) {
    this.state.productsSelected.splice(index, 1);
    this.state.quantitiesSelected.splice(index, 1);
    this.state.batchesSelected.splice(index, 1);
    this.setState({
      quantitiesSelected: this.state.quantitiesSelected,
      productsSelected: this.state.productsSelected,
      batchesSelected: this.state.batchesSelected
    });
  }

  handleFormSubmit = event => {
    // event.preventDefault();
    var valida = false;
    const ci = event.Cedula;
    var i = 0;
    var clientID;

    this.state.clients.forEach(client => {
      if (client.client_cedula == event.Cedula) {
        valida = true;
      }
    });

    if (this.state.hasProducts) {
      if (valida) {
        var moment = require("moment");
        const billTime = moment(event.time).format("HH:mm:ss");
        const delivery = event.hasDelivery;
        if (delivery) {
          const products = this.state.productsSelected;
          const quantities = this.state.quantitiesSelected;
          const zona = event.Zona;
          const address = event.Direccion;
          console.log(products);
          console.log(quantities);
        } else {
          const store = event.Sucursal;
        }
      } else {
        alert("La cédula no se encuentra en el Sistema");
      }
    } else {
      alert("No ha agregado ningun producto");
    }
  };

  handleDelivery = value => {
    if (value) {
      this.setState({
        hasDelivery: true
      });
    } else {
      this.setState({
        hasDelivery: false
      });
    }
  };
  handlePickUp = value => {
    if (value) {
      this.setState({
        hasPickUp: true
      });
    } else {
      this.setState({
        hasPickUp: false
      });
    }
  };

  render() {
    return (
      <Form ref={this.formRef} name="form" onFinish={this.handleFormSubmit}>
        <Form.Item
          name="Cedula"
          rules={[{ required: true }]}
          label="Cedula"
          key={this.state.currBill.client_id}
        >
          <InputNumber
            name="cedula"
            placeholder="Ingrese la cedula del cliente"
            style={{ width: 200 }}
          />
        </Form.Item>

        <Form.List name="productForm">
          {(fields, { add, remove }) => {
            return (
              <div>
                <h3>Productos</h3>
                {fields.map((field, index) => (
                  <div key={"div" + field.key}>
                    <Form.Item
                      {...(index === 0
                        ? formItemLayout
                        : formItemLayoutWithOutLabel)}
                      label={index === 0 ? "" : ""}
                      required={true}
                      key={"product." + field.key}
                    >
                      <Select
                        onChange={value => this.handleProducts(value, index)}
                        style={{ width: 200 }}
                        placeholder="Choose a Product"
                        optionFilterProp="children"
                        showSearch
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {this.state.products.map(product => (
                          <Option value={product.id} key={product.id}>
                            {product.product_name}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>

                    <Form.Item
                      {...(index === 0
                        ? formItemLayout
                        : formItemLayoutWithOutLabel)}
                      label={index === 0 ? "" : ""}
                      required={true}
                      key={"quantity." + field.key}
                    >
                      <InputNumber
                        placeholder="Product Quantity"
                        style={{ width: 200 }}
                        min={1}
                        max={10}
                        onChange={value => this.handleQuantity(value, index)}
                      />
                    </Form.Item>

                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => {
                          remove(field.name);
                          this.handleRemove(index);
                        }}
                      />
                    ) : null}
                  </div>
                ))}

                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add();
                      this.setState({
                        hasProducts: true
                      });
                    }}
                    style={{ width: 200 }}
                  >
                    <PlusOutlined /> Add a Product
                  </Button>
                </Form.Item>
              </div>
            );
          }}
        </Form.List>

        <Form.Item
          name="hasDelivery"
          rules={[{ required: true }]}
          label="¿Desea delivery?"
          key={this.state.currBill.bill_delivery}
        >
          <Select
            placeholder="Delivery?"
            name="hasDelivery"
            style={{ width: 200 }}
            allowClear
            onChange={this.handleDelivery}
          >
            <Option value={false}>No</Option>
            <Option value={true}>Sí</Option>
          </Select>
        </Form.Item>

        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.hasDelivery !== currentValues.hasDelivery
          }
        >
          {({ getFieldValue }) => {
            return getFieldValue("hasDelivery") == true ? (
              // ZONA DELIVERY
              <div>
                <h3>Delivery</h3>
                {/* DIRECCIÓN */}

                <Form.Item
                  name="Zona"
                  label="Zona"
                  rules={[{ required: true }]}
                >
                  <Select
                    placeholder="Choose the Area"
                    name="zona"
                    style={{ width: 200 }}
                    allowClear
                  >
                    {this.state.zonas.map(zona => (
                      <Option value={zona.id} key={zona.id}>
                        {zona.zona_name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="Direccion"
                  label="Dirección"
                  rules={[{ required: true }]}
                >
                  <Input
                    placeholder="Introduce the Address"
                    name="address"
                    style={{ width: 200 }}
                    allowClear
                  />
                </Form.Item>
                <Form.Item
                  name="Empleado"
                  label="Empleado"
                  rules={[{ required: true }]}
                >
                  <Select
                    placeholder="Choose the Delivery Man"
                    name="empleado"
                    style={{ width: 200 }}
                    allowClear
                  >
                    {this.state.employees.map(employee => (
                      <Option value={employee.id} key={employee.id}>
                        {employee.employee_cedula}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
            ) : (
              <div>
                <Form.Item
                  name="hasPickUp"
                  rules={[{ required: true }]}
                  label="PickUp?"
                  key={this.state.currBill.bill_pickup}
                >
                  <Select
                    placeholder="Pick Up?"
                    name="hasPickUp"
                    style={{ width: 200 }}
                    allowClear
                    onChange={this.handlePickUp}
                  >
                    <Option value={false}>No</Option>
                    <Option value={true}>Sí</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  noStyle
                  shouldUpdate={(prevValues, currentValues) =>
                    prevValues.hasPickUp !== currentValues.hasPickUp
                  }
                >
                  {({ getFieldValue }) => {
                    return getFieldValue("hasPickup") == true ? (
                      // ZONA DELIVERY
                      <div>
                        <h3>PickUp</h3>
                        {/* DIRECCIÓN */}
                        <Form.Item
                          name="Sucursal"
                          label="Sucursal"
                          rules={[{ required: true }]}
                        >
                          <Select
                            placeholder="Choose the Store"
                            name="sucursal"
                            style={{ width: 200 }}
                            allowClear
                          >
                            {this.state.stores.map(store => (
                              <Option value={store.id} key={store.id}>
                                {store.store_name}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </div>
                    ) : (
                      <div>
                        <h3>HOLAAA</h3>
                      </div>
                    );
                  }}
                </Form.Item>
              </div>
            );
          }}
        </Form.Item>

        {/* HORA*/}
        <Form.Item
          name="time"
          label="Hora de la entrega/búsqueda"
          rules={[{ required: true }]}
        >
          <TimePicker name="timeime" style={{ width: 200 }} />
        </Form.Item>
        <br />
        <br />
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: 200 }}>
            Add
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default BillDetailsCreateForm;

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

class BillCreateForm extends React.Component {
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
      hasPickUp: false,
      hasDelivery: false,
      selected: "",
      currBill: {},
      employees: [],
      create: false,
      datos: [],
      ivas: [],
      productLoading: true,
      quantitiesLoading: true,
      storeSelected: "",
      optionsProducts: [],
      clientSelected: {},
      memberSelected: {},
      canPay: false,
      dataBill: {},
      dataDelivery: {},
      dataPickUp: {},
      dataCashR: {},
      created: true,
      paymentMethodsSelected: [],
      paymentAmountsSelected: [],
      paymentInstrumentSelected: [],
      currenciesSelected: [],
      methods: [],
      paymentLoading: true,
      amountLoading: true,
      instrumentLoading: true,
      currencyLoading: true,
      currencies: [],
      total: "",
      exchangerates: [],
      exchangeRatesSelected: [],
      rateLoading: true,
      currencySelected: "",
      amountSelected: "",
      rateSelected: {},
      totalPagado: "",
      pago: false
    };
    // this.handleDelivery = this.handleDelivery.bind(this);
    // this.handlePickUp = this.handlePickUp.bind(this);
    this.choice = this.choice.bind(this);
    this.handleChoice = this.handleChoice.bind(this);
    this.handleProducts = this.handleProducts.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleBatch = this.handleBatch.bind(this);
    this.handlePayment = this.handlePayment.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.handleInstrument = this.handleInstrument.bind(this);
    this.handleCurrency = this.handleCurrency.bind(this);
    this.handleRate = this.handleRate.bind(this);
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
    axios.get("http://127.0.0.1:8000/api/exchangerate/").then(res => {
      this.setState({
        exchangerates: res.data
      });
    });
    axios.get("http://127.0.0.1:8000/api/currency/").then(res => {
      this.setState({
        currencies: res.data
      });
    });
    axios.get("http://127.0.0.1:8000/api/paymentmethod/").then(res => {
      this.setState({
        methods: res.data
      });
    });
    axios.get("http://127.0.0.1:8000/api/product/").then(res => {
      this.setState({
        products: res.data,
        optionsProducts: res.data
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
    axios.get("http://127.0.0.1:8000/api/iva/").then(res => {
      this.setState({
        ivas: res.data
      });
    });
  }

  handleProducts = (value, index) => {
    this.state.productsSelected[index] = value;
    this.state.optionsProducts = this.getOptions(this.state.optionsProducts);

    this.setState(
      {
        productsSelected: this.state.productsSelected,
        optionsProducts: this.state.optionsProducts
      },
      () =>
        this.setState({
          productLoading: false
        })
    );
  };

  handlePayment = (value, index) => {
    this.state.paymentMethodsSelected[index] = value;

    this.setState(
      {
        paymentMethodsSelected: this.state.paymentMethodsSelected
      },
      () =>
        this.setState({
          paymentLoading: false
        })
    );
  };

  handleRate = (value, index) => {
    this.state.exchangeRatesSelected[index] = value;
    let eRate = {};
    this.state.exchangerates.map(rate => {
      if (rate.id === value) {
        eRate = rate;
      }
    });

    this.setState(
      {
        exchangeRatesSelected: this.state.exchangeRatesSelected,
        rateSelected: eRate
      },
      () =>
        this.setState({
          rateLoading: false
        })
    );
  };

  handleCurrency = (value, index) => {
    this.state.currenciesSelected[index] = value;

    this.setState(
      {
        currenciesSelected: this.state.currenciesSelected,
        currencySelected: value
      },
      () =>
        this.setState({
          currencyLoading: false
        })
    );
  };

  handleAmount = (value, index) => {
    this.state.paymentAmountsSelected[index] = value;

    this.setState(
      {
        paymentAmountsSelected: this.state.paymentAmountsSelected,
        amountSelected: value
      },
      () =>
        this.setState({
          amountLoading: false
        })
    );
  };

  handleInstrument = (value, index) => {
    this.state.paymentInstrumentSelected[index] = value;

    this.setState(
      {
        paymentInstrumentSelected: this.state.paymentInstrumentSelected
      },
      () =>
        this.setState({
          instrumentLoading: false
        })
    );
  };

  handleChoice = value => {
    this.setState({
      selected: value
    });
  };

  handleStore = value => {
    this.setState({
      storeSelected: value
    });
  };

  handleCliente = value => {
    this.state.clients.forEach(client => {
      if (client.client_cedula === value) {
        this.setState(
          {
            clientSelected: client
          },
          () =>
            this.state.members.forEach(member => {
              if (this.state.clientSelected.id === member.client) {
                this.setState(
                  {
                    memberSelected: member
                  },
                  () => console.log(this.state.memberSelected)
                );
              }
            })
        );
      }
    });
  };

  handleQuantity = (value, index) => {
    this.state.quantitiesSelected[index] = value;

    this.setState(
      {
        quantitiesSelected: this.state.quantitiesSelected
      },
      () =>
        this.setState({
          quantitiesLoading: false
        })
    );
    console.log(this.state.quantitiesSelected);
  };

  handleBatch = (value, index) => {
    this.state.batchesSelected[index] = value;

    this.setState({
      batchesSelected: this.state.batchesSelected
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

  handleRemovePayment(index) {
    this.state.paymentMethodsSelected.splice(index, 1);
    this.state.currenciesSelected.splice(index, 1);
    this.state.exchangeRatesSelected.splice(index, 1);
    this.state.paymentAmountsSelected.splice(index, 1);
    this.state.paymentInstrumentSelected.splice(index, 1);
    this.setState({
      paymentMethodsSelected: this.state.paymentMethodsSelected,
      currenciesSelected: this.state.currenciesSelected,
      exchangeRatesSelected: this.state.exchangeRatesSelected,
      paymentAmountsSelected: this.state.paymentAmountsSelected,
      paymentInstrumentSelected: this.state.paymentInstrumentSelected
    });
  }

  generateDelivery = (delivery_price, zona, address, bill_time, employee) => {
    let del = {
      delivery_price: delivery_price,
      employee: employee,
      bill_id: null,
      delivery_status: "No Entregado",
      zona: zona,
      address: address,
      bill_time: bill_time,
      is_active: true
    };
    return del;
  };

  generatePickUp = store => {
    let pick = {
      pickup_status: "No Entregado",
      bill_id: null,
      store: store,
      is_active: true
    };
    return pick;
  };

  generateCashBill = employee => {
    let pick = {
      bill_id: null,
      employee: employee,
      is_active: true
    };
    return pick;
  };

  generateSubtotal = selectedBatch => {
    let subtotal = 0;

    this.state.batches.map(batch => {
      for (let i = 0; i < this.state.batchesSelected.length; i++) {
        if (batch.id === this.state.batchesSelected[i]) {
          subtotal =
            subtotal +
            Number(batch.price_dolars_u) *
              Number(this.state.quantitiesSelected[i]) -
            Number(batch.price_dolars_u) *
              Number(this.state.quantitiesSelected[i]) *
              Number(batch.discount);
        }
      }
    });

    return subtotal;
  };

  generateTotal = (subtotal, delivery, iva) => {
    if (delivery.id > 0) {
      const total =
        Number(subtotal) +
        Number(subtotal) * Number(iva) +
        Number(delivery.delivery_price);

      return Number(total);
    } else {
      const total = Number(subtotal) + Number(subtotal) * Number(iva);

      return Number(total);
    }
  };

  generatePoints = total => {
    const points = total / 15;

    return points;
  };

  handleFormSubmit = event => {
    let delivery = {};
    let bill_sub_total = 0;
    let total = 0;
    let bill_delivery = false;
    let bill_pickup = false;
    let pickup = {};
    let cashBill = {};
    let bill_earned_points = Number(0);

    console.log("ENTRE");
    var moment = require("moment");
    if (
      this.state.productLoading === false &&
      this.state.quantitiesLoading === false
    ) {
      if (this.state.clientSelected.id > 0) {
        if (this.state.productsSelected.length > 0) {
          if (
            this.state.quantitiesSelected.length ===
            this.state.productsSelected.length
          ) {
            if (
              this.state.batchesSelected.length ===
              this.state.productsSelected.length
            ) {
              const bill_time = moment(event.time).format("HH:mm:ss");
              const bill_date = moment().format("YYYY-MM-DD");
              const products = this.state.productsSelected;
              const quantities = this.state.quantitiesSelected;
              bill_sub_total = this.generateSubtotal(
                this.state.batchesSelected
              );

              if (this.state.selected === "1") {
                bill_delivery = true;
                bill_pickup = false;
              }
              if (this.state.selected === "2") {
                bill_delivery = false;
                bill_pickup = true;
              }
              if (this.state.selected === "3") {
                bill_delivery = false;
                bill_pickup = false;
              }

              if (bill_delivery) {
                if (this.state.employees.length > 0) {
                  this.state.stores.forEach(store => {
                    if (store.id === this.state.storeSelected) {
                      if (store.zona === event.Sucursal) {
                        if (this.state.memberSelected.id > 0) {
                          const time = moment(event.time).add(2, "hours");
                          delivery = this.generateDelivery(
                            0,
                            event.Zona,
                            event.Direccion,
                            time,
                            this.state.employees[0].id
                          );
                        } else {
                          const time = moment(event.time).add(24, "hours");
                          const price = 15;
                          delivery = this.generateDelivery(
                            price,
                            event.Zona,
                            event.Direccion,
                            time,
                            this.state.employees[0].id
                          );
                        }
                      } else {
                      }
                    }
                  });
                }
              }
              if (bill_pickup) {
                pickup = this.generatePickUp(this.state.employees[0].id);
              }
              if (bill_pickup === false && bill_delivery === false) {
                cashBill = this.generateCashBill(this.state.employees[0].id);
              }

              total = Number(
                this.generateTotal(bill_sub_total, delivery, event.IVA)
              );

              if (this.state.memberSelected.id > 0) {
                if (total >= 15) {
                  bill_earned_points = Math.round(this.generatePoints(total));
                } else {
                  bill_earned_points = 1;
                }
              } else {
                bill_earned_points = 0;
              }

              console.log(bill_earned_points);

              this.setState(
                {
                  dataBill: {
                    client_id: this.state.clientSelected.id,
                    bill_sub_total: bill_sub_total,
                    bill_iva: event.IVA,
                    bill_date: bill_date,
                    bill_time: bill_time,
                    bill_earned_points: bill_earned_points,
                    bill_delivery: bill_delivery,
                    bill_pickup: bill_pickup,
                    is_active: true
                  },
                  hasDelivery: bill_delivery,
                  hasPickUp: bill_pickup,
                  dataDelivery: delivery,
                  dataPickUp: pickup,
                  dataCashR: cashBill,
                  canPay: true,
                  total: Number(total)
                },
                () =>
                  this.setState({
                    created: false
                  })
              );

              console.log(Number(this.state.total));
            } else {
              alert(
                "Ha olvidado seleccionar un lote en alguno(s) de sus productos"
              );
            }
          } else {
            alert(
              "Ha olvidado seleccionar la cantidad en alguno(s) de sus productos"
            );
          }
        } else {
          alert("No ha seleccionado ningun producto");
        }
      } else {
        alert("Cliente no Registrado");
      }
    }
  };

  choice() {
    if (this.state.selected == "1") {
      return (
        <div>
          <h3>Delivery</h3>

          <Form.Item
            name="Direccion"
            label="Dirección"
            rules={[{ required: true }]}
          >
            <Input
              placeholder="Introduzca la dirección"
              name="address"
              style={{ width: 300 }}
              allowClear
            />
          </Form.Item>
          <Form.Item name="Zona" label="Zona" rules={[{ required: true }]}>
            <Select
              placeholder="Seleccione la zona"
              name="zona"
              style={{ width: 300 }}
              allowClear
            >
              {this.state.zonas.map(zona => (
                <Option value={zona.id} key={"zona." + zona.id}>
                  {zona.zona_name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </div>
      );
    }
    if (this.state.selected == "2") {
      return (
        <div>
          <h3>Pick Up</h3>
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
      );
    }
    if (this.state.selected == "3") {
      return (
        <div>
          <h3>Cash Register</h3>
          <Form.Item name="Cajera" label="Cajera" rules={[{ required: true }]}>
            <Select
              placeholder="Choose the Cash Register"
              name="sucursal"
              style={{ width: 200 }}
              allowClear
            >
              {this.state.cashregisters.map(cashregister => (
                <Option value={cashregister.id} key={cashregister.id}>
                  {cashregister.employee}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </div>
      );
    }
  }
  getOptions = array => {
    const options = array.filter(
      x =>
        x.id !==
        this.state.productsSelected[this.state.productsSelected.length - 1]
    );
    return options;
  };
  getActivos = array => {
    const activos = array.filter(x => x.is_active === true);
    return activos;
  };

  getEspecial = array => {
    if (this.state.memberSelected.id > 0) {
      return array;
    } else {
      const noE = array.filter(x => x.is_special === false);
      return noE;
    }
  };

  getMethodPuntos = array => {
    if (this.state.memberSelected.id > 0) {
      return array;
    } else {
      const noE = array.filter(x => x.payment_method !== "Puntos");
      return noE;
    }
  };

  getproductBatch = array => {
    const batchs = array.filter(
      x =>
        x.product_name ===
        this.state.productsSelected[this.state.productsSelected.length - 1]
    );
    return batchs;
  };

  getbatchQuantity = array => {
    const final = array.filter(
      x =>
        x.units - x.units_sold - x.units_lost >=
        this.state.quantitiesSelected[this.state.quantitiesSelected.length - 1]
    );
    return final;
  };

  getBatchStore = array => {
    const final = array.filter(x => x.store === this.state.storeSelected);
    return final;
  };

  getRate = array => {
    const final = array.filter(
      x => x.origin_currency === this.state.currencySelected
    );
    return final;
  };

  generateTotalPaid() {
    let totalPaid = 0;
    for (let i = 0; i < this.state.paymentAmountsSelected.length; i++) {
      this.state.exchangerates.map(rate => {
        if (rate.id === this.state.exchangeRatesSelected[i]) {
          totalPaid =
            Number(totalPaid) +
            Number(this.state.paymentAmountsSelected[i]) /
              Number(rate.exchange_rate);
        }
      });
    }

    return totalPaid;
  }

  handlePaymentFormSubmit = event => {
    var moment = require("moment");
    let totalPaid = this.generateTotalPaid();
    console.log("total", this.state.total);
    console.log(totalPaid);
    // if (Number(totalPaid) > Number(this.state.total)) {
    // if (Number(totalPaid) < Number(this.state.total)) {
    if (Number(totalPaid) === Number(this.state.total)) {
      axios
        .post("http://127.0.0.1:8000/api/bill/", {
          client_id: this.state.dataBill.client_id,
          bill_sub_total: this.state.dataBill.bill_sub_total,
          bill_iva: this.state.dataBill.bill_iva,
          bill_date: this.state.dataBill.bill_date,
          bill_time: this.state.dataBill.bill_time,
          bill_earned_points: Math.round(
            this.state.dataBill.bill_earned_points
          ),
          bill_delivery: this.state.dataBill.bill_delivery,
          bill_pickup: this.state.dataBill.bill_pickup,
          is_active: this.state.dataBill.is_active
        })
        .then(res => {
          var bills = [];
          var lastBill;
          axios.get("http://127.0.0.1:8000/api/bill/").then(res => {
            bills = res.data;
            bills.forEach((bill, index) => {
              if (index == bills.length - 1) {
                lastBill = bill;
              }
            });
            const currentBillID = lastBill.id;
            console.log("Bill", this.state.dataDelivery);
            if (this.state.hasDelivery) {
              axios
                .post("http://127.0.0.1:8000/api/delivery/", {
                  delivery_price: this.state.dataDelivery.delivery_price,
                  employee: this.state.dataDelivery.employee,
                  bill_id: currentBillID,
                  delivery_status: this.state.dataDelivery.delivery_status,
                  zona: this.state.dataDelivery.zona,
                  address: this.state.dataDelivery.address,
                  bill_time: moment(this.state.dataDelivery.bill_time).format(
                    "HH:mm:ss"
                  ),
                  is_active: this.state.dataDelivery.is_active
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
            }
            console.log("Bill", currentBillID);
            if (this.state.hasPickUp) {
              axios
                .post("http://127.0.0.1:8000/api/pickup/", {
                  pickup_status: this.state.dataPickUp.pickup_status,
                  bill_id: currentBillID,
                  store: this.state.dataPickUp.store,
                  is_active: this.state.dataPickUp.is_active
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
            }
            if (
              this.state.hasPickUp === false &&
              this.state.hasDelivery === false
            ) {
              axios
                .post("http://127.0.0.1:8000/api/cashregisterbills/", {
                  cash_register: this.state.dataCashR.employee,
                  bill: currentBillID,
                  is_active: this.state.dataCashR.is_active
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
            }

            console.log(this.state.batches);

            this.state.batches.map(batch => {
              console.log("ENTRE2");
              for (let i = 0; i < this.state.batchesSelected.length; i++) {
                console.log("ENTRE3");
                if (batch.id === this.state.batchesSelected[i]) {
                  const unidades =
                    batch.units_sold + this.state.quantitiesSelected[i];
                  console.log("Unidades", unidades, batch.id);
                  return axios
                    .put(`http://127.0.0.1:8000/api/batch/${batch.id}/`, {
                      product_name: batch.product_name,
                      units: batch.units,
                      expiration_date: batch.expiration_date,
                      elaboration_date: batch.elaboration_date,
                      price_dolars_u: batch.price_dolars_u,
                      units_sold: unidades,
                      units_lost: batch.units_lost,
                      discount: batch.discount,
                      price_points: batch.price_points,
                      store: batch.store,
                      is_active: batch.is_active
                    })
                    .then(res => console.log(res))
                    .catch(error => console.err(error));
                }
              }
            });
            console.log(this.state.memberSelected);

            if (this.state.memberSelected.id > 0) {
              const puntos =
                this.state.memberSelected.member_points +
                Math.round(this.state.dataBill.bill_earned_points);
              axios
                .put(
                  `http://127.0.0.1:8000/api/member/${this.state.memberSelected.id}/`,
                  {
                    member_points: puntos,
                    member_email: this.state.memberSelected.member_email,
                    member_start_date: this.state.memberSelected
                      .member_start_date,
                    member_pay_date: this.state.memberSelected.member_pay_date,
                    client: this.state.memberSelected.client,
                    is_active: this.state.memberSelected.is_active,
                    member_birth_date: this.state.memberSelected
                      .member_birth_date
                  }
                )
                .then(res => console.log(res))
                .catch(error => console.err(error));
            }

            for (let i = 0; i < this.state.batchesSelected.length; i++) {
              axios
                .post("http://127.0.0.1:8000/api/billdetails/", {
                  bill_id: currentBillID,
                  product_batch_id: this.state.batchesSelected[i],
                  product_quantity: this.state.quantitiesSelected[i],
                  is_active: true
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
            }
            for (let i = 0; i < this.state.paymentAmountsSelected.length; i++) {
              axios
                .post("http://127.0.0.1:8000/api/payment/", {
                  bill: currentBillID,
                  payment_amount: this.state.paymentAmountsSelected[i],
                  payment_method: this.state.paymentMethodsSelected[i],
                  payment_method_instrument: "5018782000850214",
                  is_active: true
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
            }
          });
        });
    }
    // } else {
    //   alert("No ha pagado toda la compra");
    // }
    // } else {
    //   alert("Ha exedido el monto");
    // }
  };

  handlePay() {
    if (this.state.canPay) {
      return (
        <div>
          <h3>Monto a Cancelar {this.state.total}</h3>
          <Form
            ref={this.formRef}
            name="form"
            onFinish={this.handlePaymentFormSubmit}
          >
            <Form.List name="paymentForm">
              {(fields, { add, remove }) => {
                return (
                  <div>
                    <h3>Payments</h3>
                    {fields.map((field, index) => (
                      <div key={"div" + field.key}>
                        <Form.Item
                          {...(index === 0
                            ? formItemLayout
                            : formItemLayoutWithOutLabel)}
                          label={index === 0 ? "" : ""}
                          required={true}
                          key={"payment." + field.key}
                        >
                          <Select
                            onChange={value => this.handlePayment(value, index)}
                            style={{ width: 300 }}
                            placeholder="Choose a Payment Method"
                            optionFilterProp="children"
                            showSearch
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            {this.getMethodPuntos(
                              this.getActivos(this.state.methods)
                            ).map(method => (
                              <Option value={method.id} key={method.id}>
                                {method.payment_method}
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
                          key={"currencu." + field.key}
                        >
                          <Select
                            onChange={value =>
                              this.handleCurrency(value, index)
                            }
                            style={{ width: 300 }}
                            placeholder="Choose a Currency"
                            optionFilterProp="children"
                            showSearch
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            {this.getActivos(this.state.currencies).map(
                              currency => (
                                <Option value={currency.id} key={currency.id}>
                                  {currency.currency_name}
                                </Option>
                              )
                            )}
                          </Select>
                        </Form.Item>

                        <Form.Item
                          {...(index === 0
                            ? formItemLayout
                            : formItemLayoutWithOutLabel)}
                          label={index === 0 ? "" : ""}
                          required={true}
                          key={"exchange." + field.key}
                        >
                          <Select
                            onChange={value => this.handleRate(value, index)}
                            style={{ width: 300 }}
                            placeholder="Choose an Exchange Rate"
                            optionFilterProp="children"
                            showSearch
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            {this.getRate(
                              this.getActivos(this.state.exchangerates)
                            ).map(exchangerate => (
                              <Option
                                value={exchangerate.id}
                                key={exchangerate.id}
                              >
                                {exchangerate.exchange_rate}
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
                          key={"amount." + field.key}
                        >
                          <InputNumber
                            placeholder="Amount"
                            style={{ width: 300 }}
                            min={1}
                            onChange={value => this.handleAmount(value, index)}
                          />
                        </Form.Item>
                        <Form.Item
                          {...(index === 0
                            ? formItemLayout
                            : formItemLayoutWithOutLabel)}
                          label={index === 0 ? "" : ""}
                          required={true}
                          key={"instrument." + field.key}
                        >
                          <Input
                            placeholder="Instrument"
                            style={{ width: 300 }}
                            onChange={value =>
                              this.handleInstrument(value, index)
                            }
                          />
                        </Form.Item>

                        {fields.length > 1 ? (
                          <MinusCircleOutlined
                            className="dynamic-delete-button"
                            onClick={() => {
                              remove(field.name);
                              this.handleRemovePayment(index);
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
                        style={{ width: 300 }}
                      >
                        <PlusOutlined /> Add a Payment
                      </Button>
                    </Form.Item>
                  </div>
                );
              }}
            </Form.List>

            <br />
            <br />
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: 200 }}>
                Crear Pago
              </Button>
            </Form.Item>
          </Form>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Form ref={this.formRef} name="form" onFinish={this.handleFormSubmit}>
          <Form.Item
            name="Sucursal"
            label="Sucursal"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Choose the Store"
              name="sucursal"
              style={{ width: 200 }}
              onChange={value => this.handleStore(value)}
            >
              {this.state.stores.map(store => (
                <Option value={store.id} key={store.id}>
                  {store.store_name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="Cedula"
            rules={[{ required: true }]}
            label="Cedula"
            key={this.state.currBill.client_id}
          >
            <InputNumber
              onChange={value => this.handleCliente(value)}
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
                          {this.getEspecial(
                            this.getActivos(this.state.optionsProducts)
                          ).map(product => (
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
                          style={{ width: 300 }}
                          min={1}
                          max={10}
                          onChange={value => this.handleQuantity(value, index)}
                        />
                      </Form.Item>
                      <Form.Item
                        {...(index === 0
                          ? formItemLayout
                          : formItemLayoutWithOutLabel)}
                        label={index === 0 ? "" : ""}
                        required={true}
                        key={"batch." + field.key}
                      >
                        <Select
                          onChange={value => this.handleBatch(value, index)}
                          style={{ width: 300 }}
                          placeholder="Choose a Batch"
                          optionFilterProp="children"
                          showSearch
                          filterOption={(input, option) =>
                            option.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          {this.getBatchStore(
                            this.getbatchQuantity(
                              this.getproductBatch(
                                this.getActivos(this.state.batches)
                              )
                            )
                          ).map(batch => (
                            <Option value={batch.id} key={batch.id}>
                              EX: ({batch.expiration_date}) Price:
                              {batch.price_dolars_u}$
                            </Option>
                          ))}
                        </Select>
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
                      style={{ width: 300 }}
                    >
                      <PlusOutlined /> Add a Product
                    </Button>
                  </Form.Item>
                </div>
              );
            }}
          </Form.List>
          <h3>Choose</h3>
          <Form.Item name="select" rules={[{ required: true }]} label="Select">
            <Select
              placeholder="Select"
              name="hasDelivery"
              style={{ width: 300 }}
              allowClear
              onChange={value => this.handleChoice(value)}
            >
              <Option value="1">Delivery</Option>
              <Option value="2">PickUp</Option>
              <Option value="3">Cash Register</Option>
            </Select>
          </Form.Item>

          <div>{this.choice()}</div>
          <div>
            <h3>IVA</h3>
            <Form.Item name="IVA" label="IVA" rules={[{ required: true }]}>
              <Select
                placeholder="Choose the IVA"
                name="iva"
                style={{ width: 200 }}
              >
                {this.state.ivas.map(iva => (
                  <Option value={iva.id} key={iva.id}>
                    {iva.iva_porcentaje}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div>
          {/* HORA*/}
          <Form.Item
            name="time"
            label="Hora de entrega"
            rules={[{ required: true }]}
          >
            <TimePicker name="timeime" style={{ width: 200 }} />
          </Form.Item>
          <br />
          <br />
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: 200 }}>
              Crear
            </Button>
          </Form.Item>
        </Form>

        <div>{this.handlePay()}</div>
      </div>
    );
  }
}

export default BillCreateForm;

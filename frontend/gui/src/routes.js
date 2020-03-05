import React from "react";
import { Route, Redirect } from "react-router-dom";
import ProductTable from "./containers/TableViews/ProductTableView";
import ProductDetail from "./containers/ProductDetailView";
import BatchTable from "./containers/TableViews/BatchTableView";
import BatchDetail from "./containers/BatchDetailView";
import TypeProductTable from "./containers/TableViews/TypeProductTableView";
import ProductAndTypeTable from "./containers/TableViews/ProductAndTypeTableView";
import ClientTable from "./containers/TableViews/ClientTableView";
import MemberTable from "./containers/TableViews/MemberTableView";
import ZonaTable from "./containers/TableViews/ZonaTableView";
import CityTable from "./containers/TableViews/CityTableView";
import StateTable from "./containers/TableViews/StateTableView";
import StoreTable from "./containers/TableViews/StoreTableView";
import StoreBossTable from "./containers/TableViews/StoreBossTableView";
import DeliveryTable from "./containers/TableViews/DeliveryTableView";
import PickUpTable from "./containers/TableViews/PickUpTableView";
import BillTable from "./containers/TableViews/BillTableView";
import BillDetailTable from "./containers/TableViews/BillDetailTableView";
import CashRegisterTable from "./containers/TableViews/CashRegisterTableView";
import CashRegisterBillTable from "./containers/TableViews/CashRegisterBillTableView";
import PaymentTable from "./containers/TableViews/PaymentTableView";
import PaymentMethodTable from "./containers/TableViews/PaymentMethodTableView";
import CurrencyTable from "./containers/TableViews/CurrencyTableView";
import ExchangeRateTable from "./containers/TableViews/ExchangeRateTableView";
import EmployeeTable from "./containers/TableViews/EmployeeTableView";
import EmployeeStoreTable from "./containers/TableViews/EmployeeStoreTableView";
import JobTable from "./containers/TableViews/JobTableView";
import IVATable from "./containers/TableViews/IVATableView";
import ProviderTable from "./containers/TableViews/ProviderTableView";
import ProviderPhoneTable from "./containers/TableViews/ProviderPhoneTableView";
import Top5Table from "./containers/TableViews/Top5TableView";
import Top5MenosTable from "./containers/TableViews/Top5MenosTableView";
import Top5MiembrosTable from "./containers/TableViews/Top5MiembrosTableView";
import ListaPerdidasTable from "./containers/TableViews/ListaPerdidasTableView";
import TopSucursalTable from "./containers/TableViews/TopSucursalTableView";
import ListaEspecialesTable from "./containers/TableViews/ListaEspecialesTableView";
import VentasDiariasTable from "./containers/TableViews/VentasDiariasTableView";
import DineroCajaTable from "./containers/TableViews/DineroCajaTableView";
import DineroIntervaloTable from "./containers/TableViews/DineroIntervaloTableView";
import TypeProductDetail from "./containers/TypeProductDetailView";
import ProductAndTypeDetail from "./containers/ProductAndTypeDetailView";
import ClientDetail from "./containers/DetailViews/ClientDetailView";
import MemberDetail from "./containers/DetailViews/MemberDetailView";
import CashRegisterDetail from "./containers/DetailViews/CashRegisterDetailView";
import EmployeeDetail from "./containers/DetailViews/EmployeeDetailView";
import HomeView from "./containers/HomeView";

const BaseRouter = () => (
  <div>
    <Route exact path="/product" component={ProductTable} />
    <Route exact path="/product/:productId" component={ProductDetail} />
    <Route exact path="/batch/" component={BatchTable} />
    <Route exact path="/batch/:batchId" component={BatchDetail} />
    <Route exact path="/typeproduct/" component={TypeProductTable} />
    <Route
      exact
      path="/typeproduct/:typeproductId"
      component={TypeProductDetail}
    />
    <Route exact path="/productandtype/" component={ProductAndTypeTable} />
    <Route
      exact
      path="/productandtype/:productandtypeId"
      component={ProductAndTypeDetail}
    />
    <Route exact path="/client/" component={ClientTable} />
    <Route exact path="/client/:clientId" component={ClientDetail} />
    <Route exact path="/member/" component={MemberTable} />
    <Route exact path="/member/:memberId" component={MemberDetail} />
    <Route exact path="/zona/" component={ZonaTable} />
    <Route exact path="/city/" component={CityTable} />
    <Route exact path="/state/" component={StateTable} />
    <Route exact path="/store/" component={StoreTable} />
    <Route exact path="/storeboss/" component={StoreBossTable} />
    <Route exact path="/delivery/" component={DeliveryTable} />
    <Route exact path="/pickup/" component={PickUpTable} />
    <Route exact path="/bill/" component={BillTable} />
    <Route exact path="/billdetail/" component={BillDetailTable} />
    <Route exact path="/cashregister/" component={CashRegisterTable} />
    <Route
      exact
      path="/cashregister/:cashregisterId"
      component={CashRegisterDetail}
    />
    <Route exact path="/cashregisterbill/" component={CashRegisterBillTable} />
    <Route exact path="/payment/" component={PaymentTable} />
    <Route exact path="/paymentmethod/" component={PaymentMethodTable} />
    <Route exact path="/currency/" component={CurrencyTable} />
    <Route exact path="/exchangerate/" component={ExchangeRateTable} />
    <Route exact path="/employee/" component={EmployeeTable} />
    <Route exact path="/employee/:employeeId" component={EmployeeDetail} />
    <Route exact path="/employeestore/" component={EmployeeStoreTable} />
    <Route exact path="/job/" component={JobTable} />
    <Route exact path="/iva/" component={IVATable} />
    <Route exact path="/provider/" component={ProviderTable} />
    <Route exact path="/providerphone/" component={ProviderPhoneTable} />
    <Route exact path="/top5/" component={Top5Table} />
    <Route exact path="/top5menos/" component={Top5MenosTable} />
    <Route exact path="/top5miembros/" component={Top5MiembrosTable} />
    <Route exact path="/listaperdidas/" component={ListaPerdidasTable} />
    <Route exact path="/topsucursal/" component={TopSucursalTable} />
    <Route exact path="/listaespeciales/" component={ListaEspecialesTable} />
    <Route exact path="/ventasdiarias/:start" component={VentasDiariasTable} />
    <Route exact path="/dinerocaja/:start" component={DineroCajaTable} />
    <Route
      exact
      path="/dinerointervalo/:start/:end/"
      component={DineroIntervaloTable}
    />
    <Route exact path="/" component={HomeView} />
  </div>
);

export default BaseRouter;

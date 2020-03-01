import React from "react";
import { Route } from "react-router-dom";
import ProductTable from "./containers/ProductTableView";
import ProductDetail from "./containers/ProductDetailView";
import BatchTable from "./containers/BatchTableView";
import BatchDetail from "./containers/BatchDetailView";

const BaseRouter = () => (
  <div>
    <Route exact path="/product" component={ProductTable} />
    <Route exact path="/product/:productId" component={ProductDetail} />
    <Route exact path="/batch/" component={BatchTable} />
    <Route exact path="/batch/:batchId" component={BatchDetail} />
  </div>
);

export default BaseRouter;

import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Clients from "./Pages/Clientes";
import HeaderComponent from "./Components/Header/Header";

export default function Routes() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />  
        <Route path="/clients" exact component={Clients} />
      </Switch>
    </BrowserRouter>
  );
}

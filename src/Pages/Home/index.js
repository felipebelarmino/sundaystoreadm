import React from "react";
import * as S from "./styled";
import ProductCard from "../../Components/ProductCard";
import Client from "../../Components/Client";

function Home() {
  let products, clients;

  function loadInfo() {
    if(JSON.parse(localStorage.getItem("clients"))) {
      clients = JSON.parse(localStorage.getItem("clients"));
    } else { clients = []; }
    if(JSON.parse(localStorage.getItem("products"))) {
      products = JSON.parse(localStorage.getItem("products"));
    } else { products = []; }
  }
  window.onload = loadInfo();
  return (
    <S.Container>
      <div>        
        <S.Title>{products.length > 0 || null ? "Produtos" : "Nenhum produto cadastrado."}</S.Title>
        <ProductCard />
      </div>
      <S.Hr />
      <div>
        <S.Title>{clients.length > 0 || null ? "Clientes" : "Nenhum cliente cadastrado."}</S.Title>
        <Client />
      </div>
    </S.Container>
  );
}

export default Home;

import React from "react";
import * as S from "./styled";

function Products() {
  let products = JSON.parse(localStorage.getItem("products"));

  function removeProduct(name) {
    let productsFiltered = products.filter((p) => p.name !== name);
    console.log(productsFiltered);
    localStorage.removeItem("products");
    localStorage.setItem("products", JSON.stringify(productsFiltered));
    products = productsFiltered;
    window.location.reload();
  }

  return (
    <S.Container>
      {!products ? (
        <h3>"Não há produtos cadastrados ainda!"</h3>
      ) : (
        products.map((product) => (
          <S.ProductCard key={product.name} product={product}>
            <S.Image src={product.url} alt={product.name} />
            <S.Title>{product.name}</S.Title>
            <S.Qty>Estoque: {product.qty}</S.Qty>
            <S.Price>Preço: {product.value}</S.Price>
            <S.Desc>{product.desc}</S.Desc>
            <S.BtnDelete
              onClick={(e) => {
                e.stopPropagation();
                removeProduct(product.name);
              }}
            >
              Excluir
            </S.BtnDelete>
          </S.ProductCard>
        ))
      )}
    </S.Container>
  );
}

export default Products;

import React from "react";
import ProductCard from "../../Components/ProductCard";
import { useForm } from "react-hook-form";
import * as S from "./styled";

function Products() {
  let storageExists = localStorage.getItem("products");

  let products = [];

  if (storageExists) {
    products = JSON.parse(localStorage.getItem("products"));
  }

  function createProduct(product) {
    if (products === null) {
      products.push({
        name: product.name,
        qty: product.qty,
        value: product.value,
        desc: product.desc,
        url: product.url,
      });
      console.log(products);

      localStorage.setItem("products", JSON.stringify(products));
    } else {
      const productAlreadyExists = products.find(
        (storagedProduct) => storagedProduct.name === product.name
      );

      if (productAlreadyExists) {
        alert("Produto já cadastrado!");
        return;
      } else {
        products.push({
          name: product.name,
          qty: product.qty,
          value: product.value,
          desc: product.desc,
          url: product.url,
        });
        localStorage.removeItem("products");
        localStorage.setItem("products", JSON.stringify(products));
      }
    }
  }

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    createProduct(data);
    window.location.reload();  
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Container>
          <S.Title>Cadastre um produto</S.Title>  
          <S.Input
            {...register("name", { required: true, maxLength: 50 })}
            id="name"
            type="text"
            name="name"
            placeholder="Nome"
          />          
          <S.Input
            {...register("qty", { required: true, min: 1, max: 50 })}
            id="qty"
            type="number"
            name="qty"
            placeholder="Quantidade"
            min="1"
            max="50"
          />          
          <S.Input
            {...register("value", { required: true, maxLength: 6 })}
            id="value"
            pattern="^\d*(\.\d{0,2})?$"
            name="value"
            placeholder="Valor"
          />          
          <S.Input
            {...register("desc", { required: true, maxLength: 250 })}
            id="desc"
            type="text"
            name="desc"
            placeholder="Descrição"
          />          
          <S.Input
            {...register("url", { required: true })}
            pattern="^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$"
            id="url"
            type="text"
            name="url"
            placeholder="Url"
          />
          <S.Button type="submit">Cadastrar</S.Button>
        </S.Container>
      </form>
      <ProductCard products={products}/>
    </>
  );
}

export default Products;

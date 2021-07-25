import React from "react";
import Client from "../../Components/Client";
import { useForm } from "react-hook-form";
import * as S from "./styled";

function Clients() {
  let storageExists = localStorage.getItem("clients");

  let clients = [];

  if (storageExists) {
    clients = JSON.parse(localStorage.getItem("clients"));
  }

  function createClient(client) {
    if (clients === null) {
      clients.push({
        name: client.name,
        qty: client.qty,        
        desc: client.desc,
      });
      console.log(clients);

      localStorage.setItem("clients", JSON.stringify(clients));
    } else {
      const clientAlreadyExists = clients.find(
        (storagedClient) => storagedClient.name === client.name
      );

      if (clientAlreadyExists) {
        alert("Cliente já cadastrado!");
        return;
      } else {
        clients.push({
          name: client.name,
          qty: client.qty,
          desc: client.desc,
        });
        localStorage.removeItem("clients");
        localStorage.setItem("clients", JSON.stringify(clients));
      }
    }
  }

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    createClient(data);
    window.location.reload();  
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Container>
          <S.Title>Cadastre um cliente</S.Title>  
          <S.Input
            {...register("name", { required: true, maxLength: 100 })}
            id="name"
            type="text"
            name="name"
            placeholder="Nome"
          />          
          <S.Input
            {...register("qty", { required: true, min: 1, max: 120 })}
            id="qty"
            type="number"
            name="qty"
            placeholder="Idade"
            min="1"
            max="120"
          />
          <S.Input
            {...register("desc", { required: true, maxLength: 250 })}
            id="desc"
            type="text"
            name="desc"
            placeholder="Profissão"
          />
          <S.Button type="submit">Cadastrar</S.Button>
        </S.Container>
      </form>
      <Client clients={clients}/>
    </>
  );
}

export default Clients;

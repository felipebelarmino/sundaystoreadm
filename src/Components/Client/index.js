import React from "react";
import * as S from "./styled";

function Client() {
  let clients = JSON.parse(localStorage.getItem("clients"));

  function removeClient(name) {
    let clientsFiltered = clients.filter((c) => c.name !== name);
    console.log(clientsFiltered);
    localStorage.removeItem("clients");
    localStorage.setItem("clients", JSON.stringify(clientsFiltered));
    clients = clientsFiltered;
    window.location.reload();
  }

  return (
    <S.Container>
      {!clients ? (
        <h3>"Não há clientes cadastrados ainda!"</h3>
      ) : (
        clients.map((client) => (
          <S.ClientCard key={client.name} client={client}>            
            <S.Title>Nome: {client.name}</S.Title>
            <S.Qty>Idade: {client.qty}</S.Qty>            
            <S.Desc>Profissão: {client.desc}</S.Desc>
            <S.BtnDelete
              onClick={(e) => {
                e.stopPropagation();
                removeClient(client.name);
              }}
            >
              Excluir
            </S.BtnDelete>
          </S.ClientCard>
        ))
      )}
    </S.Container>
  );
}

export default Client;

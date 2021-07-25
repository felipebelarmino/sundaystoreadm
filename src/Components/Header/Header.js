import React from "react";
import * as Style from "./styled";
import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <Style.Header>
      <Style.Container>
        <Link to="/">
          <Style.Logo>Sunday Store</Style.Logo>
        </Link>
        <Style.StandardBox>
          <Style.PButton>
            <Link to="/clients">Clientes</Link>
          </Style.PButton>
          <Style.PButton>
            <Link to="/products">Produtos</Link>
          </Style.PButton>
        </Style.StandardBox>
      </Style.Container>
    </Style.Header>
  );
}

export default HeaderComponent;

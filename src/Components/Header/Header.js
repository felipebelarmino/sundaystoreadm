import React from "react";
import Felipe from "../../Images/Felipe.jpeg";
import * as Style from "./styled";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

function HeaderComponent() {
  const history = useHistory();
  const user = "felipebelarmino";

  function handleSearch() {
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then((response) => {
        const repositories = response.data.map(
          (repositorie) => repositorie.name
        );
        localStorage.setItem("Repositories", JSON.stringify(repositories));
        history.push("/repositories");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Style.Header>
      <Style.Container>
        <Style.StandardBox>
          <Link to="/">
            <Style.Felipe src={Felipe} alt="Author" />
          </Link>
        </Style.StandardBox>

        <Style.StandardBox>
          <Link to="/about">
            <Style.PButton>About me</Style.PButton>
          </Link>
          <Link to="/projects">
            <Style.PButton>Projects</Style.PButton>
          </Link>
          <Link to="/blog">
            <Style.PButton>Blog</Style.PButton>
          </Link>
          <Style.PButton onClick={handleSearch}>Repos</Style.PButton>
          <Link to="/contact">
            <Style.PButton>Contact Me</Style.PButton>
          </Link>
        </Style.StandardBox>
      </Style.Container>
    </Style.Header>
  );
}

export default HeaderComponent;

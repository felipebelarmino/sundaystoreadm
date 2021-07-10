import React, { useEffect, useState } from "react";
import * as Style from "./styled";
import { useHistory } from "react-router-dom";

function Repositories() {
  const history = useHistory();
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const repositories = localStorage.getItem("Repositories");

    if (repositories) {
      setRepositories(JSON.parse(repositories));
      localStorage.clear();
    } else {
      history.push("/");
    }
  }, [history]);

  return (
    <Style.Container>      
      <Style.List>
        {repositories.map((repo, index) => (
          <Style.ListItem key={index}>
            {index + 1} - {repo}
          </Style.ListItem>
        ))}
      </Style.List>
      <Style.LinkHome to="/">Voltar</Style.LinkHome>
    </Style.Container>
  );
}

export default Repositories;

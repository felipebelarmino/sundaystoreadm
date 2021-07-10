import React from "react";
import * as Style from "./styled";

function Home() {
  return(
    <Style.Container>
      Home
    </Style.Container>
  )
}

export default Home;


// import React, { useState } from "react";
// import axios from "axios";
// import * as Style from "./styled";
// import { useHistory } from "react-router-dom";

// function Home() {
//   const history = useHistory();
//   const [user, setUser] = useState("");
//   const [erro, setErro] = useState(false);

//   function handleSearch() { 
//     axios
//       .get(`https://api.github.com/users/${user}/repos`)
//       .then((response) => {
//         const repositories = response.data.map(
//           (repositorie) => repositorie.name
//         );
//         localStorage.setItem("Repositories", JSON.stringify(repositories));
//         setErro(false);
//         history.push("/repositories");
//       })
//       .catch((err) => {
//         setErro(true);
//       });
//   }

//   return (
//     <Style.Container>
//       <div>
//         <Style.Input
//           className="usuarioInput"
//           placaeholder="Usuário"
//           value={user}
//           onChange={(event) => setUser(event.target.value)}
//         />
//         <Style.Button type="button" onClick={handleSearch}>
//           Pesquisar
//         </Style.Button>
//       </div>
//       {erro ? <Style.Error>Usuário não encontrado</Style.Error> : ""}
//     </Style.Container>
//   );
// }

// export default Home;

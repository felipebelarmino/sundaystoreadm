import React from "react";
import * as Style from "./styled";
import axios from "axios";

function Blog() {
  function handleLogin(email, password) {
    // let config = {
    //   headers: {
    //     Authorization:
    //       "Bearer " +
    //       "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJzdHJpbmciLCJyb2xlIjoiQXRlbmRlbnRlIiwibmJmIjoxNjI2MDIxMDY3LCJleHAiOjE2MjYxMDc0NjcsImlhdCI6MTYyNjAyMTA2N30.Po0dl8nznj7bn8VgDQb9d2Hk_Gq_zFy_n4Tkx5Ab2R8q3rZflXhrzgRf2l2jwsl11bd-4VYfNoSasceOsNwyzw",
    //   },
    // };

    let config = {
      headers: { 'Content-Type': 'application/json' },
    };

    let auth = {
      usernames: email,
      password: password,
    };

    axios
      .post("https://apiwithjwt2.azurewebsites.net/auth/login", auth, config)
      .then((response) => {
        console.log(response.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Style.Container>
      <label htmlFor="email">Email</label>
      <input type="text"></input>
      <label htmlFor="email">Password</label>
      <input type="password"></input>
      <button onClick={handleLogin("string", "123456")}>Login</button>
    </Style.Container>
  );
}

export default Blog;

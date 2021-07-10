import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;  
  justify-content: center;
  flex-direction: column;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  font-family: sans-serif;
  margin: auto;
`;

export const ListItem = styled.li`
  margin: 0.5rem 0;
  background: #333;
  color: #ffffff;
  padding: 0.5rem;
  border-radius: 3px;
  min-width: 250px;
  max-width: 350px;
`;

export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  background-color: #000000;
  padding: 0.5rem 0;
  text-decoration: none;
  &: visited, active {
    color: #fff;
  }
`;

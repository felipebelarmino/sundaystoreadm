import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid #ddd;
  padding: 0.3rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 13px;
  &:focus,
  &.active {
    outline: none;
  }
`;

export const Button = styled.button`
  border: 1px solid #ddd;
  padding: 0.3rem 1rem;
  margin: 5px;
  border-radius: 0.25rem;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;

export const Error = styled.p`
  color: red;
  font-weight: bold;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

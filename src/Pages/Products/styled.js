import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;  
  float: right;
  margin: 20px 20px 0 0;
  width: 40vw;
  box-shadow: 0px 0px 10px rgba(50, 50, 50, 0.8);
  border-radius: 8px;
  padding: calc( 10px + 1vw );
  background-color: rgba(255, 255, 255, 0.05);
  @media (max-width: 768px) {
    width: 90vw;
    margin: 50px auto;
    float: none;
  } 

`;

export const Label = styled.label`
  font-size: calc(8px + 1vw);
  margin: 0.5vw 0;
`;

export const Button = styled.button`
  font-size: calc(10px + 1vw);
  background-color: transparent;
  border: none;
  outline: none;
  margin-top: calc(10px + 1vw);
  transition: 200ms;
  &:hover {
    cursor: pointer;
    color: #ed145b;
  }
  @media (max-width: 768px) {
    font-size: calc(10px + 2vw);;
  }
`;

export const Input = styled.input`
  font-size: calc(7px + .8vw);
  border: 2px solid white;
  color: gray;
  outline: none;
  margin: 10px 0;
  padding: .1vw .5vw;
  &:focus, &:hover {
    border: 2px solid #ed145b;
  }
  @media (max-width: 768px) {
    font-size: calc(8px + 2vw);;
  }
`;

export const Title = styled.p`
  font-size: calc(10px + 1vw);
  text-align: center;
  @media (max-width: 768px) {
    font-size: calc(10px + 2vw);;
  }
`;
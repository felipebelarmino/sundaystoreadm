import styled from "styled-components";

export const Header = styled.div`
  background-color: #1c2023;
  height: 70px;
`;

export const Container = styled.div`
  border-bottom: 2px solid #ed145b;
  height: 100%;
  margin: 0 100px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StandardBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Felipe = styled.img`
  width: 50px;
  border-radius: 50%;
`;
export const PButton = styled.p`
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

import styled from "styled-components";

export const Header = styled.div`
  @media (max-width: 768px) {
    height: 12vh;
  }
`;

export const Container = styled.div`
  height: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;  
`;

export const StandardBox = styled.div`
  width: 30vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;

export const Logo = styled.p`  
  font-size: calc(12px + 3vw);
  font-family: 'Vampiro One', cursive;
  color: white;
  &:hover {
    color: #ed145b;
  }
  @media (max-width: 768px) {
    font-size: 28px;
    position: absolute;
    top: 10px;
  }
`;

export const PButton = styled.p`
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
  font-size: calc(10px + 1vw);
  transition: 100ms;
  a:hover {
    color: #ed145b;
  }

  @media (max-width: 768px) {
    font-weight: bold;
    align-items: flex-end;
    font-size: calc(12px + 2vw)
  }
`;

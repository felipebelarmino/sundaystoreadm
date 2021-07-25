import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 20px auto;
`;

export const ProductCard = styled.div`
  width: calc(50px + 12vw);
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: black;
`;

export const Desc = styled.p`
  font-size: 16px;
  text-align: center;
  color: gray;
`;

export const Qty = styled.p`
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  color: red;
`;

export const Price = styled.p`
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  color: green;
`;

export const Image = styled.img`
  width: calc(50px + 8vw);
`;

export const BtnDelete = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #f44336;
  color: white;
  font-size: 16px;
  letter-spacing: 3px;
  text-align: center;
  border: none;
  cursor: pointer;
`;
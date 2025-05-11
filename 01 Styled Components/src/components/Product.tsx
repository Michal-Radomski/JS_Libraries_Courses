import React from "react";
import styled from "styled-components";

const Wrapper = styled.article<{ $price: number }>`
  width: 300px;
  background: #fff;
  padding: 1rem;
  border-radius: 0.25rem;
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4 {
    text-transform: capitalize;
  }
  p {
    color: ${({ $price }) => {
      if ($price < 100) return "green";
      if ($price > 500) return "red";
      return "#444";
    }};
  }
`;

const Product = ({ name, price }: { name: string; price: number }): JSX.Element => {
  return (
    <React.Fragment>
      <Wrapper $price={price}>
        <h4>{name}</h4>
        <p>${price}</p>
      </Wrapper>
    </React.Fragment>
  );
};

export default Product;

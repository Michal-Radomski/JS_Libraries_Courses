import React from "react";
import styled, { css } from "styled-components";

const fruits = ["orange", "apple", "banana", "peach"];

const Item = styled.li<{ $odd: boolean }>`
  list-style-type: none;

  ${({ $odd }) => {
    // console.log("$odd:", $odd);
    return $odd
      ? css`
          color: white;
          background: red;
          font-size: 1.5rem;
          padding: 1.5rem;
        `
      : css`
          color: #222;
          padding: 1rem;
        `;
  }}
`;

const List = (): JSX.Element => {
  return (
    <React.Fragment>
      <ul>
        {fruits.map((item, index) => {
          return (
            <Item key={index} $odd={(index + 1) % 2 !== 0}>
              {item}
            </Item>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default List;

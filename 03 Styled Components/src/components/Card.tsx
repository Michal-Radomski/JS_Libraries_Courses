import React from "react";
import styled from "styled-components";

const StyledCard = styled.article`
  width: 90vw;
  max-width: 300px;
  background: var(--white);
  border-radius: 0.25rem;
  img {
    width: 100%;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    h4 {
      text-transform: capitalize;
      &::before {
        content: "Name : ";
        color: red;
      }
    }
    p {
      color: var(--primary);
      font-weight: 700;
    }
  }

  transition: all 0.5s ease-in-out;
  &:hover {
    box-shadow: 0 3px 3px #222;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

const Card = (): JSX.Element => {
  return (
    <React.Fragment>
      <StyledCard>
        <img
          src="https://images.unsplash.com/photo-1702350310771-65ea21568baa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="animal"
        />
        <footer>
          <h4>Animal</h4>
          <p>animal</p>
        </footer>
      </StyledCard>
    </React.Fragment>
  );
};

export default Card;

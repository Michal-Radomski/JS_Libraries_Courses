import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  h1 {
    text-transform: capitalize;
    text-align: center;
    color: blue;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: var(--primary);
    margin: 0 auto;
  }
  .box {
    height: auto;
    border: var(--mainBorder);
    font-weight: bold;
    padding: 1rem;
  }
`;

const ComplexTitle = ({ title }: { title: string }): JSX.Element => {
  return (
    <React.Fragment>
      <Wrapper>
        <h1>{title}</h1>
        <div className="underline"></div>
        <div className="box">Box</div>
      </Wrapper>
    </React.Fragment>
  );
};

export default ComplexTitle;

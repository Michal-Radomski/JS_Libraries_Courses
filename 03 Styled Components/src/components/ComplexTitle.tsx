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
    height: 0.5rem;
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

const ComplexTitle = ({ title, className }: { title: string; className?: string }): JSX.Element => {
  // console.log("className:", className);
  return (
    <React.Fragment>
      <Wrapper className={className}>
        <h1>{title}</h1>
        <div className="underline"></div>
        <div className="box">Box</div>
      </Wrapper>
    </React.Fragment>
  );
};

const ComplexTitleWrapper = styled(ComplexTitle)`
  border: 5px solid lime;
`;
export default ComplexTitleWrapper;

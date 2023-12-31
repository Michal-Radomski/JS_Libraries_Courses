import React from "react";
import styled from "styled-components";

import { colors, setupBorder } from "../utils";

const Wrapper = styled.div`
  h1 {
    text-transform: capitalize;
    text-align: center;
    color: blue;
  }
  .underline {
    width: 5rem;
    height: 0.5rem;
    /* background: var(--primary); */
    background: ${colors.primary};
    margin: 0 auto;
  }
  .box {
    height: auto;
    /* border: var(--mainBorder); */
    border: ${setupBorder({ width: 5, type: "solid", color: "deeppink" })};
    font-weight: bold;
    padding: 1rem;
  }
`;

const ComplexTitle = ({ title, className }: { title: string; className?: string }): JSX.Element => {
  // console.log("className:", className);
  return (
    <React.Fragment>
      <Wrapper className={`${className} bg-grey`}>
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

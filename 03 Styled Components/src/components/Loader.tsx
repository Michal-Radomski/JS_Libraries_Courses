import React from "react";
import styled, { keyframes } from "styled-components";

const spinner = keyframes`
to{
 transform:rotate(360deg);
}
`;

const Loading = styled.div`
  margin: 1rem auto;
  width: 6rem;
  height: 6rem;
  border: 5px solid #ccc;
  border-radius: 50%;
  border-top-color: var(--primary);
  animation: ${spinner} 0.6s linear infinite;
`;

const Loader = (): JSX.Element => {
  return (
    <React.Fragment>
      <Loading />
    </React.Fragment>
  );
};

export default Loader;

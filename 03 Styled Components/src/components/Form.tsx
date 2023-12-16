import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button.attrs((props) => {
  // console.log(1, "props:", props);
  return { type: props.type || "button" };
})`
  background: var(--primary);
  border: none;
  color: white;
  padding: 0.25rem;
  cursor: pointer;
  ${({ type }) => {
    return (
      type === "submit" &&
      css`
        display: block;
        width: 100%;
        margin-top: 1rem;
        border-radius: 0.25rem;
      `
    );
  }}
`;

const BasicInput = styled.input.attrs((props) => {
  // console.log(2, "props:", props);
  return {
    type: props.type || "text",
    placeholder: props.placeholder || "please enter value",
  };
})`
  box-sizing: border-box;
  padding: 0.5rem;
  border: 2px solid #f2f4f8;
  border-radius: 0.25rem;
  width: 100%;
  margin-top: 1rem;
`;

const Form = (): JSX.Element => {
  return (
    <React.Fragment>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <h2>some random stuff</h2>
        {/* type="button"  unnecessary */}
        <Button>click me</Button>
        <form>
          <h2>Form</h2>
          <BasicInput />
          <BasicInput />
          <BasicInput type="password" placeholder="enter password" />
          <BasicInput type="email" placeholder="enter email" />
          <Button type="submit">submit here</Button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Form;

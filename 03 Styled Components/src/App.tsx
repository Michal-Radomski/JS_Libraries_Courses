import React from "react";
import styled from "styled-components";

const Button = styled.button({ color: "red", backgroundColor: "yellow" });
const Button2 = styled.button`
  color: blue;
  background-color: yellow;
`;

function App(): JSX.Element {
  return (
    <React.Fragment>
      <div style={{ padding: "2rem" }}>
        <h1>Styled Components </h1>
        <Button>Button</Button>
        <Button2>Button2</Button2>
      </div>
    </React.Fragment>
  );
}

export default App;

//* Tagged Template String
// function highlight(strings: TemplateStringsArray, ...values: string[]): string {
//   // console.log("values:", values);
//   let str = "";
//   strings.forEach((string, i) => {
//     str += string + values[i];
//   });
//   return str;
// }

// const name = "Snickers";
// const age = "100";
// const sentence = highlight`My dog's name is ${name} and he is ${age} years old`;
// console.log("sentence:", sentence);

// console.log("sentence:", `My dog's name is ${name} and he is ${age} years old`);

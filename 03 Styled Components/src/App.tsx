import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const ButtonSC = styled.button({ color: "red", backgroundColor: "lightyellow" });
const Button2SC = styled.button<{ $special?: string }>`
  color: blue;
  color: ${(props) => props.$special};
  background-color: lightyellow;
`;

const Button3SC = styled(Button2SC)`
  background-color: orange;
`;

const StyledButton = styled(Button)`
  text-transform: capitalize !important;
  background-color: lime !important;
`;

function App(): JSX.Element {
  return (
    <React.Fragment>
      <div style={{ padding: "2rem" }}>
        <h1>Styled Components </h1>
        <ButtonSC>ButtonSC</ButtonSC>
        <Button2SC>Button2SC</Button2SC>
        <Button2SC $special="green">Button2SC Green</Button2SC>
        <Button2SC $special="deeppink">Button2SC DeepPink</Button2SC>
        <Button3SC>Button3SC</Button3SC>

        <Button variant="contained" color="secondary">
          Button
        </Button>
        <StyledButton variant="contained" color="secondary">
          StyledButton
        </StyledButton>
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

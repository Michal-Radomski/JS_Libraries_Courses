import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Button } from "@mui/material";

// import ComplexTitle from "./components/ComplexTitle";
import ComplexTitleWrapper from "./components/ComplexTitleWrapper";
import Card from "./components/Card";
import GlobalStyles from "./GlobalStyles";
import Loader from "./components/Loader";
import { DefaultButton, HipsterButton } from "./components/Buttons";

const ButtonSC = styled.button({ color: "red", backgroundColor: "lightyellow" });
const Button2SC = styled.button<{ $special?: string }>`
  color: blue;
  color: ${(props) => props.$special};
  background-color: lightyellow;
`;

const Button3SC = styled(Button2SC)`
  background-color: orange;
  text-decoration: none;
`;

const StyledButton = styled(Button)`
  text-transform: capitalize !important;
  background-color: lime !important;
`;

const BaseTheme = {
  color: "#444",
  background: "#ddd",
};
const DarkTheme = {
  background: "#444",
  color: "#ddd",
};

const Container = styled.div`
  padding: 2rem;
  width: 100%;
  min-height: 5rem;
  text-align: center;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
`;

function App(): JSX.Element {
  const [baseTheme, setBaseTheme] = React.useState<boolean>(true);

  return (
    <React.Fragment>
      <GlobalStyles />
      <DefaultButton $large={true}>Default Button</DefaultButton>
      <HipsterButton $large={false}>Hipster Button</HipsterButton>
      <div style={{ padding: "2rem" }}>
        <h1>Styled Components </h1>
        <ButtonSC>ButtonSC</ButtonSC>
        <Button2SC>Button2SC</Button2SC>
        <Button2SC $special="green">Button2SC Green</Button2SC>
        <Button2SC $special="deeppink">Button2SC DeepPink</Button2SC>
        <Button3SC as="a" href="https://www.google.com" target="_blank">
          Button3SC - Link
        </Button3SC>

        <Button variant="contained" color="secondary">
          MUI Button
        </Button>
        <StyledButton variant="contained" color="secondary">
          StyledButton
        </StyledButton>
      </div>
      <ComplexTitleWrapper title="App Title2" />
      <br />
      <br />
      <Card />
      <ThemeProvider theme={baseTheme ? BaseTheme : DarkTheme}>
        <Container>
          <h1>Hello World!</h1>
          <button onClick={() => setBaseTheme(!baseTheme)}>Change Theme</button>
        </Container>
      </ThemeProvider>
      <Loader />
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

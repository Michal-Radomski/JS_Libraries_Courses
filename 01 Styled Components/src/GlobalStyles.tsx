import { ExecutionProps, createGlobalStyle } from "styled-components";

const GlobalStyles: React.NamedExoticComponent<ExecutionProps & object> = createGlobalStyle`
:root {
  --primary: #645cff;
  --mainBorder: 1px solid red;
  --white: #ccc;
}

  body {
  margin: 0;
  background-color: lightyellow;
  background: lightyellow;

}
`;

export default GlobalStyles;

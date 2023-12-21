import React from "react";
import { useRecoilValue } from "recoil";

import CounterButtons from "./CounterButtons";
import InputText from "./InputText";
import { counterAndTextState } from "atoms/counter";

const Counter = (): JSX.Element => {
  const inputAndText = useRecoilValue(counterAndTextState);
  // console.log("inputAndText:", inputAndText);

  return (
    <React.Fragment>
      <h1>Counter</h1>
      <p>{inputAndText}</p>
      <CounterButtons />
      <InputText />
    </React.Fragment>
  );
};

export default Counter;

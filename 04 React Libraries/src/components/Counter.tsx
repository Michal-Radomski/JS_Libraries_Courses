import React from "react";
import { useRecoilValue } from "recoil";

import CounterButtons from "./CounterButtons";
import InputText from "./InputText";
import { counterAndTextState } from "atoms/counter";

const Counter = (): JSX.Element => {
  const inputAndText = useRecoilValue(counterAndTextState);

  return (
    <React.Fragment>
      <span>{inputAndText}</span>
      <CounterButtons />
      <InputText />
    </React.Fragment>
  );
};

export default Counter;

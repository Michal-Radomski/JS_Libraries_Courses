import React from "react";
import { useSetRecoilState } from "recoil";

import { counterState } from "atoms/counter";

const CounterButtons: React.FunctionComponent = (): JSX.Element => {
  const setCounter = useSetRecoilState(counterState);

  return (
    <React.Fragment>
      <button onClick={() => setCounter((counter: number) => counter + 1)}>{" + "}</button>
      <button onClick={() => setCounter((counter: number) => counter - 1)}>{" - "}</button>
    </React.Fragment>
  );
};

export default CounterButtons;

import { inputTextState } from "atoms/counter";
import React from "react";

import { useRecoilState } from "recoil";

const InputText: React.FunctionComponent = (): JSX.Element => {
  const [inputText, setInputText] = useRecoilState(inputTextState);

  return (
    <React.Fragment>
      <input type={"text"} value={inputText} onChange={(event) => setInputText(event.target.value)} />
    </React.Fragment>
  );
};

export default InputText;

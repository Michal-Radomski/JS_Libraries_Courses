import { atom, selector } from "recoil";

import persistAtom from "./persist";

const counterState = atom<number>({
  key: "components/Counter",
  default: 0,
  effects: [persistAtom],
});

const inputTextState = atom<string>({
  key: "components/InputText",
  default: "",
  effects: [persistAtom],
});

const counterAndTextState = selector<string>({
  key: "components/CounterAndText",
  get: ({ get }) => {
    const counter = get(counterState);
    const inputText = get(inputTextState);
    return `Counter: ${counter} | Text: ${inputText}`;
  },
});

// console.log({ counterState, inputTextState, counterAndTextState });

export { counterState, inputTextState, counterAndTextState };

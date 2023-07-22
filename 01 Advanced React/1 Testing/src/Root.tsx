import React from "react";

//* Redux
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

import rootReducer from "reducers/index";

// const store = createStore(rootReducer, {});

const Root = ({ children, initialState = {} }: { children: JSX.Element; initialState?: RootState }): JSX.Element => {
  return (
    <React.Fragment>
      <Provider store={createStore(rootReducer, initialState)}>{children}</Provider>
    </React.Fragment>
  );
};

export default Root;

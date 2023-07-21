import React from "react";

//* Redux
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

import rootReducer from "reducers/index";

const store = createStore(rootReducer, {});

const Root = (props: { children: JSX.Element }): JSX.Element => {
  return (
    <React.Fragment>
      <Provider store={store}>{props.children}</Provider>
    </React.Fragment>
  );
};

export default Root;

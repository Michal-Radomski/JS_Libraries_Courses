import React from "react";
import ReactDOM from "react-dom";

//* Redux
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

import App from "components/App";
import rootReducer from "reducers/index";

const store = createStore(rootReducer, {});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);

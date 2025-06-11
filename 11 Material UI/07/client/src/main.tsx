import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { Provider } from "react-redux";

import { store } from "./store";

axios.defaults.baseURL = "http://localhost:5000";

import App from "./App.tsx";

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Auth from "./auth/Auth";
import Add from "./diaries/Add";
import Diaries from "./diaries/Diaries";
import DiaryUpdate from "./diaries/DiaryUpdate";
import Header from "./header/Header";
import Home from "./home/Home";
import Profile from "./profile/Profile";
import { authActions } from "./store";
import "./App.scss";

function App(): JSX.Element {
  const dispatch = useDispatch();

  const isLoggedIn: boolean = useSelector((state: RootState) => state.isLoggedIn);
  console.log({ isLoggedIn });

  React.useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(authActions.login());
    }
  }, [dispatch]);

  return (
    <div>
      <header>
        <Header />
      </header>

      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diaries" element={<Diaries />} />
          <Route path="/auth" element={<Auth />} />
          {isLoggedIn ? (
            <React.Fragment>
              <Route path="/add" element={<Add />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/post/:id" element={<DiaryUpdate />} />{" "}
            </React.Fragment>
          ) : null}
        </Routes>
      </section>
    </div>
  );
}

export default App;

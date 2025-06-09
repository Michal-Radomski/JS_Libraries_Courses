import React from "react";

import "./App.scss";
import Header from "./header/Header";
import Content from "./content/Content";
import Footer from "./footer/Footer";

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <div>
        <header>
          <Header />
        </header>
        <section>
          <Content />
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </React.Fragment>
  );
};

export default App;

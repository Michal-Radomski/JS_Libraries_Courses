import React from "react";

import "./App.scss";
import { InfinitePeople } from "./people/InfinitePeople";
import { InfiniteSpecies } from "./species/InfiniteSpecies";

const App = (): React.JSX.Element => {
  return (
    <React.Fragment>
      <div className="App">
        <h1>Infinite SWAPI</h1>
        <InfinitePeople />
        <InfiniteSpecies />
      </div>
    </React.Fragment>
  );
};

export default App;

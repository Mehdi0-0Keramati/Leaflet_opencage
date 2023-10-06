import { Fragment } from "react";
import "./App.css";

import { Map } from "./Components";
import Header from "./Layout/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <Map />
    </Fragment>
  );
}

export default App;

import { Fragment, useEffect } from "react";
import Swal from "sweetalert2";

import "./App.css";

import { Map } from "./Components";
import Header from "./Layout/Header";
import { UseContextApi } from "./Context/ContextApi";

function App() {
  const { err } = UseContextApi();
  useEffect(() => {
    err !== "" &&
      Swal.fire({
        title: "Error!",
        text: err.message,
        icon: "error",
        confirmButtonText: "Ok",
      });
  }, [err]);

  return (
    <Fragment>
      <Header />
      <Map />
    </Fragment>
  );
}

export default App;

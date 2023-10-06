import { useState } from "react";
import axios from "axios";

import { UseContextApi } from "../../Context/ContextApi";

import Styles from "./Search.module.css";
import SearchBtn from "../../assets/icon-arrow.svg";

const Search = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const { setCoordinate, setRegions, setErr } = UseContextApi();
  const [searchV, setSearchV] = useState("");

  function handleForm(e) {
    e.preventDefault();

    getDataRequest();
    setSearchV("");

    return () => {
      setCoordinate({});
    };
  }

  function getDataRequest() {
    axios
      .get(
        `https://api.opencagedata.com/geocode/v1/json?key=${API_KEY}&q=Frauenplan+1%2C+99423+Weimar%2C+${searchV}&pretty=1`
      )
      .then((res) => {
        setCoordinate({
          lat: res.data.results[0].geometry.lat,
          lng: res.data.results[0].geometry.lng,
        });
        setRegions({
          country: res.data.results[0].components.country,
          city:
            res.data.results[0].components.town ||
            res.data.results[0].components.country,
        });
      })
      .catch((err) => {
        console.log(err);
        setErr(err);
      });
  }

  return (
    <form onSubmit={(e) => handleForm(e)}>
      <input
        value={searchV}
        onChange={(e) => setSearchV(e.target.value)}
        type="text"
        className={Styles["search-input"]}
        placeholder="Search Location..."
      />
      <button className={Styles["search-button"]} type="submit">
        <img src={SearchBtn} alt="searchBtn" />
      </button>
    </form>
  );
};

export default Search;

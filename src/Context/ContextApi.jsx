import { useState } from "react";
import { createContext, useContext } from "react";

const ContextApi = createContext();

export const ContextC = ({ children }) => {
  const [coordinate, setCoordinate] = useState({ lat: 51.505, lng: -0.09 });
  const [regions, setRegions] = useState({
    country: "England",
    city: "London",
  });
  const [err, setErr] = useState("");

  return (
    <ContextApi.Provider
      value={{ coordinate, setCoordinate, regions, setRegions, err, setErr }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export const UseContextApi = () => useContext(ContextApi);

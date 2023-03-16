import { useState, useEffect } from "react";

import axios from "axios";

import Filter from "./components/Filter";
import Countries from "./components/Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(
    () =>
      axios.get(`https://restcountries.com/v3.1/all`).then((response) => {
        setCountries(response.data);
      }),
    []
  );
  console.log("render", countries, "countries");

  const handleFilterChange = (event) => setFilter(event.target.value);

  const filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <Countries filteredCountries={filteredCountries} />
    </div>
  );
}

export default App;

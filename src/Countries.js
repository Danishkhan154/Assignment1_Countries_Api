import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function showContries() {
      const res = await axios.get(
        `https://restcountries.eu/rest/v2/region/${region}`
      );
      dispatch(setCountries({ regions: res.data }));
    }
    showContries();
  }, [region]);

  const select_region = (e) => {
    dispatch(setRegion({ region: `${e.target.value}` }));
  };

  return (
    <div className="App">
      <header>
        <h1>Countries By Region</h1>
      </header>

      <div>
        <select id="country" onChange={(e) => setCountries}>
          {region.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select>
          {countries &&
            countries.map((data, index) => {
              return (
                <option key={index} value={data.name}>
                  {data.name}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
}

export default App;

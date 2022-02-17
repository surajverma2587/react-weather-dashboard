import { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import axios from "axios";

import "../../styles.css";
import { AppContext } from "../../App";

const API_KEY = "393609ac7b2e5f25ccdd00e626ee13dd";

export const SearchForm = () => {
  const { searchTerm, setSearchTerm, setCities, cities, setWeatherData } =
    useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(async () => {
    if (searchTerm) {
      setIsLoading(true);

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${API_KEY}`;

      const { data } = await axios.get(url);

      setWeatherData(data);

      const citiesFromLS = JSON.parse(localStorage.getItem("cities")) || [];

      if (!citiesFromLS.includes(searchTerm)) {
        citiesFromLS.push(searchTerm);
        localStorage.setItem("cities", JSON.stringify(citiesFromLS));
        setCities([...cities, searchTerm]);
      }

      setSearchTerm("");
      setInputValue("");
      setIsLoading(false);
    }
  }, [searchTerm]);

  return (
    <form
      className="aside-item"
      onSubmit={(event) => {
        event.preventDefault();

        setSearchTerm(inputValue);
      }}
    >
      <div
        className={classNames("ui icon input", {
          disabled: isLoading,
          loading: isLoading,
        })}
      >
        <input
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.currentTarget.value);
          }}
          type="text"
          placeholder="Enter city name"
        />
        <i className="search icon"></i>
      </div>
    </form>
  );
};

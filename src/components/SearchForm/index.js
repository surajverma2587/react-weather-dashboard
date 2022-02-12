import { useEffect, useState } from "react";
import classNames from "classnames";
import axios from "axios";

import "../../styles.css";

const API_KEY = "393609ac7b2e5f25ccdd00e626ee13dd";

export const SearchForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(async () => {
    if (searchTerm) {
      setIsLoading(true);

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${API_KEY}`;

      const { data } = await axios.get(url);

      console.log(data);
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

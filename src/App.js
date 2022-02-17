import React, { useState } from "react";
import { Divider, Grid } from "semantic-ui-react";
import { Banner } from "./components/Banner";
import { SearchForm } from "./components/SearchForm";
import { SearchHistory } from "./components/SearchHistory";
import { WeatherInfo } from "./components/WeatherInfo";

import "./styles.css";

export const AppContext = React.createContext();

export const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cities, setCities] = useState(
    JSON.parse(localStorage.getItem("cities")) || []
  );
  const [weatherData, setWeatherData] = useState();

  return (
    <AppContext.Provider
      value={{
        cities,
        searchTerm,
        weatherData,
        setCities,
        setSearchTerm,
        setWeatherData,
      }}
    >
      <Grid>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={4} computer={4}>
            <SearchForm />
            <SearchHistory />
          </Grid.Column>

          <Grid.Column mobile={16} tablet={12} computer={12}>
            <Banner />
            <Divider />
            <WeatherInfo />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </AppContext.Provider>
  );
};

export default App;

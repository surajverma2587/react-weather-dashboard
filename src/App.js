import { Divider, Grid } from "semantic-ui-react";
import { Banner } from "./components/Banner";
import { SearchForm } from "./components/SearchForm";
import { SearchHistory } from "./components/SearchHistory";
import { WeatherInfo } from "./components/WeatherInfo";

import "./styles.css";

export const App = () => {
  return (
    <Grid>
      {/* row */}
      <Grid.Row>
        {/* column */}
        <Grid.Column mobile={16} tablet={4} computer={4}>
          <SearchForm />
          <SearchHistory />
        </Grid.Column>

        {/* column */}
        <Grid.Column mobile={16} tablet={12} computer={12}>
          <Banner />
          <Divider />
          <WeatherInfo />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default App;

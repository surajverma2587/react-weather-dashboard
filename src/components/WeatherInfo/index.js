import { useContext } from "react";
import { Card, Icon, Header } from "semantic-ui-react";
import { AppContext } from "../../App";

export const WeatherInfo = () => {
  const { weatherData } = useContext(AppContext);

  if (!weatherData) {
    return <Header as="h3">Please enter a city name and search</Header>;
  }

  return (
    <div>
      <Card>
        <Card.Content header={weatherData.name} />
        <Card.Content extra>
          <div>
            <Icon name="info" />
            Temperature: {weatherData?.main?.temp || "N/A"}
          </div>
          <div>
            <Icon name="info" />
            Humidity: {weatherData?.main?.humidity || "N/A"}
          </div>
          <div>
            <Icon name="info" />
            Wind Speed: {weatherData?.wind?.speed || "N/A"}
          </div>
          <div>
            <Icon name="info" />
            Pressure: {weatherData?.main?.pressure || "N/A"}
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

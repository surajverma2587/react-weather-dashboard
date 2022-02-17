import { Grid, Header } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";

import "../../styles.css";

export const Banner = () => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column
          mobile={16}
          tablet={12}
          computer={12}
          className="banner-item"
        >
          <Header as="h1">Weather Dashboard</Header>
        </Grid.Column>
        <Grid.Column
          className="banner-item"
          mobile={16}
          tablet={4}
          computer={4}
        >
          <Header as="h4">
            <Icon disabled name="clock" />
            12:30:05
          </Header>
          <Header as="h5" color="grey">
            <Icon disabled name="calendar" />
            Wed 5th March, 2022
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

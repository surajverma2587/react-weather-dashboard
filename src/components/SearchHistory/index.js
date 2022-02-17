import { useContext, useState } from "react";
import { List } from "semantic-ui-react";
import { AppContext } from "../../App";

import "../../styles.css";

export const SearchHistory = () => {
  const { cities, setSearchTerm } = useContext(AppContext);

  return (
    <div className="aside-item">
      <h2>Recent Searches</h2>

      <List divided>
        {cities.map((city) => {
          return (
            <List.Item
              key={city}
              as="a"
              onClick={() => {
                console.log("make API request for city clicked");
                setSearchTerm(city);
              }}
              className="recent-search-item"
            >
              {city}
            </List.Item>
          );
        })}
      </List>
    </div>
  );
};

import { List } from "semantic-ui-react";

import "../../styles.css";

export const SearchHistory = () => {
  return (
    <div className="aside-item">
      <h2>Recent Searches</h2>

      <List divided>
        <List.Item
          as="a"
          onClick={() => {
            console.log("item clicked");
          }}
          className="recent-search-item"
        >
          Apples
        </List.Item>
        <List.Item
          as="a"
          onClick={() => {
            console.log("item clicked");
          }}
          className="recent-search-item"
        >
          Pears
        </List.Item>
        <List.Item
          as="a"
          onClick={() => {
            console.log("item clicked");
          }}
          className="recent-search-item"
        >
          Oranges
        </List.Item>
      </List>
    </div>
  );
};

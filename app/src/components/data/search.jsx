import React, { useState } from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  background-color: white;
  border: none;
  height: 40px;
  border-radius: 4px 0 0 4px;
  width: 40%;
`;
const SearchButton = styled.button`
  background-color: #dc5040;
  border: 2px solid white;
  height: 42px;
  border-radius: 0 4px 4px 0;
  width: 10%;
  margin-right: 2%;
  &:hover {
    color: white;
  }
`;

function Search({ data, setNewArr }) {
  const [query, setQuery] = useState("");
  const search = () => {
    let foundItems;
    const filteredTitle = data.filter((article) =>
      article.Title.toLowerCase().includes(query.toLowerCase())
    );
    const filteredDescription = data.filter((article) =>
      article.Content.toLowerCase().includes(query.toLowerCase())
    );
    if (
      filteredTitle.length &&
      filteredTitle.length > filteredDescription.length
    ) {
      foundItems = filteredTitle;
    } else if (filteredDescription.length) {
      foundItems = filteredDescription;
    } else {
      foundItems = null;
    }
    setNewArr(foundItems);
  };

  const inputHandler = (event) => {
    const enteredName = event.target.value;
    setQuery(enteredName);
  };

  return (
    <>
      <SearchInput
        value={query}
        onChange={inputHandler}
        placeholder="Search by title or description"
      />
      <SearchButton type="button" onClick={search}>
        Search
      </SearchButton>
    </>
  );
}

export default Search;

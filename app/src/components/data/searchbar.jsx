/* eslint-disable react/no-array-index-key */
import React from "react";
import styled from "styled-components";
import Search from "./search";
import FilterSelect from "./select";

const Bar = styled.div`
  width: 90%;
  height: 80px;
  background-color: #dc5040;
  margin-top: 1%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  display: ${(props) => props.display};
`;

function SearchBar({ page, data, setNewArr, newArr }) {
  return (
    <Bar display={page === "graph" && "none"}>
      <Search data={data} setNewArr={setNewArr} />
      <FilterSelect data={data} setNewArr={setNewArr} newArr={newArr} />
    </Bar>
  );
}
export default SearchBar;

/* eslint-disable prefer-const */
import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Pagination from "../core/pagination";
import TableRow from "./tablerow";
import TopRow from "./toprow";
import Data from "../../data/data.json";
import SearchBar from "./searchbar";

const Tbl = styled.table`
  display: ${(props) => props.display};
  border-collapse: collapse;
  width: 90%;
  height: 600px;
  background-color: white;
  text-align: left;
  padding: 0 30px;
  border-radius: 10px;
  margin-top: 1%;
`;
const Tb = styled.tbody``;

const P = styled.p`
  color: white;
  margin-top: 50px;
`;

function Table({ page }) {
  const [data, setData] = useState(Data.articles);
  const [newArr, setNewArr] = useState(Data.articles);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(6);
  const topRow = ["Title", "Content", "Language", "Tags"];
  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;

  let current;
  if (newArr) {
    current = newArr.slice(indexOfFirst, indexOfLast);
  }

  let totalPagesNum;
  if (newArr) {
    totalPagesNum = Math.ceil(newArr.length / perPage);
  }

  return (
    <>
      <SearchBar
        page={page}
        data={data}
        setNewArr={setNewArr}
        newArr={newArr}
      />
      {newArr ? (
        <>
          <Tbl display={page === "graph" && "none"}>
            <TopRow data={topRow} />
            <Tb>
              {current.map((dta) => (
                <TableRow key={uuidv4()} data={dta} />
              ))}
            </Tb>
          </Tbl>
          <Pagination
            page={page}
            data={newArr}
            pages={totalPagesNum}
            setCurrentPage={setCurrentPage}
            current={current}
          />
        </>
      ) : (
        <P>No Items found</P>
      )}
    </>
  );
}
export default Table;

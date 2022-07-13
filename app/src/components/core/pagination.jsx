/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Clearfix = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1% 0;
  display: ${(props) => props.display};
`;
const Showing = styled.div`
  font: normal normal normal 14px/20px roboto;
  letter-spacing: 0px;
  color: #ffffff;
`;
const PaginationContainer = styled.div`
  display: flex;
`;

const PageLinkButton = styled.a`
  display: block;
  text-decoration: none;
  font-size: 1rem;
  color: black;
  border: 1px solid black;
  background-color: white;

  border-radius: 20px;
  padding: 3px 10px;
  margin-left: 2%;
  &:hover {
    color: white;
    background-color: #dc5040;
    border: 1px solid #dc5040;
  }
`;

function Pagination({ page, pages, setCurrentPage, current, data }) {
  const numOfPages = [];

  for (let i = 1; i <= pages; i += 1) {
    numOfPages.push(i);
  }

  const [currentButton, setCurrentButton] = useState(1);

  useEffect(() => {
    setCurrentPage(currentButton);
  }, [currentButton, setCurrentPage]);

  return (
    <Clearfix display={page === "graph" && "none"}>
      <Showing>
        Showing Num {current.length * currentButton} out of {data.length}{" "}
        entries
      </Showing>
      <PaginationContainer>
        {currentButton === 1 ? (
          <PageLinkButton
            style={{
              backgroundColor: "transparent",
              border: "none",
            }}
          />
        ) : (
          <PageLinkButton
            href="#!"
            onClick={() =>
              setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
            }
          >
            Prev
          </PageLinkButton>
        )}
        {currentButton === numOfPages.length ? (
          <PageLinkButton
            style={{
              backgroundColor: "transparent",
              border: "none",
            }}
          />
        ) : (
          <PageLinkButton
            href="#!"
            onClick={() =>
              setCurrentButton((next) =>
                next === numOfPages.length ? next : next + 1
              )
            }
          >
            Next
          </PageLinkButton>
        )}
      </PaginationContainer>
    </Clearfix>
  );
}
export default Pagination;

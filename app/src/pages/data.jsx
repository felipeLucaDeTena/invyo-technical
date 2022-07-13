import { useState } from "react";
import styled from "styled-components";
import Table from "../components/data/table";
import GraphComponent from "../components/data/graph";

const GraphContainer = styled.div`
  width: 80%;
  background-color: white;
  margin-top: 1%;
  border-radius: 10px;
  visibility: ${(props) => props.display};
  height: ${(props) => props.height};
`;

const PageContainer = styled.div`
  background: url("/loginbackground.png") no-repeat center fixed;
  background-size: cover;
  min-height: 91vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Buttons = styled.button`
  color: white;
  font-size: 1.3rem;
  background-color: #dc5040;
  border: 1px solid #dc5040;
  border-radius: 20px;
  padding: 3px 10px;
  margin: 10% 0 0 0;
  &:nth-child(2) {
    margin-left: 2%;
  }
  &:hover {
    color: #dc5040;
    border: 1px solid #dc5040;
    background-color: white;
  }
`;

function DataPage() {
  const [page, setPage] = useState("table");

  return (
    <PageContainer>
      <ButtonContainer>
        <Buttons onClick={() => setPage("table")}>Table</Buttons>
        <Buttons onClick={() => setPage("graph")}>Graph</Buttons>
      </ButtonContainer>
      <Table page={page} />
      <GraphContainer
        height={page === "table" ? "1px" : "700px"}
        display={page === "table" && "hidden"}
      >
        <GraphComponent page={page} />
      </GraphContainer>
    </PageContainer>
  );
}

export default DataPage;

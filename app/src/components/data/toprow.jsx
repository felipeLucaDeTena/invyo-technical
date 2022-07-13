/* eslint-disable react/no-array-index-key */
import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Thead = styled.thead`
  height: 60px;
  border-bottom: 2px solid #dc5040;
`;
const Th = styled.th`
  font: normal normal 600 1.3rem roboto;
  letter-spacing: 0px;
  color: #202020ad;
  padding: 0 20px;
`;
function TopRow({ data }) {
  return (
    <Thead>
      <tr>
        {data.map((e) => (
          <Th key={uuidv4()}>{e}</Th>
        ))}
      </tr>
    </Thead>
  );
}
export default TopRow;

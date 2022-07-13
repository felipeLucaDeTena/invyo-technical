import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Td = styled.td`
  padding: 0 20px;
`;
const Tr = styled.tr`
  height: 100px;
  border-bottom: 2px solid #c2c2c22c;
`;
const Content = styled.h5`
  width: 500px;
  height: 79px;
  font-size: 0.8rem;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 1.2;
`;
const Title = styled.h4`
  font-size: 0.9rem;
`;

const TagContainer = styled.span`
  font-size: 1rem;
  background-color: #e0e0e0;
  margin: 1%;
  border-radius: 1px;
`;
const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function TableRow({ data }) {
  return (
    <Tr>
      <Td style={{ width: "30%" }}>
        <Title>{data.Title}</Title>
      </Td>
      <Td style={{ width: "40%" }}>
        <Content>{data.Content}</Content>
      </Td>
      <Td style={{ color: "gray" }}>{data.Language}</Td>
      <Td>
        <TagsContainer>
          {data.Tags.topic.map((tag) => (
            // eslint-disable-next-line react/no-array-index-key
            <TagContainer key={uuidv4()}>{tag}</TagContainer>
          ))}
        </TagsContainer>
      </Td>
    </Tr>
  );
}
export default TableRow;

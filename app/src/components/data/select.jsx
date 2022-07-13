/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";

const Container = styled.div`
  display: flex;
  width: 40%;
  justify-content: flex-end;
`;

const LngSelect = styled(Select)`
  width: 40%;
  font-size: 1rem;
`;
const TagSelect = styled(Select)`
  margin-left: 20px;
  width: 40%;
  font-size: 1rem;
`;

function FilterSelect({ data, setNewArr, newArr }) {
  const [selectedOptions, setSelectedOptions] = useState();
  const uniqueLanguageValues = [...new Set(data.map((item) => item.Language))];
  const uniqueTagValues = new Set();
  for (const article of newArr) {
    for (const tag of article.Tags.topic) {
      uniqueTagValues.add(tag);
    }
  }

  const languageList = uniqueLanguageValues.map((value) => ({
    value,
    label: value,
  }));

  const tagList = [...uniqueTagValues].map((value) => ({
    value,
    label: value,
  }));

  const filteredTags = (values) =>
    data.filter((a) =>
      values.map((e) => e.value).every((value) => a.Tags.topic.includes(value))
    );

  const filteredLanguages = (value) =>
    data.filter((a) => a.Language === value.value);

  function handleSelectTag(dta) {
    setNewArr(filteredTags(dta));
  }

  function handleSelectLng(dta) {
    setNewArr(filteredLanguages(dta));
  }

  return (
    <Container>
      <LngSelect
        options={languageList}
        placeholder="Select Language"
        value={selectedOptions}
        onChange={handleSelectLng}
        isSearchable
      />
      <TagSelect
        options={tagList}
        placeholder="Select Tags"
        value={selectedOptions}
        onChange={handleSelectTag}
        isSearchable
        isMulti
      />
    </Container>
  );
}
export default FilterSelect;

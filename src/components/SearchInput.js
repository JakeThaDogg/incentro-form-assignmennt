import { useState } from "react";
import styled from "styled-components";
import { searchAddress as apiSearchAddress } from "../api";
import Input from "./Input";
import SearchResult from "./SearchResult";

const Wrapper = styled.div`
  position: relative;
`;

const ResultWrapper = styled.div`
  position: absolute;
  top: 100%;
  width: 396px;
`;

const SearchInput = ({ setValue, name, ...props }) => {
  const [searchResult, setSearchResult] = useState([]);

  const sendQuery = async ({ target: { value } }) => {
    setValue(name, value);
    const { data } = await apiSearchAddress(value);
    setSearchResult(data?.features);
  };

  const selectAddress = (item) => {
    setSearchResult([]);
    setValue("postCode", item?.postCode);
    setValue("street", item?.street);
    setValue("city", item?.city);
    setValue("houseNumber", item?.housenumber);
  };

  return (
    <Wrapper>
      <Input {...props} name={name} onChange={sendQuery} />
      {searchResult.length > 0 && (
        <ResultWrapper>
          {searchResult.map(({ properties }) => (
            <SearchResult
              selectItem={() => selectAddress(properties)}
              item={properties}
            />
          ))}
        </ResultWrapper>
      )}
    </Wrapper>
  );
};

export default SearchInput;

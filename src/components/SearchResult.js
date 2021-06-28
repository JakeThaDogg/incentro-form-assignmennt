import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 32px;
  background-color: #fff;
  color: black;
  padding: 4px;

  &:hover {
    background-color: rgba(211, 211, 227, 1);
  }
`;

const SearchResult = ({ item, selectItem }) => {
  return (
    <Wrapper onClick={selectItem}>{`${
      !Boolean(item?.street) ? item?.name : ""
    } ${item?.housenumber ?? ""} ${item?.street ?? ""} ${
      item?.city ? item.city + "," : ""
    } ${item?.postcode ? item.postcode + "," : ""} ${
      item?.country ?? ""
    }`}</Wrapper>
  );
};

export default SearchResult;

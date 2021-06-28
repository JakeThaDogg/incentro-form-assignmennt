import { Field } from "formik";
import styled from "styled-components";

const StyledInput = styled(Field)`
  border-radius: 4px;
  border: none;
  height: 32px;
  width: 400px;
  &:focus {
    outline: none;
  }

  @media screen and (max-width: 940px) {
    width: 100%;
  }
`;

const InputLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  color: #e0e0ec;
`;

const Mandatory = styled.span`
  color: #fe5000;
  font-size: 26px;
`;

const ErrorText = styled.div`
  color: #cb0025;
  text-shadow: 0 0px 1px rgba(254, 0, 47, 1);
  padding-top: 8px;
  font-size: 14px;
`;

const Wrapper = styled.div`
  margin: 24px 0;
`;

const Input = ({ hasErrors, label, type, isRequired, ...props }) => (
  <Wrapper>
    {label && (
      <InputLabel>
        {label} {Boolean(isRequired) && <Mandatory>*</Mandatory>}
      </InputLabel>
    )}
    <StyledInput type={type || "text"} {...props} />
    {hasErrors && <ErrorText>{hasErrors}</ErrorText>}
  </Wrapper>
);

export default Input;

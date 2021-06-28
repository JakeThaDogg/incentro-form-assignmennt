import { Field } from "formik";
import styled from "styled-components";

const StyledInput = styled(Field)`
  width: 400px;
  border-radius: 5px;
  border: none;
  height: 32px;

  &:focus {
    outline: none;
  }
`;

const InputLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 1.2;
  color: #f4f3ec;
`;

const Mandatory = styled.span`
  color: #ff2222;
  font-size: 24px;
`;

const ErrorText = styled.div`
  color: #ff2222;
  padding-top: 8px;
  font-size: 0.75em;
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

import styled from "styled-components";

const StyledInput = styled.input`
  width: 400px;
  border-radius: 5px;
  border: none;
  height: 32px;
  margin-bottom: 32px;

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

const Input = ({ hasError, label, type, isRequired, ...props }) => (
  <div>
    {label && (
      <InputLabel>
        {label} {Boolean(isRequired) && <Mandatory>*</Mandatory>}
      </InputLabel>
    )}
    <StyledInput type={type || "text"} {...props} />
  </div>
);

export default Input;

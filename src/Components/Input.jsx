import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: 25px;
  border: 0px;
  padding: 0px;
  margin: 0px;
  background: none;
  outline: none;
  border-bottom: 2px solid #d9ff5a;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: #ffffff;
  margin: 0;
  text-wrap: nowrap;

  &::placeholder {
    font-family: Euclid Circular A;
    font-weight: 500;
    font-size: 15px;
    line-height: 19.02px;
    color: #ffffff;
    margin: 0;
    text-wrap: nowrap;
    opacity: 1;
  }

  &:hover {
    cursor: text;
  }
`;

export function Input({ placeholder, onChange, name, style }) {
  return (
    <StyledInput
      style={style}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

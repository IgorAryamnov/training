import styled from "styled-components";

const CheckboxContainer = styled.label`
  &.container {
    display: block;
    position: relative;
    padding-left: 25px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-family: Euclid Circular A;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: white;
    margin: 0px;
  }

  &.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 6.5px;
    left: 0;
    height: 14px;
    width: 14px;
    background-color: #cbb6ff;
    box-sizing: border-box;
    border: 2px solid #ae97e8;
    border-radius: 4px;
  }

  &.container input:checked ~ .checkmark {
    background-color: #d9ff5a;
  }
`;

export function Checkbox({ name, count }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <CheckboxContainer className="container">
        {name}
        <input type="checkbox" />
        <span className="checkmark"></span>
        <span style={{ color: "#ffffff69" }}>{` (${count})`}</span>
      </CheckboxContainer>
    </div>
  );
}

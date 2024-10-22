import styled from "styled-components";

const Button = styled.button`
  border: none;
  outline: none;
  background: unset;
  position: absolute;
  top: 22px;
  right: 22px;

  &:hover,
  &:focus-visible {
    cursor: pointer;

    .button-svg {
      stroke: #d9ff5a;
    }
  }
`;

export function ClosedButton({ style, onClick }) {
  return (
    <Button style={style} onClick={onClick}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="button-svg"
          d="M27 9L9 27"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="button-svg"
          d="M9 9L27 27"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
  );
}

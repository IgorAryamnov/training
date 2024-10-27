import styled from "styled-components";
import { Band } from "./Band";

const StripsContainer = styled.div`
  height: 262px;
  max-width: 1920px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin-top: 170px;

  .first-band {
    background: #cbb6ff;
    transform: rotate(5deg);
  }
  .second-band {
    background: #aeceff;
    transform: rotate(-2deg);
  }

  @media (max-width: 1600px) {
    margin-top: 158px;
  }
  @media (max-width: 1200px) {
    margin-top: 146px;
  }
  @media (max-width: 1000px) {
    .first-band {
      transform: rotate(9deg);
    }
    .second-band {
      transform: rotate(-4deg);
    }
  }
  @media (max-width: 800px) {
    margin-top: 136px;
  }
  @media (max-width: 600px) {
    margin-top: 124px;
  }
`;

export function Strips() {
  return (
    <StripsContainer>
      <Band className="first-band" />
      <Band className="second-band" />
    </StripsContainer>
  );
}

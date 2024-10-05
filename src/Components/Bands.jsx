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
`;

export function Strips() {
  return (
    <StripsContainer>
      <Band background="#CBB6FF" rotateDegree={5} />
      <Band background="#AECEFF" rotateDegree={-2} />
    </StripsContainer>
  );
}

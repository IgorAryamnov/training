import styled from "styled-components";
import { ReactComponent as Star } from "../assets/Star.svg";

const message = "CREATING A GREAT ART";
let array = [];
for (let i = 0; i < 4; i++) {
  array.push(message);
}

const Text = styled.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 40px;
  line-height: 38px;
  margin: 0;
  color: #ffffff;
`;
const StripContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 2169px;
  height: 72px;
  position: absolute;
`;
export function Strip({ background, rotateDegree }) {
  return (
    <StripContainer
      style={{
        backgroundColor: background,
        transform: `rotate(${rotateDegree}deg)`,
      }}
    >
      <Text>{message}</Text>
      <Star></Star>
      <Text>{message}</Text>
      <Star></Star>
      <Text>{message}</Text>
      <Star></Star>
      <Text>{message}</Text>
      <Star></Star>
      <Text>{message}</Text>
    </StripContainer>
  );
}

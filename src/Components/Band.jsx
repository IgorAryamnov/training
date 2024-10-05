import styled from "styled-components";
import { ReactComponent as Star } from "../assets/Star.svg";

const message = "CREATING A GREAT ART";

const Text = styled.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 40px;
  line-height: 38px;
  margin: 0;
  color: #ffffff;
`;
const BandContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 2169px;
  height: 72px;
  position: absolute;
`;
export function Band({ background, rotateDegree }) {
  return (
    <BandContainer
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
    </BandContainer>
  );
}

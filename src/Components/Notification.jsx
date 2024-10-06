import styled from "styled-components";

const StyledMessage = styled.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 30px;
  line-height: 30px;
  margin: 0;
  color: #ffffff;
  padding: 20px;
  margin-bottom: 10px;
  background-color: #0000007d;
  border-radius: 10px;
`;

export function Notification({ className }) {
  return (
    <StyledMessage className={className}>
      Товар добавлен в корзину!
    </StyledMessage>
  );
}

import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 129px;
  margin-top: 170px;
  max-width: 1797px;
  width: 100%;
`;
const Date = styled.p`
  font-family: Gilroy;
  font-weight: 500;
  font-size: 18px;
  line-height: 21.19px;
  color: #ffffff;
  margin: 0px 10px 0px 10px;
`;
const Rights = styled.p`
  font-family: Gilroy;
  font-weight: 500;
  font-size: 18px;
  line-height: 21.19px;
  color: #ffffff;
  margin: 0px 10px 0px 10px;
`;
export function Footer() {
  return (
    <FooterContainer>
      <Date>@2023</Date>
      <Rights>Все права защищены</Rights>
    </FooterContainer>
  );
}

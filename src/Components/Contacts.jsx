import styled from "styled-components";
import Arrow from "../assets/Arrow4.svg";
import telegram from "../assets/telegram.svg";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/instagram.svg";
import xt from "../assets/xt.svg";
import map from "../assets/map.png";
import mark from "../assets/MarkOnMap.svg";

const InformationContainer = styled.div`
  max-width: 950px;
  background-color: #ae97e8;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FormContainer = styled.div`
  max-width: 850px;
  min-width: 400px;
  background-color: #fa8fef;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 50px 80px 20px;
`;
const FirstLine = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: #ffffff80;
  margin: 0;
  text-wrap: nowrap;
`;
const CityLabel = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 60px;
  line-height: 76.08px;
  color: #ffffff;
  margin: 0;
  text-wrap: nowrap;
`;
const SecondLine = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: #ffffff;
  margin: 0;
  text-wrap: nowrap;
`;
const PhoneNumber = styled.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 40px;
  line-height: 38px;
  color: #ffffff;
  margin: 0;
  text-wrap: nowrap;
`;
const IconsContainer = styled.div`
  display: flex;
  width: 209px;
  justify-content: space-between;
`;
const FormLabel = styled.label`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: #ffffff;
  margin: 0;
  margin-right: 10px;
  text-wrap: nowrap;
`;
const Input = styled.input`
  border: 0px;
  padding: 0px;
  margin: 0px;
  background: none;
  color: white;
  outline: none;
  width: 100%;
`;
const FormInputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  border-bottom: 2px solid #d9ff5a;
`;
const Button = styled.button`
  width: 189px;
  height: 93px;
  border: 2px solid #d9ff5a;
  transform: rotate(-6deg);
  background-color: #ebe3ff30;
  border-radius: 50%;
`;
const ButtonText = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  margin: 0;
  transform: rotate(6deg);
`;

export function Contacts() {
  return (
    <div
      style={{
        borderRadius: 30,
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <InformationContainer>
          <div
            style={{
              display: "flex",
              maxWidth: 690,
              width: "100%",
              justifyContent: "space-between",
              margin: "20px",
              flexWrap: "wrap",
              minWidth: "400px",
            }}
          >
            <div>
              <FirstLine style={{ marginBottom: 35 }}>АДРЕС</FirstLine>
              <CityLabel style={{ marginBottom: 26 }}>МОСКВА</CityLabel>
              <SecondLine style={{ marginBottom: 122 }}>
                Улица Пушкина, дом Колотушкина
              </SecondLine>
              <div
                style={{
                  width: 167,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <SecondLine>Адрес на карте</SecondLine>
                <img src={Arrow} alt="arrow" />
              </div>
            </div>
            <div style={{ marginLeft: 20 }}>
              <FirstLine style={{ marginBottom: 59 }}>ТЕЛЕФОН</FirstLine>
              <PhoneNumber style={{ marginBottom: 40 }}>
                +1 (111) 111-11-11
              </PhoneNumber>
              <SecondLine style={{ marginBottom: 114 }}>
                Ответим на все вопросы
              </SecondLine>
              <IconsContainer>
                <a href="google.com">
                  <img src={telegram} alt="telegram" />
                </a>
                <a href="google.com">
                  <img src={xt} alt="xt" />
                </a>
                <a href="google.com">
                  <img src={facebook} alt="facebook" />
                </a>
                <a href="google.com">
                  <img src={instagram} alt="instagram" />
                </a>
              </IconsContainer>
            </div>
          </div>
        </InformationContainer>
        <FormContainer>
          <div style={{ maxWidth: 660, width: "100%" }}>
            <FirstLine style={{ marginBottom: 53 }}>
              ФОРМА ОБРАТНОЙ СВЯЗИ
            </FirstLine>
            <form>
              <FormInputContainer style={{ marginBottom: 64 }}>
                <FormLabel>E-MAIL</FormLabel>
                <Input />
              </FormInputContainer>
              <FormInputContainer style={{ marginBottom: 59 }}>
                <FormLabel>СООБЩЕНИЕ</FormLabel>
                <Input />
              </FormInputContainer>
              <Button type="submit">
                <ButtonText>Отправить</ButtonText>
              </Button>
            </form>
          </div>
        </FormContainer>
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            maxWidth: "1800px",
            display: "flex",
            justifyContent: "center",
            marginTop: "235px",
            marginLeft: "239px",
          }}
        >
          <img src={mark} alt="mark" />
        </div>
        <img src={map} alt="map" />
      </div>
    </div>
  );
}

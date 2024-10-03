import styled from "styled-components";
import lamp1 from "../assets/lamp1.png";
import lamp2 from "../assets/lamp2.png";
import lamp3 from "../assets/lamp3Big.png";
import lamp4 from "../assets/lamp4.png";
import lamp5 from "../assets/lamp5.png";

const CongratulationContainer = styled.div`
  width: 1920px;
  height: 700px;
  padding-top: 322px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;
const StyledMessage = styled.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 212px;
  line-height: 201.4px;
  color: #cbb6ff99;
  margin: 0;
  white-space: nowrap;
`;
const Message = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: white;
  margin: 0;
  white-space: nowrap;
`;
const StyledImage = styled.img`
  position: absolute;
`;
export function Congratulation() {
  return (
    <CongratulationContainer>
      <div style={{ position: "relative" }}>
        <StyledImage style={{ left: -966, top: 121 }} src={lamp1} alt="lamp" />
        <StyledImage style={{ left: -600, top: 263 }} src={lamp2} alt="lamp" />
        <StyledImage style={{ left: -147, top: -120 }} src={lamp3} alt="lamp" />
        <StyledImage style={{ left: 101, top: 181 }} src={lamp4} alt="lamp" />
        <StyledImage style={{ left: 528, top: 296 }} src={lamp5} alt="lamp" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: 145,
        }}
      >
        <Message style={{ marginLeft: 60 }}>ВАШ ЗАКАЗ ОФОРМЛЕН</Message>
        <Message style={{ marginRight: 58 }}>СПАСИБО ЗА ЗАКАЗ</Message>
      </div>
      <div style={{ display: "flex" }}>
        <StyledMessage style={{ marginRight: 84 }}>THANK YOU</StyledMessage>
        <StyledMessage style={{ marginRight: 84 }}>THANK YOU</StyledMessage>
        <StyledMessage>THANK YOU</StyledMessage>
      </div>
    </CongratulationContainer>
  );
}

import styled from "styled-components";
import lamp1 from "../assets/categoryLamp3.png";
import lamp2 from "../assets/categoryLamp1.png";
import lamp3 from "../assets/lamp3Big.png";
import lamp4 from "../assets/categoryLamp4.png";
import lamp5 from "../assets/categoryLamp2.png";

const CongratulationContainer = styled.div`
  --padding-topA: 289px;
  width: 1920px;
  height: 700px;
  padding-top: var(--padding-topA);
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 1700px) {
    padding-top: calc(var(--padding-topA) * 0.9);
  }
  @media (max-width: 1400px) {
    padding-top: calc(var(--padding-topA) * 0.8);
  }
  @media (max-width: 1000px) {
    padding-top: calc(var(--padding-topA) * 0.7);
  }
  @media (max-width: 600px) {
    padding-top: 183px;
  }
`;
const StyledMessage = styled.p`
  --line-heightA: 201.4px;
  --font-sizeA: 212px;
  font-family: Floreste;
  font-weight: 400;
  font-size: var(--line-heightA);
  line-height: var(--font-sizeA);
  color: #cbb6ff99;
  margin: 0;
  white-space: nowrap;
  margin-right: 84px;

  @media (max-width: 1700px) {
    font-size: calc(var(--line-heightA) * 0.8);
    line-height: calc(var(--font-sizeA) * 0.8);
  }
  @media (max-width: 1400px) {
    font-size: calc(var(--line-heightA) * 0.6);
    line-height: calc(var(--font-sizeA) * 0.6);
  }
  @media (max-width: 1000px) {
    font-size: calc(var(--line-heightA) * 0.4);
    line-height: calc(var(--font-sizeA) * 0.4);
  }
  @media (max-width: 600px) {
    font-size: 110px;
    line-height: 104.5px;
  }
`;
const Message = styled.p`
  --line-heightA: 18px;
  --font-sizeA: 22.82px;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: var(--line-heightA);
  line-height: var(--font-sizeA);
  color: white;
  margin: 0;
  white-space: nowrap;

  @media (max-width: 1000px) {
    font-size: calc(var(--line-heightA) * 0.8);
    line-height: calc(var(--font-sizeA) * 0.8);
  }
`;
const StyledImage = styled.img`
  position: absolute;
  --left1: -781px;
  --top1: 278px;
  --height1: 224px;
  --left2: -428px;
  --top2: 478px;
  --height2: 200px;
  --left3: -153px;
  --top3: -150px;
  --height3: 759px;
  --left4: 363px;
  --top4: 274px;
  --height4: 258px;
  --left5: 716px;
  --top5: 505px;
  --height5: 197px;

  &.lamp1 {
    left: var(--left1);
    top: var(--top1);
    height: var(--height1);
  }
  &.lamp2 {
    left: var(--left2);
    top: var(--top2);
    height: var(--height2);
    transform: rotate(-13deg);
  }
  &.lamp3 {
    left: var(--left3);
    top: var(--top3);
    height: var(--height3);
  }
  &.lamp4 {
    left: var(--left4);
    top: var(--top4);
    height: var(--height4);
    transform: rotate(7deg);
  }
  &.lamp5 {
    left: var(--left5);
    top: var(--top5);
    height: var(--height5);
    transform: rotate(17deg);
  }

  @media (max-width: 1700px) {
    &.lamp1 {
      left: calc(var(--left1) * 0.8);
      top: calc(var(--top1) * 0.8);
      height: calc(var(--height1) * 0.8);
    }
    &.lamp2 {
      left: calc(var(--left2) * 0.8);
      top: calc(var(--top2) * 0.8);
      height: calc(var(--height2) * 0.8);
    }
    &.lamp3 {
      left: calc(var(--left3) * 0.8);
      top: calc(var(--top3) * 0.8);
      height: calc(var(--height3) * 0.8);
    }
    &.lamp4 {
      left: calc(var(--left4) * 0.8);
      top: calc(var(--top4) * 0.8);
      height: calc(var(--height4) * 0.8);
    }
    &.lamp5 {
      left: calc(var(--left5) * 0.8);
      top: calc(var(--top5) * 0.8);
      height: calc(var(--height5) * 0.8);
    }
  }
  @media (max-width: 1400px) {
    &.lamp1 {
      left: calc(var(--left1) * 0.6);
      top: calc(var(--top1) * 0.6);
      height: calc(var(--height1) * 0.6);
    }
    &.lamp2 {
      left: calc(var(--left2) * 0.6);
      top: calc(var(--top2) * 0.6);
      height: calc(var(--height2) * 0.6);
    }
    &.lamp3 {
      left: calc(var(--left3) * 0.6);
      top: calc(var(--top3) * 0.6);
      height: calc(var(--height3) * 0.6);
    }
    &.lamp4 {
      left: calc(var(--left4) * 0.6);
      top: calc(var(--top4) * 0.6);
      height: calc(var(--height4) * 0.6);
    }
    &.lamp5 {
      left: calc(var(--left5) * 0.6);
      top: calc(var(--top5) * 0.6);
      height: calc(var(--height5) * 0.6);
    }
  }
  @media (max-width: 1000px) {
    &.lamp1 {
      left: calc(var(--left1) * 0.4);
      top: calc(var(--top1) * 0.4);
      height: calc(var(--height1) * 0.4);
    }
    &.lamp2 {
      left: calc(var(--left2) * 0.4);
      top: calc(var(--top2) * 0.4);
      height: calc(var(--height2) * 0.4);
    }
    &.lamp3 {
      left: calc(var(--left3) * 0.4);
      top: calc(var(--top3) * 0.4);
      height: calc(var(--height3) * 0.4);
    }
    &.lamp4 {
      left: calc(var(--left4) * 0.4);
      top: calc(var(--top4) * 0.4);
      height: calc(var(--height4) * 0.4);
    }
    &.lamp5 {
      left: calc(var(--left5) * 0.4);
      top: calc(var(--top5) * 0.4);
      height: calc(var(--height5) * 0.4);
    }
  }
  @media (max-width: 600px) {
    &.lamp1 {
      top: 405px;
      left: -143px;
      height: 112px;
    }
    &.lamp2 {
      top: 220px;
      left: -240px;
      height: 100px;
    }
    &.lamp3 {
      top: 94px;
      left: -60px;
      height: 227px;
      transform: rotate(-8deg);
    }
    &.lamp4 {
      top: 244px;
      left: 150px;
      height: 129px;
      transform: rotate(19deg);
    }
    &.lamp5 {
      display: none;
    }
  }
  @media (max-width: 400px) {
    &.lamp1 {
      top: 405px;
      left: -66px;
      height: 112px;
    }
    &.lamp2 {
      top: 220px;
      left: -165px;
      height: 100px;
    }
    &.lamp3 {
      top: 94px;
      left: -60px;
      height: 227px;
      transform: rotate(-8deg);
    }
    &.lamp4 {
      top: 244px;
      left: 85px;
      height: 129px;
      transform: rotate(19deg);
    }
    &.lamp5 {
      display: none;
    }
  }
`;
const MessageContainer = styled.div`
  --margin-bottomA: 145px;
  --paddingA: 60px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: var(--margin-bottomA);
  padding-left: var(--paddingA);
  padding-right: var(--paddingA);
  box-sizing: border-box;

  @media (max-width: 1700px) {
    margin-bottom: calc(var(--margin-bottomA) * 0.8);
    padding-left: calc(var(--paddingA) * 0.8);
    padding-right: calc(var(--paddingA) * 0.8);
  }
  @media (max-width: 1400px) {
    margin-bottom: calc(var(--margin-bottomA) * 0.6);
    padding-left: calc(var(--paddingA) * 0.6);
    padding-right: calc(var(--paddingA) * 0.6);
  }
  @media (max-width: 1000px) {
    margin-bottom: calc(var(--margin-bottomA) * 0.4);
    padding-left: calc(var(--paddingA) * 0.4);
    padding-right: calc(var(--paddingA) * 0.4);
  }
  @media (max-width: 600px) {
    justify-content: center;
    margin-bottom: 20px;
    .gratitude {
      display: none;
    }
  }
`;
export function Congratulation() {
  return (
    <CongratulationContainer>
      <div style={{ position: "relative" }}>
        <StyledImage className="lamp1" src={lamp1} alt="lamp" />
        <StyledImage className="lamp2" src={lamp2} alt="lamp" />
        <StyledImage className="lamp3" src={lamp3} alt="lamp" />
        <StyledImage className="lamp4" src={lamp4} alt="lamp" />
        <StyledImage className="lamp5" src={lamp5} alt="lamp" />
      </div>
      <MessageContainer>
        <Message>ВАШ ЗАКАЗ ОФОРМЛЕН</Message>
        <Message className="gratitude">СПАСИБО ЗА ЗАКАЗ</Message>
      </MessageContainer>
      <div style={{ display: "flex" }}>
        <StyledMessage>THANK YOU</StyledMessage>
        <StyledMessage>THANK YOU</StyledMessage>
        <StyledMessage style={{ marginRight: 0 }}>THANK YOU</StyledMessage>
      </div>
    </CongratulationContainer>
  );
}

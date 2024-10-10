import styled from "styled-components";
import ellipse from "../assets/Subtract.svg";

const CardContainer = styled.div`
  --widthA: 428px;
  --heightA: 517px;
  width: var(--widthA);
  height: var(--heightA);
  position: relative;
  margin: 0px 10px 20px 10px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    .category-button {
      background: #d9ff5a;
    }
    .svg-arrow-path {
      stroke: #ae97e8;
    }
  }

  @media (max-width: 1820px) {
    width: calc(var(--widthA) * 0.8);
    height: calc(var(--heightA) * 0.8);
  }
`;
const CardName = styled.p`
  --font-sizeA: 28px;
  --line-heightA: 35.5px;
  --widthA: 184px;
  --topA: 37px;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: var(--font-sizeA);
  line-height: var(--line-heightA);
  position: absolute;
  top: var(--topA);
  color: white;
  width: var(--widthA);
  margin: 0;

  @media (max-width: 1820px) {
    font-size: calc(var(--font-sizeA) * 0.8);
    line-height: calc(var(--line-heightA) * 0.8);
    width: calc(var(--widthA) * 0.8);
    top: calc(var(--topA) * 0.8);
  }
`;
const Button = styled.div`
  --widthA: 97px;
  --heightA: 97px;
  --topA: 416px;
  --leftA: 144px;
  width: var(--widthA);
  height: var(--heightA);
  border-radius: 50%;
  position: absolute;
  border: 2px solid #d9ff5a;
  top: var(--topA);
  left: var(--leftA);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ebe3ff30;

  @media (max-width: 1820px) {
    height: calc(var(--heightA) * 0.8);
    width: calc(var(--widthA) * 0.8);
    top: calc(var(--topA) * 0.8);
    left: calc(var(--leftA) * 0.8);
  }
`;
const Quantity = styled.div`
  --widthA: 81px;
  --heightA: 72px;
  --topA: 151px;
  --leftA: 342px;
  width: var(--widthA);
  height: var(--heightA);
  position: absolute;
  top: var(--topA);
  left: var(--leftA);
  transform: rotate(-23deg);
  border-radius: 50%;
  background: #fa8fef;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1820px) {
    height: calc(var(--heightA) * 0.8);
    width: calc(var(--widthA) * 0.8);
    top: calc(var(--topA) * 0.8);
    left: calc(var(--leftA) * 0.8);
  }
`;
const QuantityNumber = styled.p`
  --font-sizeA: 40px;
  --line-heightA: 38px;
  font-size: var(--font-sizeA);
  line-height: var(--line-heightA);
  font-family: Floreste;
  font-weight: 400;
  margin: 0px;
  color: white;
  margin-right: 2;

  @media (max-width: 1820px) {
    font-size: calc(var(--font-sizeA) * 0.8);
    line-height: calc(var(--line-heightA) * 0.8);
  }
`;
const StyledP = styled.p`
  --font-sizeA: 15px;
  --line-heightA: 19.02px;
  --margin-topA: 8px;
  font-size: var(--font-sizeA);
  line-height: var(--line-heightA);
  font-family: Euclid Circular A;
  font-weight: 500;
  margin: 0px;
  color: white;
  margin-left: 5px;
  margin-top: var(--margin-topA);

  @media (max-width: 1820px) {
    font-size: calc(var(--font-sizeA) * 0.8);
    line-height: calc(var(--line-heightA) * 0.8);
    margin-top: calc(var(--margin-topA) * 0.8);
  }
`;
const CategoryImageContainer = styled.div`
  --widthA: 388px;
  --heightA: 462px;
  width: var(--widthA);
  height: var(--heightA);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1820px) {
    height: calc(var(--heightA) * 0.8);
    width: calc(var(--widthA) * 0.8);
  }
`;
const CategoryImage = styled.img`
  --heightA: 248px;
  height: var(--heightA);

  @media (max-width: 1820px) {
    height: calc(var(--heightA) * 0.8);
  }
`;
const BackgroundImage = styled.img`
  --heightA: 462px;
  height: var(--heightA);

  @media (max-width: 1820px) {
    height: calc(var(--heightA) * 0.8);
  }
`;
const CrookedInscriptionContainer = styled.div`
  position: absolute;
  top: 300px;
  left: -50px;
  width: 196px;
  height: 89px;
  transform: rotate(-143deg);

  @media (max-width: 1820px) {
    top: 206px;
    left: -56px;
    transform: rotate(-134deg);
  }
`;

const message = "изготовление на заказ".split("");
const indexMultiplayer = 3;

export function Card({ cardName, image, onClick }) {
  return (
    <CardContainer onClick={onClick}>
      <CategoryImageContainer>
        <CategoryImage src={image} alt="cardImage" />
      </CategoryImageContainer>
      <CrookedInscriptionContainer>
        {message.map((item, index) => {
          return (
            <span
              key={index}
              style={{
                height: 450,
                position: "absolute",
                transform: `rotate(${index * indexMultiplayer}deg)`,
                color: "white",
              }}
            >
              {item}
            </span>
          );
        })}
      </CrookedInscriptionContainer>
      <BackgroundImage src={ellipse} alt="ellipse" />
      <CardName>{cardName}</CardName>
      <Button className="category-button">
        <svg
          width="22"
          height="34"
          viewBox="0 0 22 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="svg-arrow-path"
            d="M21 22.6667C19.94 22.6667 18.3571 23.7051 17.0286 24.7562C15.3143 26.1077 13.8186 27.7227 12.6771 29.5743C11.8214 30.9627 11 32.6457 11 34M11 34C11 32.6457 10.1786 30.9612 9.32286 29.5743C8.18 27.7227 6.68429 26.1077 4.97286 24.7562C3.64286 23.7051 2.05714 22.6667 1 22.6667M11 34L11 -1.11265e-06"
            stroke="#d9ff5a"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </Button>
      <Quantity>
        <QuantityNumber>4</QuantityNumber>
        <StyledP>шт</StyledP>
      </Quantity>
    </CardContainer>
  );
}

import styled from "styled-components";
import ellipse from "../assets/Subtract.svg";

const CardContainer = styled.div`
  width: 428px;
  height: 517px;
  position: relative;
  margin: 0px 10px 20px 10px;

  &:hover {
    cursor: pointer;

    .category-button {
      background: #d9ff5a;
    }
    .svg-arrow-path {
      stroke: #ae97e8;
    }
  }
`;
const CardName = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 28px;
  line-height: 35.5px;
  position: absolute;
  top: 37px;
  color: white;
  width: 184px;
  margin: 0;
`;
const Button = styled.div`
  width: 97px;
  height: 97px;
  border-radius: 50%;
  position: absolute;
  border: 2px solid #d9ff5a;
  top: 416px;
  left: 144px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ebe3ff30;
`;
const Quantity = styled.div`
  width: 81px;
  height: 72px;
  position: absolute;
  top: 151px;
  transform: rotate(-23deg);
  left: 342px;
  border-radius: 50%;
  background: #fa8fef;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const message = "изготовление на заказ".split("");
const indexMultiplayer = 3;

export function Card({ cardName, image, onClick }) {
  return (
    <CardContainer onClick={onClick}>
      <img
        style={{ position: "absolute", top: 112, left: 99 }}
        src={image}
        alt="cardImage"
      ></img>
      <div
        style={{
          position: "absolute",
          top: 300,
          left: -50,
          width: 196,
          height: 89,
          transform: "rotate(-143deg)",
        }}
      >
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
      </div>
      <img src={ellipse} alt="ellipse"></img>
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
        <p
          style={{
            fontFamily: "Floreste",
            fontSize: "40px",
            fontWeight: 400,
            lineHeight: "38px",
            margin: "0px",
            color: "white",
            marginRight: 2,
          }}
        >
          4
        </p>
        <p
          style={{
            fontFamily: "Euclid Circular A",
            fontSize: "15px",
            fontWeight: 500,
            lineHeight: "19.02px",
            margin: "0px",
            color: "white",
            marginTop: "8px",
          }}
        >
          шт
        </p>
      </Quantity>
    </CardContainer>
  );
}

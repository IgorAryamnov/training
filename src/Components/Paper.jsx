import styled from "styled-components";

const Rectangle = styled.div`
  width: 283px;
  height: 342px;
  background-color: #cbb6ff;
  border-radius: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledNumber = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: #ffffff99;
  position: absolute;
  top: 25px;
  left: 25px;
  margin: 0;
`;
const AuthorName = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: #ffffff;
  text-align: right;
  position: absolute;
  top: 25px;
  left: 166px;
  margin: 0;
  width: 90px;
`;
const PaperHeader = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 28px;
  line-height: 35.5px;
  color: #ffffff;
  position: absolute;
  top: 92px;
  left: 25px;
  margin: 0;
  width: 236px;
`;
const PaperDate = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: #ffffff;
  position: absolute;
  top: 283px;
  left: 25px;
  margin: 0;
  width: 82px;
`;
const ReadingTimeContainer = styled.div`
  width: 92px;
  height: 77px;
  position: absolute;
  top: 293px;
  left: 129px;
  border: 2px solid #d9ff5a;
  border-radius: 50%;
  transform: rotate(-15deg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #ffffff30;
`;
const ReadingTimeNumber = styled.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 40px;
  line-height: 17px;
  margin: 0px;
  color: white;
  margin-top: 10px;
`;
const ReadingTimeMeasurement = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  margin: 0px;
  color: white;
`;
const PaperContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 10px 40px 10px;

  &:hover {
    cursor: pointer;

    .reading-time-text {
      color: #ae97e8;
    }
    .reading-time-container {
      background: #d9ff5a;
    }
  }
`;

export function Paper({ number, author, header, date, time, image }) {
  return (
    <PaperContainer>
      <Rectangle>
        <StyledNumber>{number}</StyledNumber>
        <AuthorName>{author}</AuthorName>
        <PaperHeader>{header}</PaperHeader>
        <PaperDate>{date}</PaperDate>
        <div
          style={{
            height: 142,
            width: 133,
            borderRadius: "50%",
            position: "absolute",
            backgroundColor: "#ae97e8",
            top: 284,
            left: 113,
          }}
        ></div>
        <div
          style={{
            height: 12,
            width: 12,
            position: "absolute",
            backgroundColor: "#ae97e8",
            top: 332,
            left: 243,
          }}
        ></div>
        <div
          style={{
            height: 18,
            width: 18,
            borderRadius: "50%",
            position: "absolute",
            backgroundColor: "#cbb6ff",
            top: 322.7,
            left: 242.7,
          }}
        ></div>
        <div
          style={{
            height: 8,
            width: 8,
            position: "absolute",
            backgroundColor: "#ae97e8",
            top: 335,
            left: 108,
          }}
        ></div>
        <div
          style={{
            height: 18,
            width: 18,
            borderRadius: "50%",
            position: "absolute",
            backgroundColor: "#cbb6ff",
            top: 324,
            left: 97.8,
          }}
        ></div>
        <ReadingTimeContainer className="reading-time-container">
          <ReadingTimeNumber className="reading-time-text">3</ReadingTimeNumber>
          <ReadingTimeMeasurement className="reading-time-text">
            мин
          </ReadingTimeMeasurement>
        </ReadingTimeContainer>
      </Rectangle>
      <div style={{ position: "relative" }}>
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            backgroundColor: "#ae97e8",
            position: "absolute",
            top: -7,
          }}
        ></div>
        <div
          style={{ width: 14, height: 190, backgroundColor: "#cbb6ff" }}
        ></div>
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            backgroundColor: "#ae97e8",
            position: "absolute",
            top: 183,
          }}
        ></div>
      </div>
      <Rectangle>
        <img
          style={{ borderRadius: "28px" }}
          src={image}
          alt="paperImage"
        ></img>
      </Rectangle>
    </PaperContainer>
  );
}

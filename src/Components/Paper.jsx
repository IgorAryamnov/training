import styled from "styled-components";

const Rectangle = styled.div`
  --width: 283px;
  --height: 342px;
  --border-radius: 40px;
  width: var(--width);
  height: var(--height);
  border-radius: var(--border-radius);
  background-color: #cbb6ff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1820px) {
    width: calc(var(--width) * 0.9);
    height: calc(var(--height) * 0.9);
    border-radius: calc(var(--border-radius) * 0.9);
  }
  @media (max-width: 1650px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    border-radius: calc(var(--border-radius) * 0.8);
  }
  @media (max-width: 1500px) {
    width: calc(var(--width) * 0.7);
    height: calc(var(--height) * 0.7);
    border-radius: calc(var(--border-radius) * 0.7);
  }
  @media (max-width: 1320px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    border-radius: calc(var(--border-radius) * 0.6);
  }
  @media (max-width: 1150px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    border-radius: calc(var(--border-radius) * 0.8);
  }
  @media (max-width: 1000px) {
    width: var(--width);
    height: var(--height);
    border-radius: var(--border-radius);
  }
  @media (max-width: 620px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    border-radius: calc(var(--border-radius) * 0.8);
  }
  @media (max-width: 500px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    border-radius: calc(var(--border-radius) * 0.6);
  }
`;
const StyledNumber = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: #ffffff99;
  position: absolute;
  --top: 20px;
  --left: 20px;
  margin: 0;
  top: var(--top);
  left: var(--left);

  @media (max-width: 1820px) {
    top: calc(var(--top) * 0.9);
    left: calc(var(--left) * 0.9);
  }
  @media (max-width: 1650px) {
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1500px) {
    top: calc(var(--top) * 0.7);
    left: calc(var(--left) * 0.7);
  }
  @media (max-width: 1320px) {
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
  }
  @media (max-width: 1000px) {
    top: var(--top);
    left: var(--left);
  }
  @media (max-width: 620px) {
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 500px) {
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
  }
`;
const AuthorName = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  --font-size: 18px;
  --line-height: 22.82px;
  color: #ffffff;
  text-align: right;
  position: absolute;
  --top: 20px;
  --left: 166px;
  margin: 0;
  width: 90px;
  top: var(--top);
  left: var(--left);
  font-size: var(--font-size);
  line-height: var(--line-height);

  @media (max-width: 1820px) {
    top: calc(var(--top) * 0.9);
    left: calc(var(--left) * 0.9);
  }
  @media (max-width: 1650px) {
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.75);
  }
  @media (max-width: 1500px) {
    top: calc(var(--top) * 0.7);
    left: calc(var(--left) * 0.55);
    font-size: calc(var(--font-size) * 0.8);
    line-height: calc(var(--line-height) * 0.8);
  }
  @media (max-width: 1320px) {
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.45);
    font-size: calc(var(--font-size) * 0.7);
    line-height: calc(var(--line-height) * 0.7);
    width: 75px;
  }
  @media (max-width: 1150px) {
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.75);
    width: 90px;
    font-size: var(--font-size);
    line-height: var(--line-height);
  }
  @media (max-width: 1000px) {
    top: var(--top);
    left: var(--left);
    font-size: var(--font-size);
    line-height: var(--line-height);
  }
  @media (max-width: 620px) {
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.75);
  }
  @media (max-width: 500px) {
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.45);
    font-size: calc(var(--font-size) * 0.7);
    line-height: calc(var(--line-height) * 0.7);
    width: 75px;
  }
`;
const PaperHeader = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  --font-size: 28px;
  --line-height: 35.5px;
  color: #ffffff;
  position: absolute;
  --top: 92px;
  --left: 25px;
  margin: 0;
  top: var(--top);
  left: var(--left);
  font-size: var(--font-size);
  line-height: var(--line-height);

  @media (max-width: 1820px) {
    top: calc(var(--top) * 0.9);
    left: calc(var(--left) * 0.9);
    font-size: calc(var(--font-size) * 0.9);
    line-height: calc(var(--line-height) * 0.9);
  }
  @media (max-width: 1650px) {
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
    font-size: calc(var(--font-size) * 0.8);
    line-height: calc(var(--line-height) * 0.8);
  }
  @media (max-width: 1500px) {
    top: calc(var(--top) * 0.7);
    left: calc(var(--left) * 0.7);
    font-size: calc(var(--font-size) * 0.7);
    line-height: calc(var(--line-height) * 0.7);
  }
  @media (max-width: 1320px) {
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
    font-size: calc(var(--font-size) * 0.6);
    line-height: calc(var(--line-height) * 0.6);
  }
  @media (max-width: 1150px) {
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
    font-size: calc(var(--font-size) * 0.8);
    line-height: calc(var(--line-height) * 0.8);
  }
  @media (max-width: 1000px) {
    top: var(--top);
    left: var(--left);
    font-size: var(--font-size);
    line-height: var(--line-height);
  }
  @media (max-width: 620px) {
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
    font-size: calc(var(--font-size) * 0.8);
    line-height: calc(var(--line-height) * 0.8);
  }
  @media (max-width: 500px) {
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
    font-size: calc(var(--font-size) * 0.6);
    line-height: calc(var(--line-height) * 0.6);
  }
`;
const PaperDate = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  width: 82px;
  color: #ffffff;
  position: absolute;
  --top: 283px;
  --left: 25px;
  margin: 0;
  top: var(--top);
  left: var(--left);

  @media (max-width: 1820px) {
    top: calc(var(--top) * 0.9);
    left: calc(var(--left) * 0.9);
  }
  @media (max-width: 1650px) {
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1500px) {
    top: calc(var(--top) * 0.7);
    left: calc(var(--left) * 0.7);
  }
  @media (max-width: 1320px) {
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
    font-size: 10px;
    line-height: 12px;
    width: 66px;
  }
  @media (max-width: 1150px) {
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
    font-size: 15px;
    line-height: 19.02px;
    width: 82px;
  }
  @media (max-width: 1000px) {
    top: var(--top);
    left: var(--left);
  }
  @media (max-width: 620px) {
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 500px) {
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
    font-size: 10px;
    line-height: 12px;
    width: 66px;
  }
`;
const ReadingTimeContainer = styled.div`
  --width: 92px;
  --height: 77px;
  --top: 293px;
  --left: 129px;
  width: var(--width);
  height: var(--height);
  top: var(--top);
  left: var(--left);
  position: absolute;
  border: 2px solid #d9ff5a;
  border-radius: 50%;
  transform: rotate(-15deg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #ffffff30;

  @media (max-width: 1820px) {
    width: calc(var(--width) * 0.9);
    height: calc(var(--height) * 0.9);
    top: calc(var(--top) * 0.9);
    left: calc(var(--left) * 0.9);
  }
  @media (max-width: 1650px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1500px) {
    width: calc(var(--width) * 0.7);
    height: calc(var(--height) * 0.7);
    top: calc(var(--top) * 0.7);
    left: calc(var(--left) * 0.7);
  }
  @media (max-width: 1320px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
  }
  @media (max-width: 1150px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1000px) {
    width: var(--width);
    height: var(--height);
    top: var(--top);
    left: var(--left);
  }
  @media (max-width: 620px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 500px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
  }
`;
const ReadingTimeNumber = styled.p`
  font-family: Floreste;
  font-weight: 400;
  --font-size: 40px;
  --line-height: 17px;
  margin: 0px;
  color: white;
  margin-top: 10px;
  font-size: var(--font-size);
  line-height: var(--line-height);

  @media (max-width: 1500px) {
    font-size: calc(var(--font-size) * 0.8);
    line-height: calc(var(--line-height) * 0.8);
  }
  @media (max-width: 1000px) {
    font-size: var(--font-size);
    line-height: var(--line-height);
  }
  @media (max-width: 620px) {
    font-size: calc(var(--font-size) * 0.8);
    line-height: calc(var(--line-height) * 0.8);
  }
`;
const ReadingTimeMeasurement = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  --font-size: 15px;
  --line-height: 19.02px;
  margin: 0px;
  color: white;
  font-size: var(--font-size);
  line-height: var(--line-height);

  @media (max-width: 1500px) {
    font-size: calc(var(--font-size) * 0.8);
    line-height: calc(var(--line-height) * 0.8);
  }
  @media (max-width: 1000px) {
    font-size: var(--font-size);
    line-height: var(--line-height);
  }
  @media (max-width: 620px) {
    font-size: calc(var(--font-size) * 0.8);
    line-height: calc(var(--line-height) * 0.8);
  }
`;
const PaperContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 10px 40px 10px;

  .top-space {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #ae97e8;
    position: absolute;
    top: -7px;
  }
  .bottom-space {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #ae97e8;
    position: absolute;
    top: 183px;
  }
  .bulkhead {
    width: 14px;
    height: 190px;
    background-color: #cbb6ff;
  }

  &:hover {
    cursor: pointer;

    .reading-time-text {
      color: #ae97e8;
    }
    .reading-time-container {
      background: #d9ff5a;
    }
  }

  @media (max-width: 1500px) {
    .bulkhead {
      height: 150px;
    }
    .bottom-space {
      top: 143px;
    }
  }
  @media (max-width: 1320px) {
    .bulkhead {
      height: 130px;
    }
    .bottom-space {
      top: 123px;
    }
  }
  @media (max-width: 1150px) {
    .bulkhead {
      height: 190px;
    }
    .bottom-space {
      top: 183px;
    }
  }
  @media (max-width: 500px) {
    .bulkhead {
      height: 130px;
    }
    .bottom-space {
      top: 123px;
    }
  }
`;
const Recess = styled.div`
  --height: 142px;
  --width: 133px;
  --top: 284px;
  --left: 113px;
  height: var(--height);
  width: var(--width);
  top: var(--top);
  left: var(--left);
  border-radius: 50%;
  position: absolute;
  background-color: #ae97e8;

  @media (max-width: 1820px) {
    width: calc(var(--width) * 0.9);
    height: calc(var(--height) * 0.9);
    top: calc(var(--top) * 0.9);
    left: calc(var(--left) * 0.9);
  }
  @media (max-width: 1650px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1500px) {
    width: calc(var(--width) * 0.7);
    height: calc(var(--height) * 0.7);
    top: calc(var(--top) * 0.7);
    left: calc(var(--left) * 0.7);
  }
  @media (max-width: 1320px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
  }
  @media (max-width: 1150px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1000px) {
    height: var(--height);
    width: var(--width);
    top: var(--top);
    left: var(--left);
  }
  @media (max-width: 620px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 500px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
  }
`;
const LeftEdge = styled.div`
  --height: 12px;
  --width: 12px;
  --top: 332px;
  --left: 243px;
  height: var(--height);
  width: var(--width);
  top: var(--top);
  left: var(--left);
  position: absolute;
  background-color: #ae97e8;

  @media (max-width: 1820px) {
    width: calc(var(--width) * 0.9);
    height: calc(var(--height) * 0.9);
    top: calc(var(--top) * 0.9);
    left: calc(var(--left) * 0.9);
  }
  @media (max-width: 1650px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1500px) {
    width: calc(var(--width) * 0.7);
    height: calc(var(--height) * 0.7);
    top: calc(var(--top) * 0.7);
    left: calc(var(--left) * 0.7);
  }
  @media (max-width: 1320px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
  }
  @media (max-width: 1150px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1000px) {
    height: var(--height);
    width: var(--width);
    top: var(--top);
    left: var(--left);
  }
  @media (max-width: 620px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 500px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
  }
`;
const LeftEdgeSpace = styled.div`
  --height: 18px;
  --width: 18px;
  --top: 322.7px;
  --left: 242.7px;
  height: var(--height);
  width: var(--width);
  top: var(--top);
  left: var(--left);
  border-radius: 50%;
  position: absolute;
  background-color: #cbb6ff;

  @media (max-width: 1820px) {
    width: calc(var(--width) * 0.9);
    height: calc(var(--height) * 0.9);
    top: calc(var(--top) * 0.9);
    left: calc(var(--left) * 0.9);
  }
  @media (max-width: 1650px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1500px) {
    width: calc(var(--width) * 0.7);
    height: calc(var(--height) * 0.7);
    top: calc(var(--top) * 0.7);
    left: calc(var(--left) * 0.7);
  }
  @media (max-width: 1320px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
  }
  @media (max-width: 1150px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1000px) {
    height: var(--height);
    width: var(--width);
    top: var(--top);
    left: var(--left);
  }
  @media (max-width: 620px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 500px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
  }
`;
const RightEdge = styled.div`
  --height: 8px;
  --width: 8px;
  --top: 335px;
  --left: 108px;
  height: var(--height);
  width: var(--width);
  top: var(--top);
  left: var(--left);
  position: absolute;
  background-color: #ae97e8;

  @media (max-width: 1820px) {
    width: calc(var(--width) * 0.9);
    height: calc(var(--height) * 0.9);
    top: calc(var(--top) * 0.9);
    left: calc(var(--left) * 0.9);
  }
  @media (max-width: 1650px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1500px) {
    width: calc(var(--width) * 0.7);
    height: calc(var(--height) * 0.7);
    top: calc(var(--top) * 0.7);
    left: calc(var(--left) * 0.7);
  }
  @media (max-width: 1320px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
  }
  @media (max-width: 1150px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1000px) {
    height: var(--height);
    width: var(--width);
    top: var(--top);
    left: var(--left);
  }
  @media (max-width: 620px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 500px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
  }
`;
const RightEdgeSpace = styled.div`
  --height: 18px;
  --width: 18px;
  --top: 324px;
  --left: 97.8px;
  height: var(--height);
  width: var(--width);
  top: var(--top);
  left: var(--left);
  border-radius: 50%;
  position: absolute;
  background-color: #cbb6ff;

  @media (max-width: 1820px) {
    width: calc(var(--width) * 0.9);
    height: calc(var(--height) * 0.9);
    top: calc(var(--top) * 0.9);
    left: calc(var(--left) * 0.9);
  }
  @media (max-width: 1650px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1500px) {
    width: calc(var(--width) * 0.7);
    height: calc(var(--height) * 0.7);
    top: calc(var(--top) * 0.7);
    left: calc(var(--left) * 0.7);
  }
  @media (max-width: 1320px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
  }
  @media (max-width: 1150px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1000px) {
    height: var(--height);
    width: var(--width);
    top: var(--top);
    left: var(--left);
  }
  @media (max-width: 620px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 500px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
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
        <Recess />
        <LeftEdge />
        <LeftEdgeSpace />
        <RightEdge />
        <RightEdgeSpace />
        <ReadingTimeContainer className="reading-time-container">
          <ReadingTimeNumber className="reading-time-text">3</ReadingTimeNumber>
          <ReadingTimeMeasurement className="reading-time-text">
            мин
          </ReadingTimeMeasurement>
        </ReadingTimeContainer>
      </Rectangle>
      <div style={{ position: "relative" }}>
        <div className="top-space"></div>
        <div className="bulkhead"></div>
        <div className="bottom-space"></div>
      </div>
      <Rectangle>
        <img
          style={{ borderRadius: "28px", height: "93%" }}
          src={image}
          alt="paperImage"
        ></img>
      </Rectangle>
    </PaperContainer>
  );
}

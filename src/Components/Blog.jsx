import styled from "styled-components";
import { Paper } from "./Paper";
import ModernSofa from "../assets/modern-sofa.png";
import Chandelier from "../assets/chandelier.png";
import ModernWadrobe from "../assets/modern-wardrobe.png";

const BlogText = styled.h3`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 60px;
  line-height: 76.08px;
  color: #ffffff;
  margin: 0;
  margin-left: 10px;

  @media (max-width: 1500px) {
    font-size: 50px;
    line-height: 65px;
  }
  @media (max-width: 1200px) {
    font-size: 40px;
    line-height: 55px;
  }
  @media (max-width: 1000px) {
    font-size: 30px;
    line-height: 45px;
  }
  @media (max-width: 600px) {
    font-size: 23px;
    line-height: 30px;
  }
`;
const BlogTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 243px;
  margin: 0px 10px 0px 10px;

  @media (max-width: 1500px) {
    width: 210px;
  }
  @media (max-width: 1200px) {
    width: 180px;
  }
  @media (max-width: 1000px) {
    width: 150px;
  }
  @media (max-width: 600px) {
    width: 120px;
  }
`;
const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 189px;
  margin: 0px 10px 0px 10px;

  .line {
    width: 63px;
    height: 4px;
    background-color: #cbb6ff;
    margin: 0px 5px 0px 5px;
  }

  @media (max-width: 1500px) {
    width: 170px;
    .line {
      width: 56px;
    }
  }
  @media (max-width: 1200px) {
    width: 151px;
    .line {
      width: 49px;
    }
  }
  @media (max-width: 1000px) {
    width: 132px;
    .line {
      width: 42px;
    }
  }
  @media (max-width: 600px) {
    width: 112px;
    .line {
      width: 36px;
      background-color: #ffffff;
    }
  }
`;
const SliderNumber = styled.p`
  margin: 0;
  font-family: Floreste;
  font-weight: 400;
  font-size: 40px;
  line-height: 38px;
  color: #ffffff;
  margin-top: 10px;

  @media (max-width: 1500px) {
    font-size: 36px;
    line-height: 34px;
  }
  @media (max-width: 1200px) {
    font-size: 32px;
    line-height: 30px;
  }
  @media (max-width: 1000px) {
    font-size: 28px;
    line-height: 26px;
  }
  @media (max-width: 600px) {
    font-size: 24px;
    line-height: 22px;
  }
`;
const BlogContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Papers = styled.div`
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 1500px) {
    margin-top: 60px;
  }
  @media (max-width: 1200px) {
    margin-top: 50px;
  }
  @media (max-width: 1000px) {
    margin-top: 40px;
  }
  @media (max-width: 600px) {
    margin-top: 35px;
  }
`;
const Container = styled.div`
  max-width: 1800px;
  width: 100%;
  margin-top: 169px;

  @media (max-width: 1500px) {
    margin-top: 150px;
  }
  @media (max-width: 1200px) {
    margin-top: 140px;
  }
  @media (max-width: 1000px) {
    margin-top: 130px;
  }
  @media (max-width: 600px) {
    margin-top: 120px;
  }
`;
export function Blog({ id }) {
  return (
    <Container id={id}>
      <BlogContainer>
        <BlogTextContainer>
          <div
            style={{
              width: 35,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
              }}
            ></div>
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                backgroundColor: "#FFFFFF4D",
              }}
            ></div>
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                backgroundColor: "#FFFFFF4D",
              }}
            ></div>
          </div>
          <BlogText>БЛОГ</BlogText>
        </BlogTextContainer>
        <Slider>
          <SliderNumber>02</SliderNumber>
          <div className="line"></div>
          <SliderNumber>04</SliderNumber>
        </Slider>
      </BlogContainer>
      <Papers>
        <Paper
          number="01"
          author="Laura Busche"
          header="НОВАЯ КОЛЛЕКЦИЯ КРЕСЕЛ"
          date="14 Января 2023"
          image={ModernSofa}
        ></Paper>
        <Paper
          number="02"
          author="Laura Busche"
          header="СВЕТОВОЙ ДИЗАЙН В ИНТЕРЬЕРЕ"
          date="14 Января 2023"
          image={Chandelier}
        ></Paper>
        <Paper
          number="03"
          author="Laura Busche"
          header="КАК ВЫБРАТЬ ШКАФ В СПАЛЬНЮ"
          date="14 Января 2023"
          image={ModernWadrobe}
        ></Paper>
      </Papers>
    </Container>
  );
}

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
`;
const BlogTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 243px;
  margin: 0px 10px 0px 10px;
`;
const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 189px;
  margin: 0px 10px 0px 10px;
`;
const SliderNumber = styled.p`
  margin: 0;
  font-family: Floreste;
  font-weight: 400;
  font-size: 40px;
  line-height: 38px;
  color: #ffffff;
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
`;
const Container = styled.div`
  max-width: 1800px;
  width: 100%;
  margin-top: 169px;
`;
export function Blog() {
  return (
    <Container>
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
          <div
            style={{
              width: 63,
              height: 4,
              backgroundColor: "#CBB6FF",
              margin: "0px 5px 10px 5px",
            }}
          ></div>
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

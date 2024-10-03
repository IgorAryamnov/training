import styled from "styled-components";

const ClosedSlideContainer = styled.div`
  min-width: 340px;
  margin: 20px 10px 0px 10px;
  flex: 1 1;
  height: 1038px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }
`;
const SlideTextContainer = styled.div`
  margin-bottom: 69px;
  width: 58px;
  height: 81px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const SlideText = styled.p`
  margin: 0;
  font-family: Euclid Circular A;
  font-size: 15px;
  font-weight: 500;
  line-height: 19.02px;
  color: #ffffff99;
`;
const SlideNumber = styled.p`
  margin: 0;
  font-family: Floreste;
  font-size: 40px;
  font-weight: 400;
  line-height: 38px;
  color: #ffffff;
`;

export function ClosedSmallSlide({ color, image, number, id, onViewChange }) {
  function HandleClick(e) {
    e.stopPropagation();
    if (id === "1") {
      onViewChange[0]({
        firstSlide: true,
        secondSlide: false,
        thirdSlide: false,
      });
    } else {
      if (id === "2") {
        onViewChange[0]({
          firstSlide: false,
          secondSlide: true,
          thirdSlide: false,
        });
      } else {
        onViewChange[0]({
          firstSlide: false,
          secondSlide: false,
          thirdSlide: true,
        });
      }
    }
  }

  return (
    <ClosedSlideContainer
      style={{
        background: `${color}`,
      }}
      onClick={(e) => HandleClick(e)}
    >
      <div style={{ width: 1, height: 1 }}></div>
      <img
        style={{ transform: "rotate(7deg)" }}
        src={image}
        alt="productSlideImage"
      />
      <SlideTextContainer>
        <SlideText>слайд</SlideText>
        <SlideNumber>{number}</SlideNumber>
      </SlideTextContainer>
    </ClosedSlideContainer>
  );
}

import styled from "styled-components";

const ClosedSlideContainer = styled.button`
  min-width: 340px;
  max-width: 500px;
  margin: 20px 10px 0px 10px;
  flex: 1 1;
  height: 1038px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  outline: none;
  border: none;
  box-size: border-box;

  &:hover,
  &:focus-visible {
    cursor: pointer;
    border: 2px solid #d9ff5a;

    .closed-slide-image {
      transform: perspective(100px) translateZ(10px);
    }
  }
  @media (max-width: 1800px) {
    height: 1000px;
    min-width: 300px;
  }
  @media (max-width: 1600px) {
    height: 950px;
    min-width: 250px;
  }
  @media (max-width: 1500px) {
    min-width: 200px;
  }
  @media (max-width: 1400px) {
    height: 850px;
    min-width: 170px;
  }
  @media (max-width: 700px) {
    height: 750px;
  }
  @media (max-width: 600px) {
    height: 640px;
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
const Image = styled.img`
  transform: rotate(7deg);

  @media (max-width: 1500px) {
    height: 23%;
  }
  @media (max-width: 1200px) {
    height: 30%;
  }
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
      <Image
        className="closed-slide-image"
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

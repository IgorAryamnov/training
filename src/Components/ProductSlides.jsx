import styled from "styled-components";
import { useState } from "react";
import lampBig from "../assets/lamp3Big.png";
import chairBig from "../assets/chairBig.png";
import tableBig from "../assets/tableBig.png";
import lampImage from "../assets/lamp3.png";
import chairImage2 from "../assets/chair2.png";
import tableImage2 from "../assets/table2.png";
import { DefaultMainSlideView } from "./DefaultMainSlideView";
import { OpenedSlide } from "./OpenedSlide";
import { ClosedSmallSlide } from "./ClosedSmallSlide";

const SlidesContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

export function ProductSlides() {
  const [defaultView, setDefaultView] = useState(true);
  const [currentSlide, setCurrentSlide] = useState({
    firstSlide: false,
    secondSlide: false,
    thirdSlide: false,
  });

  return (
    <SlidesContainer>
      {defaultView ? (
        <DefaultMainSlideView
          onViewChange={[setCurrentSlide, setDefaultView]}
        />
      ) : (
        <>
          {currentSlide.firstSlide ? (
            <OpenedSlide
              id="111"
              category="Светильник"
              author="BENJAMIN MOORE"
              image={lampBig}
              productName="СВЕТИЛЬНИК"
              productDescription="Функциональная дизайнерская лампа для создания максимально комфортного освещения"
              productPrice="150 000"
              background="unset"
            />
          ) : (
            <ClosedSmallSlide
              id="1"
              color="#C5B0FAB2"
              image={lampImage}
              number="01"
              onViewChange={[setCurrentSlide, setDefaultView]}
            />
          )}
          {currentSlide.secondSlide ? (
            <OpenedSlide
              id="222"
              category="Кресло"
              author="PAINT THE GLORY"
              image={chairBig}
              productName="КРЕСЛО"
              productDescription="Функциональная дизайнерское кресло для создания максимально уюта в помещении"
              productPrice="120 000"
              background="#FA8FEF"
              color="#FFA8F6"
            />
          ) : (
            <ClosedSmallSlide
              id="2"
              color="#FA8FEF"
              image={chairImage2}
              number="02"
              onViewChange={[setCurrentSlide, setDefaultView]}
            />
          )}
          {currentSlide.thirdSlide ? (
            <OpenedSlide
              id="333"
              category="Стол"
              author="BENJAMIN MOORE"
              image={tableBig}
              productName="ВЫСОКИЙ СТОЛ"
              productDescription="Функциональный дизайнерский стол для создания максимального комфорта в помещении"
              productPrice="235 000"
              background="#AECFFF"
              color="#BED8FF"
            />
          ) : (
            <ClosedSmallSlide
              id="3"
              color="#AECFFF"
              image={tableImage2}
              number="03"
              onViewChange={[setCurrentSlide, setDefaultView]}
            />
          )}
          {/* {currentSlide.firstSlide ? (
            <>
              <OpenedSlide
                className="open-slide"
                id="111"
                category="Светильник"
                author="BENJAMIN MOORE"
                image={lampBig}
                productName="СВЕТИЛЬНИК"
                productDescription="Функциональная дизайнерская лампа для создания максимально комфортного освещения"
                productPrice="150 000"
                background="unset"
              />
              <ClosedSmallSlide
                id="2"
                color="#FA8FEF"
                image={chairImage2}
                number="02"
                onViewChange={[setCurrentSlide, setDefaultView]}
              />
              <ClosedSmallSlide
                id="3"
                color="#AECFFF"
                image={tableImage2}
                number="03"
                onViewChange={[setCurrentSlide, setDefaultView]}
              />
            </>
          ) : currentSlide.secondSlide ? (
            <>
              <OpenedSlide
                id="222"
                category="Кресло"
                author="PAINT THE GLORY"
                image={chairBig}
                productName="КРЕСЛО"
                productDescription="Функциональная дизайнерское кресло для создания максимально уюта в помещении"
                productPrice="120 000"
                background="#FA8FEF"
                color="#FFA8F6"
              />
              <ClosedSmallSlide
                id="1"
                color="#C5B0FAB2"
                image={lampImage}
                number="01"
                onViewChange={[setCurrentSlide, setDefaultView]}
              />
              <ClosedSmallSlide
                id="3"
                color="#AECFFF"
                image={tableImage2}
                number="03"
                onViewChange={[setCurrentSlide, setDefaultView]}
              />
            </>
          ) : currentSlide.thirdSlide ? (
            <>
              <OpenedSlide
                id="333"
                category="Стол"
                author="BENJAMIN MOORE"
                image={tableBig}
                productName="ВЫСОКИЙ СТОЛ"
                productDescription="Функциональный дизайнерский стол для создания максимального комфорта в помещении"
                productPrice="235 000"
                background="#AECFFF"
                color="#BED8FF"
              />
              <ClosedSmallSlide
                id="1"
                color="#C5B0FAB2"
                image={lampImage}
                number="01"
                onViewChange={[setCurrentSlide, setDefaultView]}
              />
              <ClosedSmallSlide
                id="2"
                color="#FA8FEF"
                image={chairImage2}
                number="02"
                onViewChange={[setCurrentSlide, setDefaultView]}
              />
            </>
          ) : (
            <></>
          )} */}
        </>
      )}
    </SlidesContainer>
  );
}

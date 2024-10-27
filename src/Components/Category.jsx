import { Card } from "./Card";
import MirrorImage from "../assets/mirror.png";
import LampImage from "../assets/mainLamp.png";
import ChairImage from "../assets/mainChair.png";
import TableImage from "../assets/mainTable.png";
import styled from "styled-components";
import {
  productCategory1,
  productCategory2,
  productCategory3,
  productCategory4,
} from "../utils/consts";
import { useState } from "react";
import { CategoryProducts } from "./CategoryProducts";

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const CategoryText = styled.h2`
  --font-size: 60px;
  --line-height: 76.08px;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: var(--font-size);
  line-height: var(--line-height);
  color: white;
  margin: 0;

  @media (max-width: 1820px) {
    font-size: calc(var(--font-size) * 0.8);
    line-height: calc(var(--line-height) * 0.8);
  }
  @media (max-width: 1400px) {
    font-size: calc(var(--font-size) * 0.7);
    line-height: calc(var(--line-height) * 0.7);
  }
  @media (max-width: 1000px) {
    font-size: calc(var(--font-size) * 0.5);
    line-height: calc(var(--line-height) * 0.5);
  }
`;
const CategoryTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;

  @media (max-width: 1820px) {
    margin-bottom: 60px;
  }
`;
const Container = styled.div`
  max-width: 1800px;
  width: 100%;
  margin-top: 170px;
  position: relative;
`;
const showProducts = {
  first: false,
  second: false,
  third: false,
  fourth: false,
};

export function Category() {
  const [show, setShow] = useState(showProducts);

  return (
    <Container>
      <CategoryTextContainer>
        <CategoryText>КАТЕГОРИИ</CategoryText>
      </CategoryTextContainer>
      <CategoryContainer>
        <Card
          cardName={"НАПОЛЬНЫЕ ЗЕРКАЛА"}
          image={MirrorImage}
          onClick={() => {
            setShow({
              first: true,
              second: false,
              third: false,
              fourth: false,
            });
            document
              .getElementById("category")
              .scrollIntoView({ behavior: "smooth" });
          }}
        />
        <Card
          cardName={"ТОРШЕРЫ И ЛАМПЫ"}
          image={LampImage}
          onClick={() => {
            setShow({
              first: false,
              second: true,
              third: false,
              fourth: false,
            });
            document
              .getElementById("category")
              .scrollIntoView({ behavior: "smooth" });
          }}
        />
        <Card
          cardName={"КРЕСЛА И СТУЛЬЯ"}
          image={ChairImage}
          onClick={() => {
            setShow({
              first: false,
              second: false,
              third: true,
              fourth: false,
            });
            document
              .getElementById("category")
              .scrollIntoView({ behavior: "smooth" });
          }}
        />
        <Card
          cardName={"СТОЛЫ И ТУМБЫ"}
          image={TableImage}
          onClick={() => {
            setShow({
              first: false,
              second: false,
              third: false,
              fourth: true,
            });
            document
              .getElementById("category")
              .scrollIntoView({ behavior: "smooth" });
          }}
        />
      </CategoryContainer>
      {show.first ? (
        <CategoryProducts id="category" productsArray={productCategory1} />
      ) : (
        <div style={{ position: "absolute" }} id="category"></div>
      )}
      {show.second ? (
        <CategoryProducts id="category" productsArray={productCategory2} />
      ) : (
        <div style={{ position: "absolute" }} id="category"></div>
      )}
      {show.third ? (
        <CategoryProducts id="category" productsArray={productCategory3} />
      ) : (
        <div style={{ position: "absolute" }} id="category"></div>
      )}
      {show.fourth ? (
        <CategoryProducts id="category" productsArray={productCategory4} />
      ) : (
        <div style={{ position: "absolute" }} id="category"></div>
      )}
    </Container>
  );
}

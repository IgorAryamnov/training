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
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 60px;
  line-height: 76.08px;
  color: white;
  margin: 0;
`;
const CategoryTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
`;
const Container = styled.div`
  max-width: 1800px;
  width: 100%;
  margin-top: 170px;
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
          onClick={() =>
            setShow({ first: true, second: false, third: false, fourth: false })
          }
        />
        <Card
          cardName={"ТОРШЕРЫ И ЛАМПЫ"}
          image={LampImage}
          onClick={() =>
            setShow({ first: false, second: true, third: false, fourth: false })
          }
        />
        <Card
          cardName={"КРЕСЛА И СТУЛЬЯ"}
          image={ChairImage}
          onClick={() =>
            setShow({ first: false, second: false, third: true, fourth: false })
          }
        />
        <Card
          cardName={"СТОЛЫ И ТУМБЫ"}
          image={TableImage}
          onClick={() =>
            setShow({ first: false, second: false, third: false, fourth: true })
          }
        />
      </CategoryContainer>
      {show.first ? (
        <CategoryProducts productsArray={productCategory1} />
      ) : (
        <></>
      )}
      {show.second ? (
        <CategoryProducts productsArray={productCategory2} />
      ) : (
        <></>
      )}
      {show.third ? (
        <CategoryProducts productsArray={productCategory3} />
      ) : (
        <></>
      )}
      {show.fourth ? (
        <CategoryProducts productsArray={productCategory4} />
      ) : (
        <></>
      )}
    </Container>
  );
}

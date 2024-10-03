import styled from "styled-components";
import { ReactComponent as ShoppingCart } from "../assets/cart.svg";

const ProductOnSlideName = styled.p`
  margin: 0;
  font-family: Floreste;
  font-weight: 400;
  font-size: 212px;
  color: #cbb6ff99;
  text-wrap: nowrap;
  line-height: 201.4px;
`;
const SelectedProductSlideContainer = styled.div`
  height: 1038px;
  margin: 20px 10px 0px 10px;
  width: 1180px;
  position: relative;
  border-radius: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 1200px) {
    .product-image {
      width: 325px;
      height: 600px;
    }
    .author-name {
      font-size: 175px;
    }
  }
  @media only screen and (max-width: 1000px) {
    .product-image {
      width: 300px;
      height: 550px;
    }
    .author-name {
      font-size: 150px;
    }
  }
`;
const PromotionalNotification = styled.p`
  margin: 0;
  font-family: Euclid Circular A;
  color: #d9ff5a;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  margin-bottom: 31px;
`;
const ProductDescriptionContainer = styled.div`
  width: 312px;
  height: 195px;
  margin-left: 60px;
`;
const ProductName = styled.h2`
  margin: 0;
  font-family: Euclid Circular A;
  color: white;
  font-weight: 500;
  font-size: 28px;
  line-height: 35.5px;
  margin-bottom: 9px;
`;
const ProductDescription = styled.p`
  margin: 0;
  font-family: Euclid Circular A;
  color: white;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  margin-bottom: 26px;
`;
const PriceLine = styled.div`
  border: 0.5px solid #ffffff33;
  width: 274px;
  margin-bottom: 28px;
`;
const PriceContainer = styled.div`
  display: flex;
  width: 127px;
  height: 28px;
  justify-content: space-between;
`;
const Price = styled.p`
  margin: 0;
  font-family: Floreste;
  color: #d9ff5a;
  font-weight: 400;
  font-size: 40px;
  line-height: 38px;
`;
const PriceSymbol = styled.p`
  margin: 0;
  font-family: Euclid Circular A;
  color: #d9ff5a;
  font-weight: 400;
  font-size: 20px;
  line-height: 15px;
`;
const Button = styled.button`
  width: 357px;
  height: 156px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  border: unset;
  background: unset;

  :hover {
    cursor: pointer;
  }
`;
const ButtonText = styled.p`
  margin-left: 11px;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  color: white;
`;
const ButtonEllipse = styled.div`
  width: 352px;
  height: 131px;
  border: 2px solid #d9ff5a;
  position: absolute;
  border-radius: 50%;
`;

export function OpenedSlide({
  author,
  image,
  productName,
  productDescription,
  productPrice,
  background,
  color,
}) {
  return (
    <SelectedProductSlideContainer style={{ background: background }}>
      <div
        style={{
          position: "relative",
          top: 406,
          marginBottom: 140,
        }}
      >
        <PromotionalNotification>ТОВАР ДНЯ</PromotionalNotification>
        <ProductOnSlideName className="author-name" style={{ color: color }}>
          {author}
        </ProductOnSlideName>
      </div>
      <img
        className="product-image"
        style={{
          position: "absolute",
          top: "155px",
        }}
        src={image}
        alt="productImage"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          position: "relative",
          top: 400,
        }}
      >
        <ProductDescriptionContainer>
          <ProductName>{productName}</ProductName>
          <ProductDescription>{productDescription}</ProductDescription>
          <PriceLine />
          <PriceContainer>
            <Price>{productPrice}</Price>
            <PriceSymbol>₽</PriceSymbol>
          </PriceContainer>
        </ProductDescriptionContainer>
        <Button>
          <ShoppingCart style={{ color: "#D9FF5A" }} />
          <ButtonText>Купить</ButtonText>
          <ButtonEllipse
            style={{
              top: "12px",
              backgroundColor: "#ffffff30",
              transform: "rotate(-13deg)",
            }}
          ></ButtonEllipse>
          <ButtonEllipse
            style={{
              transform: "rotate(-2deg)",
            }}
          ></ButtonEllipse>
        </Button>
      </div>
    </SelectedProductSlideContainer>
  );
}

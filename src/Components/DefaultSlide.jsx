import styled from "styled-components";

const SlideContainer = styled.button`
  max-width: 614px;
  min-width: 400px;
  border: none;
  flex: 1 1 400px;
  height: 1038px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 40px;
  margin: 20px 0px 0px 20px;
  outline: none;

  &:hover,
  &:focus-visible {
    cursor: pointer;
    border: 2px solid #d9ff5a;

    .slide-image {
      transform: perspective(100px) translateZ(10px);
    }
  }
`;
const AuthorName = styled.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 70px;
  line-height: 66.5px;
  color: #cbb6ff;
  margin: 0;
  white-space: nowrap;
  position: absolute;
  top: 236px;
`;
const ProductCategory = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 25.36px;
  color: #ffffff;
  margin: 0;
  margin-top: 300px;
`;
const ProductDescription = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 23px;
  color: #ffffff;
  margin: 0;
  text-align: center;
  width: 275px;
  margin-top: 25px;
`;
const PriceContainer = styled.div`
  display: flex;
  width: 95px;
  justify-content: space-between;
  margin-top: 28px;
`;
const PriceNumber = styled.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 28px;
  line-height: 26.6px;
  color: #ffffff;
  margin: 0;
`;
const PriceCurrency = styled.p`
  font-family: Euclid Circular A;
  font-weight: 400;
  font-size: 20px;
  line-height: 25.36px;
  color: #ffffff;
  margin: 0;
`;
const Image = styled.img`
  position: absolute;
`;
export function DefaultSlide({
  style,
  image,
  author,
  productCategory,
  productDescription,
  price,
  onClick,
}) {
  return (
    <SlideContainer
      style={{ background: style.backgroundColor }}
      onClick={onClick}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          width: 290,
          height: 425,
          top: 200,
        }}
      >
        <AuthorName style={{ color: style.color }}>{author}</AuthorName>
        <Image className="slide-image" src={image} alt="defProductImage" />
      </div>
      <ProductCategory>{productCategory}</ProductCategory>
      <ProductDescription>{productDescription}</ProductDescription>
      <div
        style={{
          width: "274px",
          height: "2px",
          background: "#FFFFFF33",
          marginTop: 28,
        }}
      ></div>
      <PriceContainer>
        <PriceNumber>{price}</PriceNumber>
        <PriceCurrency>₽</PriceCurrency>
      </PriceContainer>
    </SlideContainer>
  );
}

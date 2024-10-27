import styled from "styled-components";

const SlideContainer = styled.button`
  max-width: 614px;
  min-width: 365px;
  border: none;
  flex: 1 1;
  height: 1038px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 40px;
  margin: 20px 10px 0px 10px;
  outline: none;

  &:hover,
  &:focus-visible {
    cursor: pointer;
    border: 2px solid #d9ff5a;

    .slide-image {
      transform: perspective(100px) translateZ(10px);
    }
  }

  @media (max-width: 1400px) {
    height: 830px;
  }
  @media (max-width: 1200px) {
    height: 726px;
    min-width: 305px;
  }
  @media (max-width: 1000px) {
    height: 622px;
    min-width: 230px;
  }
  @media (max-width: 800px) {
    height: 550px;
    min-width: 230px;
    max-width: 350px;
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

  @media (max-width: 1400px) {
    top: 188px;
  }
  @media (max-width: 1200px) {
    font-size: 56px;
    line-height: 52.5px;
    top: 175px;
  }
  @media (max-width: 1000px) {
    font-size: 42px;
    line-height: 39px;
    top: 150px;
  }
  @media (max-width: 800px) {
    top: 120px;
  }
`;
const ProductCategory = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 25.36px;
  color: #ffffff;
  margin: 0;
  margin-top: 300px;

  @media (max-width: 1400px) {
    margin-top: 230px;
  }
  @media (max-width: 1200px) {
    margin-top: 150px;
  }
  @media (max-width: 1000px) {
    font-size: 16px;
    line-height: 21.36px;
    margin-top: 130px;
  }
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

  @media (max-width: 1000px) {
    font-size: 12px;
    line-height: 20px;
    width: 225px;
  }
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
  height: 400px;

  @media (max-width: 1400px) {
    height: 320px;
  }
  @media (max-width: 1200px) {
    height: 280px;
  }
  @media (max-width: 1000px) {
    height: 240px;
  }
  @media (max-width: 800px) {
    height: 200px;
  }
`;
const ImageAndAuthor = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 400px;
  top: 200px;

  @media (max-width: 1400px) {
    top: 130px;
    height: 320px;
  }
  @media (max-width: 1200px) {
    top: 90px;
    height: 280px;
  }
  @media (max-width: 1000px) {
    top: 90px;
    height: 240px;
  }
  @media (max-width: 800px) {
    top: 90px;
    height: 200px;
  }
`;
const Space = styled.div`
  width: 274px;
  height: 2px;
  background: #ffffff33;
  margin-top: 28px;

  @media (max-width: 1000px) {
    width: 225px;
  }
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
      <ImageAndAuthor>
        <AuthorName style={{ color: style.color }}>{author}</AuthorName>
        <Image className="slide-image" src={image} alt="defProductImage" />
      </ImageAndAuthor>
      <ProductCategory>{productCategory}</ProductCategory>
      <ProductDescription>{productDescription}</ProductDescription>
      <Space />
      <PriceContainer>
        <PriceNumber>{price}</PriceNumber>
        <PriceCurrency>₽</PriceCurrency>
      </PriceContainer>
    </SlideContainer>
  );
}

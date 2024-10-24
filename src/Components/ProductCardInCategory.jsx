import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  margin: 10px 0px 0px 0px;
  flex: 1;
`;
const ProductImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Color = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 7px;
  left: 2px;
  width: 20px;
  height: 20px;
  border: 3px solid white;
  background: ${(props) => props.background};
  border-radius: 50%;
`;
const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px 0px 0px 0px;
`;
const ProductName = styled.h2`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 28px;
  line-height: 35.5px;
  margin: 0px;
  color: white;
`;
const ProductCategory = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 23px;
  margin: 0px;
  color: white;
  margin-bottom: 19px;
`;
const PriceAndButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Price = styled.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 28px;
  line-height: 26.6px;
  margin: 0px;
  color: white;
`;
const Currency = styled.p`
  font-family: Euclid Circular A;
  font-weight: 400;
  font-size: 20px;
  line-height: 15.36px;
  margin: 0px;
  color: white;
`;
const Button = styled.button`
  margin: 0px;
  padding: 0px;
  width: 104px;
  height: 24px;
  display: flex;
  align-items: center;
  background: unset;
  border: none;
  margin-bottom: 7px;
  outline: none;

  &:hover,
  &:focus-visible {
    cursor: pointer;

    .button-text {
      color: #d9ff5a;
    }
  }
`;
const ButtonText = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin: 0px;
  color: white;
  margin-left: 11px;
`;
export function ProductCardInCategory({
  image,
  background,
  name,
  category,
  price,
  onClick,
}) {
  return (
    <CardContainer>
      <Color background={background} />
      <ProductImageContainer>
        <img src={image} alt="product"></img>
      </ProductImageContainer>
      <DescriptionContainer>
        <ProductName>{name}</ProductName>
        <ProductCategory>{category}</ProductCategory>
        <div
          style={{
            border: "2px solid #D9FF5A",
            width: "100%",
            marginBottom: "28px",
          }}
        ></div>
        <PriceAndButtonContainer>
          <div
            style={{
              display: "flex",
              width: 95,
              justifyContent: "space-between",
            }}
          >
            <Price>{price}</Price>
            <Currency>₽</Currency>
          </div>
          <Button onClick={onClick}>
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="#D9FF5A"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.71513 2.69L3.51817 5.14C3.47877 5.61 3.84315 6 4.30601 6H19.3833C19.7969 6 20.1416 5.68 20.1712 5.26C20.2992 3.49 18.9697 2.05 17.2266 2.05H5.12339C5.02491 1.61 4.82795 1.19 4.52266 0.84C4.03026 0.31 3.3409 0 2.63184 0H0.918289C0.51452 0 0.179688 0.34 0.179688 0.75C0.179688 1.16 0.51452 1.5 0.918289 1.5H2.63184C2.93713 1.5 3.22273 1.63 3.42953 1.85C3.63634 2.08 3.73482 2.38 3.71513 2.69ZM9.17969 20C9.17969 21.1046 8.28426 22 7.17969 22C6.07512 22 5.17969 21.1046 5.17969 20C5.17969 18.8954 6.07512 18 7.17969 18C8.28426 18 9.17969 18.8954 9.17969 20ZM17.1797 20C17.1797 21.1046 16.2843 22 15.1797 22C14.0751 22 13.1797 21.1046 13.1797 20C13.1797 18.8954 14.0751 18 15.1797 18C16.2843 18 17.1797 18.8954 17.1797 20ZM4.32925 8H19.4005C19.8623 8 20.216 8.37818 20.1767 8.82424L19.8525 13.3527C19.7444 14.8073 18.4475 16 16.9738 16H6.04859C4.36854 16 3.05202 14.5842 3.18956 12.9261L3.54326 8.70788C3.58256 8.3103 3.9166 8 4.32925 8Z"
                fill="#D9FF5A"
              />
            </svg>
            <ButtonText className="button-text">Купить</ButtonText>
          </Button>
        </PriceAndButtonContainer>
      </DescriptionContainer>
    </CardContainer>
  );
}

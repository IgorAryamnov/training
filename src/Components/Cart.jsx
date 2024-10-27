import styled from "styled-components";
import TrashCan from "../assets/trash.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  productCountDecrement,
  productCountIncrement,
} from "../features/cart/cart";

const ItemCard = styled.div`
  width: 600px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  @media (max-width: 750px) {
    width: 500px;
  }
  @media (max-width: 650px) {
    width: 400px;
  }
  @media (max-width: 500px) {
    width: 310px;
  }
`;
const ItemInfo = styled.div`
  margin-bottom: 22px;
  display: flex;
  justify-content: space-between;
`;
const Color = styled.div`
  width: 11px;
  height: 11px;
  border: 3px solid white;
  border-radius: 50%;
  margin-right: 12px;
`;
const ItemName = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 25.36px;
  color: #ffffff;
  margin: 0;

  @media (max-width: 550px) {
    font-size: 15px;
    line-height: 19px;
  }
`;
const ItemCategory = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: #ffffff;
  margin: 0;

  @media (max-width: 550px) {
    font-size: 13px;
    line-height: 20px;
  }
`;
const InfoContainer = styled.div`
  max-width: 393px;
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;

  @media (max-width: 750px) {
    max-width: 350px;
  }
  @media (max-width: 650px) {
    max-width: 250px;
  }
  @media (max-width: 500px) {
    max-width: 210px;
  }
`;
const PriceContainer = styled.div`
  display: flex;
  margin-top: 31px;
`;
const PriceNumber = styled.p`
  font-family: Floreste;
  font-size: 28px;
  font-weight: 400;
  line-height: 26.6px;
  color: white;
  margin: 0;

  @media (max-width: 550px) {
    font-size: 25px;
    line-height: 23px;
  }
`;
const PriceCurrency = styled.p`
  font-family: Euclid Circular A;
  font-size: 20px;
  font-weight: 400;
  line-height: 16.36px;
  color: white;
  margin: 0;
  margin-left: 20px;

  @media (max-width: 550px) {
    font-size: 13px;
    line-height: 10px;
    margin-left: 5px;
  }
`;
const CounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 117px;
  align-items: center;
  margin-top: 15px;
`;
const Counter = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  lin-height: 23px;
  color: white;
  margin: 0;
`;
const ConfirmButton = styled.div`
  width: 189px;
  height: 93px;
  border-radius: 50%;
  border: 2px solid #d9ff5a;
  background-color: #ebe3ff30;
  transform: rotate(-6deg);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ButtonText = styled.p`
  font-family: Euclid Circular A;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  margin: 0px;
  color: white;
  transform: rotate(6deg);
`;
const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 48px;

  @media (max-width: 550px) {
    margin: 24px;
  }
  @media (max-width: 500px) {
    margin: 15px;
  }
`;
const EmptyCartMessage = styled.p`
  font-family: Floreste;
  font-size: 50px;
  font-weight: 500;
  line-height: 50px;
  color: white;
  margin: 0;
  margin-top: 10px;

  @media (max-width: 720px) {
    font-size: 40px;
    line-height: 40px;
  }
  @media (max-width: 600px) {
    font-size: 30px;
    line-height: 30px;
  }
`;
const Button = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  padding: 0;
  background-color: unset;
  outline: none;

  &:hover {
    cursor: pointer;
  }

  &.increment {
    border: 2px solid #ffffff;
  }
  &.decrement {
    border: 2px solid #ffffff30;
  }
`;
const StyledLink = styled(Link)`
  outline: none;
  text-decoration: none;
  border-radius: 50%;

  &:hover,
  &:focus-visible {
    cursor: pointer;

    .button-text {
      color: #d9ff5a;
    }
  }
`;
const Footer = styled.div`
  max-width: 522px;
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Image = styled.img`
  height: 90%;

  @media (max-width: 500px) {
    width: 75px;
    height: 120px;
  }
`;
const Header = styled.div`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  margin: 0px;
  color: white;
  margin-bottom: 53px;
  margin-right: auto;

  @media (max-width: 500px) {
    margin-bottom: 30px;
  }
  @media (max-width: 500px) {
    margin-bottom: 15px;
    margin-top: 15px;
  }
`;
const Total = styled.p`
  font-weight: 500;
  font-family: Euclid Circular A;
  font-size: 20px;
  line-height: 25.36px;
  margin: 0px;
  color: white;

  @media (max-width: 500px) {
    font-size: 13px;
    line-height: 20px;
  }
`;

export function Cart() {
  const cartSlice = useSelector((state) => state.cart.itemsInCart);
  const dispatch = useDispatch();

  if (cartSlice.length === 0) {
    return (
      <CartContainer>
        <EmptyCartMessage>ВАША КОРЗИНА ПУСТА</EmptyCartMessage>
      </CartContainer>
    );
  }

  let sum = 0;

  for (let i = 0; i < cartSlice.length; i++) {
    let price = Number(cartSlice[i].price.replaceAll(" ", ""));
    sum = sum + cartSlice[i].count * price;
  }

  return (
    <CartContainer>
      <Header>ВАША КОРЗИНА</Header>
      <div style={{ maxHeight: "750px", overflowY: "scroll" }}>
        {cartSlice.map((item) => {
          return (
            <ItemCard key={item.id}>
              <Image src={item.image} alt="itemImage" />
              <InfoContainer>
                <ItemInfo>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 13,
                      }}
                    >
                      <Color
                        style={{ backgroundColor: `${item.background}` }}
                      />
                      <ItemName>{item.name}</ItemName>
                    </div>
                    <ItemCategory>{item.category}</ItemCategory>
                  </div>
                  <input
                    style={{ marginLeft: 10, outline: "none" }}
                    type="image"
                    src={TrashCan}
                    alt="trash"
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(deleteProduct(item));
                    }}
                  />
                </ItemInfo>
                <div
                  style={{ width: "100%", border: "2px solid #D9FF5A" }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <PriceContainer>
                    <PriceNumber>{item.price}</PriceNumber>
                    <PriceCurrency>₽</PriceCurrency>
                  </PriceContainer>
                  <CounterContainer>
                    <Button
                      className="decrement"
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(productCountDecrement(item));
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "Euclid Circular A",
                          fontSize: "18px",
                          fontWeight: 500,
                          margin: 0,
                          color: "#FFFFFF30",
                        }}
                      >
                        -
                      </p>
                    </Button>
                    <Counter>{item.count}</Counter>
                    <Button
                      className="increment"
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(productCountIncrement(item));
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "Euclid Circular A",
                          fontSize: "18px",
                          fontWeight: 500,
                          margin: 0,
                          color: "#FFFFFF",
                        }}
                      >
                        +
                      </p>
                    </Button>
                  </CounterContainer>
                </div>
              </InfoContainer>
            </ItemCard>
          );
        })}
      </div>
      <Footer>
        <div>
          <Total>ИТОГО:</Total>
          <div
            style={{
              display: "flex",
              marginTop: 15,
            }}
          >
            <PriceNumber style={{ fontSize: "40px", lineHeight: "38px" }}>
              {sum}
            </PriceNumber>
            <PriceCurrency>₽</PriceCurrency>
          </div>
        </div>
        <StyledLink to="/order" onClick={() => window.CartHandler.close()}>
          <ConfirmButton>
            <ButtonText className="button-text">Оформить</ButtonText>
          </ConfirmButton>
        </StyledLink>
      </Footer>
    </CartContainer>
  );
}

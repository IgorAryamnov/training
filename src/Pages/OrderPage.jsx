import styled from "styled-components";
import TrashCan from "../assets/trash.svg";
import { useState } from "react";
import { Congratulation } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../features/cart/cart";
import { Link } from "react-router-dom";
import { Input } from "../Components/Input";

const ItemCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
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

  @media (max-width: 600px) {
    font-size: 15px;
    line-height: 20px;
  }
`;
const ItemCategory = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: #ffffff;
  margin: 0;
`;
const InfoContainer = styled.div`
  max-width: 350px;
  width: 100%;
  margin-right: 10px;
`;
const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95px;
`;
const PriceNumber = styled.p`
  font-family: Floreste;
  font-size: 28px;
  font-weight: 400;
  line-height: 26.6px;
  color: white;
  margin: 0;
`;
const PriceCurrency = styled.p`
  font-family: Euclid Circular A;
  font-size: 20px;
  font-weight: 400;
  line-height: 16.36px;
  color: white;
  margin: 0;

  &.total-currency {
    transform: rotate(13deg);
  }
`;
const OrderContainer = styled.div`
  background: #3320652e;
  border-radius: 30px;
  padding: 48px;
  margin: auto;
  margin-right: 20px;
  max-width: 540px;
  width: 100%;

  @media (max-width: 1400px) {
    margin: 20px;
  }
  @media (max-width: 600px) {
    padding: 32px;
  }
  @media (max-width: 500px) {
    padding: 24px;
  }
`;
const PageContainer = styled.div`
  max-width: 1920px;
  width: 100%;
  position: relative;
  top: 193px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .button-after-order {
    display: none;
  }

  @media (max-width: 1200px) {
    top: 120px;

    .button-after-order {
      display: inline-block;
    }
    .button-inside-form {
      display: none;
    }
  }
`;
const Form = styled.form`
  height: 358px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1200px) {
    height: 150px;
  }
`;
const Button = styled.button`
  width: 189px;
  height: 93px;
  background: #ebe3ff30;
  border: 2px solid #d9ff5a;
  border-radius: 50%;
  transform: rotate(-6deg);
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
  color: white;
  margin: 0;
  transform: rotate(6deg);
`;
const FormTitle = styled.h1`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 60px;
  line-height: 76.08px;
  color: white;
  margin: 0px 0px 70px 0px;
  text-wrap: nowrap;

  @media (max-width: 1400px) {
    font-size: 55px;
    line-height: 71px;
    margin: 0px 0px 60px 0px;
  }
  @media (max-width: 1300px) {
    font-size: 50px;
    line-height: 65px;
    margin: 0px 0px 50px 0px;
  }
  @media (max-width: 1200px) {
    margin: 0px 0px 30px 0px;
  }
  @media (max-width: 600px) {
    font-size: 40px;
    line-height: 45px;
    margin: 0px 0px 20px 0px;
  }
  @media (max-width: 500px) {
    font-size: 35px;
    line-height: 40px;
    margin: 0px 0px 20px 0px;
  }
`;
const OrderListTitle = styled.h2`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: white;
  margin: 0px;
  margin-bottom: 38px;
`;
const TotalPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 500px) {
    margin-bottom: 10px;
  }
`;
const Total = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 25.36px;
  color: white;
  margin: 0px;
`;
const TotalPriceNumber = styled.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 40px;
  line-height: 38px;
  color: white;
  margin: 0px;
  transform: rotate(13deg);
  padding-right: 10px;

  @media (max-width: 600px) {
    font-size: 35px;
    line-height: 33px;
  }
`;
const Overlay = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(141 112 162 / 60%);
  backdrop-filter: blur(25px);
  z-index: 2;
`;
const Modal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(250, 143, 239);
  border-radius: 0.75rem;
`;
const ModalMessage = styled.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 75px;
  line-height: 75px;
  color: white;
  margin: 20px;
  text-align: center;
`;
const FormContainer = styled.p`
  margin: 0px 20px 20px 20px;
  flex: 1;
  max-width: 882px;
`;
const TotalPriceEllipse = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 237px;
  height: 111px;
  border-radius: 50%;
  border: 2px solid #d9ff5a;
  background: #ffffff30;
  transform: rotate(-13deg);

  @media (max-width: 600px) {
    width: 189px;
    height: 89px;
  }
`;
const Image = styled.img`
  height: 200px;
  margin-right: 20px;

  @media (max-width: 600px) {
    height: 160px;
  }
  @media (max-width: 500px) {
    height: 120px;
  }
`;

export function OrderPage() {
  const [check, setCheck] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const cartSlice = useSelector((state) => state.cart.itemsInCart);
  const dispatch = useDispatch();

  function submitHandler(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log(name, address, phoneNumber);
    setCheck(true);
  }

  if (cartSlice.length === 0) {
    return (
      <Overlay>
        <Modal>
          <ModalMessage>
            В данный момент Ваша корзина пуста, нажмите <Link to="/">сюда</Link>
            , чтобы вернуться на главную страницу
          </ModalMessage>
        </Modal>
      </Overlay>
    );
  }

  let sum = 0;

  for (let i = 0; i < cartSlice.length; i++) {
    let price = Number(cartSlice[i].price.replaceAll(" ", ""));
    sum = sum + cartSlice[i].count * price;
  }

  return (
    <>
      {check ? (
        <Congratulation />
      ) : (
        <PageContainer>
          <FormContainer>
            <FormTitle>ОФОРМИТЬ ЗАКАЗ</FormTitle>
            <Form onSubmit={(e) => submitHandler(e)}>
              <Input
                name="name"
                placeholder="ИМЯ"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                name="address"
                placeholder="АДРЕС"
                onChange={(e) => setAddress(e.target.value)}
              />
              <Input
                name="phoneNumber"
                placeholder="ТЕЛЕФОН"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <Button className="button-inside-form" type="submit">
                <ButtonText className="button-text">Заказать</ButtonText>
              </Button>
            </Form>
          </FormContainer>
          <OrderContainer>
            <OrderListTitle>СОСТАВ ЗАКАЗА</OrderListTitle>
            <div
              style={{ maxHeight: 750, overflowY: "scroll", marginBottom: 20 }}
            >
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
                          style={{ outline: "none" }}
                          type="image"
                          src={TrashCan}
                          alt="trash"
                          onClick={(e) => {
                            e.stopPropagation();
                            dispatch(deleteProduct(item));
                          }}
                        />
                      </ItemInfo>
                      <div style={{ border: "2px solid #D9FF5A" }}></div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginTop: 31,
                        }}
                      >
                        <PriceContainer>
                          <PriceNumber>{item.price}</PriceNumber>
                          <PriceCurrency>₽</PriceCurrency>
                        </PriceContainer>
                        <PriceNumber>{item.count} шт.</PriceNumber>
                      </div>
                    </InfoContainer>
                  </ItemCard>
                );
              })}
            </div>
            <TotalPriceContainer>
              <Total>ИТОГО:</Total>
              <TotalPriceEllipse>
                <TotalPriceNumber>{sum}</TotalPriceNumber>
                <PriceCurrency className="total-currency">₽</PriceCurrency>
              </TotalPriceEllipse>
            </TotalPriceContainer>
            <Button
              className="button-after-order"
              type="submit"
              onClick={(e) => submitHandler(e)}
            >
              <ButtonText className="button-text">Заказать</ButtonText>
            </Button>
          </OrderContainer>
        </PageContainer>
      )}
    </>
  );
}

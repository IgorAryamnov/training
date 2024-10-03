import styled from "styled-components";
import TrashCan from "../assets/trash.svg";
import { useState } from "react";
import { Congratulation } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../features/cart/cart";
import { Link } from "react-router-dom";

const ItemCard = styled.div`
  width: 523px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
  margin-right: 10px;
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
  width: 350px;
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
`;
const OrderContainer = styled.div`
  background: #3320652e;
  border-radius: 30px;
  padding: 48px;
  margin: auto;
  margin-right: 20px;
  @media only screen and (max-width: 1400px) {
    margin: 20px;
  }
`;
const FormInputContainer = styled.div`
  width: 100%;
  border-bottom: 2px solid #d9ff5a;
  display: flex;
  align-items: center;
  height: 25px;
`;
const Label = styled.label`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: white;
  white-space: nowrap;
  margin-right: 10px;
`;
const Input = styled.input`
  width: 100%;
  border: 0px;
  padding: 0px;
  margin: 0px;
  background: none;
  color: white;
  outline: none;
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
`;
const Form = styled.form`
  margin-left: 60px;
  height: 358px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Button = styled.button`
  width: 189px;
  height: 93px;
  background: #ebe3ff30;
  border: 2px solid #d9ff5a;
  border-radius: 50%;
  transform: rotate(-6deg);

  &:hover {
    cursor: pointer;
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
  margin: 0px 0px 70px 60px;
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

export function OrderPage() {
  const [check, setCheck] = useState(false);
  const cartSlice = useSelector((state) => state.cart.itemsInCart);
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
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
          <div
            style={{
              margin: "0px 20px 20px 20px",
              flex: 1,
              maxWidth: 882,
              minWidth: 620,
            }}
          >
            <FormTitle>ОФОРМИТЬ ЗАКАЗ</FormTitle>
            <Form>
              <FormInputContainer>
                <Label>ВАШЕ ИМЯ</Label>
                <Input></Input>
              </FormInputContainer>
              <FormInputContainer>
                <Label>АДРЕС</Label>
                <Input></Input>
              </FormInputContainer>
              <FormInputContainer>
                <Label>ТЕЛЕФОН</Label>
                <Input></Input>
              </FormInputContainer>
              <Button type="submit" onClick={(e) => handleClick(e)}>
                <ButtonText>Заказать</ButtonText>
              </Button>
            </Form>
          </div>
          <OrderContainer>
            <OrderListTitle>СОСТАВ ЗАКАЗА</OrderListTitle>
            <div
              style={{ maxHeight: 750, overflowY: "scroll", marginBottom: 20 }}
            >
              {cartSlice.map((item) => {
                return (
                  <ItemCard key={item.id}>
                    <img
                      style={{ maxWidth: 150, maxHeight: 200 }}
                      src={item.image}
                      alt="itemImage"
                    />
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "237px",
                  height: "111px",
                  borderRadius: "50%",
                  border: "2px solid #D9FF5A",
                  background: "#FFFFFF30",
                  transform: "rotate(-13deg)",
                }}
              >
                <TotalPriceNumber>{sum}</TotalPriceNumber>
                <PriceCurrency style={{ transform: "rotate(13deg)" }}>
                  ₽
                </PriceCurrency>
              </div>
            </TotalPriceContainer>
          </OrderContainer>
        </PageContainer>
      )}
    </>
  );
}

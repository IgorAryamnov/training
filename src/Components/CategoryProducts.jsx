import styled from "styled-components";
import { ProductCardInCategory } from "./ProductCardInCategory";
import { Slider } from "./Slider";
import { Checkbox } from "./Checkbox";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../features/cart/cart";
import {
  addNotification,
  deleteNotification,
} from "../features/notification/notification";
import { Notification } from "./Notification";
import { ManyNotification } from "./ManyNotifications";

const Container = styled.div`
  display: grid;
  grid-auto-flow: row dense;
  width: 100%;
  column-gap: 30px;
  row-gap: 30px;
  grid-template-columns: repeat(5, calc(20% - 25px));

  @media (max-width: 1400px) {
    column-gap: 25px;
    row-gap: 25px;
    grid-template-columns: repeat(4, calc(25% - 25px));
  }
  @media (max-width: 1200px) {
    column-gap: 30px;
    row-gap: 30px;
    grid-template-columns: repeat(3, calc(33.333334% - 30px));
  }
  @media (max-width: 900px) {
    column-gap: 30px;
    row-gap: 30px;
    grid-template-columns: repeat(2, calc(50% - 15px));
  }
  @media (max-width: 600px) {
    row-gap: 30px;
    grid-template-columns: repeat(1, calc(100%));
  }
`;
const Button = styled.button`
  position: relative;
  width: 319px;
  height: 135px;
  border: 2px solid #d9ff5a;
  background: #ffffff30;
  margin: 0px;
  padding: 0px;
  border-radius: 50%;
  transform: rotate(-13deg);
  margin-top: 51px;
  outline: none;

  &:hover,
  &:focus {
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
  line-height: 20px;
  color: white;
  transform: rotate(13deg);
  margin: 0px;
`;
const PositionCounter = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: white;
`;
const FilterButton = styled.button`
  background: unset;
  padding: 0px;
  border: none;
  display: flex;
  align-items: center;
  outline: none;

  &:hover,
  &:focus {
    cursor: pointer;

    .filter-label {
      color: #d9ff5a;
    }
  }
`;
const FilterLabel = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: white;
  margin: 0px;
  margin-left: 11px;
`;
const ColorFilterLabel = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: white;
  margin: 0px;
  margin-bottom: 16px;
`;
const FilterColorContainer = styled.div`
  background: #cbb6ff;
  border-radius: 40px;
  width: 290px;
  padding: 20px 0px 24px 30px;
`;
const NotificationContainer = styled.div`
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 2;
`;

export function CategoryProducts({ productsArray, id }) {
  const [showFilter, setShowFilter] = useState(false);
  const [products, setProducts] = useState(productsArray);
  const notificationSlice = useSelector(
    (state) => state.notification.notifications
  );
  const dispatch = useDispatch();

  function handleClick(e) {
    e.stopPropagation();
    if (showFilter) {
      setShowFilter(false);
    } else {
      setShowFilter(true);
    }
  }
  function additionalClick(e) {
    e.stopPropagation();
    let newProducts = [...products];
    newProducts.push(...productsArray);
    setProducts(newProducts);
  }
  function cartClick(e, item) {
    e.stopPropagation();
    dispatch(addProduct(item));

    let currentId = Date.now().toString();
    dispatch(addNotification({ id: currentId }));
    setTimeout(() => {
      dispatch(deleteNotification());
    }, 3000);
  }

  return (
    <div
      id={id}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0px 20px 0px 20px",
      }}
    >
      <div
        style={{
          maxWidth: 1800,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          margin: "63px 0px 77px 0px",
          position: "relative",
        }}
      >
        <FilterButton onClick={(e) => handleClick(e)}>
          <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.1623 0H2.38455C2.08986 0 1.80725 0.116448 1.59887 0.323727C1.3905 0.531005 1.27344 0.812136 1.27344 1.10527V3.96793C1.27344 4.54598 1.5101 5.11409 1.92122 5.52304L7.9401 11.5103V19.8949C7.94032 20.0832 7.98885 20.2683 8.0811 20.4328C8.17335 20.5972 8.30627 20.7355 8.46726 20.8346C8.62826 20.9336 8.81201 20.9902 9.00111 20.9988C9.19021 21.0075 9.37841 20.968 9.54788 20.8841L13.9923 18.6736C14.369 18.4857 14.6068 18.1032 14.6068 17.6843V11.5103L20.6257 5.52304C21.0368 5.11409 21.2734 4.54598 21.2734 3.96793V1.10527C21.2734 0.812136 21.1564 0.531005 20.948 0.323727C20.7396 0.116448 20.457 0 20.1623 0Z"
              fill="#D9FF5A"
            />
          </svg>
          <FilterLabel className="filter-label">Фильтры</FilterLabel>
        </FilterButton>
        {showFilter ? (
          <div style={{ position: "absolute", top: 50, zIndex: 3 }}>
            <div style={{ background: "#CBB6FF", borderRadius: 40 }}>
              <Slider min="0" max="1000000" />
            </div>
            <FilterColorContainer>
              <ColorFilterLabel>Цвета</ColorFilterLabel>
              <form>
                <Checkbox name="Зеленый" count="580" />
                <Checkbox name="Синий" count="1296" />
                <Checkbox name="Оранжевый" count="2340" />
                <Checkbox name="Розовый" count="656" />
                <Checkbox name="Лавандовый" count="1" />
                <Checkbox name="Голубой" count="113" />
              </form>
            </FilterColorContainer>
          </div>
        ) : (
          <></>
        )}
        <PositionCounter>20 ПОЗИЦИЙ В ДАННОЙ КАТЕГОРИИ</PositionCounter>
      </div>
      <Container>
        {products.map((item, index) => {
          return (
            <ProductCardInCategory
              key={index}
              background={item.background}
              image={item.image}
              name={item.name}
              category={item.category}
              price={item.price}
              onClick={(e) => {
                cartClick(e, item);
              }}
            />
          );
        })}
      </Container>
      <Button
        onClick={(e) => {
          additionalClick(e);
        }}
      >
        <ButtonText className="button-text">Загрузить еще</ButtonText>
        <svg
          style={{
            position: "absolute",
            transform: "rotate(13deg)",
            top: 79,
            left: 141,
          }}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.1087 14L12.112 20L6.11523 14"
            stroke="#D9FF5A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.1133 4V21"
            stroke="#D9FF5A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
      <NotificationContainer>
        {notificationSlice.length > 3 ? (
          <ManyNotification />
        ) : (
          notificationSlice.map((value) => {
            return <Notification key={value.id} />;
          })
        )}
      </NotificationContainer>
    </div>
  );
}

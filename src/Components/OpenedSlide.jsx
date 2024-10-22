import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addProduct } from "../features/cart/cart";
import {
  addNotification,
  deleteNotification,
} from "../features/notification/notification";
import { ManyNotification } from "./ManyNotifications";
import { Notification } from "./Notification";

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
  outline: none;

  &:hover,
  &:focus-visible {
    cursor: pointer;

    .button-svg {
      fill: ${(props) => props.background};
    }
    .button-text {
      color: ${(props) => props.background};
    }
    .button-ellipse {
      background: #d9ff5a !important;
    }
  }
`;
const ButtonText = styled.p`
  margin-left: 11px;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  color: white;
  z-index: 2;
`;
const ButtonEllipse = styled.div`
  width: 352px;
  height: 131px;
  border: 2px solid #d9ff5a;
  position: absolute;
  border-radius: 50%;
`;
const NotificationContainer = styled.div`
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 2;
`;

export function OpenedSlide({
  id,
  category,
  author,
  image,
  productName,
  productDescription,
  productPrice,
  background,
  color,
}) {
  const notificationSlice = useSelector(
    (state) => state.notification.notifications
  );
  const dispatch = useDispatch();

  function handleClick(e) {
    let item = {
      id: id,
      count: 1,
      image: image,
      background: background,
      name: productName,
      price: productPrice,
      category: category,
    };
    e.stopPropagation();
    dispatch(addProduct(item));

    let currentId = Date.now().toString();
    dispatch(addNotification({ id: currentId }));
    setTimeout(() => {
      dispatch(deleteNotification());
    }, 3000);
  }

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
        <Button
          background={background !== "unset" ? background : "#ae97e8"}
          onClick={(e) => handleClick(e)}
        >
          <svg
            style={{ zIndex: 2 }}
            className="button-svg"
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.71513 2.69L3.51817 5.14C3.47877 5.61 3.84315 6 4.30601 6H19.3833C19.7969 6 20.1416 5.68 20.1712 5.26C20.2992 3.49 18.9697 2.05 17.2266 2.05H5.12339C5.02491 1.61 4.82795 1.19 4.52266 0.84C4.03026 0.31 3.3409 0 2.63184 0H0.918289C0.51452 0 0.179688 0.34 0.179688 0.75C0.179688 1.16 0.51452 1.5 0.918289 1.5H2.63184C2.93713 1.5 3.22273 1.63 3.42953 1.85C3.63634 2.08 3.73482 2.38 3.71513 2.69ZM9.17969 20C9.17969 21.1046 8.28426 22 7.17969 22C6.07512 22 5.17969 21.1046 5.17969 20C5.17969 18.8954 6.07512 18 7.17969 18C8.28426 18 9.17969 18.8954 9.17969 20ZM17.1797 20C17.1797 21.1046 16.2843 22 15.1797 22C14.0751 22 13.1797 21.1046 13.1797 20C13.1797 18.8954 14.0751 18 15.1797 18C16.2843 18 17.1797 18.8954 17.1797 20ZM4.32925 8H19.4005C19.8623 8 20.216 8.37818 20.1767 8.82424L19.8525 13.3527C19.7444 14.8073 18.4475 16 16.9738 16H6.04859C4.36854 16 3.05202 14.5842 3.18956 12.9261L3.54326 8.70788C3.58256 8.3103 3.9166 8 4.32925 8Z"
            />
          </svg>
          <ButtonText className="button-text">Купить</ButtonText>
          <ButtonEllipse
            className="button-ellipse"
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
      <NotificationContainer>
        {notificationSlice.length > 3 ? (
          <ManyNotification />
        ) : (
          notificationSlice.map((value) => {
            return <Notification key={value.id} />;
          })
        )}
      </NotificationContainer>
    </SelectedProductSlideContainer>
  );
}

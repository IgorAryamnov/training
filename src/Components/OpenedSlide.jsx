import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addProduct } from "../features/cart/cart";
import {
  addNotification,
  deleteNotification,
} from "../features/notification/notification";
import { ManyNotification } from "./ManyNotifications";
import { Notification } from "./Notification";
import { useEffect } from "react";

const ProductOnSlideName = styled.p`
  margin: 0;
  font-family: Floreste;
  font-weight: 400;
  font-size: 212px;
  color: #cbb6ff99;
  text-wrap: nowrap;
  line-height: 201.4px;

  @media (max-width: 1900px) {
    font-size: 180px;
  }
  @media (max-width: 1400px) {
    font-size: 150px;
    line-height: 150.4px;
  }
  @media (max-width: 1200px) {
    font-size: 175px;
    line-height: 160.4px;
  }
  @media (max-width: 1000px) {
    font-size: 150px;
    line-height: 140.4px;
  }
  @media (max-width: 800px) {
    font-size: 125px;
    line-height: 110.4px;
  }
  @media (max-width: 700px) {
    font-size: 110px;
    line-height: 90px;
  }
  @media (max-width: 600px) {
    font-size: 90px;
    line-height: 70px;
  }
  @media (max-width: 500px) {
    font-size: 67px;
    line-height: 67.45px;
  }
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

  @media (max-width: 1800px) {
    height: 1000px;
  }
  @media (max-width: 1600px) {
    height: 950px;
  }
  @media (max-width: 1400px) {
    height: 850px;
  }
  @media (max-width: 700px) {
    height: 750px;
  }
  @media (max-width: 600px) {
    height: 640px;
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

  @media (max-width: 700px) {
    font-size: 16px;
    line-height: 19px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 17px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
    line-height: 15px;
  }
`;
const ProductDescriptionContainer = styled.div`
  width: 312px;
  margin-left: 60px;

  @media (max-width: 1000px) {
    margin-left: 40px;
  }
  @media (max-width: 800px) {
    margin-left: 20px;
  }
  @media (max-width: 700px) {
    margin-left: 10px;
    width: 275px;
  }
`;
const ProductName = styled.h2`
  margin: 0;
  font-family: Euclid Circular A;
  color: white;
  font-weight: 500;
  font-size: 28px;
  line-height: 35.5px;
  margin-bottom: 9px;

  @media (max-width: 700px) {
    font-size: 24px;
    line-height: 31px;
  }
`;
const ProductDescription = styled.p`
  margin: 0;
  font-family: Euclid Circular A;
  color: white;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  margin-bottom: 26px;

  @media (max-width: 700px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: 600px) {
    font-size: 13px;
    margin-bottom: 14px;
  }
`;
const PriceLine = styled.div`
  border: 0.5px solid #ffffff33;
  width: 100%;
  margin-bottom: 28px;

  @media (max-width: 600px) {
    margin-bottom: 14px;
  }
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

  &.button-next-to-the-image {
    display: none;
  }

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

  @media (max-width: 1400px) {
    width: 322px;
    height: 142px;
    margin-right: 30px;
  }
  @media (max-width: 1000px) {
    margin-right: 30px;
  }
  @media (max-width: 800px) {
    width: 322px;
    height: 142px;
    margin-right: 20px;
  }
  @media (max-width: 700px) {
    width: 273px;
    height: 125px;
    margin-right: 10px;
  }
  @media (max-width: 600px) {
    &.button-next-to-the-image {
      display: flex;
    }
    &.button-next-to-the-description {
      display: none;
    }

    position: relative;
    top: 83px;
    left: 62px;
    height: 110px;
  }
  @media (max-width: 500px) {
    top: 53px;
    left: 69px;
    width: 225px;
  }
`;
const ButtonText = styled.p`
  margin-left: 11px;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  color: white;
  z-index: 2;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
const ButtonEllipse = styled.div`
  width: 352px;
  height: 131px;
  border: 2px solid #d9ff5a;
  position: absolute;
  border-radius: 50%;

  @media (max-width: 1400px) {
    width: 304px;
    height: 114px;
  }
  @media (max-width: 800px) {
    width: 304px;
    height: 114px;
  }
  @media (max-width: 700px) {
    width: 256px;
    height: 97px;
  }
  @media (max-width: 600px) {
    width: 208px;
    height: 80px;
  }
`;
const NotificationContainer = styled.div`
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 2;
`;
const Image = styled.img`
  position: absolute;
  top: 155px;

  @media (max-width: 1800px) {
    top: 120px;
  }
  @media (max-width: 1600px) {
    width: 325px;
    height: 600px;
  }
  @media (max-width: 1400px) {
    width: 300px;
    height: 550px;
    top: 90px;
  }
  @media (max-width: 800px) {
    width: 275px;
    height: 500px;
  }
  @media (max-width: 700px) {
    width: 250px;
    height: 450px;
    top: 70px;
  }
  @media (max-width: 600px) {
    width: 210px;
    height: 375px;
    top: 70px;
  }
  @media (max-width: 500px) {
    width: 162px;
    height: 318px;
    top: 70px;
  }
`;
const Container = styled.div`
  position: relative;
  top: 406px;
  margin-bottom: 140px;

  @media (max-width: 1800px) {
    margin-bottom: 100px;
  }
  @media (max-width: 1600px) {
    margin-bottom: 60px;
    top: 375px;
  }
  @media (max-width: 1400px) {
    top: 340px;
    margin-bottom: 20px;
  }
  @media (max-width: 1200px) {
    top: 375px;
  }
  @media (max-width: 1000px) {
    top: 340px;
  }
  @media (max-width: 800px) {
    margin-bottom: 60px;
  }
  @media (max-width: 700px) {
    top: 260px;
    margin-bottom: 0px;
  }
  @media (max-width: 600px) {
    top: 240px;
  }
  @media (max-width: 500px) {
    top: 200px;
  }
`;
const DescriptionWithButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  top: 400px;

  @media (max-width: 600px) {
    top: 350px;
  }
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
  useEffect(() => {
    document
      .querySelector(".open-slide")
      .scrollIntoView({ behavior: "smooth" });
  }, []);

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
    <SelectedProductSlideContainer
      className="open-slide"
      style={{ background: background }}
    >
      <Container>
        <PromotionalNotification>ТОВАР ДНЯ</PromotionalNotification>
        <ProductOnSlideName className="author-name" style={{ color: color }}>
          {author}
        </ProductOnSlideName>
      </Container>
      <Image className="product-image" src={image} alt="productImage" />
      <DescriptionWithButton>
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
          className="button-next-to-the-description"
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
      </DescriptionWithButton>
      <Button
        className="button-next-to-the-image"
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

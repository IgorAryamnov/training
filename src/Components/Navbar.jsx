import { ReactComponent as Search } from "../assets/search.svg";
import styled from "styled-components";
import { Cart } from "./Cart";
import { Favorite } from "./Favorite";
import { Authorization } from "./Authorization";
import { Registration } from "./Registration";
import { Contacts } from "./Contacts";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { ClosedButton } from "./ClosedButton";

const OrganizationName = styled.p`
  color: white;
  font-family: Le Murmure;
  font-weight: 600;
  font-size: 45px;
  line-height: 50.45px;
  margin: 0;
  margin-left: 20px;
  white-space: nowrap;

  @media (max-width: 700px) {
    font-size: 33px;
    line-height: 37px;
  }
`;
const Header = styled.nav`
  display: flex;
  align-items: center;
  height: 37px;
  max-width: 1736px;
  position: absolute;
  width: 100%;
  top: 53px;
  z-index: 1;

  .search-icon,
  .contacts-icon {
    display: none;
  }

  @media (max-width: 700px) {
    justify-content: space-between;

    .space,
    .catalog-menu,
    .contact-menu,
    .search-menu {
      display: none;
    }

    .search-icon,
    .contacts-icon {
      display: inline-block;
    }
  }
`;
const Circle = styled.div`
  height: 6px;
  width: 6px;
  border-radius: 3px;
  background-color: white;
`;
const NavbarLinks = styled.p`
  margin: 0;
  margin-left: 5px;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  color: white;
`;
const CatalogMenu = styled.div`
  display: flex;
  align-items: center;
  height: 15px;
  width: 98px;
  justify-content: space-between;
  margin-left: 10px;
`;
const ContactMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 13px;
  width: 155px;
`;
const SearchMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 26px;
  width: 94px;
`;
const IconMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 193px;
  margin-right: 20px;
`;
const Dialog = styled.dialog`
  background-color: #3320652e;
  border: unset;
  padding: 0;
  top: 120px;
  margin-right: 20px;
  border-radius: 30px;
  backdrop-filter: blur(30px);
  position: absolute;
  z-index: 3;
`;
const Button = styled.button`
  margin: 0;
  margin-left: 5px;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  color: white;
  background: unset;
  border: unset;
  outline: none;

  &:hover,
  &:focus-visible {
    cursor: pointer;
    color: #d9ff5a;
  }
`;
const ModalDialog = styled.dialog`
  border: unset;
  padding: 0;
  background: unset;

  &::backdrop {
    backdrop-filter: blur(100px);
  }

  &#ContactHandler {
    width: 100%;
    max-width: 1800px;
  }
`;
const Icon = styled.button`
  margin-left: 10px;
  padding: 0px;
  outline: none;
  border: none;
  background: unset;

  &:hover,
  &:focus-visible {
    cursor: pointer;

    .heart-svg,
    .cart-svg,
    .user-svg,
    .phone-svg {
      fill: #d9ff5a !important;
    }

    .search-svg {
      stroke: #d9ff5a;
    }
  }
`;
const CartItemsCounter = styled.span`
  position: absolute;
  color: white;
  background-color: red;
  border-radius: 50%;
  font-size: 10px;
  height: 15px;
  width: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  right: -8px;
  top: -6px;
  pointer-events: none;
`;

export function Navbar() {
  const cartSlice = useSelector((state) => state.cart.itemsInCart);

  return (
    <>
      <Header>
        <OrganizationName>Elfen lied</OrganizationName>
        <div
          className="space"
          style={{ maxWidth: "133px", width: "100%" }}
        ></div>
        <CatalogMenu className="catalog-menu">
          <div style={{ height: 15, width: 15 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 3,
              }}
            >
              <Circle />
              <Circle />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Circle />
              <Circle />
            </div>
          </div>
          <NavbarLinks>Каталог</NavbarLinks>
        </CatalogMenu>
        <div
          className="space"
          style={{ maxWidth: "387px", width: "100%" }}
        ></div>
        <ContactMenu className="contact-menu">
          <Button
            onClick={(e) =>
              document
                .getElementById("blog")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Блог
          </Button>
          <Button
            onClick={(e) => {
              window.ContactHandler.showModal();
            }}
          >
            Контакты
          </Button>
        </ContactMenu>
        <div
          className="space"
          style={{ maxWidth: "360px", width: "100%" }}
        ></div>
        <SearchMenu className="search-menu">
          <Search />
          <NavbarLinks>Поиск</NavbarLinks>
        </SearchMenu>
        <div
          className="space"
          style={{ maxWidth: "247px", width: "100%" }}
        ></div>
        <IconMenu>
          <Icon className="search-icon">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="search-svg"
                d="M11.5 20C16.1944 20 20 16.1944 20 11.5C20 6.80558 16.1944 3 11.5 3C6.80558 3 3 6.80558 3 11.5C3 16.1944 6.80558 20 11.5 20Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                className="search-svg"
                d="M23 23L18 18"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Icon>
          <Icon
            onClick={(e) => {
              window.FavoriteHandler.show();
              window.CartHandler.close();
              window.AuthorizationHandler.close();
              window.RegistrationHandler.close();
            }}
          >
            <svg
              className="heart-svg"
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.884 0C13.893 0 12.111 0.988764 11 2.50562C9.889 0.988764 8.107 0 6.116 0C2.739 0 0 2.80899 0 6.2809C0 7.61798 0.209 8.85393 0.572 10C2.31 15.618 7.667 18.9775 10.318 19.8989C10.692 20.0337 11.308 20.0337 11.682 19.8989C14.333 18.9775 19.69 15.618 21.428 10C21.791 8.85393 22 7.61798 22 6.2809C22 2.80899 19.261 0 15.884 0Z" />
            </svg>
          </Icon>
          <Icon
            onClick={(e) => {
              window.AuthorizationHandler.show();
              window.CartHandler.close();
              window.FavoriteHandler.close();
              window.RegistrationHandler.close();
            }}
          >
            <svg
              className="user-svg"
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 5C14 7.76142 11.7614 10 9 10C6.23858 10 4 7.76142 4 5C4 2.23858 6.23858 0 9 0C11.7614 0 14 2.23858 14 5ZM0 19.5C0 15.36 4.0396 13 9 13C13.9604 13 18 15.36 18 19.5C18 20.585 17.4157 21 16.5149 21H1.48515C1.07905 21 0 21 0 19.5Z"
              />
            </svg>
          </Icon>
          <div
            style={{
              position: "relative",
              display: "flex",
            }}
          >
            <Icon
              onClick={(e) => {
                window.CartHandler.show();
                window.FavoriteHandler.close();
                window.AuthorizationHandler.close();
                window.RegistrationHandler.close();
              }}
            >
              <svg
                className="cart-svg"
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
            </Icon>
            {cartSlice.length !== 0 ? (
              <CartItemsCounter>{cartSlice.length}</CartItemsCounter>
            ) : (
              <></>
            )}
          </div>
          <Icon
            className="contacts-icon"
            onClick={(e) => {
              window.ContactHandler.showModal();
            }}
          >
            <svg
              className="phone-svg"
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.6777 17.963C22.6777 18.359 22.5896 18.766 22.4023 19.162C22.215 19.558 21.9727 19.932 21.6532 20.284C21.1134 20.878 20.5185 21.307 19.8465 21.582C19.1855 21.857 18.4694 22 17.6983 22C16.5746 22 15.3738 21.736 14.1069 21.197C12.84 20.658 11.5731 19.932 10.3172 19.019C9.05029 18.095 7.84949 17.072 6.70377 15.939C5.56907 14.795 4.54453 13.596 3.63016 12.342C2.72681 11.088 1.99972 9.834 1.47092 8.591C0.942131 7.337 0.677734 6.138 0.677734 4.994C0.677734 4.246 0.809933 3.531 1.07433 2.871C1.33873 2.2 1.75735 1.584 2.34123 1.034C3.04629 0.341 3.81744 0 4.63267 0C4.94113 0 5.24959 0.0660001 5.52501 0.198C5.81144 0.33 6.06482 0.528 6.26311 0.814L8.81895 4.411C9.01724 4.686 9.16046 4.939 9.25961 5.181C9.35876 5.412 9.41384 5.643 9.41384 5.852C9.41384 6.116 9.33672 6.38 9.18249 6.633C9.03928 6.886 8.82996 7.15 8.56557 7.414L7.72831 8.283C7.60713 8.404 7.55205 8.547 7.55205 8.723C7.55205 8.811 7.56306 8.888 7.5851 8.976C7.61815 9.064 7.6512 9.13 7.67323 9.196C7.87153 9.559 8.21304 10.032 8.69776 10.604C9.19351 11.176 9.7223 11.759 10.2952 12.342C10.8901 12.925 11.4629 13.464 12.0468 13.959C12.6196 14.443 13.0934 14.773 13.4679 14.971C13.523 14.993 13.5891 15.026 13.6662 15.059C13.7543 15.092 13.8425 15.103 13.9416 15.103C14.1289 15.103 14.2721 15.037 14.3933 14.916L15.2306 14.091C15.506 13.816 15.7704 13.607 16.0238 13.475C16.2771 13.321 16.5305 13.244 16.8059 13.244C17.0152 13.244 17.2356 13.288 17.4779 13.387C17.7203 13.486 17.9737 13.629 18.2491 13.816L21.8956 16.401C22.182 16.599 22.3803 16.83 22.5015 17.105C22.6116 17.38 22.6777 17.655 22.6777 17.963Z" />
            </svg>
          </Icon>
        </IconMenu>
      </Header>
      <Dialog id="CartHandler">
        <ClosedButton
          onClick={(e) => {
            window.CartHandler.close();
          }}
        />
        <Cart />
      </Dialog>
      <Dialog id="FavoriteHandler">
        <ClosedButton
          onClick={(e) => {
            window.FavoriteHandler.close();
          }}
        />
        <Favorite />
      </Dialog>
      <Dialog id="AuthorizationHandler">
        <ClosedButton
          onClick={(e) => {
            window.AuthorizationHandler.close();
          }}
        />
        <Authorization />
      </Dialog>
      <Dialog id="RegistrationHandler">
        <ClosedButton
          onClick={(e) => {
            window.RegistrationHandler.close();
          }}
        />
        <Registration />
      </Dialog>
      <ModalDialog id="ContactHandler">
        <ClosedButton
          style={{ position: "absolute", top: "22px", right: "20px" }}
          onClick={(e) => {
            window.ContactHandler.close();
          }}
        />
        <Contacts />
      </ModalDialog>
      <Outlet />
    </>
  );
}

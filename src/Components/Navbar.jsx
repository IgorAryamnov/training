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
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  height: 37px;
  max-width: 1736px;
  position: absolute;
  width: 100%;
  top: 53px;
  z-index: 1;
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
  width: 132px;
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
  &:focus {
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
  outline: none;
  border: none;
  background: unset;

  &:hover,
  &:focus {
    cursor: pointer;

    .heart-svg,
    .cart-svg,
    .user-svg {
      fill: #d9ff5a !important;
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
        <div style={{ maxWidth: "133px", width: "100%" }}></div>
        <CatalogMenu>
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
        <div style={{ maxWidth: "387px", width: "100%" }}></div>
        <ContactMenu>
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
        <div style={{ maxWidth: "360px", width: "100%" }}></div>
        <SearchMenu>
          <Search />
          <NavbarLinks>Поиск</NavbarLinks>
        </SearchMenu>
        <div style={{ maxWidth: "247px", width: "100%" }}></div>
        <IconMenu>
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
                fill-rule="evenodd"
                clip-rule="evenodd"
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
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

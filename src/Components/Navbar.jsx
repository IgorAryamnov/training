import { ReactComponent as Search } from "../assets/search.svg";
import Heart from "../assets/Vector.svg";
import UserIcon from "../assets/Union.svg";
import ShoppingCart from "../assets/cart.svg";
import styled from "styled-components";
import { Cart } from "./Cart";
import xImage from "../assets/x.svg";
import { Favorite } from "./Favorite";
import { Authorization } from "./Authorization";
import { Registration } from "./Registration";
import { Contacts } from "./Contacts";
import { Outlet } from "react-router-dom";

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
  z-index: 1;
`;
const StyledCloseImage = styled.input`
  position: absolute;
  top: 22px;
  right: 22px;
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

  &:hover {
    cursor: pointer;
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
const Icon = styled.input`
  margin-left: 10px;
`;
export function Navbar() {
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
          <NavbarLinks>Блог</NavbarLinks>
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
            type="image"
            src={Heart}
            alt="heart"
            onClick={(e) => {
              window.FavoriteHandler.show();
              window.CartHandler.close();
              window.AuthorizationHandler.close();
              window.RegistrationHandler.close();
            }}
          />
          <Icon
            type="image"
            src={UserIcon}
            alt="user"
            onClick={(e) => {
              window.AuthorizationHandler.show();
              window.CartHandler.close();
              window.FavoriteHandler.close();
              window.RegistrationHandler.close();
            }}
          />
          <Icon
            type="image"
            src={ShoppingCart}
            alt="cart"
            onClick={(e) => {
              window.CartHandler.show();
              window.FavoriteHandler.close();
              window.AuthorizationHandler.close();
              window.RegistrationHandler.close();
            }}
          />
        </IconMenu>
      </Header>
      <Dialog id="CartHandler">
        <StyledCloseImage
          type="image"
          src={xImage}
          alt="x"
          onClick={(e) => {
            window.CartHandler.close();
          }}
        />
        <Cart />
      </Dialog>
      <Dialog id="FavoriteHandler">
        <StyledCloseImage
          type="image"
          src={xImage}
          alt="x"
          onClick={(e) => {
            window.FavoriteHandler.close();
          }}
        />
        <Favorite />
      </Dialog>
      <Dialog id="AuthorizationHandler">
        <StyledCloseImage
          type="image"
          src={xImage}
          alt="x"
          onClick={(e) => {
            window.AuthorizationHandler.close();
          }}
        />
        <Authorization />
      </Dialog>
      <Dialog id="RegistrationHandler">
        <StyledCloseImage
          type="image"
          src={xImage}
          alt="x"
          onClick={(e) => {
            window.RegistrationHandler.close();
          }}
        />
        <Registration />
      </Dialog>
      <ModalDialog id="ContactHandler">
        <input
          type="image"
          style={{ position: "absolute", top: "22px", right: "20px" }}
          src={xImage}
          alt="x"
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

import styled from "styled-components";
import map from "../assets/map.png";
import mark from "../assets/MarkOnMap.svg";
import { Input } from "./Input";
import { useState } from "react";

const InformationContainer = styled.div`
  max-width: 950px;
  background-color: #ae97e8;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FormContainer = styled.div`
  max-width: 850px;
  min-width: 300px;
  background-color: #fa8fef;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 50px 80px 20px;

  @media (max-width: 600px) {
    padding: 40px 50px 40px 20px;
  }
`;
const FirstLine = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: #ffffff80;
  margin: 0;
  text-wrap: nowrap;

  &.address {
    margin-bottom: 35px;
  }
  &.phone {
    margin-bottom: 59px;
  }

  @media (max-width: 600px) {
    &.address {
      margin-bottom: 15px;
    }
    &.phone {
      margin-bottom: 20px;
    }
  }
`;
const CityLabel = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 60px;
  line-height: 76.08px;
  color: #ffffff;
  margin: 0;
  text-wrap: nowrap;
  margin-bottom: 26px;

  @media (max-width: 600px) {
    font-size: 40px;
    line-height: 48.08px;
    margin-bottom: 15px;
  }
`;
const SecondLine = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: #ffffff;
  margin: 0;
  text-wrap: nowrap;

  &.street-home {
    margin-bottom: 122px;
  }
  &.text-link {
    margin-bottom: 112px;
  }

  @media (max-width: 600px) {
    &.street-home {
      margin-bottom: 30px;
    }
    &.text-link {
      margin-bottom: 20px;
    }
  }
`;
const PhoneNumber = styled.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 40px;
  line-height: 38px;
  color: #ffffff;
  margin: 0;
  text-wrap: nowrap;
`;
const IconsContainer = styled.div`
  display: flex;
  width: 209px;
  justify-content: space-between;
`;
const Button = styled.button`
  width: 189px;
  height: 93px;
  border: 2px solid #d9ff5a;
  transform: rotate(-6deg);
  background-color: #ebe3ff30;
  border-radius: 50%;
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
  color: #ffffff;
  margin: 0;
  transform: rotate(6deg);
`;
const StyledLink = styled.a`
  outline: none;
  &:hover,
  &:focus-visible {
    cursor: pointer;

    .link-svg {
      fill: #d9ff5a;
    }
  }
`;
const PhoneNumberContainer = styled.div`
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0px;
    margin-top: 20px;
  }
`;
const AddressButton = styled.button`
  width: 167px;
  display: flex;
  justify-content: space-between;
  outline: none;
  border: none;
  background: none;

  &:hover,
  &:focus-visible {
    cursor: pointer;

    .button-text {
      color: #d9ff5a;
    }
    .button-arrow {
      fill: #d9ff5a;
    }
  }
`;
const Information = styled.div`
  display: flex;
  max-width: 690px;
  width: 100%;
  justify-content: space-between;
  margin: 20px;
  min-width: 400px;

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

export function Contacts() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submitHandler(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log(email, message);
  }

  return (
    <div
      style={{
        borderRadius: 30,
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <InformationContainer>
          <Information>
            <div>
              <FirstLine className="address">АДРЕС</FirstLine>
              <CityLabel>МОСКВА</CityLabel>
              <SecondLine className="street-home">
                Улица Пушкина, дом Колотушкина
              </SecondLine>
              <AddressButton
                onClick={(e) => {
                  document
                    .getElementById("mark")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                <SecondLine className="button-text">Адрес на карте</SecondLine>
                <svg
                  className="button-arrow"
                  width="16"
                  height="24"
                  viewBox="0 0 16 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 1C9 0.447715 8.55228 0 8 0C7.44772 0 7 0.447715 7 1L9 1ZM7.29289 23.7071C7.68342 24.0976 8.31658 24.0976 8.70711 23.7071L15.0711 17.3431C15.4616 16.9526 15.4616 16.3195 15.0711 15.9289C14.6805 15.5384 14.0474 15.5384 13.6569 15.9289L8 21.5858L2.34315 15.9289C1.95262 15.5384 1.31946 15.5384 0.928932 15.9289C0.538408 16.3195 0.538408 16.9526 0.928932 17.3431L7.29289 23.7071ZM7 1L7 23H9L9 1L7 1Z" />
                </svg>
              </AddressButton>
            </div>
            <PhoneNumberContainer>
              <FirstLine className="phone">ТЕЛЕФОН</FirstLine>
              <PhoneNumber style={{ marginBottom: 40 }}>
                +1 (111) 111-11-11
              </PhoneNumber>
              <SecondLine className="text-link">
                Ответим на все вопросы
              </SecondLine>
              <IconsContainer>
                <StyledLink href="google.com">
                  <svg
                    className="link-svg"
                    width="40"
                    height="41"
                    viewBox="0 0 40 41"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="19.8" cy="20.5998" r="19.8" />
                    <path
                      d="M27.6993 14.6515L25.0586 27.1046C24.8593 27.9834 24.3399 28.2021 23.6018 27.7884L19.578 24.8234L17.6368 26.6909C17.4218 26.9059 17.2424 27.0853 16.828 27.0853L17.1174 22.9878L24.5743 16.2496C24.8986 15.9609 24.5036 15.8003 24.0705 16.0896L14.8517 21.8946L10.883 20.6521C10.0199 20.3828 10.0042 19.789 11.063 19.3746L26.5861 13.394C27.3049 13.1246 27.9336 13.554 27.6993 14.6521V14.6515Z"
                      fill="#AE97E8"
                    />
                  </svg>
                </StyledLink>
                <StyledLink href="google.com">
                  <svg
                    className="link-svg"
                    width="40"
                    height="41"
                    viewBox="0 0 40 41"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="19.801" cy="20.5998" r="19.8" />
                    <path
                      d="M28.001 16.2232C27.4126 16.4638 26.7805 16.6263 26.116 16.6998C26.8016 16.3213 27.3146 15.7255 27.5592 15.0238C26.915 15.3768 26.21 15.6253 25.4748 15.7584C24.9804 15.2714 24.3255 14.9486 23.6119 14.8401C22.8982 14.7316 22.1658 14.8436 21.5281 15.1585C20.8905 15.4735 20.3834 15.9738 20.0856 16.5819C19.7878 17.19 19.716 17.8717 19.8812 18.5213C18.5759 18.4609 17.299 18.1479 16.1334 17.6027C14.9677 17.0575 13.9394 16.2922 13.115 15.3566C12.8332 15.8052 12.6711 16.3253 12.6711 16.8792C12.6708 17.3778 12.8039 17.8688 13.0586 18.3086C13.3133 18.7484 13.6817 19.1234 14.1312 19.4003C13.6099 19.385 13.1002 19.255 12.6443 19.0213V19.0603C12.6443 19.7596 12.9065 20.4375 13.3865 20.9787C13.8664 21.52 14.5346 21.8915 15.2776 22.03C14.7941 22.1507 14.2871 22.1685 13.795 22.082C14.0047 22.6837 14.413 23.2099 14.9629 23.5869C15.5128 23.9639 16.1767 24.1728 16.8617 24.1844C15.6989 25.0266 14.2629 25.4834 12.7846 25.4814C12.5227 25.4815 12.261 25.4673 12.001 25.4391C13.5015 26.3292 15.2483 26.8016 17.0322 26.7998C23.0712 26.7998 26.3725 22.1853 26.3725 18.1833C26.3725 18.0533 26.369 17.922 26.3626 17.7919C27.0048 17.3635 27.5591 16.833 27.9996 16.2252L28.001 16.2232Z"
                      fill="#AE97E8"
                    />
                  </svg>
                </StyledLink>
                <StyledLink href="google.com">
                  <svg
                    className="link-svg"
                    width="40"
                    height="41"
                    viewBox="0 0 40 41"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20.1999" cy="20.5998" r="19.8" />
                    <path
                      d="M24.0227 21.8252L24.4788 18.6641H21.6258V16.6136C21.6258 15.7488 22.0244 14.9049 23.3022 14.9049H24.5993V12.2136C24.5993 12.2136 23.4222 12 22.2966 12C19.947 12 18.4112 13.5139 18.4112 16.2548V18.6641H15.7993V21.8252H18.4112V29.4671C19.4762 29.6443 20.5607 29.6443 21.6258 29.4671V21.8252H24.0227Z"
                      fill="#AE97E8"
                    />
                  </svg>
                </StyledLink>
                <StyledLink href="google.com">
                  <svg
                    className="link-svg"
                    width="40"
                    height="41"
                    viewBox="0 0 40 41"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="19.799" cy="20.5998" r="19.8" />
                    <g clipPath="url(#clip0_8103_1882)">
                      <path
                        d="M15.6498 27.5498H12.3845V17.0344H15.6498V27.5498ZM14.0151 15.6001C12.9711 15.6001 12.124 14.7349 12.124 13.6909C12.124 13.1894 12.3233 12.7084 12.6779 12.3537C13.0326 11.999 13.5136 11.7998 14.0151 11.7998C14.5167 11.7998 14.9977 11.999 15.3524 12.3537C15.707 12.7084 15.9063 13.1894 15.9063 13.6909C15.9063 14.7349 15.0591 15.6001 14.0151 15.6001ZM27.8706 27.5498H24.6126V22.4311C24.6126 21.211 24.5879 19.6467 22.915 19.6467C21.2174 19.6467 20.957 20.9719 20.957 22.3433V27.5498H17.695V17.0344H20.8265V18.4688H20.872C21.308 17.6425 22.3728 16.7706 23.9613 16.7706C27.266 16.7706 27.8735 18.9469 27.8735 21.7735V27.5498H27.8706Z"
                        fill="#AE97E8"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_8103_1882">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(10.999 11.7998)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </StyledLink>
              </IconsContainer>
            </PhoneNumberContainer>
          </Information>
        </InformationContainer>
        <FormContainer>
          <div style={{ maxWidth: 660, width: "100%" }}>
            <FirstLine style={{ marginBottom: 53 }}>
              ФОРМА ОБРАТНОЙ СВЯЗИ
            </FirstLine>
            <form onSubmit={(e) => submitHandler(e)}>
              <Input
                style={{ marginBottom: 63 }}
                placeholder="E-MAIL"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                style={{ marginBottom: 59 }}
                placeholder="СООБЩЕНИЕ"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button type="submit">
                <ButtonText className="button-text">Отправить</ButtonText>
              </Button>
            </form>
          </div>
        </FormContainer>
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            maxWidth: "1800px",
            display: "flex",
            justifyContent: "center",
            marginTop: "235px",
            marginLeft: "239px",
          }}
        >
          <img id="mark" src={mark} alt="mark" />
        </div>
        <img src={map} alt="map" />
      </div>
    </div>
  );
}

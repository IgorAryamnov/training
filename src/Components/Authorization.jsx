import styled from "styled-components";
import { useState } from "react";
import { Input } from "./Input";

const FormContainer = styled.div`
  width: 514px;
  margin: 48px;

  @media (max-width: 700px) {
    width: 450px;
    margin: 40px;
  }
  @media (max-width: 600px) {
    width: 400px;
    margin: 32px;
  }
  @media (max-width: 500px) {
    width: 350px;
    margin: 24px;
  }
  @media (max-width: 450px) {
    width: 325px;
    margin: 20px;
  }
`;
const Header = styled.h2`
  margin: 0;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: white;
`;
const Form = styled.form`
  margin-top: 66px;
`;
const FormButton = styled.button`
  width: 119px;
  height: 85px;
  border-radius: 50%;
  border: 2px solid #d9ff5a;
  color: white;
  background-color: #ebe3ff30;
  transform: rotate(-15deg);
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
  margin: 0;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  transform: rotate(15deg);
`;
const ToRegistration = styled.p`
  margin: 0;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: white;

  @media (max-width: 450px) {
    font-size: 12px;
    line-height: 14px;
  }
`;
const LinkContainer = styled.button`
  display: flex;
  background: unset;
  border: unset;
  align-items: center;
  justify-content: space-between;
  width: 185px;
  outline: none;

  @media (max-width: 450px) {
    width: 160px;
  }

  &:hover,
  &:focus-visible {
    cursor: pointer;

    .link-text {
      color: #d9ff5a;
    }
    .link-svg {
      fill: #d9ff5a;
    }
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 348px;
  margin-top: 68px;

  @media (max-width: 450px) {
    width: 268px;
    margin-top: 30px;
  }
`;

export function Authorization() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitHandler(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <FormContainer>
      <Header>ВХОД</Header>
      <Form onSubmit={(e) => submitHandler(e)}>
        <Input
          style={{ marginBottom: 49, paddingBottom: 20 }}
          name="email"
          placeholder="E-MAIL"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          style={{ marginBottom: 49, paddingBottom: 20 }}
          name="password"
          placeholder="ПАРОЛЬ"
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormButton type="submit">
          <ButtonText className="button-text">Войти</ButtonText>
        </FormButton>
      </Form>
      <Container>
        <ToRegistration>НЕТ АККАУНТА?</ToRegistration>
        <LinkContainer
          onClick={(e) => {
            window.RegistrationHandler.show();
            window.AuthorizationHandler.close();
          }}
        >
          <ToRegistration className="link-text">РЕГИСТРАЦИЯ</ToRegistration>
          <svg
            className="link-svg"
            width="42"
            height="16"
            viewBox="0 0 42 16"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M41.7071 8.70711C42.0976 8.31658 42.0976 7.68342 41.7071 7.29289L35.3431 0.928932C34.9526 0.538408 34.3195 0.538408 33.9289 0.928932C33.5384 1.31946 33.5384 1.95262 33.9289 2.34315L39.5858 8L33.9289 13.6569C33.5384 14.0474 33.5384 14.6805 33.9289 15.0711C34.3195 15.4616 34.9526 15.4616 35.3431 15.0711L41.7071 8.70711ZM0 9H41V7H0V9Z" />
          </svg>
        </LinkContainer>
      </Container>
    </FormContainer>
  );
}

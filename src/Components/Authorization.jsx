import styled from "styled-components";
import Arrow from "../assets/Arrow1.svg";

const FormContainer = styled.div`
  width: 514px;
  margin: 48px;
`;
const Header = styled.h2`
  margin: 0;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: white;
`;
const Input = styled.input`
  width: 513px;
  height: 18px;
  border: 0px;
  padding: 0px;
  margin: 0px;
  background: none;
  color: white;
  outline: none;
  border-bottom: 2px solid #d9ff5a;
  margin-bottom: 49px;
`;
const InputLabel = styled.label`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: white;
  margin: 0;
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
`;
const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 185px;

  &:hover {
    cursor: pointer;
  }
`;

export function Authorization() {
  return (
    <FormContainer>
      <Header>ВХОД</Header>
      <Form>
        <InputLabel>E-MAIL</InputLabel>
        <Input />
        <InputLabel>ПАРОЛЬ</InputLabel>
        <Input />
        <FormButton type="submit">
          <ButtonText>Войти</ButtonText>
        </FormButton>
      </Form>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: 348,
          marginTop: 68,
        }}
      >
        <ToRegistration>НЕТ АККАУНТА?</ToRegistration>
        <LinkContainer
          onClick={(e) => {
            window.RegistrationHandler.show();
            window.AuthorizationHandler.close();
          }}
        >
          <ToRegistration>РЕГИСТРАЦИЯ</ToRegistration>
          <img src={Arrow} alt="arrow"></img>
        </LinkContainer>
      </div>
    </FormContainer>
  );
}

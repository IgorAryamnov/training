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
  width: 189px;
  height: 83px;
  border-radius: 50%;
  border: 2px solid #d9ff5a;
  color: white;
  background-color: #ebe3ff30;
  transform: rotate(-6deg);
`;
const ButtonText = styled.p`
  margin: 0;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  transform: rotate(6deg);
`;
const ToAuthorization = styled.p`
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
  width: 108px;
  margin-top: 60px;

  &:hover {
    cursor: pointer;
  }
`;

export function Registration() {
  return (
    <FormContainer>
      <Header>РЕГИСТРАЦИЯ</Header>
      <Form>
        <InputLabel>E-MAIL</InputLabel>
        <Input />
        <InputLabel>ПАРОЛЬ</InputLabel>
        <Input />
        <InputLabel>ПОВТОРИТЕ ПАРОЛЬ</InputLabel>
        <Input />
        <FormButton type="submit">
          <ButtonText>Регистрация</ButtonText>
        </FormButton>
      </Form>
      <LinkContainer
        onClick={(e) => {
          window.RegistrationHandler.close();
          window.AuthorizationHandler.show();
        }}
      >
        <img
          src={Arrow}
          alt="arrow"
          style={{ transform: "rotate(180deg)" }}
        ></img>
        <ToAuthorization>ВХОД</ToAuthorization>
      </LinkContainer>
    </FormContainer>
  );
}

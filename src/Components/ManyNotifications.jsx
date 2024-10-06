import styled from "styled-components";
import { Notification } from "./Notification";

const StyledNotification = styled(Notification)`
  &.first-layer {
    z-index: 3;
    background-color: #312f2f;
  }
  &.second-layer {
    z-index: 2;
    position: absolute;
    transform: translate3d(0px, 20px, 20px) scaleX(0.9);
  }
  &.third-layer {
    z-index: 1;
    position: absolute;
    transform: translate3d(0px, 10px, 10px) scaleX(0.95);
  }
`;
const NotificationContainer = styled.div`
  display: flex;
  position: relative;
`;
export function ManyNotification() {
  return (
    <NotificationContainer>
      <StyledNotification className="first-layer" />
      <StyledNotification className="second-layer" />
      <StyledNotification className="third-layer" />
    </NotificationContainer>
  );
}

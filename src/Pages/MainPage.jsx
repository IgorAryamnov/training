import styled from "styled-components";

import { Blog, Category, Footer, ProductSlides, Strips } from "../Components";
import { useSelector } from "react-redux";

const PageContainer = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  max-width: 1920px;
  width: 100%;
  align-items: center;
`;

export function MainPage() {
  const count = useSelector((state) => state.cart.itemsInCart);
  console.log(count);
  return (
    <PageContainer>
      <ProductSlides />
      <Category />
      <Strips />
      <Blog />
      <Footer />
    </PageContainer>
  );
}

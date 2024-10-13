import styled from "styled-components";
import { Blog, Category, Footer, ProductSlides, Strips } from "../Components";

const PageContainer = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  max-width: 1920px;
  width: 100%;
  align-items: center;
`;

export function MainPage() {
  return (
    <PageContainer>
      <ProductSlides />
      <Category />
      <Strips />
      <Blog id="blog" />
      <Footer />
    </PageContainer>
  );
}

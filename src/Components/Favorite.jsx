import styled from "styled-components";
import lamp1 from "../assets/lamp-wave1.png";
import lamp2 from "../assets/lamp-wave2.png";
import lamp3 from "../assets/lamp-wave3.png";
import Heart from "../assets/heartInCircle.svg";

const cartItemsExample = [
  {
    name: "COPPELIA",
    category: "Лампа настольная",
    color: "#29D0D9",
    price: "150 000",
    count: 1,
    image: lamp1,
  },
  {
    name: "FACCHETTA",
    category: "Лампа настольная",
    color: "#FFC4A5",
    price: "150 000",
    count: 1,
    image: lamp2,
  },
  {
    name: "COPPELIA",
    category: "Лампа настольная",
    color: "#FA8EEF",
    price: "150 000",
    count: 1,
    image: lamp3,
  },
];
const ItemCard = styled.div`
  width: 523px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;

  @media (max-width: 700px) {
    width: 450px;
    margin-bottom: 50px;
  }
  @media (max-width: 600px) {
    width: 400px;
  }
  @media (max-width: 500px) {
    width: 350px;
  }
  @media (max-width: 450px) {
    width: 300px;
  }
`;
const ItemInfo = styled.div`
  margin-bottom: 22px;
  display: flex;
  justify-content: space-between;
`;
const Color = styled.div`
  width: 11px;
  height: 11px;
  border: 3px solid white;
  border-radius: 50%;
  margin-right: 12px;
`;
const ItemName = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 25.36px;
  color: #ffffff;
  margin: 0;

  @media (max-width: 500px) {
    font-size: 15px;
    line-height: 19px;
  }
`;
const ItemCategory = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: #ffffff;
  margin: 0;

  @media (max-width: 500px) {
    font-size: 13px;
    line-height: 20px;
  }
`;
const InfoContainer = styled.div`
  max-width: 393px;
  width: 100%;
  margin-left: 20px;
`;
const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95px;
  margin-top: 31px;
`;
const PriceNumber = styled.p`
  font-family: Floreste;
  font-size: 28px;
  font-weight: 400;
  line-height: 26.6px;
  color: white;
  margin: 0;

  @media (max-width: 500px) {
    font-size: 25px;
    line-height: 23.75px;
  }
`;
const PriceCurrency = styled.p`
  font-family: Euclid Circular A;
  font-size: 20px;
  font-weight: 400;
  line-height: 16.36px;
  color: white;
  margin: 0;
`;
const Container = styled.div`
  margin: 48px;

  @media (max-width: 700px) {
    margin: 40px;
  }
  @media (max-width: 600px) {
    margin: 32px;
  }
  @media (max-width: 500px) {
    margin: 24px;
  }
`;
const Image = styled.img`
  @media (max-width: 500px) {
    width: 75px;
    height: 120px;
  }
`;
const Space = styled.div`
  width: 100%;
  border: 2px solid #d9ff5a;

  @media (max-width: 700px) {
    border: 1px solid #d9ff5a;
  }
`;

export function Favorite() {
  return (
    <Container>
      <p
        style={{
          fontFamily: "Euclid Circular A",
          fontWeight: "500",
          fontSize: "18px",
          lineHeight: "22.82px",
          margin: 0,
          color: "white",
          marginBottom: 50,
        }}
      >
        ТОВАРЫ В ИЗБРАННОМ
      </p>
      {cartItemsExample.map((item, index) => {
        return (
          <ItemCard key={index}>
            <Image src={item.image} alt="itemImage" />
            <InfoContainer>
              <ItemInfo>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 13,
                    }}
                  >
                    <Color style={{ backgroundColor: `${item.color}` }} />
                    <ItemName>{item.name}</ItemName>
                  </div>
                  <ItemCategory>{item.category}</ItemCategory>
                </div>
                <input
                  style={{ outline: "none" }}
                  type="image"
                  src={Heart}
                  alt="heart"
                />
              </ItemInfo>
              <Space />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <PriceContainer>
                  <PriceNumber>{item.price}</PriceNumber>
                  <PriceCurrency>₽</PriceCurrency>
                </PriceContainer>
              </div>
            </InfoContainer>
          </ItemCard>
        );
      })}
    </Container>
  );
}

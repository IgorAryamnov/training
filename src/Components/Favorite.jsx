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
`;
const ItemCategory = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: #ffffff;
  margin: 0;
`;
const InfoContainer = styled.div`
  width: 393px;
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
`;
const PriceCurrency = styled.p`
  font-family: Euclid Circular A;
  font-size: 20px;
  font-weight: 400;
  line-height: 16.36px;
  color: white;
  margin: 0;
`;

export function Favorite() {
  return (
    <div style={{ margin: "48px" }}>
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
            <img src={item.image} alt="itemImage"></img>
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
              <div style={{ width: 389, border: "2px solid #D9FF5A" }}></div>
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
    </div>
  );
}

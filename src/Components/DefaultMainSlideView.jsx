import { DefaultSlide } from "./DefaultSlide";
import defLamp from "../assets/lampDef.png";
import defChair from "../assets/chairDef.png";
import defTable from "../assets/tableDef.png";

const defaultSlides = [
  {
    id: 0,
    style: { backgroundColor: "#C5B0FAB2", color: "#CBB6FF" },
    image: defLamp,
    author: "BENJAMIN MOORE",
    productCategory: "СВЕТИЛЬНИК",
    productDescription:
      "Функциональная дизайнерская лампа для создания максимально комфортного освещения",
    price: "150 000",
  },
  {
    id: 1,
    style: { backgroundColor: "#FA8FEF", color: "#FFA8F6" },
    image: defChair,
    author: "PAINT HERE GLORY",
    productCategory: "КРЕСЛО",
    productDescription:
      "Функциональное дизайнерское кресло для создания максимально комфортного интерьера",
    price: "120 000",
  },
  {
    id: 2,
    style: { backgroundColor: "#AECFFF", color: "#C8DEFF" },
    image: defTable,
    author: "BENJAMIN MOORE",
    productCategory: "СТОЛ",
    productDescription:
      "Функциональная дизайнерская лампа для создания максимально комфортного освещения",
    price: "235 000",
  },
];

export function DefaultMainSlideView({ onViewChange }) {
  function HandleClickOnFirstSLide(e) {
    e.stopPropagation();
    onViewChange[0]({
      firstSlide: true,
      secondSlide: false,
      thirdSlide: false,
    });
    onViewChange[1](false);
  }
  function HandleClickOnSecondSLide(e) {
    e.stopPropagation();
    onViewChange[0]({
      firstSlide: false,
      secondSlide: true,
      thirdSlide: false,
    });
    onViewChange[1](false);
  }
  function HandleClickOnThirdSLide(e) {
    e.stopPropagation();
    onViewChange[0]({
      firstSlide: false,
      secondSlide: false,
      thirdSlide: true,
    });
    onViewChange[1](false);
  }
  let functionArray = [
    HandleClickOnFirstSLide,
    HandleClickOnSecondSLide,
    HandleClickOnThirdSLide,
  ];

  return (
    <>
      {defaultSlides.map((value, index) => {
        return (
          <DefaultSlide
            key={value.id}
            style={value.style}
            image={value.image}
            author={value.author}
            productCategory={value.productCategory}
            productDescription={value.productDescription}
            price={value.price}
            onClick={(e) => functionArray[index](e)}
          />
        );
      })}
    </>
  );
}

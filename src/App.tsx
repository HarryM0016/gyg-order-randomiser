import { useState } from "react";
import gygLogo from "./assets/gyg.svg";
import "./App.css";
import { randomiseOrder, createOrderString } from "./randomiser";
import type { Order } from "./randomiser";
import VegetarianCheckbox from "./VegetarianCheckbox";
import BreakfastCheckbox from "./BreakfastCheckbox";
import MealCheckbox from "./MealCheckbox";

function App() {
  const [order, setOrder] = useState<Order>({
    entree: {
      name: "burrito",
      image: "/src/assets/images/entrees/burrito.png",
      ingredients: {
        protein: [],
        addition: ["cheese", "pico"],
        sauce: ["tomatillo salsa"],
      },
      isBreakfast: false,
      isDinner: true,
    },
    ingredients: [
      {
        name: "white rice",
        image: "/src/assets/images/ingredients/rice/white-rice.png",
        isVegetarian: true,
        isBreakfast: false,
        isDinner: true,
      },
      {
        name: "black beans",
        image: "/src/assets/images/ingredients/beans/black-beans.png",
        isVegetarian: true,
        isBreakfast: false,
        isDinner: true,
      },
      {
        name: "brisket",
        image: "/src/assets/images/ingredients/protein/brisket.png",
        isVegetarian: false,
        isBreakfast: false,
        isDinner: true,
      },
      {
        name: "guacamole",
        image: "/src/assets/images/ingredients/addition/guacamole.png",
        isVegetarian: true,
        isBreakfast: true,
        isDinner: true,
      },
      {
        name: "sour cream",
        image: "/src/assets/images/ingredients/sauce/sour-cream.png",
        isVegetarian: true,
        isBreakfast: true,
        isDinner: true,
      },
    ],
    type: "order"
  });
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isBreakfast, setIsBreakfast] = useState(false);
  const [isMeal, setIsMeal] = useState(false);

  return (
    <>
      <a
        href="https://www.guzmanygomez.com.au/"
        target="_blank"
        title="Guzman Y Gomez"
      >
        <img src={gygLogo} className="logo" />
      </a>
      <header></header>
      <div className="container">
        <div className="side-container">
          <h1>Select Criteria</h1>
          <div className="checkbox-container">
            <VegetarianCheckbox
              isChecked={isVegetarian}
              onCheck={setIsVegetarian}
            />
            <BreakfastCheckbox
              isChecked={isBreakfast}
              onCheck={setIsBreakfast}
            />
            <MealCheckbox isChecked={isMeal} onCheck={setIsMeal} />
          </div>
          <button
            className="randomise-button"
            onClick={() =>
              setOrder(randomiseOrder(isVegetarian, isBreakfast, isMeal))
            }
          >
            Randomise
          </button>
        </div>
        <div className="slot-container">{createOrderString(order)}</div>
      </div>
    </>
  );
}

export default App;

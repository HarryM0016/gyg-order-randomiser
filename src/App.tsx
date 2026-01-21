import { useState } from "react";
import gygLogo from "./assets/gyg.svg";
import "./App.css";
import { randomiseOrder, createOrderString } from "./randomiser";
import type { Order } from "./randomiser";
import VegetarianCheckbox from "./VegetarianCheckbox";
import BreakfastCheckbox from "./BreakfastCheckbox";
import MealCheckbox from "./MealCheckbox";
import { defaultOrder } from "./assets/DefaultOrder";

function App() {
  const [order, setOrder] = useState<Order>(defaultOrder);
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

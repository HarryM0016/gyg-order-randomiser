import { useState } from "react";
import gygLogo from "./assets/gyg.svg";
import "./styles/App.css";
import { randomiseOrder, createOrderString } from "./utils/randomiser";
import type { Order } from "./utils/randomiser";
import { entrees } from "./data/entrees";
import { ingredients } from "./data/ingredients";
import { sides } from "./data/sides";
import { drinks } from "./data/drinks";
import VegetarianCheckbox from "./components/VegetarianCheckbox";
import BreakfastCheckbox from "./components/BreakfastCheckbox";
import MealCheckbox from "./components/MealCheckbox";
import { defaultOrder } from "./components/DefaultOrder";
import VerticalCarousel from "./components/VerticalCarousel";

function App() {
  const [order, setOrder] = useState<Order>(defaultOrder);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isBreakfast, setIsBreakfast] = useState(false);
  const [isMeal, setIsMeal] = useState(false);

  const [entreeTarget, setEntreeTarget] = useState(1);
  const [sideTarget, setSideTarget] = useState(0)
  const [drinkTarget, setDrinkTarget] = useState(0)
  const [randomiseCount, setRandomiseCount] = useState(0);

  const handleRandomise = () => {
    const newOrder = randomiseOrder(isVegetarian, isBreakfast, isMeal);
    setOrder(newOrder);
    setEntreeTarget(newOrder.entree.index);

    if (newOrder.side && newOrder.drink) {
      setSideTarget(newOrder.side.index)
      setDrinkTarget(newOrder.drink.index)
    }
    setRandomiseCount((c) => c + 1);
  };


  return (
    <>
      <div className="header-container">
        <a
          href="https://www.guzmanygomez.com.au/"
          target="_blank"
          title="Guzman Y Gomez"
        >
          <img src={gygLogo} className="logo" />
        </a>
        <header></header>
      </div>
      <div className="app-container">
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
            onClick={handleRandomise}
          >
            Randomise!
          </button>
        </div>
        <div className="slot-container">
          <div className="slot-column-container">
            <div className="slot-column">
              <VerticalCarousel slides={entrees} targetIndex={entreeTarget} spinTrigger={randomiseCount} />
            </div>

            {order.side?.image && (
              <div className="slot-column">
                <VerticalCarousel slides={sides} targetIndex={sideTarget} spinTrigger={randomiseCount} />
              </div>
            )}

            {order.drink?.image && (
              <div className="slot-column">
                <VerticalCarousel slides={drinks} targetIndex={drinkTarget} spinTrigger={randomiseCount} />
              </div>
            )}
          </div>
          <p className="slot-message-container">{createOrderString(order)}</p>
        </div>
      </div>
    </>
  );
}

export default App;

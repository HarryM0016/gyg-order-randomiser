import { useState } from "react";
import gygLogo from "./assets/gyg.svg";
import "./styles/App.css";
import { randomiseOrder, createOrderString } from "./utils/randomiser";
import type { Order } from "./utils/randomiser";
import VegetarianCheckbox from "./components/VegetarianCheckbox";
import BreakfastCheckbox from "./components/BreakfastCheckbox";
import MealCheckbox from "./components/MealCheckbox";
import { defaultOrder } from "./components/DefaultOrder";

function App() {
  const [order, setOrder] = useState<Order>(defaultOrder);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isBreakfast, setIsBreakfast] = useState(false);
  const [isMeal, setIsMeal] = useState(false);

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
            onClick={() =>
              setOrder(randomiseOrder(isVegetarian, isBreakfast, isMeal))
            }
          >
            Randomise
          </button>
        </div>
        <div className="slot-container">
          <div className="slot-image-container">
            <div className="slot-column">
              <img
                src={order.entree.image}
                alt={order.entree.name}
                className="slot-image"
              />
            </div>
            {order.ingredients.map((ing) => (
              <div className="slot-column">
                <img
                  key={ing.name}
                  src={ing.image ?? "/src/assets/images/placeholder.png"}
                  alt={ing.name}
                  className="slot-image"
                />
              </div>
            ))}

            {order.side?.image && (
              <div className="slot-column">
                <img
                  src={order.side.image}
                  alt={order.side.name}
                  className="slot-image"
                />
              </div>
            )}

            {order.drink?.image && (
              <div className="slot-column">
                <img
                  src={order.drink.image}
                  alt={order.drink.name}
                  className="slot-image"
                />
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

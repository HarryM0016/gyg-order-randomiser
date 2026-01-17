import { useState } from "react";
import gygLogo from "./assets/gyg.svg";
import "./App.css";
import { randomiseOrder } from "./randomiser";
import VegetarianCheckbox from "./VegetarianCheckbox";
import BreakfastCheckbox from "./BreakfastCheckbox";

function App() {
  const [order, setOrder] = useState<string>("");
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isBreakfast, setIsBreakfast] = useState(false);

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
            <BreakfastCheckbox isChecked={isBreakfast} onCheck={setIsBreakfast} />
          </div>
          <button
            className="randomise-button"
            onClick={() => setOrder(randomiseOrder(isVegetarian, isBreakfast))}
          >
            Randomise
          </button>
        </div>
        <div className="slot-container">
          <p>{order}</p>
        </div>
      </div>
    </>
  );
}

export default App;

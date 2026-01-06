import { useState } from "react";
import gygLogo from "./gyg.svg";
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
      <div>
        <a href="https://www.guzmanygomez.com.au/" target="_blank">
          <img src={gygLogo} className="logo" alt="GYG logo" />
        </a>
      </div>
      <h1>Guzman Y Gomez Order Randomiser</h1>
      <VegetarianCheckbox isChecked={isVegetarian} onCheck={setIsVegetarian} />
      <div></div>
      <BreakfastCheckbox isChecked={isBreakfast} onCheck={setIsBreakfast} />
      <div className="card">
        <button
          onClick={() => setOrder(randomiseOrder(isVegetarian, isBreakfast))}
        >
          Generate Order
        </button>
        <p>{order}</p>
      </div>
      <p className="read-the-docs">
        Click on the GYG logo to view the full menu
      </p>
    </>
  );
}

export default App;

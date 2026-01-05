import { useState } from "react";
import gygLogo from "./gyg.svg";
import "./App.css";
import { randomiseOrder } from "./randomiser-logic";
import VegetarianCheckbox from "./VegetarianCheckbox";

function App() {
  const [order, setOrder] = useState<string>("");
  const [isVegetarian, setIsVegetarian] = useState(false);

  return (
    <>
      <div>
        <a href="https://www.guzmanygomez.com.au/" target="_blank">
          <img src={gygLogo} className="logo" alt="GYG logo" />
        </a>
      </div>
      <h1>Guzman Y Gomez Order Randomiser</h1>
      <VegetarianCheckbox isChecked={isVegetarian} onCheck={setIsVegetarian} />
      <div className="card">
        <button onClick={() => setOrder(randomiseOrder(isVegetarian))}>
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

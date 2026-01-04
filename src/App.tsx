import { useState } from 'react'
import gygLogo from './gyg.svg'
import './App.css'
import { randomiseOrder } from './randomiser-logic'

function App() {
  const [order, setOrder] = useState<string>('')

  return (
    <>
      <div>
        <a href="https://www.guzmanygomez.com/menu/" target="_blank">
          <img src={gygLogo} className="logo" alt="GYG logo" />
        </a>
      </div>
      <h1>Guzman Y Gomez Order Randomiser</h1>
      <div className="card">
        <button onClick={() => setOrder(randomiseOrder())}>
          Generate Order
        </button>
        <p>
          {order}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the GYG logo to view the full menu
      </p>
    </>
  )
}

export default App

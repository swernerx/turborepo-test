import { useState } from "react"
import logo from "./logo.svg"
import { Button, Root } from "@azeti-iot/uikit"
import MaterialButton from "@mui/material/Button"
import MaterialSlider from "@mui/material/Slider"
import { AppClass, AppHeaderClass, AppLogoClass } from "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={AppClass}>
      <header className={AppHeaderClass}>
        <img src={logo} className={AppLogoClass} alt="logo" />
        <Root>
          <h1>Hello</h1>

          <p>Counter: {count}</p>

          <h2>Vanilla Extract</h2>
          <Button onClick={() => setCount((count) => count + 1)}>
            Increment
          </Button>

          <br />

          <h2>Material-UI</h2>
          <MaterialSlider />
          <MaterialButton
            variant="contained"
            onClick={() => setCount((count) => count + 1)}>
            Increment
          </MaterialButton>
        </Root>
      </header>
    </div>
  )
}

export default App

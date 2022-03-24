import { useState } from 'react'
import logo from './logo.svg'
import {Button,Root} from "ui"
import MaterialButton from '@mui/material/Button';
import { AppClass, AppHeaderClass, AppLogoClass } from './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={AppClass}>
      <header className={AppHeaderClass}>
        <img src={logo} className={AppLogoClass} alt="logo" />
        <Root>
          <h1>Hello {count}</h1>
          <Button onClick={() => setCount((count) => count + 1)}>Vanilla: Increment</Button>
          <MaterialButton variant="contained" onClick={() => setCount((count) => count + 1)}>Material: Increment</MaterialButton>
        </Root>
      </header>
    </div>
  )
}

export default App

import { useState } from 'react'
import logo from './logo.svg'
import {Button,Root} from "ui"
import { AppClass, AppHeaderClass, AppLogoClass } from './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={AppClass}>
      <header className={AppHeaderClass}>
        <img src={logo} className={AppLogoClass} alt="logo" />
        <Root>
          <Button onClick={() => setCount((count) => count + 1)}>Hello {count}</Button>
        </Root>
      </header>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import dodecagonBoard from './assets/dodecagon.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>
        <img src={dodecagonBoard} className="board" alt="Outer Board" />
      </div>

      <h1>Tarati</h1>
    </>
  )
}

export default App

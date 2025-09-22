import { useState, useEffect, useRef } from 'react'
import dodecagonBoard from './assets/dodecagon.svg'
import './App.css'

const Canvas = props => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    // Our first draw

    context.fillStyle = '#000000'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  }, [])

  return <canvas ref={canvasRef} {...props}/>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        { Canvas() }
      </div>
    </>
  )
}

export default App

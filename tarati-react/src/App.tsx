import { useState, useEffect, useRef } from 'react'
import dodecagonBoard from './assets/dodecagon.svg'
//import './App.css'

function App() {
  const offset = 400
  const dotSize = 5
  const totalRadius = 200

  const angleOffset = arity => Math.PI/arity

  const anglesFromCentre = (k, arity, phase) => {
    const step: float = 2*Math.PI/arity
    return [k, phase - k*step]
  }

  const polarToCartesian = (radius, angle) => {
    const x = radius * Math.cos(angle)
    const y = radius * Math.sin(angle)
    return [x, y]
  }

  const vertices = (k, prefix, radius, angle) => {
    const [x, y] = polarToCartesian(radius, angle)
    return { id: prefix.concat(k),
      x: Math.round(x),
      y: Math.round(y),
    }
  }

  const polygon = (prefix, arity, radius, phase) => {
    const i = [...Array(arity).keys()]

    return i.map(k => anglesFromCentre(k, arity, phase))
      .map(([k, angle]) => vertices(k, prefix, radius, angle))
  }

  const polygonWithOffset = (prefix, arity, radius, phase, polarity) => {
    const points = polygon(prefix, arity, radius, phase)
    const offsetRadius = totalRadius+totalRadius/5
    const offsetAngle = angleOffset(12)*polarity*6
    const [ offsetX, offsetY ] = polarToCartesian(offsetRadius, offsetAngle)
    // const [ offsetX, offsetY ] = [200,200]

    return points.map(point => {return {...point,
      x: Math.round(point.x + offsetX),
      y: Math.round(point.y + offsetY)}})
  }

  const dodecagon = polygon("C", 12, totalRadius, angleOffset(12))
  const hexagon = polygon("B", 6, totalRadius/2, angleOffset(6))
  const squareA = polygonWithOffset("D", 4, totalRadius/3, angleOffset(4), 1)
  const squareB = polygonWithOffset("D", 4, totalRadius/3, angleOffset(4), -1)
  const centre = polygon("A", 1, 0, angleOffset(4))

  return (
    <>
      <div>
        <svg style={{height: 100 + 'em', width: 100 + 'em'}}>
          {dodecagon.map(({id, x, y}) => <circle className={id} cx={offset+x} cy={offset+y} r="15" fill="black" />)}
          {hexagon.map(({id, x, y}) => <circle className={id} cx={offset+x} cy={offset+y} r="15" fill="black" />)}
          {centre.map(({id, x, y}) => <circle className={id} cx={offset+x} cy={offset+y} r="15" fill="black" />)}
          {squareA.map(({id, x, y}) => <circle className={id} cx={offset+x} cy={offset+y} r="15" fill="red" />)}
          {squareB.map(({id, x, y}) => <circle className={id} cx={offset+x} cy={offset+y} r="15" fill="blue" />)}
          <circle cx="40" cy="60" r="25"/>
        </svg>
      </div>
    </>
  )
}

export default App
// export default { App, polygon, anglesFromCentre, polarToCartesian, vertices }

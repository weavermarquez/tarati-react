import { useState, useEffect, useRef } from 'react'
import dodecagonBoard from './assets/dodecagon.svg'
//import './App.css'


// const anglesFromCentre = (k, arity, phase) => {
//   const step: float = 2*Math.PI/arity
//   return [k, phase - k*step]
// }

// const polarToCartesian = (radius, angle) => {
//   const x = radius * Math.cos(angle)
//   const y = radius * Math.sin(angle)
//   return [x, y]
// }

// const vertices = (k, prefix, radius, angle) => {
//   const [x, y] = polarToCartesian(radius, angle)
//   return { id: prefix.concat(k),
//     x: x,
//     y: y,
//   }
// }

// const polygon = (prefix, arity, radius, phase) => {
//   const i = [...Array(arity).keys()]

//   return i.map(k => anglesFromCentre(k, arity, phase))
//     .map(([k, angle]) => vertices(k, prefix, radius, angle))
// }

// const Node = props => {
//   return (
//     <g {...props}>
//           <line x1="40" x2="60" y1="25" y2="50" />
//           <line x1="90" x2="20" y1="65" y2="20" />
//     </g>
//   )
// }


// const Board = props => {
//   const RADIUS = 500
//   const dodecagon = []
//   // a function that takes in a radius and no. of vertices; list of vertices

//   return (
//     <g {...props}>
//           <line x1="40" x2="60" y1="25" y2="50" />
//           <line x1="90" x2="20" y1="65" y2="20" />
//     </g>
//   )
// }


function App() {
  //const [count, setCount] = useState(0)

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

  const angleOffset = arity => Math.PI/arity

  const offset = 400
  const dotSize = 15
  const dodecagon = polygon("C", 12, 200, angleOffset(12))
  const hexagon = polygon("B", 6, 100, angleOffset(6))
  const squareA = polygon("D", 4, 30, angleOffset(4))
  const squareB = polygon("D", 4, 30, 0)

  return (
    <>
      <div>
        <svg style={{height: 100 + 'em', width: 100 + 'em'}}>
          {dodecagon.map(({id, x, y}) => <circle cx={offset+x} cy={offset+y} r="15" fill="black" />)}
          {hexagon.map(({id, x, y}) => <circle cx={offset+x} cy={offset+y} r="15" fill="black" />)}
          {squareA.map(({id, x, y}) => <circle cx={offset+x} cy={offset+y} r="15" fill="black" />)}
          <circle cx="40" cy="60" r="25"/>
        </svg>
      </div>
    </>
  )
}

export default App
// export default { App, polygon, anglesFromCentre, polarToCartesian, vertices }

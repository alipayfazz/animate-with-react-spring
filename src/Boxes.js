import React from 'react'
import { useSprings, animated } from 'react-spring'

const items = [ 0, 1, 2, 3, 4 ]

const Boxes = () => {
  const springs = useSprings(
    items.length, 
    items.map(item => ({
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      },
      config: { duration: 2000 }
    })
  ))

  return (
    <div className="boxes-grid">
      {
        springs.map((animation, index) => (
          <animated.div 
            key={index}
            className="box" 
            style={animation} />
        ))
      }
    </div>
  )
}

export default Boxes
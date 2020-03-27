import React, { useState } from 'react'
import { animated, useTrail } from 'react-spring'

const items = [ 0, 1, 2, 3, 4 ]

const TrailBoxes = () => {
  const [ on, toggle ] = useState(false)
  const trail = useTrail(items.length, {
    opacity: on ? 0 : 1,
    transform: on ? 'scale(0.3)' : 'scale(1)',
    // config: { duration: 1000 }
  })

  return (
    <div className="boxes-grid">
      <button style={{ width: '20%', margin: 'auto', height: '30px', cursor: 'pointer' }} onClick={() => toggle(!on)}>Toggle</button>
      {
        trail.map((animation, index) => (
          <animated.div 
            key={index}
            className="box" 
            style={animation} />
        ))
      }
    </div>
  )
}

export default TrailBoxes
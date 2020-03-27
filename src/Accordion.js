import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import useMeasure from './useMeasure'

const Accordion = () => {
  const [ on, toggle ] = useState(false)
  const [ bind, { height, top } ] = useMeasure()
  const animation = useSpring({
    height: on ? height + top * 2 : 0,
    padding: on ? top : 0,
    overflow: 'hidden'
  })

  return (
    <div>
      <div className="accordion" style={{ cursor: 'pointer', background: 'black', color: 'white', border: 'none' }}  onClick={() => toggle(!on)}>Toggle</div>
      <animated.div style={animation}>
        <div { ...bind } className="accordion">
          <p>In the Accordion</p>
        </div>
      </animated.div>
    </div>
  )
}

export default Accordion
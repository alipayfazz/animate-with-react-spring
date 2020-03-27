import React, { useState, useEffect } from 'react'
import { useSpring, animated, config } from 'react-spring'

const Toggle = () => {
  const [ isToggled, setToggle ] = useState(false)
  const fade = useSpring({
    margin: 20,
    opacity: isToggled ? 1 : 0,
    yCoordinate: isToggled ? 0 : 60, // 0 : 1 for range and output usage
    fontSize: isToggled ? '10em' : '2rem',
    config: { ...config.wobbly, precision: 1 }
  })

  // useEffect(() => {
  //   setToggle(true)
  // }, [])  

  return (
    <div>
      <animated.h1
       style={{
         ...fade,
         transform: fade.yCoordinate
          // .interpolate({
          //   range: [0, 0.25, 0.5, 0.75, 1],
          //   output: [0, -20, -40, 100, -60]
          // })
          .interpolate(y => `translate3d(0, ${y}%, 0)`)
       }}>
         Hello
      </animated.h1>
      <button style={{ cursor: 'pointer' }} onClick={() => setToggle(!isToggled)}>Toggle</button>
    </div>
  )
}

export default Toggle
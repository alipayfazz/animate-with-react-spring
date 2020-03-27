import React, { useState } from 'react'
import { useTransition, animated, config } from 'react-spring'

const Toggle = () => {
  const [ isToggled, setToggle ] =  useState(false)
  const transition = useTransition(isToggled, null, {
    from : {
      margin: 20,
      opacity: 0,
      yCoordinate: 60,
      fontSize: '2rem',
    },
    enter : {
      margin: 20,
      opacity: 1,
      yCoordinate: 0,
      fontSize: '10em',
    },
    leave : {
      margin: 20,
      opacity: 0,
      yCoordinate: 60,
      fontSize: '2rem',
    },
    config: config.wobbly
  })

  return (
    <div>
      {
        transition.map(({ item, key, props: style }) => (
          item && 
          <animated.h1 
            key={key} 
            style={{
              ...style,
              transform: style.yCoordinate.interpolate(y => `translate3d(0, ${y}%, 0)`)
            }}
          >
            Hello
          </animated.h1>
        ))
      }
      <button style={{ cursor: 'pointer' }} onClick={() => setToggle(!isToggled)}>Toggle</button>
    </div>
  )
}

export default Toggle
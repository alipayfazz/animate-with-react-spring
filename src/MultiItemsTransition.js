import React, { useState } from 'react'
import { useTransition, animated, config } from 'react-spring'

const Toggle = () => {
  const [ items, setItems ] =  useState([
    { letter: 'F', key: 1 },
    { letter: 'O', key: 2 },
    { letter: 'N', key: 3 },
    { letter: 'T', key: 4 }
  ])
  const transition = useTransition(items, item => item.key, {
    from : {
      margin: 10,
      opacity: 0,
      yCoordinate: 60,
      fontSize: '2rem',
    },
    enter : {
      margin: 10,
      opacity: 1,
      yCoordinate: 0,
      fontSize: '10em',
    },
    leave : {
      margin: 10,
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
          <animated.h1 
            key={key} 
            style={{
              ...style,
              transform: style.yCoordinate.interpolate(y => `translate3d(0, ${y}%, 0)`)
            }}
          >
            {item.letter}
          </animated.h1>
        ))
      }
      <button 
        style={{ cursor: 'pointer', marginBottom: 40 }} 
        onClick={() => setItems([{ letter: 'N', key: 5 }])}
      >
        Toggle
      </button>
    </div>
  )
}

export default Toggle
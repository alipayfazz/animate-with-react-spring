import React, { useState, useRef } from 'react'
import { animated, useTrail, useSpring, useChain, useTransition } from 'react-spring'

const items = [ 0, 1, 2, 3, 4 ]

const TrailChaining = () => {
  const [ on, toggle ] = useState(false)
  const springRef = useRef()
  const { size } = useSpring({
    ref: springRef,
    from: { size: '20%' },
    to: { size: on ? '100%' : '20%' }
  })
  const transitionRef = useRef()
  const trail = useTrail(items.length, {
    ref: transitionRef,
    from: {
      opacity: 0,
      transform: 'scale(0)'
    },
    to: {
      opacity: on ? 1 : 0,
      transform: on ? 'scale(1)' : 'scale(0)',
    },
    reverse: !on
  })

  useChain(on ? [springRef, transitionRef] : [transitionRef, springRef])

  return (
    <div className="full-height">
      <animated.div 
        className="boxes-grid-two" 
        onClick={() => toggle(!on)} 
        style={{ height: size, width: size }}>
        {
          trail.map((animation, index) => (
            <animated.div 
              key={index}
              className="box-two" 
              style={animation} />
          ))
        }
      </animated.div>
    </div>
  )
}

const TransitionChaining = () => {
  const [ on, toggle ] = useState(false)
  const springRef = useRef()
  const { size } = useSpring({
    ref: springRef,
    from: { size: '20%' },
    to: { size: on ? '100%' : '20%' }
  })
  const transitionRef = useRef()
  const transition = useTransition(on ? items : [], item => item, {
    ref: transitionRef,
    trail: 400 / items.length,
    from: {
      opacity: 0,
      transform: 'scale(0)'
    },
    enter: {
      opacity: 1,
      transform: 'scale(1)'
    },
    leave: {
      opacity: 0,
      transform: 'scale(0)'
    },
    config: { duration: 1000 }
  })

  useChain(on ? [springRef, transitionRef] : [transitionRef, springRef])

  return (
    <div className="full-height">
      <animated.div 
        className="boxes-grid-two" 
        onClick={() => toggle(!on)} 
        style={{ height: size, width: size }}>
        {
          transition.map(({ _, key, props: animation }) => (
            <animated.div 
              key={key}
              className="box-two" 
              style={animation} />
          ))
        }
      </animated.div>
    </div>
  )
}

export default TrailChaining
import React from 'react'
import { useGesture } from 'react-with-gesture'
import { animated, useSpring, config } from 'react-spring'

const EventGesture = () => {
  const [ { x }, set ] = useSpring(() => ({ x: 0, config: config.stiff }))
  const bind = useGesture(({ down, delta }) => {
    set({ x: down ? delta[0] : 0 })
  })

  return (
    <animated.div 
      style={{
        opacity: x.interpolate({ map: Math.abs, range: [0, 500], output: [1, 0] }),
        transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`)
      }}
      {...bind()} 
      className="box" />
  )
}

export default EventGesture
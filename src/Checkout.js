import React from 'react'
import { useSpring, animated } from 'react-spring'

const Checkout = ({ isOpen }) => {
  const { xCoordinate } = useSpring({
    xCoordinate: isOpen ? 0 : 100
  })

  return (
    <div className="checkout" style={{ pointerEvents: isOpen ? 'all' : 'none' }}>
      <animated.div 
        className="checkout-left" 
        style={{
          transform: xCoordinate.interpolate(x => `translate3d(${x * -1}%, 0, 0)`)
        }} 
      /> 
      <animated.div 
        className="checkout-right" 
        style={{
          transform: xCoordinate.interpolate(x => `translate3d(${x}%, 0, 0)`)
        }} 
      />
    </div>
  )
}

export default Checkout
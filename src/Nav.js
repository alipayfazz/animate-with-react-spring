import React from 'react'
import { animated } from 'react-spring'

const Nav = ({ style }) => {
  return (
    <animated.div className="nav-wrapper" style={style}>
      <nav>
        <a href="facebook.com" target="_blank">Home</a>
        <a href="twitter.com" target="_blank">Store</a>
        <a href="dribbble.com" target="_blank">About</a>
        <a href="youtube.com" target="_blank">Contact</a>
      </nav>
    </animated.div>
  )
}

export default Nav
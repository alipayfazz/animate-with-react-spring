import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

import Toggle from './Toggle'
import Nav from './Nav'
import Checkout from './Checkout'
import TransitionToggle from './TransitionToggle'
import MultiItemsTransition from './MultiItemsTransition'
import Routes from './Routes'
import Modal from './Modal'
import Accordion from './Accordion'
import Waypoints from './Waypoints'
import Gesture from './Gesture'
import EventGesture from './EventGesture'
import Boxes from './Boxes'
import TrailBoxes from './TrailBoxes'
import Chaining from './Chaining'

import logo from './logo.svg'
import './App.css'

const App = () => {
  const [ isNavOpen, setNavToggle ] = useState(false)
  const navAnimation = useSpring({
    transform: isNavOpen ? 'translate3d(0, 0, 0) scale(1)' : 'translate3d(100%, 100%, 0) scale(1)'
  })
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 }
  })

  // shorter ver
  // const fade = useSpring({ from: { opacity: 0 }, opacity: 1 })

  return (
    // <animated.div className="App" style={fade}>
    <animated.div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logos" />
        <button className="menu-button" onClick={() => setNavToggle(!isNavOpen)}>Menu</button>
        {/* <Nav style={navAnimation} /> */}
      </header>
      <main>
        {/* <Toggle /> */}
        {/* <TransitionToggle /> */}
        {/* <MultiItemsTransition /> */}
        {/* <Routes /> */}
        {/* <Modal /> */}
        {/* <Accordion /> */}
        <Waypoints />
        {/* <Gesture /> */}
        {/* <EventGesture /> */}
        {/* <Boxes /> */}
        {/* <TrailBoxes /> */}
        {/* <Chaining /> */}
        {/* <Checkout isOpen={isNavOpen} /> */}
      </main>
    </animated.div>
  )
}

export default App

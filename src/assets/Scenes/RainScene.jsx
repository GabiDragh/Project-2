// TODO: Install three.js

import React from 'react'
import RainBackground from '../images/RainBackground.png'

const RainScene = () => {
  return (
    <div className='scene' style={{ backgroundImage: `url(${RainBackground})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        width: '100%',
                                        height: '100%',}}>RainScene</div>
  )
}

export default RainScene

// TODO: Install react-three/fiber

// TODO: Create rain using three.js

// TODO: Add scene background

// TODO: Add avatar

// TODO: Add greeting message. OPTIONAL: ask if the user would like some recommendations

// TODO: IF recommendations -> create json file to store links for suggestion websites (google/tripadvisor/daysout/audible for books/spotify for music etc)

// TODO: IF recommendations -> add button for external link and a random function to choose an external link from the json file


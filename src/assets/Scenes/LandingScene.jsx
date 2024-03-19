// DONE: Install three.js and react-three/fiber - package.json file update!

import React, {useRef, useEffect } from 'react' //Import React and hooks from React
import * as THREE from 'three' // Import Three.js
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader' // Import gltf loader to load avatar - not using it since I created the separate component
import LandingBackground from '../images/LandingBackground.jpg'
// import LandingAvatar  from './LandingAvatar'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import LandingAvatar from './LandingAvatar'


// import avatarRunning from '../../../public/models/Running.glb'


const LandingScene = () => {
// TODO: Create rain using three.js

const rendererRef = useRef();


useEffect(() => {

    let scene, camera, renderer;

    // Create the three.js scene
    scene = new THREE.Scene(); //set up the scene
    camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000); //set up the camera (field of view, aspect ratio, near and far clipping plane)
    renderer = new THREE.WebGLRenderer(); //set up the renderer 
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;

    const heroElement = document.getElementById('hero');
    heroElement.appendChild(renderer.domElement);

    // DONE: Add scene background - background image added
    // Add background image loader
    const loader = new THREE.TextureLoader();
    loader.load(LandingBackground, (texture) => {
        scene.background = texture;
    });

    // Set camera 
    camera.position.z = 4;

    // Create animation loop
    const animate = () => {
        requestAnimationFrame(animate);

        // Render the scene
        renderer.render(scene, camera);
    };

    animate();

    // TODO: Add avatar - separate component created 

    // FIXME: Cleanup - need ta help with the cleanup - atm, at every save a new canvas is created, keeping the old ones, outside of the hero div (they annoyingly still render under the hero section)
    return () => {
        if (rendererRef.current) {
          rendererRef.current.dispose();
          heroElement.removeChild(rendererRef.current.domElement);
        }
      };
    }, []);

  return (

    
    <div id="hero">
        <Canvas
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0}}
            camera={{ position: [0, 2, 4], fov: 30 }}>
            {/* <OrbitControls />  */}
            <ambientLight intensity={3} />
            <LandingAvatar style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}/>
        </Canvas>
        
        {/* // DONE: Add greeting message. OPTIONAL: ask if the user would like some recommendations */}
        {/* FIXME: Needs better styling - try Tailwind? Tried Typewriter but couldn't make it work - maybe try another package? */}
       <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
                <p style={{ fontSize: '24px', marginBottom: '20px' }}>Hey! I am WeatherRebel, your friend that has the latest information about weather and fun stuff to do depending on the outside conditions. To get started, please use the search bar so I can get the location you are interested in.</p>
        </div>
    </div>

  );
}

export default LandingScene

// TODO: IF recommendations -> create json file to store links for suggestion websites (google/tripadvisor/daysout/audible for books/spotify for music etc)

// TODO: IF recommendations -> add button for external link and a random function to choose an external link from the json file


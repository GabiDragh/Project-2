// DONE: Install three.js and react-three/fiber - package.json file update!

import React, {useRef, useEffect } from 'react' //Import React and hooks from React
import * as THREE from 'three' // Import Three.js
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader' // Import gltf loader to load avatar - not using it since I created the separate component
import RainBackground from '../images/RainBackground.jpg'
import RainAvatar  from './RainAvatar'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// import avatarRunning from '../../../public/models/Running.glb'


const RainScene = () => {
// DONE: Create rain using three.js

const raindropsRef = useRef([]); 
const rendererRef = useRef();


useEffect(() => {

    let scene, camera, renderer;

    // Create the three.js scene
    scene = new THREE.Scene(); //set up the scene
    camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000); //set up the camera (field of view, aspect ratio, near and far clipping plane)
    renderer = new THREE.WebGLRenderer(); //set up the renderer 
    renderer.setSize( window.innerWidth, window.innerHeight ); //set the renderer size. Might need to adjust to /2 - half the resolution
    rendererRef.current = renderer;
    
    const heroElement = document.getElementById('hero');//add the rendered element to the HTML (canvas element)
    heroElement.appendChild(renderer.domElement);

    // DONE: Add scene background - background image added
    // Add background image loader
    const loader = new THREE.TextureLoader();
    loader.load(RainBackground, (texture) => {
        scene.background = texture;
    });

    // Raindrop geometry and material
    const raindropGeometry = new THREE.SphereGeometry(0.01, 12, 12); //sphere radius, width and height
    const raindropMaterial = new THREE.PointsMaterial({ color: 0x0082AA, transparent: true }); //sphere material - basic SkyBlue 
 
    // Create raindrops
    // const raindrops = [];
    for (let i = 0; i < 700; i++) {
        const raindrop = new THREE.Mesh(raindropGeometry, raindropMaterial); //Create raindrop mesh applying the geometry and material
        raindrop.position.set(Math.random() * 20 - 10, Math.random() * 20, Math.random() * 20 - 10); //initial position x, y, z coordinates
        raindropsRef.current.push(raindrop) ;//push elements in the array
        scene.add(raindrop); //add element to scene
    }

    // Set camera 
    camera.position.z = 4;

    // Create animation loop
    const animate = () => {
        requestAnimationFrame(animate);

        // Update raindrop positions
        raindropsRef.current.forEach((raindrop) => {
            raindrop.position.y -= 0.1;
            if (raindrop.position.y < -5) {
                raindrop.position.y = 20;
            }
        });

        // Render the scene
        renderer.render(scene, camera);
    };

    animate();

    // DONE: Add avatar - separate component created 

    // FIXME: Cleanup - need ta help with the cleanup - atm, at every save a new canvas is created, keeping the old ones, outside of the hero div (they annoyingly still render under the hero section)
    return () => {
        if (rendererRef.current) {
        rendererRef.current.dispose();
        heroElement.removeChild(rendererRef.current.domElement);
        }
    };

}, []);

    // DONE:Add button handler

    const handleWeatherForecastClick = () => {
        console.log('Weather forecast component link'); //FIXME: Add link to component
    };

    const handleBookRecommendationsClick = () => {
        console.log('Book recommendations link');
        window.open('https://www.audible.co.uk/search?keywords=rainy+day+reads&k=rainy+day+reads', '_blank');
    };

  return (

    
    <div id="hero">
        <Canvas
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0}}
            camera={{ position: [0, 2, 4], fov: 30 }}>
            {/* <OrbitControls /> */} 
            <ambientLight intensity={3} />
            <RainAvatar style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}/>
        </Canvas>
        
        {/* // DONE: Add greeting message. OPTIONAL: ask if the user would like some recommendations */}
        {/* FIXME: Needs better styling - try Tailwind? Tried Typewriter but couldn't make it work - maybe try another package? */}
       <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
                <p style={{ fontSize: '24px', marginBottom: '20px' }}>Oh, no! It is pouring out here! Better stay indoors for now! Would you like me to give you the weather forecast or some book recommendations?</p>
                <button onClick={handleWeatherForecastClick} style={{ fontSize: '18px', marginRight: '10px' }}>Weather Forecast</button>
                <button onClick={handleBookRecommendationsClick} style={{ fontSize: '18px' }}>Book Recommendations</button>
        </div>
    </div>

  );
}

export default RainScene

// TODO: IF recommendations -> create json file to store links for suggestion websites (google/tripadvisor/daysout/audible for books/spotify for music etc)

// TODO: IF recommendations -> add button for external link and a random function to choose an external link from the json file


// DONE: Install three.js and react-three/fiber - package.json file update!

import React, {useRef, useEffect } from 'react' //Import React and hooks from React
import * as THREE from 'three' // Import Three.js
import RainBackground from '../images/RainBackground.jpg'
import RainAvatar  from './RainAvatar'
import { Canvas } from '@react-three/fiber'

const RainScene = () => {
// DONE: Create rain using three.js

const raindropsRef = useRef([]); 
const rendererRef = useRef();


useEffect(() => {

    let scene, camera, renderer;

    // Added function to adjust background image size when window resizes

    const handleWindowResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        renderer.setSize(width, height);

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    };

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
        texture.minFilter = THREE.LinearFilter; //filter added to insure the texture keeps quality
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
            raindrop.position.y -= 0.15;
            if (raindrop.position.y < -10) {
                raindrop.position.y = 20;
            }
        });

        // Render the scene
        renderer.render(scene, camera);
    };

    animate();

         // Event listener to adjust background when window is resized
         window.addEventListener('resize', handleWindowResize);

        // Cleanup 
        return () => {

            window.removeEventListener('resize', handleWindowResize);

        if (rendererRef.current) {
        rendererRef.current.dispose();
        heroElement.removeChild(rendererRef.current.domElement);
        }
    };

}, []);

    // DONE:Add button handler

    const handleBookRecommendationsClick = () => {
        console.log('Book recommendations link');
        window.open('https://www.audible.co.uk/search?keywords=rainy+day+reads&k=rainy+day+reads', '_blank');
    };

  return (

    
    <div id="hero">
        <Canvas
            style={{ position: 'absolute', top: 90, left: 0, width: '100%', height: '100%', zIndex: 0}}
            camera={{ position: [0, 2, 4], fov: 30 }}>
            <ambientLight intensity={3} />
            <RainAvatar style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}/>
        </Canvas>
        
       <div className="absolute w-full inset-x-0 bottom-0 md:bottom-0 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-xl md:text-2xl mb-4">Oh, no! It is pouring out here! Better stay indoors for now! Would you like me to give you the weather forecast or some book recommendations?</p>
                <button onClick={handleBookRecommendationsClick} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Book Recommendations</button>
        </div>
    </div>

  );
}

export default RainScene


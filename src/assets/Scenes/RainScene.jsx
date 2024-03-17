// DONE: Install three.js and react-three/fiber - package.json file update!

import React, {useRef, useEffect } from 'react' //Import React and hooks from React
import * as THREE from 'three' // Import Three.js
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader' // Import gltf loader to load avatar
import RainBackground from '../images/RainBackground.png'

const RainScene = () => {
// TODO: Create rain using three.js

const containerRef = useRef();

useEffect(() => {
    // Create the three.js scene
    const scene = new THREE.Scene(); //set up the scene
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); //set up the camera (field of view, aspect ratio, near and far clipping plane)
    const renderer = new THREE.WebGLRenderer(); //set up the renderer 
    renderer.setSize( window.innerWidth, window.innerHeight ); //set the renderer size. Might need to adjust to /2 - half the resolution
    document.getElementById('hero').appendChild ( renderer.domElement ); //add the rendered element to the HTML (canvas element)

    // Raindrop geometry and material
    const raindropGeometry = new THREE.SphereGeometry(0.005, 7, 7); //sphere radius, width and height
    const raindropMaterial = new THREE.PointsMaterial({ color: 0x87ceeb, transparent: true }); //sphere material - basic SkyBlue 
 
    // Create raindrops
    const raindrops = [];
    for (let i = 0; i < 500; i++) {
        const raindrop = new THREE.Mesh(raindropGeometry, raindropMaterial); //Create raindrop mesh applying the geometry and material
        raindrop.position.set(Math.random() * 20 - 10, Math.random() * 20, Math.random() * 20 - 10); //initial position x, y, z coordinates
        raindrops.push(raindrop); //push elements in the array
        scene.add(raindrop); //add element to scene
    }

    // Set camera 
    camera.position.z = 4;

    // Create animation loop
    const animate = () => {
        requestAnimationFrame(animate);

        // Update raindrop positions
        raindrops.forEach(raindrop => {
            raindrop.position.y -= 0.1;
            if (raindrop.position.y < -5) {
                raindrop.position.y = 20;
            }
        });

        // Render the scene
        renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
        renderer.dispose();
        // scene.dispose();
    };

}, []);

// TODO: Add avatar

  return (

    // DONE: Add scene background
    <div className='scene' style={{
        backgroundImage: `url(${RainBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
        position: 'relative' // Set position to relative for the background image to cover the entire scene
      }}>
        <div className='rain-scene' ref={containerRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          {/* Your three.js rain scene */}
        </div>
      </div>

  );
}

export default RainScene

// TODO: Add greeting message. OPTIONAL: ask if the user would like some recommendations

// TODO: IF recommendations -> create json file to store links for suggestion websites (google/tripadvisor/daysout/audible for books/spotify for music etc)

// TODO: IF recommendations -> add button for external link and a random function to choose an external link from the json file


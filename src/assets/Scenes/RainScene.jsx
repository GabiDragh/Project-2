// DONE: Install three.js and react-three/fiber - package.json file update!

import React, {useRef, useEffect } from 'react' //Import React and hooks from React
import * as THREE from 'three' // Import Three.js
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader' // Import gltf loader to load avatar
import RainBackground from '../images/RainBackground.jpg'
import RainAvatar  from './RainAvatar'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
// import avatarRunning from '../../../public/models/Running.glb'


const RainScene = () => {
// TODO: Create rain using three.js

const raindropsRef = useRef([]);
const rendererRef = useRef(null);


useEffect(() => {
    // Create the three.js scene
    const scene = new THREE.Scene(); //set up the scene
    const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000); //set up the camera (field of view, aspect ratio, near and far clipping plane)
    const renderer = new THREE.WebGLRenderer(); //set up the renderer 
    renderer.setSize( window.innerWidth, window.innerHeight ); //set the renderer size. Might need to adjust to /2 - half the resolution
    rendererRef.current = renderer;
    document.getElementById('hero').appendChild ( renderer.domElement ); //add the rendered element to the HTML (canvas element)

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

    // TODO: Add avatar

    // const loader = new GLTFLoader();
    // loader.load( '/models/Running.glb', gltf => {
    //         const avatar = gltf.scene;
    //         avatar.scale.set(1, 1, 1);
    //         avatar.position.set(0, 0, 0);
    //         scene.add(avatar);
    //     }
    // );

     // Cleanup
     return () => {
        if (rendererRef.current) {
            rendererRef.current.dispose();
        // scene.dispose();
        }
    };

}, []);

  return (

    // FIXME: Add scene background - background image added but looking bad with the rain
    <div id="hero">
    <Canvas
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
        camera={{ position: [0, 2, 5], fov: 30 }}
    >
        <OrbitControls />
        <ambientLight intensity={1} />
        <RainAvatar />
    </Canvas>
</div>

  );
}

export default RainScene

// TODO: Add greeting message. OPTIONAL: ask if the user would like some recommendations

// TODO: IF recommendations -> create json file to store links for suggestion websites (google/tripadvisor/daysout/audible for books/spotify for music etc)

// TODO: IF recommendations -> add button for external link and a random function to choose an external link from the json file


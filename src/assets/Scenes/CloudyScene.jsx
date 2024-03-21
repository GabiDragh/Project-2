import React, {useRef, useEffect } from 'react' //Import React and hooks from React
import * as THREE from 'three' // Import Three.js
import CloudyBackground from '../images/CloudyBackground.jpg'
import { Canvas } from '@react-three/fiber'
import CloudyAvatar from './CloudyAvatar'

// DONE: Create scene using three.js

const CloudyScene = () => {

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
        renderer.setSize(window.innerWidth, window.innerHeight);
        rendererRef.current = renderer;

        const heroElement = document.getElementById('hero');
        heroElement.appendChild(renderer.domElement);

        // Add scene background
        const loader = new THREE.TextureLoader();
        loader.load(CloudyBackground, (texture) => {
            texture.minFilter = THREE.LinearFilter; //filter added to insure the texture keeps quality
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
        // window.open('https://www.tripadvisor.co.uk/Search?&q=Cloudy%20day%20in%20'${{ searchInput }}'', '_blank'); //Add search input field from navbar - add id in navbar
    };

     return (

        <div id="hero">
            <Canvas
                style={{ position: 'absolute', top: 90, left: 0, width: '100%', height: '100%', zIndex: 0}}
                camera={{ position: [0, 2, 4], fov: 30 }}>
                <ambientLight intensity={3} />
                <CloudyAvatar style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}/>
               
            </Canvas>
            
            <div className="absolute w-full inset-x-0 bottom-0 md:bottom-0 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-xl md:text-2xl mb-4">Neither good nor bad! A bit cloudy, but good enough for a walk!</p>
                <button onClick={handleBookRecommendationsClick} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Let's go for a walk!</button>
        </div>
        </div>

    );
}

export default CloudyScene



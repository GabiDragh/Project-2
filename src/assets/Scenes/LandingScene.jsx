import React, {useRef, useEffect } from 'react' //Import React and hooks from React
import * as THREE from 'three' // Import Three.js
import LandingBackground from '../images/LandingBackground.jpg'
import { Canvas } from '@react-three/fiber'
import LandingAvatar from './LandingAvatar'

// DONE: Create scene using three.js

const LandingScene = () => {

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
        loader.load(LandingBackground, (texture) => {
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

     return (

        <div id="hero">
            <Canvas
                style={{ position: 'absolute', top: 90, left: 0, width: '100%', height: '100%', zIndex: 0}}
                camera={{ position: [0, 2, 4], fov: 30 }}>
                {/* <OrbitControls />  */}
                <ambientLight intensity={3} />
                <LandingAvatar style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}/>
            </Canvas>
        
            <div className="absolute w-full inset-x-0 bottom-0 md:bottom-0 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-xl md:text-2xl mb-4">Hey! I am WeatherRebel, your friend with the latest weather information and fun stuff for all seasons. To get started, please use the search bar so I can get the location you are interested in.</p>
            </div>
        </div>

    );
}

export default LandingScene



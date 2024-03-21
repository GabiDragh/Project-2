import React, {useRef, useEffect } from 'react' //Import React and hooks from React
import * as THREE from 'three' // Import Three.js
import SunnyBackground from '../images/SunnyBackground.jpg'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import SunnyAvatar from './SunnyAvatar'


// DONE: Create scene using three.js

const SunnyScene = () => {

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

        // Add scene background
        const loader = new THREE.TextureLoader();
        loader.load(SunnyBackground, (texture) => {
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

        // Cleanup 
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
        // window.open('https://www.tripadvisor.co.uk/Search?&q=sunny%20day%20in%20'${{ searchInput }}'', '_blank'); //Add search input field from navbar - add id in navbar
    };

     return (

        <div id="hero">
            <Canvas
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0}}
                camera={{ position: [0, 2, 4], fov: 30 }}>
                {/* <OrbitControls />  */}
                <ambientLight intensity={3} />
                <SunnyAvatar style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}/>
            </Canvas>
            
            
            {/* FIXME: Needs better styling - try Tailwind? Tried Typewriter but couldn't make it work - maybe try another package? */}
            <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
                <p style={{ fontSize: '24px', marginBottom: '20px' }}>Yay! All nice and sunny out here! Want to go out exploring? I have some great suggestions for you!</p>
                <button onClick={handleWeatherForecastClick} style={{ fontSize: '18px', marginRight: '10px' }}>Weather Forecast</button>
                <button onClick={handleBookRecommendationsClick} style={{ fontSize: '18px' }}>Let's go outside!</button>
        </div>
        </div>

    );
}

export default SunnyScene



import React, {useRef, useEffect } from 'react' //Import React and hooks from React
import * as THREE from 'three' // Import Three.js
import StormBackground from '../images/StormBackground.jpg'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import StormAvatar from './StormAvatar'
import StormCloud from './StormCloud'

// DONE: Create scene using three.js

const StormScene = () => {

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
        loader.load(StormBackground, (texture) => {
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
        // window.open('https://www.tripadvisor.co.uk/Search?&q=Storm%20day%20in%20'${{ searchInput }}'', '_blank'); //Add search input field from navbar - add id in navbar
    };

    const adjustStormCloudForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [-0.7, -6, -22];
        let rotation = [0, 0, 0];

        if(window.innerWidth < 768) {
            screenScale = [0.15, 0.15, 0.15];
        } else {
            screenScale = [0.3, 0.3, 0.3];
        }
    

        return [screenScale, screenPosition, rotation]
        }

        const [islandScale, islandPosition, islandRotation] = adjustStormCloudForScreenSize();

     return (


        <div id="hero">
            <Canvas
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0}}
                camera={{ position: [0, 2, 4], fov: 30 }}>
                {/* <OrbitControls />  */}
                <ambientLight intensity={3} />
                <StormAvatar style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}/>
                <StormCloud 
                position={islandPosition}
                scale={islandScale}
                rotation={islandRotation} />
            </Canvas>
            
            {/* FIXME: Needs better styling - try Tailwind? Tried Typewriter but couldn't make it work - maybe try another package? */}
            <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
                <p style={{ fontSize: '24px', marginBottom: '20px' }}>Wowza! That does not look good! Better go in right away!</p>
                <button onClick={handleWeatherForecastClick} style={{ fontSize: '18px', marginRight: '10px' }}>Weather Forecast</button>
                <button onClick={handleBookRecommendationsClick} style={{ fontSize: '18px' }}>Netflix and chill</button>
        </div>
        </div>

    );
}

export default StormScene



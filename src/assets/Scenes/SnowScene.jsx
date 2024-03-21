import React, {useRef, useEffect } from 'react' //Import React and hooks from React
import * as THREE from 'three' // Import Three.js
import SnowBackground from '../images/SnowBackground.jpg'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import SnowAvatar from './SnowAvatar'
import Snowflake1 from '../images/snowflake1.png'
import Snowflake2 from '../images/snowflake2.png'
import Snowflake3 from '../images/snowflake3.png'
import Snowflake4 from '../images/snowflake4.png'
import Snowflake5 from '../images/snowflake5.png'

// DONE: Create scene using three.js

const SnowScene = () => {

    const rendererRef = useRef();

    useEffect(() => {

        let scene, camera, renderer, parameters;

        // Create the three.js scene
        scene = new THREE.Scene(); //set up the scene
        camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000); //set up the camera (field of view, aspect ratio, near and far clipping plane)
        renderer = new THREE.WebGLRenderer(); //set up the renderer 
        renderer.setSize(window.innerWidth, window.innerHeight); //Renderer size
        rendererRef.current = renderer; //renderer ref

        const heroElement = document.getElementById('hero'); 
        heroElement.appendChild(renderer.domElement); //Append renderer to hero div

        // Add scene background
        const loader = new THREE.TextureLoader(); 
        loader.load(SnowBackground, (texture) => {
            scene.background = texture;
        });


        // Add snow
        const snowflakeTexture = [Snowflake1, Snowflake2, Snowflake3, Snowflake4, Snowflake5];
        const materials = [];
        const geometry = new THREE.BufferGeometry();
		const vertices = [];
        const textureLoader = new THREE.TextureLoader();

        const assignSRGB = ( texture ) => {
            texture.encoding = THREE.SRGBColorSpace;
        };

        const flake1 = textureLoader.load( '../images/snowflake1.png', assignSRGB );
        const flake2 = textureLoader.load( '../images/snowflake2.png', assignSRGB );
        const flake3 = textureLoader.load( '../images/snowflake3.png', assignSRGB );
        const flake4 = textureLoader.load( '../images/snowflake4.png', assignSRGB );
        const flake5 = textureLoader.load( '../images/snowflake5.png', assignSRGB );

        for ( let i = 0; i < 6000; i ++ ) {

            const x = Math.random() * 2000 - 1000;
            const y = Math.random() * 2000 - 1000;
            const z = Math.random() * 2000 - 1000;

            vertices.push( x, y, z );
        }

        geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

        parameters = [
            [[ 1.0, 0.2, 0.5 ], flake2, 20 ],
            [[ 0.95, 0.1, 0.5 ], flake3, 15 ],
            [[ 0.90, 0.05, 0.5 ], flake1, 10 ],
            [[ 0.85, 0, 0.5 ], flake5, 8 ],
            [[ 0.80, 0, 0.5 ], flake4, 5 ]
        ];

        for ( let i = 0; i < snowflakeTexture.length; i ++ ) {

            const color = parameters[i][0];
            const texture = new THREE.TextureLoader().load(snowflakeTexture[i], assignSRGB);
            const size = parameters[i][2] * 0.5; //Half the snowflake size

            materials[i] = new THREE.PointsMaterial({
                size: size,
                map: texture,
                blending: THREE.AdditiveBlending,
                depthTest: false,
                transparent: true
            });
            materials[i].color.setHSL(color[0], color[1], color[2]);

            const particles = new THREE.Points( geometry, materials[ i ] );

            particles.rotation.x = Math.random() * 6;
            particles.rotation.y = Math.random() * 6;
            particles.rotation.z = Math.random() * 6;

            scene.add( particles );

        }

        // Set camera 
        camera.position.z = 4;

        // Create animation loop 
        const animate = () => {
            requestAnimationFrame(animate);

            for (let i = 0; i < materials.length; i++) {
                const particles = scene.children[i];
                particles.position.y -= 0.5; 
                if (particles.position.y < -1000) {
                    particles.position.y = 1000; 
                }
            }

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
        // window.open('https://www.tripadvisor.co.uk/Search?&q=Snow%20day%20in%20'${{ searchInput }}'', '_blank'); //Add search input field from navbar - add id in navbar
    };

     return (

        <div id="hero">
            <Canvas
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0}}
                camera={{ position: [0, 2, 4], fov: 30 }}>
                {/* <OrbitControls />  */}
                <ambientLight intensity={3} />
                <SnowAvatar style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}/>
               
            </Canvas>
            
            
            {/* FIXME: Needs better styling - try Tailwind? Tried Typewriter but couldn't make it work - maybe try another package? */}
            <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
                <p style={{ fontSize: '24px', marginBottom: '20px' }}>It's snowing! Let's go ski!</p>
                <button onClick={handleWeatherForecastClick} style={{ fontSize: '18px', marginRight: '10px' }}>Weather Forecast</button>
                <button onClick={handleBookRecommendationsClick} style={{ fontSize: '18px' }}>Let's go ski!</button>
        </div>
        </div>

    );
}

export default SnowScene


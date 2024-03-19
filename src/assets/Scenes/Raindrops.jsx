import React from 'react'

const Raindrops = () => {


    const raindropsRef = useRef([]);


    useEffect(() => {

        let scene, camera, renderer;

        // Create the three.js scene
        scene = new THREE.Scene(); //set up the scene
        camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000); //set up the camera (field of view, aspect ratio, near and far clipping plane)
        renderer = new THREE.WebGLRenderer(); //set up the renderer 
        renderer.setSize( window.innerWidth, window.innerHeight ); //set the renderer size. Might need to adjust to /2 - half the resolution
        // document.getElementById('hero').appendChild ( renderer.domElement ); //add the rendered element to the HTML (canvas element)

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

        // TODO: Add avatar - separate component created 

        // FIXME: Cleanup - need ta help with the cleanup - atm, at every save a new canvas is created, keeping the old ones, outside of the hero div (they annoyingly still render under the hero section)
        return () => {
            if (renderer) {
            renderer.dispose();
            };
            // scene.dispose(); - tried this to clean the canvas scene rendering extra, but not successful 
        };

    }, []);
    
  return (
    <div>Raindrops</div>
  )
}

export default Raindrops
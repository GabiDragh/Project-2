/*
Model downloaded from https://www.mixamo.com/#/?page=1&query=running -> saved as .glb file in Blender -> code below Auto-generated by: https://github.com/pmndrs/gltfjsx -> edited to turn it into a working component
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import Running from '/models/Running.glb?url'

const RainAvatar = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('models/Running.glb');

  console.log(animations);

  animations[0].name = "Running";

  const { actions } = useAnimations(animations, group);

//   useFrame(() => {
//     group.current.getObjectByName("Head").lookAt(state.camera.position); Head follow - not necessary
//   });

  useEffect(() => { 
    actions["Running"].reset().play(); // Animation active
  }, []);

  return (
    <group ref={group} {...props}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 1]} scale={0.005, 0.005, 0.005}>
          <skinnedMesh
            name="Ch03"
            geometry={nodes.Ch03.geometry}
            material={materials.Ch03_Body}
            skeleton={nodes.Ch03.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/Running.glb')

export default RainAvatar
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Kyyy_24 (https://sketchfab.com/luckyardrianto27)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cloud-lightning-d0e6edbfaedd40559a77611ade3c147b
Title: cloud lightning
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import StormCloud from '/models/StormCloud.glb?url'
import { a } from '@react-spring/three'

const StormCloudScene = (props) => {
  const { nodes, materials } = useGLTF(StormCloud)

    const stormCloudRef = useRef();

  return (
    <a.group ref={stormCloudRef} {...props}>
      <group scale={0.01}>
        <mesh
          geometry={nodes.th_bolt001_lighiting_0.geometry}
          material={materials.lighiting}
          position={[34.507, -75.237, 59.706]}
          rotation={[3.012, -0.144, 2.936]}
          scale={1.268}
        />
        <mesh
          geometry={nodes.th_bolt000_lighiting_0.geometry}
          material={materials.lighiting}
          position={[689.953, 36.55, 59.646]}
          rotation={[3.017, -0.148, 2.969]}
          scale={[-0.995, 0.995, 0.995]}
        />
        <mesh
          geometry={nodes.th_bolt002_lighiting_0.geometry}
          material={materials.lighiting}
          position={[508.193, -7.889, -28.236]}
          rotation={[0.156, 0.825, -0.646]}
          scale={[0.874, 1.145, 0.8]}
        />
        <mesh
          geometry={nodes.Mball034_Cloud_0.geometry}
          material={materials.Cloud}
          position={[37.275, 57.443, 21.326]}
          scale={0.926}
        />
        <mesh
          geometry={nodes.Sphere004_Rain_0.geometry}
          material={materials.Rain}
          position={[395.474, -636.166, -390.331]}
          rotation={[0, 0, -0.486]}
          scale={[0.107, 0.169, 0.068]}
        />
        <mesh
          geometry={nodes.Sphere013_Rain_0.geometry}
          material={materials.Rain}
          position={[403.212, -518.132, -357.075]}
          rotation={[0, 0, -0.486]}
          scale={[0.059, 0.17, 0.038]}
        />
        <mesh
          geometry={nodes.Sphere015_Rain_0.geometry}
          material={materials.Rain}
          position={[67.863, -442.67, -234.757]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh
          geometry={nodes.Sphere017_Rain_0.geometry}
          material={materials.Rain}
          position={[282.28, -287.553, 84.199]}
          rotation={[0, 0, -0.486]}
          scale={[0.059, 0.17, 0.038]}
        />
        <mesh
          geometry={nodes.Sphere024_Rain_0.geometry}
          material={materials.Rain}
          position={[393.417, -162.933, 56.261]}
          rotation={[0, 0, -0.486]}
          scale={[0.107, 0.169, 0.068]}
        />
        <mesh
          geometry={nodes.Sphere025_Rain_0.geometry}
          material={materials.Rain}
          position={[177.559, -313.941, 201.47]}
          rotation={[0, 0, -0.486]}
          scale={[0.059, 0.17, 0.038]}
        />
        <mesh
          geometry={nodes.Sphere026_Rain_0.geometry}
          material={materials.Rain}
          position={[650.762, -561.961, 394.52]}
          rotation={[0, 0, -0.486]}
          scale={[0.039, 0.113, 0.025]}
        />
        <mesh
          geometry={nodes.Sphere027_Rain_0.geometry}
          material={materials.Rain}
          position={[230.839, -319.338, -246.295]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh
          geometry={nodes.Sphere028_Rain_0.geometry}
          material={materials.Rain}
          position={[698.738, -192.713, 62.971]}
          rotation={[0, 0, -0.486]}
          scale={[0.107, 0.169, 0.068]}
        />
        <mesh
          geometry={nodes.Sphere030_Rain_0.geometry}
          material={materials.Rain}
          position={[531.872, -559.72, 382.116]}
          rotation={[0, 0, -0.486]}
          scale={[0.039, 0.113, 0.025]}
        />
        <mesh
          geometry={nodes.Sphere031_Rain_0.geometry}
          material={materials.Rain}
          position={[503.155, -340.96, -337.378]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh
          geometry={nodes.Sphere034_Rain_0.geometry}
          material={materials.Rain}
          position={[177.254, -136.806, -27.184]}
          rotation={[0, 0, -0.486]}
          scale={[0.039, 0.113, 0.025]}
        />
        <mesh
          geometry={nodes.Sphere037_Rain_0.geometry}
          material={materials.Rain}
          position={[272.788, -257.523, -297.723]}
          rotation={[0, 0, -0.486]}
          scale={[0.059, 0.17, 0.038]}
        />
        <mesh
          geometry={nodes.Sphere038_Rain_0.geometry}
          material={materials.Rain}
          position={[326.825, -245.148, -290.724]}
          rotation={[0, 0, -0.486]}
          scale={[0.039, 0.113, 0.025]}
        />
        <mesh
          geometry={nodes.Sphere039_Rain_0.geometry}
          material={materials.Rain}
          position={[425.704, -170.021, -255.041]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh
          geometry={nodes.Sphere042_Rain_0.geometry}
          material={materials.Rain}
          position={[-10.945, -336.52, 232.739]}
          rotation={[0, 0, -0.486]}
          scale={[0.039, 0.113, 0.025]}
        />
        <mesh
          geometry={nodes.Sphere043_Rain_0.geometry}
          material={materials.Rain}
          position={[-80.059, -340.762, -175.361]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh
          geometry={nodes.Sphere044_Rain_0.geometry}
          material={materials.Rain}
          position={[727.353, -531.984, 324.28]}
          rotation={[0, 0, -0.486]}
          scale={[0.107, 0.169, 0.068]}
        />
        <mesh
          geometry={nodes.Sphere045_Rain_0.geometry}
          material={materials.Rain}
          position={[391.135, -274.486, 356.169]}
          rotation={[0, 0, -0.486]}
          scale={[0.059, 0.17, 0.038]}
        />
        <mesh
          geometry={nodes.Sphere046_Rain_0.geometry}
          material={materials.Rain}
          position={[592.193, -628.48, -193.344]}
          rotation={[0, 0, -0.486]}
          scale={[0.039, 0.113, 0.025]}
        />
        <mesh 
          geometry={nodes.Sphere048_Rain_0.geometry}
          material={materials.Rain}
          position={[598.219, -639.345, -91.167]}
          rotation={[0, 0, -0.486]}
          scale={[0.107, 0.169, 0.068]}
        />
        <mesh
          geometry={nodes.Sphere049_Rain_0.geometry}
          material={materials.Rain}
          position={[628.257, -263.687, -312.935]}
          rotation={[0, 0, -0.486]}
          scale={[0.059, 0.17, 0.038]}
        />
        <mesh 
          geometry={nodes.Sphere050_Rain_0.geometry}
          material={materials.Rain}
          position={[-2.074, -226.638, -236.893]}
          rotation={[0, 0, -0.486]}
          scale={[0.039, 0.113, 0.025]}
        />
        <mesh
          geometry={nodes.Sphere051_Rain_0.geometry}
          material={materials.Rain}
          position={[2.988, -164.888, -115.894]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh
          geometry={nodes.Sphere052_Rain_0.geometry}
          material={materials.Rain}
          position={[343.746, -599.133, 121.856]}
          rotation={[0, 0, -0.486]}
          scale={[0.107, 0.169, 0.068]}
        />
        <mesh 
          geometry={nodes.Sphere053_Rain_0.geometry}
          material={materials.Rain}
          position={[935.818, -339.854, 240.944]}
          rotation={[0, 0, -0.486]}
          scale={[0.059, 0.17, 0.038]}
        />
        <mesh 
          geometry={nodes.Sphere054_Rain_0.geometry}
          material={materials.Rain}
          position={[928.918, -235.797, -199.163]}
          rotation={[0, 0, -0.486]}
          scale={[0.039, 0.113, 0.025]}
        />
        <mesh
          geometry={nodes.Sphere055_Rain_0.geometry}
          material={materials.Rain}
          position={[305.624, -573.243, 113.521]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh 
          geometry={nodes.Sphere056_Rain_0.geometry}
          material={materials.Rain}
          position={[209.779, -86.779, -220.515]}
          rotation={[0, 0, -0.486]}
          scale={[0.107, 0.169, 0.068]}
        />
        <mesh
          geometry={nodes.Sphere057_Rain_0.geometry}
          material={materials.Rain}
          position={[387.512, -135.645, -294.052]}
          rotation={[0, 0, -0.486]}
          scale={[0.059, 0.17, 0.038]}
        />
        <mesh
          geometry={nodes.Sphere058_Rain_0.geometry}
          material={materials.Rain}
          position={[350.322, -98.198, 212.032]}
          rotation={[0, 0, -0.486]}
          scale={[0.039, 0.113, 0.025]}
        />
        <mesh
          geometry={nodes.Sphere059_Rain_0.geometry}
          material={materials.Rain}
          position={[-21.823, -522.432, 118.904]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh
          geometry={nodes.Sphere060_Rain_0.geometry}
          material={materials.Rain}
          position={[22.982, -451.643, -246.585]}
          rotation={[0, 0, -0.486]}
          scale={[0.107, 0.169, 0.068]}
        />
        <mesh
          geometry={nodes.Sphere061_Rain_0.geometry}
          material={materials.Rain}
          position={[584.587, -20.674, 176.916]}
          rotation={[0, 0, -0.486]}
          scale={[0.059, 0.17, 0.038]}
        />
        <mesh
          geometry={nodes.Sphere063_Rain_0.geometry}
          material={materials.Rain}
          position={[154.132, -131.673, -289.814]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh
          
          
          geometry={nodes.Sphere064_Rain_0.geometry}
          material={materials.Rain}
          position={[523.822, -72.369, 219.579]}
          rotation={[0, 0, -0.486]}
          scale={[0.107, 0.169, 0.068]}
        />
        <mesh
          geometry={nodes.Sphere065_Rain_0.geometry}
          material={materials.Rain}
          position={[775.018, -128.05, -247.896]}
          rotation={[0, 0, -0.486]}
          scale={[0.059, 0.17, 0.038]}
        />
        <mesh
          geometry={nodes.Sphere066_Rain_0.geometry}
          material={materials.Rain}
          position={[534.267, -489.638, -104.082]}
          rotation={[0, 0, -0.486]}
          scale={[0.039, 0.113, 0.025]}
        />
        <mesh
          geometry={nodes.Sphere067_Rain_0.geometry}
          material={materials.Rain}
          position={[571.901, -152.744, 338.402]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh 
          geometry={nodes.Sphere068_Rain_0.geometry}
          material={materials.Rain}
          position={[725.832, -210.607, 330.419]}
          rotation={[0, 0, -0.486]}
          scale={[0.107, 0.169, 0.068]}
        />
        <mesh
          geometry={nodes.Sphere069_Rain_0.geometry}
          material={materials.Rain}
          position={[761.713, -437.39, -20.905]}
          rotation={[0, 0, -0.486]}
          scale={[0.059, 0.17, 0.038]}
        />
        <mesh
          geometry={nodes.Sphere070_Rain_0.geometry}
          material={materials.Rain}
          position={[298.248, -6.672, -203.521]}
          rotation={[0, 0, -0.486]}
          scale={[0.039, 0.113, 0.025]}
        />
        <mesh
          geometry={nodes.Sphere071_Rain_0.geometry}
          material={materials.Rain}
          position={[241.186, -454.444, -173.564]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh
          geometry={nodes.Sphere072_Rain_0.geometry}
          material={materials.Rain}
          position={[595.306, -428.862, -188.754]}
          rotation={[0, 0, -0.486]}
          scale={[0.107, 0.169, 0.068]}
        />
        <mesh
          geometry={nodes.Sphere073_Rain_0.geometry}
          material={materials.Rain}
          position={[683.125, -91.62, -282.075]}
          rotation={[0, 0, -0.486]}
          scale={[0.059, 0.17, 0.038]}
        />
        <mesh
          geometry={nodes.Sphere074_Rain_0.geometry}
          material={materials.Rain}
          position={[170.19, -180.836, -346.036]}
          rotation={[0, 0, -0.486]}
          scale={[0.039, 0.113, 0.025]}
        />
        <mesh
          geometry={nodes.Sphere075_Rain_0.geometry}
          material={materials.Rain}
          position={[521.154, -409.007, 198.082]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh
          geometry={nodes.Sphere076_Rain_0.geometry}
          material={materials.Rain}
          position={[-33.187, -369.381, -112.555]}
          rotation={[0, 0, -0.486]}
          scale={[0.107, 0.169, 0.068]}
        />
        <mesh
          geometry={nodes.Sphere082_Rain_0.geometry}
          material={materials.Rain}
          position={[333.572, -350.603, 242.191]}
          rotation={[0, 0, -0.486]}
          scale={[0.039, 0.113, 0.025]}
        />
        <mesh
          geometry={nodes.Sphere083_Rain_0.geometry}
          material={materials.Rain}
          position={[-68.146, -178.603, -164.051]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh
          geometry={nodes.Sphere084_Rain_0.geometry}
          material={materials.Rain}
          position={[-50.986, -32.06, 149]}
          rotation={[0, 0, -0.486]}
          scale={[0.107, 0.169, 0.068]}
        />
        <mesh
          geometry={nodes.Sphere087_Rain_0.geometry}
          material={materials.Rain}
          position={[-52.218, -315.906, 116.095]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh
          geometry={nodes.Sphere088_Rain_0.geometry}
          material={materials.Rain}
          position={[596.593, -351.513, 94.3]}
          rotation={[0, 0, -0.486]}
          scale={[0.107, 0.169, 0.068]}
        />
        <mesh
          geometry={nodes.Sphere091_Rain_0.geometry}
          material={materials.Rain}
          position={[371.302, -330.347, -166.727]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh
          geometry={nodes.Sphere094_Rain_0.geometry}
          material={materials.Rain}
          position={[611.951, -318.318, -110.524]}
          rotation={[0, 0, -0.486]}
          scale={[0.039, 0.113, 0.025]}
        />
        <mesh
          geometry={nodes.Sphere095_Rain_0.geometry}
          material={materials.Rain}
          position={[911.199, -3.873, -166.042]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh
          geometry={nodes.Sphere099_Rain_0.geometry}
          material={materials.Rain}
          position={[11.333, -57.775, 218.384]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh
          geometry={nodes.Sphere100_Rain_0.geometry}
          material={materials.Rain}
          position={[170.041, -65.169, 327.695]}
          rotation={[0, 0, -0.486]}
          scale={[0.107, 0.169, 0.068]}
        />
        <mesh
          geometry={nodes.Sphere103_Rain_0.geometry}
          material={materials.Rain}
          position={[820.353, -126.544, -254.274]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh 
          geometry={nodes.Sphere104_Rain_0.geometry}
          material={materials.Rain}
          position={[193.267, -246.67, -25.469]}
          rotation={[0, 0, -0.486]}
          scale={[0.107, 0.169, 0.068]}
        />
        <mesh
          geometry={nodes.Sphere107_Rain_0.geometry}
          material={materials.Rain}
          position={[287.46, -161.438, 271.476]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh
          geometry={nodes.Sphere108_Rain_0.geometry}
          material={materials.Rain}
          position={[597.908, -239.855, -133.492]}
          rotation={[0, 0, -0.486]}
          scale={[0.107, 0.169, 0.068]}
        />
        <mesh
          geometry={nodes.Sphere109_Rain_0.geometry}
          material={materials.Rain}
          position={[22.93, -96.689, 213.32]}
          rotation={[0, 0, -0.486]}
          scale={[0.059, 0.17, 0.038]}
        />
        <mesh
          geometry={nodes.Sphere110_Rain_0.geometry}
          material={materials.Rain}
          position={[201.788, -62.782, -333.104]}
          rotation={[0, 0, -0.486]}
          scale={[0.039, 0.113, 0.025]}
        />
        <mesh
          geometry={nodes.Sphere111_Rain_0.geometry}
          material={materials.Rain}
          position={[873.117, -89.502, 233.992]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh
          geometry={nodes.Sphere114_Rain_0.geometry}
          material={materials.Rain}
          position={[557.541, -163.86, 261.357]}
          rotation={[0, 0, -0.486]}
          scale={[0.039, 0.113, 0.025]}
        />
        <mesh
          geometry={nodes.Sphere116_Rain_0.geometry}
          material={materials.Rain}
          position={[738.437, -115.96, -240.06]}
          rotation={[0, 0, -0.486]}
          scale={[0.107, 0.169, 0.068]}
        />
        <mesh
          geometry={nodes.Sphere119_Rain_0.geometry}
          material={materials.Rain}
          position={[354.363, -167.216, -261.618]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh
          geometry={nodes.Sphere121_Rain_0.geometry}
          material={materials.Rain}
          position={[498.926, -181.657, -4.251]}
          rotation={[0, 0, -0.486]}
          scale={[0.059, 0.17, 0.038]}
        />
        <mesh
          geometry={nodes.Sphere124_Rain_0.geometry}
          material={materials.Rain}
          position={[8.134, 1.873, -233.589]}
          rotation={[0, 0, -0.486]}
          scale={[0.107, 0.169, 0.068]}
        />
        <mesh
          geometry={nodes.Sphere125_Rain_0.geometry}
          material={materials.Rain}
          position={[564.749, -95.976, -281.428]}
          rotation={[0, 0, -0.486]}
          scale={[0.059, 0.17, 0.038]}
        />
        <mesh
          geometry={nodes.Sphere127_Rain_0.geometry}
          material={materials.Rain}
          position={[529.847, -40.71, 296.46]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh
          geometry={nodes.Sphere128_Rain_0.geometry}
          material={materials.Rain}
          position={[194.063, -97.499, -263.819]}
          rotation={[0, 0, -0.486]}
          scale={[0.107, 0.169, 0.068]}
        />
        <mesh
          geometry={nodes.Sphere131_Rain_0.geometry}
          material={materials.Rain}
          position={[642.245, -160.467, -74.136]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh
          geometry={nodes.Sphere135_Rain_0.geometry}
          material={materials.Rain}
          position={[478.669, -133.16, -27.462]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh
          geometry={nodes.Sphere138_Rain_0.geometry}
          material={materials.Rain}
          position={[30.225, -123.129, 93.356]}
          rotation={[0, 0, -0.486]}
          scale={[0.039, 0.113, 0.025]}
        />
        <mesh
          geometry={nodes.Sphere143_Rain_0.geometry}
          material={materials.Rain}
          position={[187.037, -126.316, 68.826]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh
          geometry={nodes.Sphere148_Rain_0.geometry}
          material={materials.Rain}
          position={[261.793, -109.518, -119.357]}
          rotation={[0, 0, -0.486]}
          scale={[0.107, 0.169, 0.068]}
        />
        <mesh
          geometry={nodes.Sphere150_Rain_0.geometry}
          material={materials.Rain}
          position={[702.477, -57.223, -203.628]}
          rotation={[0, 0, -0.486]}
          scale={[0.039, 0.113, 0.025]}
        />
        <mesh
          geometry={nodes.Sphere151_Rain_0.geometry}
          material={materials.Rain}
          position={[45.023, -108.64, 10.189]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh
          geometry={nodes.Sphere155_Rain_0.geometry}
          material={materials.Rain}
          position={[237.207, -93.241, -1.098]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh
          geometry={nodes.Sphere157_Rain_0.geometry}
          material={materials.Rain}
          position={[355.022, -32.738, 259.423]}
          rotation={[0, 0, -0.486]}
          scale={[0.059, 0.17, 0.038]}
        />
        <mesh
          geometry={nodes.Sphere158_Rain_0.geometry}
          material={materials.Rain}
          position={[816.854, -52.087, -56.17]}
          rotation={[0, 0, -0.486]}
          scale={[0.039, 0.113, 0.025]}
        />
        <mesh
          geometry={nodes.Sphere159_Rain_0.geometry}
          material={materials.Rain}
          position={[605.107, -76.966, 202.031]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh
          geometry={nodes.Sphere160_Rain_0.geometry}
          material={materials.Rain}
          position={[805.205, -47.373, -139.967]}
          rotation={[0, 0, -0.486]}
          scale={[0.107, 0.169, 0.068]}
        />
        <mesh
          geometry={nodes.Sphere164_Rain_0.geometry}
          material={materials.Rain}
          position={[221.072, -70.156, -17.042]}
          rotation={[0, 0, -0.486]}
          scale={[0.107, 0.169, 0.068]}
        />
        <mesh
          geometry={nodes.Sphere168_Rain_0.geometry}
          material={materials.Rain}
          position={[731.676, 5.512, 233.07]}
          rotation={[0, 0, -0.486]}
          scale={[0.107, 0.169, 0.068]}
        />
        <mesh
          geometry={nodes.Sphere005_Rain_0.geometry}
          material={materials.Rain}
          position={[700.317, -376.01, 324.28]}
          rotation={[0, 0, -0.486]}
          scale={[0.107, 0.169, 0.068]}
        />
        <mesh
          geometry={nodes.Sphere006_Rain_0.geometry}
          material={materials.Rain}
          position={[355.095, -432.161, 324.28]}
          rotation={[0, 0, -0.486]}
          scale={[0.095, 0.152, 0.061]}
        />
        <mesh
          geometry={nodes.Sphere007_Rain_0.geometry}
          material={materials.Rain}
          position={[126.302, -526.307, 113.521]}
          rotation={[0, 0, -0.486]}
          scale={[0.079, 0.126, 0.051]}
        />
        <mesh
          geometry={nodes.Sphere008_Rain_0.geometry}
          material={materials.Rain}
          position={[226.297, -556.644, -357.075]}
          rotation={[0, 0, -0.486]}
          scale={[0.059, 0.17, 0.038]}
        />
      </group>
    </a.group>
  )
}

useGLTF.preload('/cloud_lightning.glb')

export default StormCloudScene
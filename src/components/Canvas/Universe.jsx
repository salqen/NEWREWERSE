import { Cloud, Environment, Float, useEnvironment } from "@react-three/drei";
import * as THREE from "three";
import "./styles.scss";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef } from "react";
import environment from "../../assets/environment/violet.hdr";
import { Asteroid2 } from "../Models/Asteroid";
import styled from "@emotion/styled";

const PageBody = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  position: absolute;
  height: auto;
  z-index: 99;
  margin: auto;
  color: white;
  opacity: 0.85;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  border-bottom: none;
`;

const InnerBody = () => {
  const CameraRef = useRef(null);
  const threeState = useThree();
  const envMap = useEnvironment({ files: environment });

  useFrame(() => {
    const ScrollPosition = document.body.getBoundingClientRect().top;
    threeState.camera.position.z = ScrollPosition * -0.0165;
    threeState.camera.lookAt(0, 0, 10000);
  });

  return (
    <>
      <Environment map={envMap} background={true} />
      <ambientLight intensity={0.4} color={"#5f25cb"} />
      <ambientLight intensity={0.2} color={"#ffffff"} />
      <Cloud
        position={[14, 10, -5]}
        speed={0.4}
        opacity={0.3}
        color="#7b1dbf"
        width={10}
        segments={20}
        depthTest={true}
        depth={1.5}
        texture="https://rawcdn.githack.com/pmndrs/drei-assets/9225a9f1fbd449d9411125c2f419b843d0308c9f/cloud.png"
      />
      <Cloud
        position={[0, 0, -4]}
        speed={0.4}
        opacity={0.3}
        color="#7b1dbf"
        width={5}
        segments={20}
        depthTest={true}
        depth={1.5}
        scale={1000}
        texture="https://rawcdn.githack.com/pmndrs/drei-assets/9225a9f1fbd449d9411125c2f419b843d0308c9f/cloud.png"
      />
      <Cloud
        position={[0, -6, -8]}
        speed={0.4}
        opacity={0.2}
        color="#7b1dbf"
        width={10}
        segments={20}
        depthTest={true}
        depth={1.5}
        texture="https://rawcdn.githack.com/pmndrs/drei-assets/9225a9f1fbd449d9411125c2f419b843d0308c9f/cloud.png"
      />
      <Cloud
        position={[0, 15, 4]}
        speed={0.4}
        opacity={0.3}
        color="#7b1dbf"
        width={10}
        segments={20}
        depthTest={true}
        depth={1.5}
        texture="https://rawcdn.githack.com/pmndrs/drei-assets/9225a9f1fbd449d9411125c2f419b843d0308c9f/cloud.png"
      />
      <Cloud
        position={[-20, 15, -10]}
        speed={0.4}
        opacity={0.2}
        color="#7b1dbf"
        width={10}
        segments={20}
        depthTest={true}
        depth={1.5}
        texture="https://rawcdn.githack.com/pmndrs/drei-assets/9225a9f1fbd449d9411125c2f419b843d0308c9f/cloud.png"
      />
      <Cloud
        position={[-25, -6, 10]}
        speed={0.4}
        opacity={0.3}
        color="#7b1dbf"
        width={10}
        segments={20}
        depthTest={true}
        depth={1.5}
        texture="https://rawcdn.githack.com/pmndrs/drei-assets/9225a9f1fbd449d9411125c2f419b843d0308c9f/cloud.png"
      />
      <spotLight
        intensity={0.6}
        angle={0.14}
        color="#9183b3"
        penumbra={0.5}
        position={[10, 50, -200]}
        shadow-mapSize={[2048, 2048]}
        castShadow
      />
      <spotLight
        intensity={0.1}
        angle={0.14}
        color="#fff"
        penumbra={0.5}
        position={[50, 50, -200]}
        shadow-mapSize={[2048, 2048]}
        castShadow
      />
      <spotLight
        intensity={0.25}
        angle={-0.4}
        color="#fff"
        penumbra={0.5}
        position={[50, 50, -200]}
        shadow-mapSize={[2048, 2048]}
        castShadow
      />
      <spotLight
        intensity={0.5}
        angle={0.14}
        color="#9183b3"
        penumbra={0.5}
        position={[10, 50, -45]}
        shadow-mapSize={[2048, 2048]}
        castShadow
      />
      {/* II.Vrstva */}
      <Float speed={2.1} floatIntensity={1.3}>
        <Asteroid2 position={[-40, 70, 80]} scale={15} />
      </Float>
      <Float speed={2.1} floatIntensity={1.3}>
        <Asteroid2 position={[18, 70, 80]} scale={3.5} />
      </Float>
      <Float speed={2.1} floatIntensity={1.3}>
        <Asteroid2 position={[8, 50, 80]} scale={3.1} />
      </Float>
      <Float speed={2.1} floatIntensity={1.3}>
        <Asteroid2 position={[-38, 70, 80]} scale={4.2} />
      </Float>
      <Float speed={2.1} floatIntensity={1.3}>
        <Asteroid2 position={[90, -60, 80]} scale={3} />
      </Float>
      <Float speed={2.1} floatIntensity={1.3}>
        <Asteroid2 position={[110, -45, 80]} scale={6} />
      </Float>
      <Float speed={2.1} floatIntensity={1.3}>
        <Asteroid2 position={[110, 45, 80]} scale={8} />
      </Float>
      <Float speed={1.5} floatIntensity={2.3}>
        <Asteroid2 position={[30, 8, 80]} scale={20} />
      </Float>
      <Float speed={1} rotationIntensity={2}>
        <Asteroid2 position={[-120, 0, 120]} scale={50} />
      </Float>
      {/* I.Vrstva */}
      <Float speed={1.6} floatIntensity={0.6}>
        <Asteroid2 position={[-40, -10, -12]} scale={18} />
      </Float>
      <Float speed={1.6} floatIntensity={0.6}>
        <Asteroid2 position={[-14, 35, 0]} scale={2.9} />
      </Float>
      <Float speed={1.6} floatIntensity={0.6}>
        <Asteroid2 position={[24, 25, 0]} scale={2.8} />
      </Float>
      <Float speed={1.6} floatIntensity={0.6}>
        <Asteroid2 position={[12, 45, 0]} scale={12} />
      </Float>
      <Float speed={1.6} floatIntensity={0.6}>
        <Asteroid2 position={[40, 22, 0]} scale={8} />
      </Float>
      <Float speed={1.6} floatIntensity={0.6}>
        <Asteroid2 position={[4, -40, 0]} scale={16} />
      </Float>
      <Float speed={1.6} floatIntensity={0.6}>
        <Asteroid2 position={[-35, 25, 0]} scale={3} />
      </Float>
      <Float speed={1.6} floatIntensity={0.6}>
        <Asteroid2 position={[-42, 15, 0]} scale={5} />
      </Float>
      <perspectiveCamera
        ref={CameraRef}
        fov={90}
        aspect={1.5}
        near={0.1}
        far={1000}
      />
      ;
    </>
  );
};

const Universe2 = (props) => {
  return (
    <>
      <PageBody>{props.content}</PageBody>

      <>
        <Suspense fallback={null}>
          <Canvas
            style={{
              position: "fixed",
            }}
          >
            <InnerBody />
          </Canvas>
        </Suspense>
      </>
    </>
  );
};

export default Universe2;

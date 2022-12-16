import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ScrollControls,
  useScroll,
  useGLTF,
  Scroll,
  useEnvironment,
  Environment,
  Float,
  Cloud,
} from "@react-three/drei";
import * as THREE from "three";
import environment from "../../assets/environment/violet.hdr";
import { Asteroid2 } from "../Models/Asteroid";
import asteroid1 from "../../assets/models/2_ast.glb";
import { useMediaQuery } from "@mui/material";

export default function UniverseCanvas(props) {
  const envMap = useEnvironment({ files: environment });
  let camera = new THREE.PerspectiveCamera(90, 1.5, 0.1, 1000);
  const [pages, setPages] = useState(14.15);
  const mediaXL = useMediaQuery("(max-width:2200px)");
  const mediaLG = useMediaQuery("(max-width:1300px)");
  const mediaSM = useMediaQuery("(max-width:900px)");
  const mediaXS = useMediaQuery("(max-width:600px)");
  useEffect(() => {
    if (mediaXL) {
      setPages(14.6);
    }
    if (mediaLG) {
      setPages(17.4);
    }
    if (mediaSM) {
      setPages(20.15);
    }
    if (mediaXS) {
      setPages(20.6);
    }
  }, [mediaXL, mediaLG, mediaSM, mediaXS]);

  return (
    <Canvas camera={camera} dpr={[1, 2]} shadows>
      <ambientLight intensity={0.4} color={"#5f25cb"} />
      <ambientLight intensity={0.05} color={"#ffffff"} />

      <Cloud
        position={[14, 8, -5]}
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
        position={[0, 0, 4]}
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
        position={[-25, -6, -15]}
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

      <Environment map={envMap} background={true} />
      <Suspense fallback={null}>
        {/* Wrap contents you want to scroll into <ScrollControls> */}
        <ScrollControls pages={pages} damping={25}>
          <Scroll
            id="scroll-area"
            html
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            {props.content}
          </Scroll>
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

          <Float speed={1.1} rotationIntensity={3} floatIntensity={0.001}>
            <CentralPoint scale={32} position={[55, -4, -15]} />
          </Float>
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}
function CentralPoint({ ...props }) {
  // This hook gives you offets, ranges and other useful things
  const scroll = useScroll();
  const { materials, nodes } = useGLTF(asteroid1);
  const group = useRef();
  useLayoutEffect(() =>
    Object.values(nodes).forEach(
      (node) => (node.receiveShadow = node.castShadow = true)
    )
  );

  useFrame((state, delta) => {
    // The offset is between 0 and 1, you can apply it to your models any way you like
    const offset = 1 - scroll.offset;
    state.camera.position.set(0, 0, Math.sin(offset) * -10 * 5);
    state.camera.lookAt(0, 0, 0);
  });
  return (
    <instancedMesh
      {...props}
      ref={group}
      args={[nodes.SM_AsteroidBarren_7.geometry, null, 2]}
      material={materials.MastBa}
    />
  );
}

useGLTF.preload(asteroid1);

/* camera={{ position: [0, 0, 0], near: 0.1, far: 500 }} */

/* const offset = 1 - scroll.offset;

    state.camera.position.set(
      Math.sin(offset) * -10,
      Math.atan(offset * Math.PI * 2) * 5,
      Math.cos((offset * Math.PI) / 3) * -4
    ); */

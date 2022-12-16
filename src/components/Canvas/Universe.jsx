import { Suspense, useLayoutEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ScrollControls,
  Stars,
  useScroll,
  useGLTF,
  Scroll,
} from "@react-three/drei";


export default function UniverseCanvas(props) {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ position: [0, 0, 5], near: 0.1, far: 1000 }}
    >
        <ScrollControls pages={17}>
          <Scroll
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
        </ScrollControls>
    </Canvas>
  );
}



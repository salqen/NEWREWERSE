import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import asteroid1 from "../../assets/models/1_ast.gltf";

export function Asteroid1(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(asteroid1);
  return (
    <group {...props} dispose={null} ref={group}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_AsteroidBarren_7.geometry}
        material={materials.MastBa}
        scale={[0.17, 0.23, 0.23]}
      />
    </group>
  );
}

useGLTF.preload(asteroid1);

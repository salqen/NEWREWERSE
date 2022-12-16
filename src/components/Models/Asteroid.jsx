import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import asteroid1 from "../../assets/models/2_ast.glb";

export function Asteroid2({ ...props }) {
  const group = useRef();
  const { materials, nodes } = useGLTF(asteroid1);
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

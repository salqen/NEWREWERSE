import { useGLTF } from "@react-three/drei";
import { useLayoutEffect } from "react";

import asteroid1 from "../../assets/models/asteroid_d.glb";

export function Asteroid3({ ...props }) {
  // This hook gives you offets, ranges and other useful things

  const { scene, nodes } = useGLTF(asteroid1);

  useLayoutEffect(() =>
    Object.values(nodes).forEach(
      (node) => (node.receiveShadow = node.castShadow = true)
    )
  );

  return <primitive object={scene} {...props} />;
}

useGLTF.preload(asteroid1);

/* export function Asteroid({ ...props }) {
  const model = useLoader(GLTFLoader, asteroid1);

  model.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
    }
  });
  return <primitive object={model.scene} {...props} />;
} */

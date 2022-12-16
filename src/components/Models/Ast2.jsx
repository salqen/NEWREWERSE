import { useGLTF } from "@react-three/drei";

import { useEffect } from "react";
import asteroid1 from "../../assets/models/asteroid_d.glb";

export function Asteroid2({ ...props }) {
  console.log(asteroid1);
  const { scene, ...rest } = useGLTF(asteroid1);

  useEffect(() => {
    scene.traverse((obj) => (obj.receiveShadow = obj.castShadow = true));
  }, [scene]);

  return <primitive object={scene} {...props} />;
}

/* export function Asteroid({ ...props }) {
  const model = useLoader(GLTFLoader, asteroid1);

  model.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
    }
  });
  return <primitive object={model.scene} {...props} />;
} */

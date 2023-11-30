/*
 * @Description: temp
 */

import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import { Suspense, useEffect, useRef, useState } from "react";
import Island from "../models/island";
import Sky from "../models/Sky";

function Home() {
  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;
    
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  return (
    <section className="w-full h-screen relative">
      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        pop
      </div> */}
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={1} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />
           <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            scale={islandScale}
            rotation={[0.1, 4.7077, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;

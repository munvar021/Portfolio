import React, { Suspense, useContext } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import FloatingShapes from "../floatingShapes";
import ParticleField from "../particleField";
import useIsMobile from "../../../hooks/useIsMobile";
import ThemeContext from "../../../contexts/ThemeContext";
import { StyledCanvas } from "./scene3DStyles";

const Scene3D = () => {
  const isMobile = useIsMobile();
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <StyledCanvas>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={isMobile ? [1, 1] : [1, 2]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={isDark ? 0.5 : 1.2} />
          <directionalLight position={[5, 5, 5]} intensity={isDark ? 1 : 2} />
          <pointLight
            position={[-5, -5, -5]}
            intensity={isDark ? 0.5 : 1}
            color="#2F80ED"
          />
          <FloatingShapes isDark={isDark} />
          <ParticleField count={isMobile ? 400 : 800} isDark={isDark} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </StyledCanvas>
  );
};

export default Scene3D;

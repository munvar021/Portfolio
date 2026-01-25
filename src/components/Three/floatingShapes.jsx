import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingShape = ({ position, color, speed, scale, isDark, shapeType, color2 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x += speed;
    meshRef.current.rotation.y += speed * 0.5;
    meshRef.current.rotation.z += speed * 0.3;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 2) * 0.3;
    
    // Animate color transition
    const t = (Math.sin(state.clock.elapsedTime * 0.5) + 1) / 2;
    const baseColor = new THREE.Color(color);
    const targetColor = new THREE.Color(color2);
    meshRef.current.material.color.lerpColors(baseColor, targetColor, t);
    meshRef.current.material.emissive.lerpColors(baseColor, targetColor, t * 0.3);
  });

  const renderGeometry = () => {
    switch (shapeType) {
      case 'cube':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'pyramid':
        return <coneGeometry args={[0.7, 1.2, 4]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1, 0]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {renderGeometry()}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={isDark ? 0.3 : 0.6}
        transparent
        opacity={isDark ? 0.8 : 0.9}
        roughness={0.3}
        metalness={0.7}
      />
    </mesh>
  );
};

const FloatingShapes = ({ isDark }) => {
  return (
    <>
      <FloatingShape position={[-2, 1, -2]} color="#6FCF97" color2="#34C759" speed={0.01} scale={0.8} isDark={isDark} shapeType="cube" />
      <FloatingShape position={[2, -1, -3]} color="#2F80ED" color2="#007AFF" speed={0.008} scale={1} isDark={isDark} shapeType="pyramid" />
      <FloatingShape position={[0, 2, -4]} color="#6FCF97" color2="#2F80ED" speed={0.012} scale={0.6} isDark={isDark} shapeType="octahedron" />
      <FloatingShape position={[-3, -2, -5]} color="#007AFF" color2="#2F80ED" speed={0.009} scale={0.7} isDark={isDark} shapeType="cube" />
    </>
  );
};

export default FloatingShapes;

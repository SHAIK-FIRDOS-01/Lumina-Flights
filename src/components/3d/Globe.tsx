"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Globe() {
  const globeRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);

  // Rotate the globe slowly
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (globeRef.current) {
      globeRef.current.rotation.y = t * 0.05;
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y = t * 0.05;
    }
  });

  return (
    <group>
      {/* Base Dark Sphere */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial 
          color="#060b19" 
          roughness={0.7} 
          metalness={0.2} 
        />
      </mesh>

      {/* Wireframe overlay for futuristic look */}
      <mesh>
        <sphereGeometry args={[2.001, 32, 32]} />
        <meshBasicMaterial 
          color="#1e3a8a" 
          wireframe={true} 
          transparent={true} 
          opacity={0.15} 
        />
      </mesh>

      {/* Atmosphere Glow */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[2.2, 64, 64]} />
        <meshBasicMaterial 
          color="#3b82f6" 
          transparent={true} 
          opacity={0.05} 
          side={THREE.BackSide} 
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

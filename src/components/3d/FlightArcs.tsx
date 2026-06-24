"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Line } from "@react-three/drei";

// Utility to convert lat/long to 3D coordinates on a sphere of radius R
function getCoordinates(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

// Generate a random curve between two points
function createFlightPath(start: THREE.Vector3, end: THREE.Vector3) {
  const distance = start.distanceTo(end);
  const midPoint = start.clone().lerp(end, 0.5);
  // Elevate the midpoint based on distance
  midPoint.normalize().multiplyScalar(2 + distance * 0.3);

  const curve = new THREE.QuadraticBezierCurve3(start, midPoint, end);
  return curve.getPoints(50);
}

export function FlightArcs() {
  const groupRef = useRef<THREE.Group>(null);

  const arcs = useMemo(() => {
    const generatedArcs = [];
    // Generate some random cities to fly between
    for (let i = 0; i < 15; i++) {
      const lat1 = (Math.random() - 0.5) * 140;
      const lng1 = (Math.random() - 0.5) * 360;
      const lat2 = (Math.random() - 0.5) * 140;
      const lng2 = (Math.random() - 0.5) * 360;

      const start = getCoordinates(lat1, lng1, 2.01);
      const end = getCoordinates(lat2, lng2, 2.01);

      generatedArcs.push(createFlightPath(start, end));
    }
    return generatedArcs;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      // Rotate the flight arcs with the globe
      groupRef.current.rotation.y = t * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {arcs.map((points, i) => (
        <Line
          key={i}
          points={points}
          color="#38bdf8" // Cyan color for premium tech feel
          lineWidth={1.5}
          transparent
          opacity={0.6}
        />
      ))}
    </group>
  );
}

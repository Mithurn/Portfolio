import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function ArcReactorCore() {
  const group = useRef<THREE.Group>(null);
  useFrame((_state, _delta) => {
    if (group.current) {
      group.current.rotation.z += 0.01;
    }
  });
  return (
    <group ref={group}>
      {/* Central bright core */}
      <mesh>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial emissive="#9CE5E7" emissiveIntensity={2.5} color="#B2DFDB" metalness={0.8} roughness={0.1} />
      </mesh>
      {/* Inner glassy disc */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.28, 0.28, 0.05, 64]} />
        <meshPhysicalMaterial color="#9CE5E7" transparent opacity={0.18} roughness={0.2} metalness={0.7} clearcoat={1} clearcoatRoughness={0.1} />
      </mesh>
      {/* Glowing ring 1 */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.38, 0.03, 32, 128]} />
        <meshBasicMaterial color="#9CE5E7" transparent opacity={0.5} />
      </mesh>
      {/* Glowing ring 2 */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.52, 0.015, 32, 128]} />
        <meshBasicMaterial color="#7DD3D6" transparent opacity={0.35} />
      </mesh>
      {/* Outer glassy ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.7, 0.04, 32, 128]} />
        <meshBasicMaterial color="#9CE5E7" transparent opacity={0.13} />
      </mesh>
      {/* Radial spokes */}
      {[...Array(12)].map((_, i) => (
        <mesh key={i} rotation={[0, 0, (i * Math.PI) / 6]} position={[0, 0, 0]}>
          <cylinderGeometry args={[0.008, 0.008, 0.7, 8]} />
          <meshBasicMaterial color="#9CE5E7" transparent opacity={0.18} />
        </mesh>
      ))}
      {/* Animated energy ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.03]}>
        <torusGeometry args={[0.6, 0.01, 32, 128]} />
        <meshBasicMaterial color="#9CE5E7" transparent opacity={0.25} />
      </mesh>
    </group>
  );
}

function HudRings() {
  // Render several animated outer rings
  const group = useRef<THREE.Group>(null);
  useFrame((_state, _delta) => {
    if (group.current) {
      group.current.rotation.z -= 0.003;
    }
  });
  return (
    <group ref={group}>
      {[1.1, 1.3, 1.5].map((r, i) => (
        <mesh rotation={[0, 0, (i * Math.PI) / 8]} key={i}>
          <torusGeometry args={[r, 0.01 + i * 0.01, 64, 128]} />
          <meshBasicMaterial color={i % 2 === 0 ? '#9CE5E7' : '#7DD3D6'} transparent opacity={0.18 - i * 0.03} />
        </mesh>
      ))}
    </group>
  );
}

export default function JarvisHologram() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [0, 0, 4], fov: 40 }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[0, 0, 5]} intensity={1.2} color={'#9CE5E7'} />
        <ArcReactorCore />
        <HudRings />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.7} />
      </Canvas>
    </div>
  );
} 
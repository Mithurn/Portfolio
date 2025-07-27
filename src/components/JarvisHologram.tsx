import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Text, Float } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
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
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial 
          emissive="#9CE5E7" 
          emissiveIntensity={2.0} 
          color="#B2DFDB" 
          metalness={0.8} 
          roughness={0.1} 
        />
      </mesh>
      
      {/* Simple ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.4, 0.02, 32, 128]} />
        <meshBasicMaterial color="#9CE5E7" />
      </mesh>
      
      {/* Outer ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.6, 0.015, 32, 128]} />
        <meshBasicMaterial color="#7DD3D6" />
      </mesh>
    </group>
  );
}

function HudRings() {
  const group = useRef<THREE.Group>(null);
  
  useFrame((_state, _delta) => {
    if (group.current) {
      group.current.rotation.z -= 0.003;
    }
  });
  
  return (
    <group ref={group}>
      {/* Simple outer rings */}
      {[1.1, 1.3, 1.5].map((r, i) => (
        <mesh rotation={[0, 0, (i * Math.PI) / 8]} key={i}>
          <torusGeometry args={[r, 0.01, 64, 128]} />
          <meshBasicMaterial 
            color={i % 2 === 0 ? '#9CE5E7' : '#7DD3D6'} 
            transparent 
            opacity={0.3} 
          />
        </mesh>
      ))}
    </group>
  );
}

function FloatingText() {
  const [time, setTime] = useState(0);
  
  useFrame((_state, delta) => {
    setTime(prev => prev + delta);
  });
  
  return (
    <group>
      {/* Simple floating spheres instead of text for now */}
      <mesh position={[0, 1.8, 0]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color="#9CE5E7" />
      </mesh>
      
      {/* System status indicators as spheres */}
      {['AI', 'ML', 'WEB', 'DEV'].map((text, i) => (
        <mesh 
          key={text}
          position={[
            Math.sin(time * 0.2 + i) * 1.6,
            Math.cos(time * 0.3 + i) * 1.6,
            0.1
          ]}
        >
          <sphereGeometry args={[0.03, 12, 12]} />
          <meshBasicMaterial color="#7DD3D6" />
        </mesh>
      ))}
    </group>
  );
}

export default function JarvisHologram() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'transparent' }}>
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        {/* Basic lighting */}
        <ambientLight intensity={0.8} />
        <pointLight position={[0, 0, 5]} intensity={1.0} color={'#9CE5E7'} />
        
        {/* Main components */}
        <ArcReactorCore />
        <HudRings />
        <FloatingText />
        
        {/* Simple camera controls */}
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
} 
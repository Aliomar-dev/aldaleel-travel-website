// src/components/TravelScene.jsx

import { Canvas } from "@react-three/fiber";
import { Float, Environment, OrbitControls } from "@react-three/drei";

const Airplane = () => {
  return (
    <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <group rotation={[0.15, -0.7, 0.12]} scale={1.25}>
        {/* Body */}
        <mesh>
          <capsuleGeometry args={[0.28, 2.7, 16, 32]} />
          <meshStandardMaterial color="#ffffff" metalness={0.25} roughness={0.28} />
        </mesh>

        {/* Nose */}
        <mesh position={[0, 1.55, 0]} scale={[0.7, 0.7, 0.7]}>
          <sphereGeometry args={[0.34, 32, 32]} />
          <meshStandardMaterial color="#f8fafc" metalness={0.2} roughness={0.25} />
        </mesh>

        {/* Main Wings */}
        <mesh position={[0, 0.05, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[2.7, 0.08, 0.55]} />
          <meshStandardMaterial color="#2563eb" metalness={0.18} roughness={0.35} />
        </mesh>

        {/* Tail Wing */}
        <mesh position={[0, -1.15, 0]} scale={[0.65, 1, 0.6]}>
          <boxGeometry args={[1.5, 0.08, 0.4]} />
          <meshStandardMaterial color="#0f766e" metalness={0.18} roughness={0.35} />
        </mesh>

        {/* Vertical Tail */}
        <mesh position={[0, -1.25, 0.35]} rotation={[0.2, 0, 0]}>
          <boxGeometry args={[0.18, 0.55, 0.85]} />
          <meshStandardMaterial color="#0f766e" metalness={0.18} roughness={0.35} />
        </mesh>

        {/* Windows */}
        {[-0.7, -0.35, 0, 0.35, 0.7].map((y) => (
          <mesh key={y} position={[0.29, y, 0.18]} scale={[1, 1, 1]}>
            <sphereGeometry args={[0.055, 16, 16]} />
            <meshStandardMaterial color="#071a2c" roughness={0.1} />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

const Globe = () => {
  return (
    <Float speed={1.5} rotationIntensity={0.25} floatIntensity={0.6}>
      <group position={[1.5, -1.05, -0.7]} scale={0.65}>
        <mesh>
          <sphereGeometry args={[1, 48, 48]} />
          <meshStandardMaterial color="#2563eb" metalness={0.15} roughness={0.35} />
        </mesh>

        <mesh scale={1.015}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#0f766e"
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>
      </group>
    </Float>
  );
};

const TravelScene = () => {
  return (
    <div className="h-[430px] w-full md:h-[540px]">
      <Canvas camera={{ position: [0, 0.2, 6], fov: 45 }}>
        <ambientLight intensity={1.4} />
        <directionalLight position={[4, 6, 5]} intensity={1.8} />
        <pointLight position={[-4, -2, 4]} intensity={1.4} />

        <Airplane />
        <Globe />

        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.7} />
      </Canvas>
    </div>
  );
};

export default TravelScene;
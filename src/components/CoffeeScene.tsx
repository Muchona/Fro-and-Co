import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, ContactShadows, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { MotionValue } from 'framer-motion';

// --- Textures ---
const USER_TEXTURE_PATH = '/sequence/ezgif-frame-001.jpg'; // Start frame often has better label visibility

// --- Materials ---
const HologramMaterial = new THREE.MeshBasicMaterial({
    color: "#C4A484", wireframe: true, transparent: true, opacity: 0.3
});
const LidMaterial = new THREE.MeshStandardMaterial({ color: "#1A1A1A", roughness: 0.5 });
const LiquidMaterial = new THREE.MeshPhysicalMaterial({
    color: "#3E2723", roughness: 0.1, metalness: 0.2, clearcoat: 1
});
const RimMaterial = new THREE.MeshStandardMaterial({ color: "#F5F5F1", roughness: 0.8 });
const SleeveMaterial = new THREE.MeshStandardMaterial({ color: "#3e2723", roughness: 0.9 });


// --- Component: Assembly Part ---
function AssemblyPart({
    progress, startPos, startRot, geometry, material, texture
}: {
    progress: number, startPos: any, startRot: any, geometry: any, material?: any, texture?: THREE.Texture
}) {
    const meshRef = useRef<THREE.Mesh>(null);
    const [isSolid, setIsSolid] = useState(false);

    useFrame(() => {
        if (!meshRef.current) return;

        // Fly-In Logic
        const flyProgress = Math.min(1, progress / 0.8);
        const solidifyProgress = Math.max(0, (progress - 0.8) / 0.2);

        meshRef.current.position.set(
            THREE.MathUtils.lerp(startPos[0], 0, flyProgress),
            THREE.MathUtils.lerp(startPos[1], 0, flyProgress),
            THREE.MathUtils.lerp(startPos[2], 0, flyProgress)
        );
        meshRef.current.rotation.set(
            THREE.MathUtils.lerp(startRot[0], 0, flyProgress),
            THREE.MathUtils.lerp(startRot[1], 0, flyProgress),
            THREE.MathUtils.lerp(startRot[2], 0, flyProgress)
        );

        if (flyProgress > 0.95 && !isSolid) setIsSolid(true);
        if (flyProgress < 0.95 && isSolid) setIsSolid(false);

        // Pulse
        if (isSolid) {
            const scale = 1 + Math.sin(solidifyProgress * Math.PI) * 0.05;
            meshRef.current.scale.setScalar(scale);
        } else {
            meshRef.current.scale.setScalar(1);
        }
    });

    // Material Logic
    const solidMat = texture
        ? new THREE.MeshStandardMaterial({ map: texture, roughness: 0.4 })
        : material;

    return <mesh ref={meshRef} geometry={geometry} material={isSolid ? solidMat : HologramMaterial} />;
}

// --- Geometries ---
const cupGeo = new THREE.CylinderGeometry(0.8, 0.6, 2, 32);
// Rotate texture mapping?
// cylinder UVs wrap around. 

const rimGeo = new THREE.TorusGeometry(0.8, 0.05, 16, 32);
rimGeo.translate(0, 1.05, 0);

const sleeveGeo = new THREE.CylinderGeometry(0.8, 0.65, 1, 32);
sleeveGeo.scale(1.02, 1, 1.02);

const lidTopGeo = new THREE.CylinderGeometry(0.82, 0.85, 0.1, 32);
lidTopGeo.translate(0, 1.15, 0);

const liquidGeo = new THREE.CircleGeometry(0.7, 32);
liquidGeo.rotateX(-Math.PI / 2);
liquidGeo.translate(0, 0.8, 0);


export default function CoffeeScene({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
    const progressRef = useRef(0);
    const brandTexture = useTexture(USER_TEXTURE_PATH);

    // Fix Texture Orientation
    brandTexture.center.set(0.5, 0.5);
    // brandTexture.rotation = Math.PI; // Flip if upside down

    useFrame((state) => {
        progressRef.current = scrollProgress.get();
        state.camera.lookAt(0, 0, 0);
        // Spin camera slightly for cinematic effect
        state.camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.5;
    });

    return (
        <>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={2} castShadow color="#ffd700" />
            <pointLight position={[-10, 5, -5]} intensity={1} color="#C4A484" />

            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[0, 0.2]}>
                <group rotation={[0.1, 0, 0]}>

                    {/* 1. Cup Body (Textured with User Image) */}
                    <AssemblyPart
                        progress={progressRef.current}
                        startPos={[0, -5, 0]} startRot={[0, Math.PI, 0]}
                        geometry={cupGeo}
                        texture={brandTexture}
                    />

                    {/* 2. Rim */}
                    <AssemblyPart
                        progress={progressRef.current}
                        startPos={[0, 5, 0]} startRot={[Math.PI, 0, 0]}
                        geometry={rimGeo}
                        material={RimMaterial}
                    />

                    {/* 3. Sleeve */}
                    <AssemblyPart
                        progress={progressRef.current}
                        startPos={[-3, 0, 2]} startRot={[0, 0, Math.PI / 2]}
                        geometry={sleeveGeo}
                        material={SleeveMaterial}
                    />

                    {/* 4. Lid */}
                    <AssemblyPart
                        progress={progressRef.current}
                        startPos={[3, 3, 0]} startRot={[0.5, 0.5, 0]}
                        geometry={lidTopGeo}
                        material={LidMaterial}
                    />

                    {/* 5. Liquid */}
                    <AssemblyPart
                        progress={progressRef.current}
                        startPos={[0, 0, 0]} startRot={[0, 0, 0]}
                        geometry={liquidGeo}
                        material={LiquidMaterial}
                    />
                </group>
            </Float>

            {/* Tech Particles */}
            <points>
                <sphereGeometry args={[4, 32, 32]} />
                <pointsMaterial color="#C4A484" size={0.02} transparent opacity={0.2} />
            </points>

            <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
        </>
    );
}

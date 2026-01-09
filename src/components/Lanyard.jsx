import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useSphericalJoint, RigidBody, Physics } from '@react-three/rapier';
import { Html, Environment, CatmullRomLine } from '@react-three/drei';
import CardContent from './CardContent';

function Band() {
    const fixed = useRef();
    const j1 = useRef();
    const j2 = useRef();
    const j3 = useRef();
    const card = useRef();

    useSphericalJoint(fixed, j1, [[0, 0, 0], [0, 1, 0]]);
    useSphericalJoint(j1, j2, [[0, -1, 0], [0, 1, 0]]);
    useSphericalJoint(j2, j3, [[0, -1, 0], [0, 1, 0]]);
    useSphericalJoint(j3, card, [[0, -1, 0], [0, 1.45, 0]]);

    const [dragged, setDragged] = useState(null);
    const [curvePoints, setCurvePoints] = useState([
        new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()
    ]);

    const { size, viewport } = useThree();

    useFrame((state) => {
        if (dragged) {
            const vec = new THREE.Vector3(state.pointer.x, state.pointer.y, 0.5);
            vec.unproject(state.camera);
            const dir = vec.clone().sub(state.camera.position).normalize();
            vec.add(dir.multiplyScalar(state.camera.position.length()));

            // Wake up physics
            [card, j1, j2, j3].forEach((ref) => ref.current?.wakeUp());

            // Translate card to follow mouse somewhat directly for control
            // But purely kinematic translation breaks physics joints sometimes.
            // Better to use setNextKinematicTranslation on a kinematic body, OR apply impulse.
            // For this 'lanyard' effect, we often convert the body to kinematic while dragging or just use high impulse.
            // Let's try impulsing/translating towards mouse.
            card.current?.setNextKinematicTranslation({
                x: vec.x - dragged.x,
                y: vec.y - dragged.y,
                z: vec.z - dragged.z
            });
        }

        // Update curve points for the visual line
        if (fixed.current && j1.current && j2.current && j3.current && card.current) {
            setCurvePoints([
                fixed.current.translation(),
                j1.current.translation(),
                j2.current.translation(),
                j3.current.translation(),
                card.current.translation()
            ].map(p => new THREE.Vector3(p.x, p.y, p.z)));
        }
    });

    return (
        <>
            <group position={[0, 4, 0]}>
                <RigidBody ref={fixed} type="fixed" />
                <RigidBody ref={j1} position={[0, -1, 0]} linearDamping={4} angularDamping={4} colliders={false}>
                    <mesh visible={false}><sphereGeometry args={[0.1]} /></mesh>
                </RigidBody>
                <RigidBody ref={j2} position={[0, -2, 0]} linearDamping={4} angularDamping={4} colliders={false}>
                    <mesh visible={false}><sphereGeometry args={[0.1]} /></mesh>
                </RigidBody>
                <RigidBody ref={j3} position={[0, -3, 0]} linearDamping={4} angularDamping={4} colliders={false}>
                    <mesh visible={false}><sphereGeometry args={[0.1]} /></mesh>
                </RigidBody>

                {/* The Card Body */}
                {/* Switch type to kinematicPosition when dragging for direct control, dynamic otherwise */}
                <RigidBody
                    ref={card}
                    position={[0, -4.5, 0]}
                    type={dragged ? "kinematicPosition" : "dynamic"}
                    colliders="hull" // Use hull for box approximation
                    linearDamping={2}
                    angularDamping={2}
                >
                    <mesh
                        onPointerDown={(e) => {
                            // e.stopPropagation(); // Standard R3F event
                            e.target.setPointerCapture(e.pointerId);
                            // Calculate offset from center of card to click point to maintain relative position
                            const translation = card.current.translation();
                            const point = e.point;
                            setDragged(new THREE.Vector3(point.x - translation.x, point.y - translation.y, point.z - translation.z));
                        }}
                        onPointerUp={(e) => {
                            // e.stopPropagation();
                            e.target.releasePointerCapture(e.pointerId);
                            setDragged(null);
                        }}
                        onPointerLeave={() => setDragged(null)} // Safety release
                    >
                        {/* Invisible hit box for dragging */}
                        <boxGeometry args={[2.5, 3.5, 0.1]} />
                        <meshStandardMaterial transparent opacity={0} />

                        {/* The react content */}
                        <Html
                            transform
                            wrapperClass="html-card"
                            distanceFactor={3}
                            position={[0, 0, 0]}
                            style={{ pointerEvents: 'none' }} // Let clicks pass through Html to the mesh? 
                        // Actually, if we want links to work, we need pointerEvents: 'auto'. 
                        // But if pointerEvents is auto, it might capture the drag click.
                        // The 'drag' on the mesh should probably happen on the border or " lanyard holder" part, 
                        // or we handle drag on the whole thing but check if a link was clicked.
                        // For now, let's keep interactions simple.
                        >
                            <CardContent />
                        </Html>
                    </mesh>
                </RigidBody>
            </group>

            {/* Visual Rope */}
            <CatmullRomLine
                points={curvePoints}
                color="#a5b4fc"
                lineWidth={3}
                segments={20}
            />
        </>
    )
}

const Lanyard = () => {
    return (
        <div className="w-full h-full absolute top-0 left-0 z-[100]">
            <Canvas camera={{ position: [0, 0, 15], fov: 20 }}>
                <ambientLight intensity={Math.PI / 2} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Physics gravity={[0, -40, 0]} interpolation={true} timeStep={1 / 60}>
                    <Band />
                </Physics>
                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

export default Lanyard;

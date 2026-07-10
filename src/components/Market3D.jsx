import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { market } from '../content'
import { FadeUp } from './Bits'

/* ============================================================
   THE 3D SECTION (Three.js via react-three-fiber)

   Think of it like a tiny film set:
   - <Canvas>  = the camera + stage
   - lights    = studio lamps
   - meshes    = the props (our "ingredients")
   - <Float>   = a hand gently bobbing each prop up and down
   - <Rig>     = the whole set leans toward your mouse
   ============================================================ */

// Glossy, candy-like surface used by every ingredient
function Candy({ color }) {
  return (
    <meshPhysicalMaterial
      color={color}
      roughness={0.22}
      clearcoat={1}
      clearcoatRoughness={0.12}
    />
  )
}

/* A cherry = 2 red balls + 2 green stems (tubes bent along a curve)
   that meet at the top, plus a tiny leaf. */
function Cherries(props) {
  const stemA = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0.35, 0),
        new THREE.Vector3(0.12, 1.0, 0.05),
        new THREE.Vector3(0.4, 1.55, 0),
      ]),
    [],
  )
  const stemB = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.8, 0.3, 0.1),
        new THREE.Vector3(0.62, 1.0, 0.05),
        new THREE.Vector3(0.4, 1.55, 0),
      ]),
    [],
  )

  return (
    <group {...props}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.55, 48, 48]} />
        <Candy color="#e21f0f" />
      </mesh>
      <mesh position={[0.8, -0.05, 0.1]}>
        <sphereGeometry args={[0.48, 48, 48]} />
        <Candy color="#c81607" />
      </mesh>
      <mesh>
        <tubeGeometry args={[stemA, 20, 0.045, 8, false]} />
        <meshStandardMaterial color="#2e8b57" roughness={0.55} />
      </mesh>
      <mesh>
        <tubeGeometry args={[stemB, 20, 0.045, 8, false]} />
        <meshStandardMaterial color="#2e8b57" roughness={0.55} />
      </mesh>
      {/* leaf = a very squashed ball */}
      <mesh position={[0.55, 1.6, 0]} rotation={[0.2, 0, 0.5]} scale={[0.32, 0.07, 0.16]}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshStandardMaterial color="#2e8b57" roughness={0.5} />
      </mesh>
    </group>
  )
}

// A chili = a stretched capsule with a little green stem
function Chili(props) {
  return (
    <group {...props}>
      <mesh rotation={[0, 0, -0.9]} scale={[1, 1.15, 1]}>
        <capsuleGeometry args={[0.32, 1.5, 8, 24]} />
        <Candy color="#f43a17" />
      </mesh>
      <mesh position={[0.75, 0.95, 0]} rotation={[0, 0, -0.9]}>
        <cylinderGeometry args={[0.07, 0.11, 0.45, 12]} />
        <meshStandardMaterial color="#2e8b57" roughness={0.55} />
      </mesh>
    </group>
  )
}

// A lemon = a ball squashed into an oval, with two tiny tips
function Lemon(props) {
  return (
    <group {...props}>
      <mesh scale={[1.15, 0.78, 0.78]}>
        <sphereGeometry args={[0.7, 48, 48]} />
        <Candy color="#ffd23f" />
      </mesh>
      <mesh position={[0.85, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.12, 0.22, 16]} />
        <Candy color="#ffd23f" />
      </mesh>
      <mesh position={[-0.85, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.12, 0.22, 16]} />
        <Candy color="#ffd23f" />
      </mesh>
    </group>
  )
}

// Abstract "rigatoni" ring in mango
function Rigatoni(props) {
  return (
    <mesh {...props}>
      <torusGeometry args={[0.7, 0.3, 24, 64]} />
      <Candy color="#ffb01f" />
    </mesh>
  )
}

// Little peas for extra life
function Pea(props) {
  return (
    <mesh {...props}>
      <sphereGeometry args={[0.28, 32, 32]} />
      <Candy color="#3fae6d" />
    </mesh>
  )
}

/* The whole set gently leans toward the mouse.
   Every frame we move a small step (lerp) toward the target angle,
   which is what makes it feel smooth instead of twitchy. */
function Rig({ children }) {
  const ref = useRef()
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      state.pointer.x * 0.28,
      0.05,
    )
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      -state.pointer.y * 0.18,
      0.05,
    )
  })
  return <group ref={ref}>{children}</group>
}

export default function Market3D() {
  return (
    <section className="relative min-h-[95svh] overflow-hidden bg-plum">
      {/* The 3D stage fills the whole section, behind the words */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 8.5], fov: 45 }} dpr={[1, 1.75]}>
          <fog attach="fog" args={['#21101f', 9, 17]} />
          <ambientLight intensity={0.9} />
          <directionalLight position={[5, 8, 5]} intensity={1.6} />
          <directionalLight position={[-6, -3, -4]} intensity={0.7} color="#ffb01f" />
          <pointLight position={[-4, 2, 5]} intensity={40} color="#ff5a3c" />

          <Rig>
            <Float speed={1.6} rotationIntensity={0.7} floatIntensity={1.3}>
              <Cherries position={[2.5, 0.4, 0]} rotation={[0.1, -0.4, 0.15]} />
            </Float>
            <Float speed={1.2} rotationIntensity={1} floatIntensity={1.6}>
              <Rigatoni position={[-2.9, 1.5, -1.2]} rotation={[0.9, 0.4, 0]} />
            </Float>
            <Float speed={1.9} rotationIntensity={0.8} floatIntensity={1.2}>
              <Chili position={[-1.6, -1.5, 0.4]} />
            </Float>
            <Float speed={1.4} rotationIntensity={0.9} floatIntensity={1.4}>
              <Lemon position={[3.1, -1.8, -1.4]} rotation={[0.3, 0.5, 0.4]} />
            </Float>
            <Float speed={2.2} rotationIntensity={0.5} floatIntensity={1.8}>
              <Pea position={[0.4, 2.4, -1.5]} />
            </Float>
            <Float speed={2.4} rotationIntensity={0.5} floatIntensity={1.8}>
              <Pea position={[0.9, -2.5, -0.5]} />
            </Float>
          </Rig>
        </Canvas>
      </div>

      {/* The words sit on top. pointer-events-none lets your mouse
          "pass through" the text so the 3D scene still reacts. */}
      <div className="pointer-events-none relative z-10 mx-auto flex min-h-[95svh] max-w-7xl flex-col justify-center px-5 py-24 md:px-10">
        <div className="max-w-xl">
          <FadeUp>
            <span className="inline-block rounded-full bg-mango px-4 py-2 font-mono text-[10px] font-bold tracking-[0.2em] text-plum uppercase">
              DU MARCHÉ
            </span>
          </FadeUp>
          {market.headline.map((line, i) => (
            <FadeUp key={line} delay={0.1 + i * 0.08}>
              <h2 className="display mt-4 text-4xl text-creme first:mt-8 md:text-6xl">{line}</h2>
            </FadeUp>
          ))}
          <FadeUp delay={0.3}>
            <p className="mt-6 max-w-md text-creme/75 md:text-lg">{market.sub}</p>
          </FadeUp>
          <FadeUp delay={0.4}>
            <ul className="mt-8 flex flex-wrap gap-3">
              {market.points.map((point) => (
                <li
                  key={point}
                  className="rounded-full border border-creme/25 px-4 py-2 font-mono text-[10px] tracking-widest text-creme uppercase"
                >
                  {point}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

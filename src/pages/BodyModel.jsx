import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Text, Html } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Info, X } from 'lucide-react'
import { exercises } from '../data/mockData'

// Muscle groups with 3D positions on a simplified body
const muscleGroups = [
  { id: 'pecs', name: 'Pectoraux', position: [0, 0.8, 0.7], color: '#F5C518', exercises: ['Développé couché barre', 'Pompes', 'Développé incliné haltères'] },
  { id: 'lats', name: 'Grand dorsal', position: [-0.7, 0.5, -0.4], color: '#F5C518', exercises: ['Tractions', 'Rowing barre', 'Tirage horizontal câble'] },
  { id: 'lats2', name: 'Grand dorsal', position: [0.7, 0.5, -0.4], color: '#F5C518', exercises: ['Tractions', 'Rowing barre', 'Tirage horizontal câble'] },
  { id: 'quads', name: 'Quadriceps', position: [-0.3, -0.8, 0.5], color: '#60a5fa', exercises: ['Squat barre', 'Leg press', 'Squat gobelet'] },
  { id: 'quads2', name: 'Quadriceps', position: [0.3, -0.8, 0.5], color: '#60a5fa', exercises: ['Squat barre', 'Leg press', 'Squat gobelet'] },
  { id: 'shoulders', name: 'Épaules', position: [-1.0, 1.1, 0.1], color: '#c084fc', exercises: ['Développé militaire', 'Élévations latérales'] },
  { id: 'shoulders2', name: 'Épaules', position: [1.0, 1.1, 0.1], color: '#c084fc', exercises: ['Développé militaire', 'Élévations latérales'] },
  { id: 'biceps', name: 'Biceps', position: [-1.15, 0.7, 0.2], color: '#4ade80', exercises: ['Curl haltères', 'Tractions'] },
  { id: 'biceps2', name: 'Biceps', position: [1.15, 0.7, 0.2], color: '#4ade80', exercises: ['Curl haltères', 'Tractions'] },
  { id: 'triceps', name: 'Triceps', position: [-1.1, 0.7, -0.3], color: '#f87171', exercises: ['Extensions triceps poulie', 'Dips'] },
  { id: 'glutes', name: 'Fessiers', position: [0, -0.5, -0.7], color: '#fb923c', exercises: ['Hip thrust', 'Fentes marchées', 'Romanian deadlift'] },
  { id: 'hamstrings', name: 'Ischio-jambiers', position: [0, -0.9, -0.5], color: '#fbbf24', exercises: ['Romanian deadlift', 'Soulevé de terre roumain'] },
  { id: 'core', name: 'Core / Abdos', position: [0, 0.2, 0.75], color: '#38bdf8', exercises: ['Planche frontale', 'Crunchs'] },
]

function MusclePoint({ muscle, onClick, isActive }) {
  const mesh = useRef()
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.005
    }
  })

  return (
    <group position={muscle.position}>
      <Sphere
        ref={mesh}
        args={[0.1, 16, 16]}
        onClick={(e) => { e.stopPropagation(); onClick(muscle) }}
      >
        <meshStandardMaterial
          color={isActive ? '#ffffff' : muscle.color}
          emissive={muscle.color}
          emissiveIntensity={isActive ? 0.8 : 0.3}
          roughness={0.3}
          metalness={0.6}
        />
      </Sphere>
      {isActive && (
        <Html center>
          <div
            className="px-2 py-1 rounded text-xs font-bold whitespace-nowrap pointer-events-none"
            style={{ background: muscle.color, color: '#000' }}
          >
            {muscle.name}
          </div>
        </Html>
      )}
    </group>
  )
}

function BodyShape() {
  return (
    <group>
      {/* Torso */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1.2, 1.8, 0.6]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.8} metalness={0.2} />
      </mesh>
      {/* Head */}
      <Sphere args={[0.35, 16, 16]} position={[0, 1.8, 0]}>
        <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
      </Sphere>
      {/* Left arm */}
      <mesh position={[-0.85, 0.7, 0]} rotation={[0, 0, 0.2]}>
        <boxGeometry args={[0.25, 1.1, 0.25]} />
        <meshStandardMaterial color="#111" roughness={0.8} />
      </mesh>
      {/* Right arm */}
      <mesh position={[0.85, 0.7, 0]} rotation={[0, 0, -0.2]}>
        <boxGeometry args={[0.25, 1.1, 0.25]} />
        <meshStandardMaterial color="#111" roughness={0.8} />
      </mesh>
      {/* Left leg */}
      <mesh position={[-0.3, -0.9, 0]}>
        <boxGeometry args={[0.35, 1.4, 0.35]} />
        <meshStandardMaterial color="#111" roughness={0.8} />
      </mesh>
      {/* Right leg */}
      <mesh position={[0.3, -0.9, 0]}>
        <boxGeometry args={[0.35, 1.4, 0.35]} />
        <meshStandardMaterial color="#111" roughness={0.8} />
      </mesh>
    </group>
  )
}

export default function BodyModel() {
  const [selected, setSelected] = useState(null)
  const [active, setActive] = useState(null)

  const handleClick = (muscle) => {
    setSelected(muscle)
    setActive(muscle.id)
  }

  const relatedExercises = exercises.filter(ex =>
    selected?.exercises.includes(ex.name)
  )

  return (
    <div className="pt-20 min-h-screen">
      <div className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label mb-6 inline-flex"><Zap size={12} />Anatomie 3D</span>
            <h1 className="font-anton text-5xl md:text-7xl tracking-wider mb-4">
              MODÈLE<br /><span className="gradient-text">ANATOMIQUE 3D</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)' }}>Clique sur un muscle pour voir les exercices ciblés</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* 3D Canvas */}
            <div className="lg:col-span-2">
              <div
                className="rounded-2xl overflow-hidden relative"
                style={{
                  height: 600,
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
              >
                <Canvas camera={{ position: [0, 0.5, 5], fov: 50 }}>
                  <ambientLight intensity={0.4} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <pointLight position={[-10, -5, -10]} intensity={0.3} color="#4f46e5" />
                  <spotLight position={[0, 10, 0]} intensity={0.5} color="#F5C518" />

                  <BodyShape />

                  {muscleGroups.map((muscle) => (
                    <MusclePoint
                      key={muscle.id}
                      muscle={muscle}
                      onClick={handleClick}
                      isActive={active === muscle.id}
                    />
                  ))}

                  <OrbitControls
                    enablePan={false}
                    minDistance={3}
                    maxDistance={8}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={(3 * Math.PI) / 4}
                  />
                </Canvas>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs px-3 py-1.5 rounded-full" style={{ background: 'rgba(0,0,0,0.6)', color: 'var(--text-muted)' }}>
                  Glisser pour tourner · Scroll pour zoomer
                </div>
              </div>
            </div>

            {/* Info panel */}
            <div>
              <AnimatePresence mode="wait">
                {selected ? (
                  <motion.div
                    key={selected.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="card p-6"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="font-anton text-2xl tracking-wide">{selected.name}</h2>
                      <button
                        onClick={() => { setSelected(null); setActive(null) }}
                        className="p-2 rounded-lg hover:bg-white/5"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <X size={16} />
                      </button>
                    </div>

                    <div className="mb-4">
                      <div className="w-4 h-4 rounded-full mb-2" style={{ background: selected.color }} />
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        Groupe musculaire sélectionné
                      </p>
                    </div>

                    <div className="separator mb-6" />

                    <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>
                      Exercices ciblés
                    </h3>

                    <div className="space-y-3">
                      {relatedExercises.map((ex) => (
                        <div key={ex.id} className="card-elevated p-4 rounded-xl">
                          <div className="font-medium text-sm mb-1">{ex.name}</div>
                          <div className="flex gap-2">
                            <span className="tag tag-accent" style={{ fontSize: '10px' }}>{ex.type}</span>
                            <span className="tag tag-blue" style={{ fontSize: '10px' }}>{ex.level}</span>
                          </div>
                          <p className="text-xs mt-2 line-clamp-2" style={{ color: 'var(--text-muted)' }}>{ex.description}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="card p-6 text-center"
                  >
                    <Info size={32} className="mx-auto mb-4" style={{ color: 'var(--text-muted)' }} />
                    <h3 className="font-semibold mb-2">Sélectionne un muscle</h3>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      Clique sur l'un des points lumineux sur le modèle 3D pour afficher les exercices correspondants.
                    </p>

                    <div className="separator my-6" />

                    <div className="space-y-2">
                      {muscleGroups.filter((m, i, arr) => arr.findIndex(x => x.name === m.name) === i).map((m) => (
                        <div key={m.id} className="flex items-center gap-3 text-left">
                          <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: m.color }} />
                          <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{m.name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

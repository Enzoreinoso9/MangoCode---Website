import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

function MangoModel({ mousePosition }) {
  const gltf = useLoader(GLTFLoader, '/models/mango3D.glb')
  const meshRef = useRef()
  
  // Preservar los colores originales del modelo GLB
  useEffect(() => {
    if (gltf.scene) {
      console.log('Modelo cargado:', gltf.scene)
      
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          // Debug: mostrar información de cada mesh y sus colores originales
          console.log('Mesh encontrado:', {
            name: child.name,
            type: child.geometry.type,
            position: child.position,
            scale: child.scale,
            material: child.material,
            originalColor: child.material?.color
          })
          
          // Solo agregar sombras y mejorar la iluminación
          // Mantener los colores originales del modelo
          if (child.material) {
            // Mejorar la apariencia del material original
            child.material.roughness = 0.3
            child.material.metalness = 0.1
            
            // Agregar un ligero brillo si no tiene
            if (!child.material.emissive) {
              child.material.emissive = new THREE.Color(0x000000)
              child.material.emissiveIntensity = 0.0
            }
          }
          
          // Agregar sombras
          child.castShadow = true
          child.receiveShadow = true
        }
      })
    }
  }, [gltf])

  // Animación suave con el mouse
  useFrame((state) => {
    if (meshRef.current) {
      // Rotación suave basada en la posición del mouse
      meshRef.current.rotation.y = mousePosition.x * 0.3
      meshRef.current.rotation.x = mousePosition.y * 0.2
      
      // Animación flotante
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      
      // Rotación lenta constante
      meshRef.current.rotation.y += 0.005
    }
  })

  return (
    <primitive 
      ref={meshRef}
      object={gltf.scene} 
      scale={[4.5, 4.5, 4.5]}
      position={[0, 0, 0]}
    />
  )
}

function Scene({ mousePosition }) {
  return (
    <>
      {/* Iluminación ambiental más brillante */}
      <ambientLight intensity={0.8} />
      
      {/* Luz direccional principal más intensa */}
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={2.5} 
        castShadow 
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      
      {/* Luz de relleno más brillante */}
      <pointLight position={[-10, -10, -10]} intensity={1.0} color="#22c55e" />
      
      {/* Luz de acento más intensa */}
      <spotLight 
        position={[5, 5, 5]} 
        intensity={1.2} 
        angle={0.3} 
        penumbra={1} 
        color="#ff8c42"
      />
      
      {/* Luz adicional desde abajo para iluminar partes oscuras */}
      <pointLight position={[0, -5, 0]} intensity={0.8} color="#ffffff" />
      
      {/* Luz adicional desde los lados */}
      <pointLight position={[8, 0, 0]} intensity={0.6} color="#ffffff" />
      <pointLight position={[-8, 0, 0]} intensity={0.6} color="#ffffff" />
      
      {/* Modelo 3D */}
      <MangoModel mousePosition={mousePosition} />
    </>
  )
}

const Mango3DModel = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event
    const x = (clientX / window.innerWidth) * 2 - 1
    const y = -(clientY / window.innerHeight) * 2 + 1
    setMousePosition({ x, y })
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="w-full h-full min-h-[500px] min-w-[600px]">
      <Canvas
        shadows
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <Scene mousePosition={mousePosition} />
      </Canvas>
    </div>
  )
}

export default Mango3DModel

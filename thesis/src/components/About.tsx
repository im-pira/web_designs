import { Canvas, useFrame } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import { DoubleSide, Mesh, PlaneGeometry, } from "three"

const steps = [
    {
        number: "01",
        title: "Prediction markets turn uncertainty into a price.",
        text: "Instead of asking what people think will happen, markets turn collective belief into a live probability.",
    },
    {
        number: "02",
        title: "Every trade moves the collective view.",
        text: "New information changes conviction. As people take positions, the price moves with what the market believes.",
    },
    {
        number: "03",
        title: "A live signal for what comes next.",
        text: "The market keeps updating as the world changes, continuously reflecting the probability of each outcome.",
    },
]

function FlowingRibbon() {
    const mesh = useRef<Mesh>(null)

    const geometry = useMemo(() => {
        const geo = new PlaneGeometry(1.35, 10, 8, 80)
        geo.userData.original = geo.attributes.position.array.slice()
        return geo
    }, [])

    useFrame((state) => {
        if (!mesh.current) return

        const time = state.clock.elapsedTime
        const position = geometry.attributes.position
        const original = geometry.userData.original as Float32Array

        for (let i = 0; i < position.count; i++) {
            const ox = original[i * 3]
            const oy = original[i * 3 + 1]

            // Large flowing S movement
            const wave =
                Math.sin(oy * 0.75 + time * 0.75) * 0.9 +
                Math.sin(oy * 1.45 - time * 0.45) * 0.25

            // Twist the ribbon itself
            const twist = oy * 0.65 + time * 0.7

            position.setXYZ(
                i,
                wave + ox * Math.cos(twist),
                oy,
                ox * Math.sin(twist) * 1.4
            )
        }

        position.needsUpdate = true
        geometry.computeVertexNormals()
    })

    return (
        <mesh ref={mesh} geometry={geometry}>
            <meshStandardMaterial
                color="#f15a29"
                roughness={0.42}
                metalness={0.15}
                emissive="#4a1207"
                emissiveIntensity={0.12}
                side={DoubleSide}
            />
        </mesh>
    )
}

function MarketVisual() {
    return (
        <div className="h-[680px] w-[520px]">
            <Canvas camera={{ position: [0, 0, 8.7], fov: 38 }}>
                <ambientLight intensity={0.75} />

                <directionalLight
                    position={[5, 6, 5]}
                    intensity={4.2}
                    color="#ff8a4c"
                />

                <directionalLight
                    position={[-4, -2, 3]}
                    intensity={1.8}
                    color="#8f2e12"
                />

                <pointLight
                    position={[0, 0, 5]}
                    intensity={1.4}
                    color="#ff5c24"
                />

                <FlowingRibbon />
            </Canvas>
        </div>
    )
}

export default function About() {
    return (
        <section id="about" className="relative bg-black text-white">
            <div className="mx-auto grid max-w-[1600px] grid-cols-1 px-6 md:px-12 lg:grid-cols-[44%_56%] lg:px-16">

                {/* STICKY RIBBON */}
                <div className="relative hidden lg:block">
                    <div className="sticky top-0 flex h-screen items-center justify-center">
                        <MarketVisual />
                    </div>
                </div>

                {/* SCROLLING TEXT */}
                <div>
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="flex min-h-screen items-center lg:pl-20"
                        >
                            <div className="max-w-[700px]">
                                <div className="mb-9 flex items-center gap-5">
                                    <span className="text-[11px] font-medium tracking-[.3em] text-[#f15a29]">
                                        {step.number}
                                    </span>

                                    <span className="h-px w-12 bg-white/15" />

                                    <span className="text-[10px] uppercase tracking-[.3em] text-white/25">
                                        About Thesis
                                    </span>
                                </div>

                                <h2 className="max-w-[690px] text-[3.6rem] font-black uppercase leading-[.8] tracking-[-.065em] text-white md:text-[4.6rem] xl:text-[5.3rem]">
                                    {step.title}
                                </h2>

                                <div className="mt-9 flex items-start gap-5">
                                    <span className="mt-[10px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#f15a29]" />

                                    <p className="max-w-[520px] text-[15px] leading-7 text-white/35 md:text-[16px]">
                                        {step.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
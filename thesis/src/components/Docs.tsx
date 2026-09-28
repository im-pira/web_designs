import { useEffect, useRef } from "react";

const docs = [
    { title: "Market Basics", label: "START HERE", desc: "Learn how prediction markets work.", image: "/cards/1.png" },
    { title: "Trading", label: "GUIDES", desc: "Understand orders, pricing and positions.", image: "/cards/2.png" },
    { title: "API Reference", label: "DEVELOPERS", desc: "Build directly on Thesis infrastructure.", image: "/cards/3.png" },
    { title: "Settlement", label: "MECHANICS", desc: "How markets resolve and settle.", image: "/cards/4.png" },
    { title: "Examples", label: "BUILD", desc: "Patterns, demos and integrations.", image: "/cards/5.png" },
]

function DitherImage({ src, alt }: { src: string; alt: string }) {
    const canvas = useRef<HTMLCanvasElement>(null)
    const img = useRef<HTMLImageElement | null>(null)

    useEffect(() => {
        const image = new Image()
        image.src = src
        img.current = image
    }, [src])

    const draw = (e: React.PointerEvent<HTMLDivElement>) => {
        const c = canvas.current, image = img.current
        if (!c || !image?.complete) return

        const rect = c.getBoundingClientRect()
        const scale = 7
        const w = Math.ceil(rect.width / scale), h = Math.ceil(rect.height / scale)
        c.width = w; c.height = h

        const ctx = c.getContext("2d", { willReadFrequently: true })
        if (!ctx) return

        const ir = image.width / image.height, cr = w / h
        let sx = 0, sy = 0, sw = image.width, sh = image.height

        if (ir > cr) { sw = image.height * cr; sx = (image.width - sw) / 2 }
        else { sh = image.width / cr; sy = (image.height - sh) / 2 }

        ctx.clearRect(0, 0, w, h)
        ctx.drawImage(image, sx, sy, sw, sh, 0, 0, w, h)

        const data = ctx.getImageData(0, 0, w, h)
        const p = data.data
        const bayer = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5]

        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                const i = (y * w + x) * 4
                const d = (bayer[(y % 4) * 4 + (x % 4)] / 16 - .5) * 42
                p[i] = Math.round((p[i] + d) / 46) * 46
                p[i + 1] = Math.round((p[i + 1] + d) / 46) * 46
                p[i + 2] = Math.round((p[i + 2] + d) / 46) * 46
            }
        }

        ctx.putImageData(data, 0, 0)

        const mx = (e.clientX - rect.left) / scale
        const my = (e.clientY - rect.top) / scale
        const radius = 120 / scale

        ctx.globalCompositeOperation = "destination-in"

        const g = ctx.createRadialGradient(mx, my, radius * .25, mx, my, radius)
        g.addColorStop(0, "rgba(0,0,0,1)")
        g.addColorStop(.65, "rgba(0,0,0,.9)")
        g.addColorStop(1, "rgba(0,0,0,0)")

        ctx.fillStyle = g
        ctx.fillRect(0, 0, w, h)
        ctx.globalCompositeOperation = "source-over"
    }

    const clear = () => {
        const c = canvas.current
        c?.getContext("2d")?.clearRect(0, 0, c.width, c.height)
    }

    return (
        <div
            className="absolute inset-0"
            onPointerMove={draw}
            onPointerLeave={clear}
        >
            <img src={src} alt={alt} className="h-full w-full object-cover" />

            <canvas
                ref={canvas}
                className="pointer-events-none absolute inset-0 h-full w-full"
                style={{ imageRendering: "pixelated" }}
            />
        </div>
    )
}

export default function Docs() {
    const positions = [
        "left-[1%] top-[105px] h-[390px] w-[210px] -rotate-[5deg]",
        "left-[19%] top-[32px] h-[445px] w-[235px] -rotate-[2deg]",
        "left-1/2 top-[90px] h-[485px] w-[270px] -translate-x-1/2",
        "right-[19%] top-[32px] h-[445px] w-[235px] rotate-[2deg]",
        "right-[1%] top-[105px] h-[390px] w-[210px] rotate-[5deg]",
    ]

    return (
        <section
            id="docs"
            className="relative -mt-[110px] min-h-screen overflow-hidden bg-black px-6 pb-24 pt-[245px] text-white md:px-12 lg:px-16"
        >
            <div className="mx-auto max-w-[1500px]">

                {/* HEADER */}
                <div className="border-t border-white/10 pt-6">
                    <div className="flex items-center justify-between text-[9px] uppercase tracking-[.28em] text-white/25">
                        <span>03 / Documentation</span>
                        <span>Thesis Knowledge Base</span>
                    </div>

                    <div className="mt-7 grid items-end gap-8 lg:grid-cols-[1fr_420px]">
                        <h2 className="text-[6rem] font-black uppercase leading-[.72] tracking-[-.08em] sm:text-[8rem] lg:text-[10.5rem]">
                            Docs
                        </h2>

                        <div className="mb-2 border-l border-white/15 pl-6">
                            <p className="max-w-[340px] text-[15px] leading-6 text-white/40">
                                Learn the mechanics, understand the market and build directly on Thesis.
                            </p>

                            <div className="mt-5 flex items-center gap-3 text-[9px] uppercase tracking-[.22em] text-[#f15a29]">
                                <span className="h-[5px] w-[5px] bg-[#f15a29]" />
                                Explore the system
                            </div>
                        </div>
                    </div>
                </div>

                {/* CARDS */}
                <div className="relative mx-auto mt-20 h-[620px] w-full max-w-[1380px]">
                    {docs.map((doc, i) => (
                        <a
                            key={doc.title}
                            href="#"
                            className={`group absolute overflow-hidden rounded-[12px] border border-white/10 bg-[#111] hover:z-30 ${positions[i]}`}
                        >
                            <DitherImage src={doc.image} alt={doc.title} />

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/5" />

                            <div className="pointer-events-none absolute left-4 top-4 flex h-[24px] items-center rounded-full border border-white/20 bg-black/35 px-[10px] backdrop-blur-md">
                                <span className="text-[6px] font-medium uppercase leading-none tracking-[.18em] text-white/75">
                                    {doc.label}
                                </span>
                            </div>

                            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
                                <div className="mb-3 h-px w-7 bg-white/45" />

                                <h3 className="text-[20px] font-semibold leading-tight tracking-[-.04em]">
                                    {doc.title}
                                </h3>

                                <p className="mt-2 max-w-[190px] text-[11px] leading-[1.55] text-white/60">
                                    {doc.desc}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
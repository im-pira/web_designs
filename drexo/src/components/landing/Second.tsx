export function Second() {
    const cards = [
        {
            title: "Form & Motion",
            image: "/img-1.jpg",
            className: "h-[290px] w-[165px] -rotate-7 translate-y-7 translate-x-7 z-[1]",
        },
        {
            title: "Soft Collision",
            image: "/img-2.jpg",
            className: "h-[335px] w-[180px] rotate-4 -translate-y-2 translate-x-4 z-[2]",
        },
        {
            title: "Red Signal",
            image: "/img-3.jpg",
            className: "h-[360px] w-[210px] -translate-y-6 z-[5]",
        },
        {
            title: "After Dark",
            image: "/img-4.jpg",
            className: "h-[330px] w-[180px] rotate-8 -translate-y-1 -translate-x-4 z-[5]",
        },
        {
            title: "Quiet Heat",
            image: "/img-5.jpg",
            className: "h-[290px] w-[165px] -rotate-5 translate-y-8 -translate-x-7 z-[1]",
        },
    ]

    return (
        <section className="relative min-h-screen overflow-hidden bg-black px-8 py-14 text-white">

            {/* Grid */}
            <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:110px_110px] [mask-image:radial-gradient(circle_at_center,black_0%,black_38%,rgba(0,0,0,.65)_62%,rgba(0,0,0,.25)_82%,transparent_100%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_0%,black_38%,rgba(0,0,0,.65)_62%,rgba(0,0,0,.25)_82%,transparent_100%)]" />

            {/* Top copy */}
            <div className="absolute left-17 top-22 z-10 w-[170px]">
                <p className="text-[11px] leading-[1.45] text-white/55">
                    A collection of selected work, experiments, ideas and visual
                    directions shaped through Drexo.
                </p>
            </div>

            {/* Heading */}
            <div className="relative z-10 mt-5 flex justify-center">
                <h2 className="text-[72px] font-black leading-none tracking-[-0.06em] text-white/40">
                    OUR WORKS
                </h2>
            </div>

            {/* Ribbon */}
            <svg
                className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
                viewBox="0 0 1600 900"
                preserveAspectRatio="none"
            >
                <defs>
                    <filter id="orange-glow" x="-200%" y="-200%" width="400%" height="400%">
                        <feGaussianBlur stdDeviation="20" result="blur" />
                    </filter>

                    <linearGradient id="ribbon-line" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ff5a2f" stopOpacity="0" />
                        <stop offset="30%" stopColor="#ff5a2f" stopOpacity="0.05" />
                        <stop offset="70%" stopColor="#ff5a2f" stopOpacity="0.05" />
                        <stop offset="100%" stopColor="#ff5a2f" stopOpacity="0" />
                    </linearGradient>

                    <path
                        id="ribbonPath"
                        d="
                            M -40 340
                            C 150 180, 330 190, 500 330
                            C 560 385, 610 420, 690 470
                            C 755 515, 800 600, 900 630
                            C 1010 660, 1080 520, 1160 400
                            C 1240 285, 1315 320, 1405 350
                            C 1490 378, 1570 305, 1660 220
                        "
                    />
                </defs>

                <use
                    href="#ribbonPath"
                    fill="none"
                    stroke="url(#ribbon-line)"
                    strokeWidth="1.2"
                />

                <g filter="url(#orange-glow)">
                    <ellipse rx="46" ry="16" fill="#ff4f23" opacity="0.42">
                        <animateMotion dur="11s" repeatCount="indefinite" rotate="auto">
                            <mpath href="#ribbonPath" />
                        </animateMotion>
                    </ellipse>
                </g>

                <ellipse rx="18" ry="6" fill="#ff6a3d" opacity="0.58">
                    <animateMotion dur="11s" repeatCount="indefinite" rotate="auto">
                        <mpath href="#ribbonPath" />
                    </animateMotion>
                </ellipse>
            </svg>

            {/* Cards */}
            <div className="absolute left-1/2 top-[55%] z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`relative overflow-hidden rounded-[18px] bg-neutral-700 ${card.className}`}
                    >
                        <img
                            src={card.image}
                            alt={card.title}
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5" />

                        {index === 2 && (
                            <div className="absolute left-3 top-3 rounded-full bg-white/15 px-2.5 py-1 text-[9px] text-white/70 backdrop-blur-md">
                                Works
                            </div>
                        )}

                        <div className="absolute bottom-3 left-3 right-3">
                            <p className="text-[10px] font-medium uppercase tracking-wide text-white/80">
                                {card.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>


            {/* Bottom navigation */}
            <div className="absolute bottom-[55px] left-[49.7%] z-10 flex -translate-x-1/2 items-center gap-1">
                <button className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.025] text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,.45),inset_0_-1px_0_rgba(255,255,255,.08),0_8px_24px_rgba(0,0,0,.28)] backdrop-blur-[6px] transition-all duration-300 hover:bg-white/[0.05]">
                    <span className="pointer-events-none absolute left-[15%] top-[8%] h-[35%] w-[55%] rounded-full bg-white/20 blur-[5px]" />
                    <span className="pointer-events-none absolute bottom-[6%] right-[10%] h-[24%] w-[45%] rounded-full bg-white/[0.08] blur-[6px]" />
                    <span className="relative z-10 text-xl">←</span>
                </button>
                <button className="flex h-9 w-12 items-center justify-center rounded-full border border-white/25 text-sm text-white/80 transition hover:text-white/70">
                    →
                </button>
            </div>

        </section>
    )
}
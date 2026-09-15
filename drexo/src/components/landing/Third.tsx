export function Third() {
    return (
        <section className="sticky top-0 min-h-screen overflow-hidden bg-black text-white">
            <div className="pointer-events-none absolute left-0 top-0 z-0 h-full w-[55%] bg-[linear-gradient(to_right,rgba(255,255,255,0.065)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:110px_110px] [mask-image:linear-gradient(to_right,black_0%,black_65%,rgba(0,0,0,.45)_82%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,black_0%,black_65%,rgba(0,0,0,.45)_82%,transparent_100%)]" />

            {/* circle */}
            <div className="pointer-events-none absolute right-[3%] top-1/2 h-[700px] w-[700px] -translate-y-[54%] rounded-full bg-[#5c160d]/16 blur-[120px]" />
            <div className="pointer-events-none absolute right-[5.5%] top-[48%] h-[590px] w-[590px] -translate-y-1/2 rounded-full bg-[#d94a22]/10 blur-[34px]" />
            <div className="pointer-events-none absolute right-[6.5%] top-[48%] h-[555px] w-[555px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_48%_44%,#b83b22_0%,#9f2c1a_40%,#771d13_72%,#4b100c_100%)] shadow-[0_0_24px_rgba(150,40,22,.14)]" />
            <div className="pointer-events-none absolute right-[9%] top-[47%] h-[470px] w-[470px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(210,70,38,.08)_0%,rgba(150,35,20,.03)_55%,transparent_80%)]" />
            <div className="pointer-events-none absolute bottom-[-80px] right-[-1%] h-[300px] w-[700px] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(130,35,18,.28)_0%,rgba(72,18,10,.16)_48%,transparent_76%)] blur-[28px]" />
            <div className="pointer-events-none absolute bottom-[15px] right-[8%] h-[110px] w-[500px] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(170,45,22,.12)_0%,rgba(90,20,10,.06)_48%,transparent_78%)] blur-[18px]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_50%,transparent_0%,transparent_38%,rgba(0,0,0,.24)_62%,rgba(0,0,0,.72)_84%,#000_100%)]" />

            {/* women */}
            <div className="pointer-events-none absolute bottom-[2%] right-[8%] z-10 origin-bottom rotate-[-4deg]">
                <img
                    src="/woman.png"
                    alt=""
                    className="h-[70vh] object-contain brightness-0"
                />

                <div className="absolute bottom-[-6px] left-1/2 h-[42px] w-[240px] -translate-x-1/2 rounded-[50%] bg-black/70 blur-[16px]" />

                <div className="absolute bottom-[-14px] left-1/2 h-[70px] w-[310px] -translate-x-1/2 rounded-[50%] bg-black/30 blur-[30px]" />
            </div>


            {/* connectors */}
            <div className="pointer-events-none absolute left-[40%] top-[52%] h-px w-[260px] bg-gradient-to-r from-transparent via-[#ff5a3d]/30 to-transparent" />
            <div className="pointer-events-none absolute left-[45%] top-[62%] h-px w-[200px] bg-gradient-to-r from-transparent via-[#ff5a3d]/30 to-transparent" />
            <div className="pointer-events-none absolute left-[45%] top-[42%] h-px w-[200px] bg-gradient-to-r from-transparent via-[#ff5a3d]/30 to-transparent" />
            <div className="pointer-events-none absolute left-[36%] top-[47%] z-[5] h-px w-[170px] bg-gradient-to-r from-transparent via-[#ff5a3d]/18 to-transparent" />
            <div className="pointer-events-none absolute left-[39%] top-[52%] z-[5] h-px w-[230px] bg-gradient-to-r from-transparent via-[#ff5a3d]/30 to-transparent" />
            <div className="pointer-events-none absolute left-[42%] top-[57%] z-[5] h-px w-[150px] bg-gradient-to-r from-transparent via-[#ff5a3d]/14 to-transparent" />



            {/* Left content */}
            <div className="relative z-10 flex min-h-screen items-center">
                <div className="ml-[12%] max-w-[520px]">
                    <div className="absolute left-[7%] top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.22em] text-white/20">
                        <div className="flex flex-col items-center gap-3">
                            <span>03</span>
                            <div className="h-16 w-px bg-white/10" />
                            <span className="[writing-mode:vertical-rl] rotate-180">Drexo / Flow</span>
                        </div>
                    </div>
                    <svg viewBox="0 0 420 70" className="mb-10 h-[58px] w-[420px]" fill="none">
                        <defs>
                            <filter id="mini-glow" x="-200%" y="-200%" width="400%" height="400%">
                                <feGaussianBlur stdDeviation="4.5" />
                            </filter>

                            <path
                                id="flowPath"
                                d="M8 24 C24 36, 32 10, 46 22 C60 34, 72 16, 88 18 C106 20, 115 42, 128 31 C142 20, 157 19, 173 22 C192 25, 204 28, 222 24 C243 19, 262 16, 280 20 C300 24, 312 30, 328 26 C349 20, 369 18, 410 21"
                            />
                        </defs>

                        {/* base stroke */}
                        <use href="#flowPath" stroke="rgba(255,105,72,.55)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />

                        {/* soft moving oval glow */}
                        <g filter="url(#mini-glow)" opacity="0.35">
                            <ellipse rx="8" ry="3" fill="#ff6a45">
                                <animateMotion dur="8s" repeatCount="indefinite" rotate="auto" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline">
                                    <mpath href="#flowPath" />
                                </animateMotion>
                            </ellipse>
                        </g>

                        {/* soft center */}
                        <ellipse rx="4.5" ry="1.6" fill="#ff7a55" opacity="0.48">
                            <animateMotion dur="8s" repeatCount="indefinite" rotate="auto" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline">
                                <mpath href="#flowPath" />
                            </animateMotion>
                        </ellipse>
                    </svg>

                    <div className="space-y-7">
                        <p className="text-sm uppercase tracking-[0.18em] text-white/30">
                            Built for flow
                        </p>

                        <h2 className="max-w-[480px] text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-white/90">
                            Everything you want to keep close.
                        </h2>

                        <p className="max-w-[420px] text-base leading-7 text-white/40">
                            Projects, references, tools, ideas, and unfinished thoughts —
                            all in one place without the noise.
                        </p>

                        <div className="h-px w-[420px] bg-white/[0.08]" />

                        <p className="max-w-[380px] text-sm leading-6 text-white/30">
                            Designed to stay quiet in the background and useful when you need it.
                        </p>

                        <div className="h-px w-[300px] bg-white/[0.06]" />
                    </div>

                </div>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[220px] bg-gradient-to-b from-transparent via-black/65 to-black" />

        </section>
    )
}
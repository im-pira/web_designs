import SideDrawer from "./SideDrawer"

const panels = [1, 2, 3, 4, 5]

function HeroVisual() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-black">
            <style>{`
                @keyframes curtain-flow {
                    0% { background-position: 15% 20%; }
                    25% { background-position: 55% 35%; }
                    50% { background-position: 80% 70%; }
                    75% { background-position: 35% 85%; }
                    100% { background-position: 15% 20%; }
                }

                @keyframes person-move {
                    from { transform: translateX(-220px); }
                    to { transform: translateX(1250px); }
                }
            `}</style>

            <svg className="absolute h-0 w-0">
                <defs>
                    <filter id="water-reflection" x="-40%" y="-20%" width="180%" height="150%">
                        <feTurbulence type="fractalNoise" baseFrequency="0.006 0.035" numOctaves="2" seed="7" result="noise">
                            <animate attributeName="baseFrequency" dur="10s" values="0.006 0.035;0.008 0.04;0.005 0.032;0.007 0.037;0.006 0.035" repeatCount="indefinite" />
                        </feTurbulence>

                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G">
                            <animate attributeName="scale" dur="10s" values="8;11;9;10;8" repeatCount="indefinite" />
                        </feDisplacementMap>

                        <feGaussianBlur stdDeviation="1.4" />
                    </filter>
                </defs>
            </svg>
            <div className="pointer-events-none absolute inset-0 z-0 flex justify-center gap-24 opacity-[0.05]">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div key={index} className="h-[90%] w-px bg-white" />
                ))}
            </div>
            <div className="pointer-events-none absolute inset-0 z-0 flex flex-col justify-center gap-24 opacity-[0.025]">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div key={index} className="h-px w-full bg-white" />
                ))}
            </div>
            <div className="pointer-events-none absolute left-1/2 top-[48%] h-[420px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C60000]/10 blur-[140px]" />
            <div className="relative z-10 flex min-h-screen items-center justify-center">
                <div className="relative flex items-end gap-12">
                    {/* drexo stroke */}
                    <svg
                        className="pointer-events-none absolute left-1/2 top-[53%] z-20 h-[180px] w-[1250px] -translate-x-1/2 -translate-y-1/2"
                        viewBox="0 0 1250 180"
                        fill="none"
                    >
                        <defs>
                            <linearGradient
                                id="signal-line"
                                gradientUnits="userSpaceOnUse"
                                x1="0"
                                y1="0"
                                x2="1250"
                                y2="0"
                            >
                                <stop offset="0%" stopColor="#ff5a3d" stopOpacity="0" />
                                <stop offset="10%" stopColor="#ff5a3d" stopOpacity="0.18" />
                                <stop offset="25%" stopColor="#ff6948" stopOpacity="0.48" />
                                <stop offset="50%" stopColor="#ff7a55" stopOpacity="0.9" />
                                <stop offset="75%" stopColor="#ff6948" stopOpacity="0.48" />
                                <stop offset="90%" stopColor="#ff5a3d" stopOpacity="0.18" />
                                <stop offset="100%" stopColor="#ff5a3d" stopOpacity="0" />
                            </linearGradient>

                            <path
                                id="signalPath"
                                d="
                M 10 108
                C 95 110, 155 88, 225 80
                C 258 76, 268 96, 244 98
                C 226 99, 232 121, 253 120
                C 305 119, 328 92, 341 67
                C 350 51, 362 40, 371 29
                C 357 45, 349 63, 343 79
                C 336 99, 348 117, 377 118
                C 420 120, 440 101, 452 88
                C 462 78, 468 79, 470 88
                C 472 97, 462 101, 456 94
                C 447 83, 456 76, 465 79
                C 478 83, 481 94, 474 103
                C 469 111, 478 117, 493 118
                C 525 120, 550 105, 575 95
                C 601 84, 620 84, 622 96
                C 623 107, 613 111, 609 102
                C 605 92, 616 83, 626 82
                C 641 81, 644 96, 636 106
                C 627 117, 641 121, 661 118
                C 711 110, 753 88, 802 84
                C 838 81, 843 96, 831 99
                C 817 102, 821 117, 840 116
                C 891 114, 917 84, 948 72
                C 980 60, 1001 63, 1002 79
                C 1003 91, 989 96, 983 85
                C 976 72, 990 62, 1002 66
                C 1017 72, 1014 88, 1007 98
                C 1025 93, 1053 94, 1090 94
                C 1132 94, 1175 90, 1238 89
            "
                            />
                        </defs>

                        <use
                            href="#signalPath"
                            stroke="url(#signal-line)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div className="pointer-events-none absolute left-1/2 top-[2%] -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap bg-[linear-gradient(180deg,rgba(255,255,255,.18)_0%,rgba(170,170,170,.10)_38%,rgba(255,255,255,.14)_58%,rgba(90,90,90,.08)_100%)] bg-clip-text text-[180px] font-black uppercase tracking-[0.02em] text-transparent blur-[2px] [mask-image:linear-gradient(to_bottom,black_0%,black_38%,rgba(0,0,0,.75)_55%,rgba(0,0,0,.3)_72%,transparent_92%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_38%,rgba(0,0,0,.75)_55%,rgba(0,0,0,.3)_72%,transparent_92%)]">
                        Elegant
                    </div>
                    {panels.map((panel, index) => (
                        <div key={panel} className="relative h-[420px] w-[190px]">

                            <div
                                className={[
                                    "absolute inset-0 overflow-hidden bg-[#C60000] shadow-[0_0_30px_rgba(198,0,0,0.18)]",
                                    index === 0
                                        ? "[clip-path:polygon(0_0,100%_5%,100%_100%,0_100%)]"
                                        : index === 1
                                            ? "[clip-path:polygon(0_2%,100%_5%,100%_100%,0_100%)]"
                                            : index === 2
                                                ? "[clip-path:polygon(0_5%,100%_5%,100%_100%,0_100%)]"
                                                : index === 3
                                                    ? "[clip-path:polygon(0_5%,100%_2%,100%_100%,0_100%)]"
                                                    : "[clip-path:polygon(0_5%,100%_0,100%_100%,0_100%)]"
                                ].join(" ")}
                            >
                                <div className="absolute inset-0 opacity-55 bg-[linear-gradient(115deg,rgba(0,0,0,.28)_0%,rgba(198,0,0,.04)_12%,rgba(255,120,90,.16)_22%,rgba(0,0,0,.30)_34%,rgba(255,100,80,.13)_47%,rgba(0,0,0,.32)_60%,rgba(255,120,90,.14)_73%,rgba(0,0,0,.26)_86%,rgba(198,0,0,.04)_100%)] bg-[length:220%_160%] animate-[curtain-flow_14s_ease-in-out_infinite] blur-[0.4px]" />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,95,70,.14)_0%,rgba(198,0,0,0)_28%,rgba(45,0,0,.12)_65%,rgba(10,0,0,.38)_100%)]" />

                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,120,90,.12)_0%,transparent_36%,rgba(0,0,0,.12)_70%,rgba(0,0,0,.32)_100%)]" />

                                <div className="absolute inset-0 shadow-[inset_0_-85px_100px_rgba(0,0,0,.24),inset_0_18px_40px_rgba(255,100,70,.05)]" />
                            </div>
                            <div className="pointer-events-none absolute left-0 top-[calc(100%+10px)] h-[150px] w-full overflow-hidden [mask-image:linear-gradient(to_bottom,black_0%,rgba(0,0,0,.85)_22%,rgba(0,0,0,.45)_55%,rgba(0,0,0,.15)_78%,transparent_100%)]
                            [-webkit-mask-image:linear-gradient(to_bottom,black_0%,rgba(0,0,0,.85)_22%,rgba(0,0,0,.45)_55%,rgba(0,0,0,.15)_78%,transparent_100%)]">

                                <div className="absolute left-[-6%] top-[-420px] h-[420px] w-[112%] origin-bottom scale-y-[-1] bg-[#C60000] opacity-50 [filter:url(#water-reflection)]" />
                                <div className="absolute left-[4%] top-[8%] h-[62%] w-[92%] bg-[#C60000]/20 blur-[18px]" />
                                <div className="absolute inset-x-[-18%] top-[48%] h-[52%] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.1)_45%,transparent_74%)] blur-2xl" />
                                <div className="absolute left-[8%] top-[28%] h-[3px] w-[76%] bg-black/15 blur-sm" />
                                <div className="absolute left-[18%] top-[46%] h-[2px] w-[58%] bg-black/12 blur-sm" />
                                <div className="absolute left-[5%] top-[65%] h-[3px] w-[82%] bg-black/10 blur-sm" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div
                className="pointer-events-none absolute inset-0 z-30 opacity-[0.1] mix-blend-screen"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.65'/%3E%3C/svg%3E")`,
                }}
            />
            <SideDrawer />
        </section>
    )
}

export default HeroVisual
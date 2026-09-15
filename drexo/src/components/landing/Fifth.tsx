export default function Fifth() {
    return (
        <section className="relative z-20 flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
            <style>{`
                @keyframes pulse-dot {
                    0%, 100% {
                        transform: scale(1);
                        opacity: .65;
                    }
                    50% {
                        transform: scale(1.7);
                        opacity: 1;
                    }
                }

                @keyframes scan-line {
                    0%, 100% {
                        opacity: .18;
                        transform: translateX(0);
                    }
                    50% {
                        opacity: .55;
                        transform: translateX(18px);
                    }
                }

                @keyframes target-pulse {
                    0%, 100% {
                        transform: scale(1);
                        opacity: .35;
                    }
                    50% {
                        transform: scale(1.18);
                        opacity: .7;
                    }
                }
            `}</style>

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a92b18]/10 blur-[150px]" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[78%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#ff5a3d]/18 to-transparent" />

            <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.075)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:110px_110px] [mask-image:radial-gradient(ellipse_at_center,black_0%,black_32%,rgba(0,0,0,.72)_52%,rgba(0,0,0,.28)_72%,transparent_92%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_0%,black_32%,rgba(0,0,0,.72)_52%,rgba(0,0,0,.28)_72%,transparent_92%)]" />

            <div className="pointer-events-none absolute right-[9%] top-[39%] h-px w-[250px] bg-gradient-to-r from-transparent via-[#ff7a3d]/60 to-transparent animate-[scan-line_6s_ease-in-out_infinite_reverse]" />

            <div className="pointer-events-none absolute left-[17%] bottom-[32%] h-px w-[170px] bg-gradient-to-r from-transparent via-[#ff5a3d]/30 to-transparent" />

            <div className="pointer-events-none absolute right-[15%] bottom-[29%] h-px w-[185px] bg-gradient-to-r from-transparent via-[#ff6a3d]/28 to-transparent" />

            <div className="pointer-events-none absolute left-[26%] top-[29%] h-[48px] w-px bg-gradient-to-b from-transparent via-[#ff5a3d]/30 to-transparent" />

            <div className="pointer-events-none absolute right-[28%] bottom-[24%] h-[58px] w-px bg-gradient-to-b from-transparent via-[#ff6a3d]/25 to-transparent" />

            <div className="pointer-events-none absolute left-[21%] top-[43%] h-5 w-5 rounded-full border border-[#ff5a3d]/50 animate-[target-pulse_3s_ease-in-out_infinite]">
                <div className="absolute left-1/2 top-[-9px] h-2.5 w-px -translate-x-1/2 bg-[#ff5a3d]/25" />
                <div className="absolute bottom-[-9px] left-1/2 h-2.5 w-px -translate-x-1/2 bg-[#ff5a3d]/25" />
                <div className="absolute left-[-9px] top-1/2 h-px w-2.5 -translate-y-1/2 bg-[#ff5a3d]/25" />
                <div className="absolute right-[-9px] top-1/2 h-px w-2.5 -translate-y-1/2 bg-[#ff5a3d]/25" />
            </div>

            <div className="pointer-events-none absolute right-[21%] bottom-[38%] h-4 w-4 rounded-full border border-[#ff7a3d]/20 animate-[target-pulse_3.8s_ease-in-out_infinite]">
                <div className="absolute inset-[5px] rounded-full bg-[#ff5a3d]/80 shadow-[0_0_8px_rgba(255,90,61,.35)]" />
            </div>

            <div className="pointer-events-none absolute right-[30%] top-[28%] flex gap-1">
                <span className="h-px w-2 bg-[#ff7a3d]/30" />
                <span className="h-px w-6 bg-[#ff5a3d]/18" />
            </div>
            <div className="relative h-[390px] w-[88vw]">
                <svg viewBox="0 0 1400 420" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <mask id="drexo-video-mask">
                            <rect width="1400" height="420" fill="black" />
                            <text x="700" y="350" textAnchor="middle" fill="white" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="390" letterSpacing="-28">
                                DREXO
                            </text>
                        </mask>
                    </defs>

                    <foreignObject x="0" y="0" width="1400" height="420" mask="url(#drexo-video-mask)">
                        <video src="/video.mp4" autoPlay muted loop playsInline className="h-full w-full object-cover" />
                    </foreignObject>
                </svg>
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
            </div>

            <div className="absolute left-1/2 top-[70%] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#ff5a3d] shadow-[0_0_12px_rgba(255,90,61,.6)] animate-[pulse-dot_2.4s_ease-in-out_infinite]" />

            <div className="absolute bottom-8 left-10 right-10 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/20">
                <span>Drexo / 2026</span>
                <span>More coming soon</span>
            </div>

        </section>
    )
}
import Navbar from "./Nav";

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-black">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src="/car.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

            <Navbar />

            <div className="relative z-10 flex min-h-screen items-end px-6 pb-12 md:px-12 md:pb-14 lg:px-16">
                <div className="flex w-full items-end justify-between gap-10">
                    <div className="max-w-4xl">
                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-px w-8 bg-white/25" />

                            <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/50">
                                Prediction Markets
                            </p>
                        </div>

                        <h1 className="doto inline-block text-5xl leading-[0.88] tracking-[-0.08em] text-white md:text-7xl lg:text-8xl">
                            Trade what
                            <br />
                            happens next.
                        </h1>

                        <p className="mt-6 max-w-lg text-base leading-7 text-white/65 md:text-lg">
                            Trade real-world outcomes, follow live probabilities, and watch
                            markets move in real time.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:scale-[1.03] hover:bg-white/90">
                                Explore Markets
                            </button>

                            <button className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition duration-300 hover:border-white/35 hover:bg-white/15">
                                Learn More
                            </button>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-6 text-xs text-white/45">
                            <span>$42.8M volume</span>
                            <span>186 live markets</span>
                            <span>24/7 trading</span>
                        </div>
                    </div>

                    <div className="hidden lg:block lg:self-end lg:pb-4">
                        <div className="flex flex-col items-end gap-5 text-right text-white">
                            <div>
                                <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                                    Top market
                                </p>
                                <p className="mt-2 text-sm text-white/70">
                                    US rates below 4% by year end
                                </p>
                            </div>

                            <div className="flex items-end gap-4">
                                <span className="text-6xl font-light tracking-[-0.05em]">64%</span>

                                <div className="pb-1">
                                    <p className="text-xs text-white/35">24h</p>
                                    <p className="text-sm text-emerald-400">+3.8%</p>
                                </div>
                            </div>

                            <div className="h-px w-64 bg-white/15" />

                            <div className="flex w-64 justify-between text-xs text-white/40">
                                <span>$8.4M volume</span>
                                <span>Live</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default function Forth() {
    return (
        <section className="relative z-20 min-h-screen bg-black px-4 text-white">
            <div className="relative min-h-screen overflow-hidden rounded-t-[42px] border border-white/10 bg-[linear-gradient(180deg,#c93422_0%,#a92319_50%,#74150f_100%)]">

                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_0%,transparent_30%,rgba(50,0,0,.10)_68%,rgba(20,0,0,.22)_100%)]" />

                {/* main content */}
                <div className="relative z-10 flex min-h-screen items-center">
                    <div className="ml-[10%] max-w-[760px]">
                        <p className="mb-5 text-xs uppercase tracking-[0.22em] text-white/35">
                            One place. Less friction.
                        </p>

                        <h2 className="text-[76px] font-black leading-[0.95] tracking-[-0.055em] text-white/90">
                            Build less clutter.
                            <br />
                            Keep more momentum.
                        </h2>

                        <p className="mt-8 max-w-[520px] text-base leading-7 text-white/45">
                            Your projects, tools, references and unfinished ideas stay close — without turning your workspace into noise.
                        </p>

                        <div className="mt-10 flex items-center gap-5">
                            <button className="group relative overflow-hidden rounded-full border border-white/20 bg-black/10 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all duration-300 hover:border-white/35 hover:bg-white/[0.04]">
                                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,.18)_42%,rgba(255,255,255,.38)_50%,rgba(255,255,255,.12)_58%,transparent_78%)] opacity-60 transition-transform duration-700 group-hover:translate-x-[70%]" />

                                <span className="pointer-events-none absolute inset-[1px] rounded-full border border-white/[0.08]" />

                                <span className="relative z-10">
                                    Explore Drexo
                                </span>
                            </button>

                            <span className="text-xs uppercase tracking-[0.18em] text-white/25">
                                Designed for flow
                            </span>
                        </div>
                    </div>
                </div>

                {/* subtle bottom accent */}
                <div className="absolute bottom-10 right-10 z-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/25">
                    <span>Drexo / 2026</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ff6a4d]/70" />
                </div>

            </div>
        </section>
    )
}
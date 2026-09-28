import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6"

const footerGroups = [
    {
        title: "Platform",
        links: ["Markets", "Create Market", "Portfolio", "Activity"],
    },
    {
        title: "Company",
        links: ["About", "Careers", "Blog", "Contact"],
    },
    {
        title: "Resources",
        links: ["Documentation", "API Reference", "Guides", "Status"],
    },
    {
        title: "Legal",
        links: ["Terms", "Privacy", "Cookies", "Risk Disclosure"],
    },
]

export default function Footer() {
    return (
        <footer className="relative z-50 bg-black px-4 py-10 md:px-8 lg:px-12">
            <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[34px] bg-[#111] p-[18px] shadow-[0_35px_90px_rgba(0,0,0,.28)]">

                {/* TOP CTA */}
                <div className="relative min-h-[430px] overflow-hidden rounded-[24px] border border-white/15 bg-[linear-gradient(135deg,#ff6a2a_0%,#f15a29_42%,#a82c10_100%)] px-8 py-10 md:px-14 md:py-14 lg:px-16">
                    <div className="absolute inset-0 opacity-[.08] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:42px_42px]" />

                    {/* DECORATIVE CONNECTIONS */}
                    <svg
                        className="pointer-events-none absolute right-0 top-0 h-full w-[58%] opacity-40"
                        viewBox="0 0 700 430"
                        fill="none"
                    >
                        <path d="M50 360H220L285 280V185L355 115" stroke="white" strokeOpacity=".25" />
                        <path d="M250 430V310L340 220H470L540 160H700" stroke="white" strokeOpacity=".2" />
                        <path d="M420 0V95L500 160V265L610 330H700" stroke="white" strokeOpacity=".22" />
                        <path d="M575 0L535 95L610 160" stroke="white" strokeOpacity=".18" strokeDasharray="8 10" />
                    </svg>

                    <div className="relative z-10 grid min-h-[330px] items-center gap-12 lg:grid-cols-[1fr_1fr]">
                        <div className="max-w-[620px]">
                            <span className="text-[10px] uppercase tracking-[.28em] text-white/55">
                                Prediction Infrastructure
                            </span>

                            <h2 className="mt-5 text-[3.6rem] font-medium leading-[.9] tracking-[-.06em] text-white sm:text-[5rem] lg:text-[6rem]">
                                Price what
                                <br />
                                happens next.
                            </h2>

                            <p className="mt-6 max-w-[520px] text-[15px] leading-7 text-white/70">
                                Trade outcomes, follow live probabilities, and turn collective
                                conviction into a signal you can actually use.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <a
                                    href="#markets"
                                    className="rounded-full bg-white px-5 py-3 text-[11px] font-semibold uppercase tracking-[.16em] text-black transition hover:scale-[1.03]"
                                >
                                    Explore Markets
                                </a>

                                <a
                                    href="#docs"
                                    className="rounded-full border border-white/30 bg-black/10 px-5 py-3 text-[11px] font-semibold uppercase tracking-[.16em] text-white backdrop-blur-sm transition hover:bg-white/10"
                                >
                                    Read Docs
                                </a>
                            </div>
                        </div>

                        {/* RIGHT VISUAL */}
                        <div className="relative hidden h-[300px] lg:block">
                            <div className="absolute left-[10%] top-[42%] h-14 w-14 rounded-[14px] border border-white/15 bg-black/20 backdrop-blur-md" />

                            <div className="absolute left-[38%] top-[12%] flex h-14 w-14 items-center justify-center rounded-[14px] border border-white/20 bg-white/15 backdrop-blur-md">
                                <span className="text-xl">↙</span>
                            </div>

                            <div className="absolute left-[52%] top-[38%] flex h-20 w-20 items-center justify-center rounded-[18px] border border-white/20 bg-[#111]/75 shadow-[0_20px_50px_rgba(0,0,0,.25)] backdrop-blur-md">
                                <span className="text-[11px] font-semibold uppercase tracking-[.2em] text-white">
                                    67%
                                </span>
                            </div>

                            <div className="absolute right-[12%] top-[30%] flex h-14 w-14 items-center justify-center rounded-[14px] border border-white/20 bg-white/90 text-black">
                                <span className="text-[10px] font-bold uppercase">YES</span>
                            </div>

                            <div className="absolute bottom-[8%] left-[28%] flex h-16 w-16 items-center justify-center rounded-[16px] border border-white/20 bg-[#ff9b69]/80 text-black backdrop-blur-md">
                                <span className="text-[10px] font-bold uppercase">LIVE</span>
                            </div>

                            <div className="absolute bottom-[12%] right-[22%] h-11 w-11 rounded-[12px] border border-white/15 bg-black/20 backdrop-blur-md" />
                        </div>
                    </div>
                </div>

                {/* LOWER FOOTER */}
                <div className="mt-[18px] rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,#191919_0%,#101010_60%,#181818_100%)] px-8 py-10 md:px-14 lg:px-16">
                    <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {footerGroups.map((group) => (
                                <div key={group.title}>
                                    <h3 className="text-[14px] font-medium text-white/85">
                                        {group.title}
                                    </h3>

                                    <div className="mt-4 space-y-3">
                                        {group.links.map((link) => (
                                            <a
                                                key={link}
                                                href="#"
                                                className="block text-[12px] text-white/40 transition hover:text-white"
                                            >
                                                {link}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* STATUS CARD */}
                        <div className="rounded-[16px] border border-white/10 bg-white/[.025] p-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-[12px] font-medium text-white/85">
                                        Thesis
                                    </div>
                                    <div className="mt-1 text-[10px] text-white/30">
                                        Market infrastructure
                                    </div>
                                </div>
                            </div>

                            <p className="mt-5 text-[12px] leading-5 text-white/40">
                                Markets live. Prices update continuously as new information enters.
                            </p>

                            <div className="mt-5 flex items-center gap-2">
                                <span className="h-[5px] w-[5px] rounded-full bg-[#f15a29]" />
                                <span className="text-[9px] uppercase tracking-[.18em] text-white/35">
                                    Systems operational
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 text-[10px] text-white/30 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-3">
                            <span className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-white text-black">
                                T
                            </span>
                            <span>Thesis, 2026.</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/10 bg-white/[.03] text-white/60 transition hover:border-white/25 hover:text-white"
                            >
                                <FaXTwitter size={16} />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/10 bg-white/[.03] text-white/60 transition hover:border-white/25 hover:text-white"
                            >
                                <FaGithub size={17} />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/10 bg-white/[.03] text-white/60 transition hover:border-white/25 hover:text-white"
                            >
                                <FaLinkedinIn size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
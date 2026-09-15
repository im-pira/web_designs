import { useState } from "react"
import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6"
const items = ["Work", "Explore", "Stack", "About"]

function Navbar() {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <nav className="fixed top-6 left-0 z-50 w-full px-8">
            <div className="absolute left-10 top-1/2 flex -translate-y-1/2 items-center">
                <img src="/drexo-logo.png" alt="Drexo" className="h-20 w-20 object-contain" />
                <span className="-ml-3 text-lg font-medium tracking-wide text-white/70">Drexo</span>
            </div>
            <div className="relative flex w-full items-center justify-center">
                <div className="flex items-center gap-8 rounded-2xl border border-white/10 bg-white/[0.035] px-7 py-3 shadow-[0_10px_40px_rgba(0,0,0,.35),inset_0_1px_0_rgba(255,255,255,.06)] backdrop-blur-2xl">
                    {items.map((item, index) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onMouseEnter={() => setActiveIndex(index)}
                            className="relative py-1 text-sm font-medium text-white/55 transition-all duration-300 hover:text-white/90"
                        >
                            {item}
                            <span
                                className={`absolute -bottom-2 left-1/2 h-px -translate-x-1/2 bg-[#ff4a2f] shadow-[0_0_8px_rgba(255,74,47,.55),0_0_16px_rgba(255,74,47,.22)] transition-all duration-500 ${activeIndex === index
                                    ? "w-6 opacity-80"
                                    : "w-0 opacity-0"
                                    }`}
                            />
                            <span
                                className={`pointer-events-none absolute left-1/2 -bottom-4 h-8 w-16 -translate-x-1/2 rounded-full bg-[#ff3b1f]/20 blur-xl transition-opacity duration-500 ${activeIndex === index
                                    ? "opacity-100"
                                    : "opacity-0"
                                    }`}
                            />
                        </a>
                    ))}
                </div>
                <div className="absolute right-20 flex items-center gap-5">
                    <div className="flex items-center gap-6">
                        <a href="#" aria-label="Instagram" className="text-white/40 transition-all duration-300 hover:text-white/90">
                            <FaInstagram size={16} />
                        </a>
                        <a href="#" aria-label="GitHub" className="text-white/40 transition-all duration-300 hover:text-white/90">
                            <FaGithub size={16} />
                        </a>
                        <a href="#" aria-label="X" className="text-white/40 transition-all duration-300 hover:text-white/90">
                            <FaXTwitter size={15} />
                        </a>
                    </div>
                    <button className="group relative overflow-hidden rounded-full bg-white/[0.06] px-5 py-2.5 text-sm font-medium text-white/80 ring-1 ring-white/10 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.1] hover:text-white">
                        <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,74,47,.28),transparent_55%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                        <span className="relative z-10 flex items-center gap-2">
                            Book a demo
                            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a3d] shadow-[0_0_8px_rgba(255,90,61,.65)] transition-all duration-300 group-hover:scale-125" />
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
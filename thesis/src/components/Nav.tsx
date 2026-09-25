const Navbar = () => {
    return (
        <nav className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-6 md:px-12 lg:px-16">
            <a href="/" className="flex items-center gap-2.5">
                <img
                    src="/logo.png"
                    alt="Thesis"
                    className="h-6 w-6 rounded-[3px]"
                />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-white">
                    Thesis
                </span>
            </a>

            <div className="hidden items-center gap-12 text-sm text-white/70 md:flex">
                <a href="#markets" className="transition hover:text-white">
                    Markets
                </a>

                <a href="#about" className="transition hover:text-white">
                    About
                </a>

                <a href="#docs" className="transition hover:text-white">
                    Docs
                </a>
            </div>

            <div className="flex items-center gap-2">
                <button className="group relative px-2 py-1.5 text-sm font-medium text-white/55 transition-colors duration-300 hover:text-white/75">
                    Create market

                    <span className="absolute bottom-0 left-2 h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-[calc(100%-1rem)]" />
                </button>

                <button className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_18px_rgba(0,0,0,0.32)] backdrop-blur-xl transition duration-300 hover:-translate-y-[1px] hover:border-white/30 hover:text-white/90 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_24px_rgba(0,0,0,0.38)]">
  Sign in
</button>
            </div>
        </nav>
    )
}

export default Navbar
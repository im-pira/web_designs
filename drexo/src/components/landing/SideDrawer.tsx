import { useState } from "react"

function SideDrawer() {
    const [open, setOpen] = useState(false)

    return (
        <div
            className={`absolute right-0 top-0 z-[60] h-full w-[340px] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${open ? "translate-x-0" : "translate-x-[340px]"
                }`}>
            <aside className="relative h-full w-full bg-black/65 shadow-[-25px_0_70px_rgba(0,0,0,.55)] backdrop-blur-3xl">
                <div className="flex h-full flex-col px-8 py-10">
                    <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-white/30">Quick space</p>
                        <h2 className="mt-3 text-2xl font-medium tracking-tight text-white/90">
                            Keep the good stuff close
                        </h2>
                        <p className="mt-3 max-w-[250px] text-sm leading-4 text-white/40">
                            A quiet place for ideas, links, references, and anything worth coming back to.
                        </p>
                    </div>
                    <div className="mt-10 space-y-1">
                        {["Save an idea", "Drop a reference", "Start a draft"].map((item) => (
                            <button
                                key={item}
                                className="group flex w-full items-center justify-between border-b border-white/[0.06] py-4 text-left text-sm text-white/55 transition hover:text-white/90"
                            >
                                <span>{item}</span>
                                <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a3d]/70 shadow-[0_0_8px_rgba(255,90,61,.45)] transition-transform duration-300 group-hover:scale-125" />
                            </button>
                        ))}
                    </div>
                    <div className="mt-auto translate-y-6 border-t border-white/[0.06] pt-3">
                        <p className="text-xs leading-5 text-white/25">
                            Nothing here has to be finished .ᐟ.ᐟ
                        </p>
                    </div>
                </div>
                <div className="absolute left-0 top-0 h-[calc(100%-172px)] w-[1px] bg-white/15" />
                <div className="absolute bottom-0 left-0 h-[84px] w-[1px] bg-white/15" />
                <button
                    onClick={() => setOpen(!open)}
                    aria-label={open ? "Close side drawer" : "Open side drawer"}
                    className="absolute bottom-20 left-[-34px] flex h-24 w-[36px] items-center justify-center rounded-l-[24px] border border-r-0 border-white/12 bg-black/75 text-lg text-white/45 backdrop-blur-xl transition-all duration-300"
                >
                    {open ? "›" : "‹"}
                </button>
            </aside>
        </div>
    )
}

export default SideDrawer
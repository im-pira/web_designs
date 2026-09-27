export default function Markets() {
  return (
    <section id="markets" className="relative z-20 mt-2 min-h-screen px-1">
      <div className="sticky top-1 h-[calc(100vh-.5rem)] min-h-[720px] overflow-hidden rounded-t-[28px] bg-[#f15a29] text-black shadow-[0_-20px_60px_rgba(0,0,0,.3)]">

        {/* DENSE GRID */}
        <div className="pointer-events-none absolute inset-0 opacity-[.07] [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] [background-size:28px_28px] [background-position:0_0]" />

        <div className="relative mx-auto h-full max-w-[1600px] px-6 py-8 md:px-12 lg:px-16">

          {/* HEADER */}
          <div className="relative z-30 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="hidden h-1 w-1 rounded-full bg-black/30 md:block" />

              <span className="hidden text-[10px] uppercase tracking-[.2em] text-black/35 md:block">
                Prediction Infrastructure
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-black/15 bg-[#f15a29]/60 px-3 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-black" />

              <span className="text-[10px] font-semibold uppercase tracking-[.17em]">
                Markets Live
              </span>
            </div>
          </div>

          {/* CENTERED HERO */}
          <div className="absolute left-1/2 top-[120px] z-20 -translate-x-1/2 text-center">
            <h2 className="doto whitespace-nowrap text-[4.4rem] leading-[.8] tracking-[-.075em] sm:text-[5.5rem] lg:text-[6.5rem] xl:text-[6.8rem]">
              Price the
              <br />
              future.
            </h2>
          </div>

          {/* LAPTOP AREA */}
          <div className="absolute inset-x-0 bottom-0 top-[360px] z-10 flex items-end justify-center px-8 lg:top-[365px] xl:top-[370px]">
            <div className="relative flex max-h-full w-full flex-col items-center pt-10">

              {/* CENTER LABEL */}
              <div className="absolute left-1/2 top-0 hidden h-7 -translate-x-1/2 items-center justify-center gap-3 md:flex">
                <span className="h-px w-10 bg-black/20" />

                <span className="whitespace-nowrap text-[9px] font-medium uppercase leading-none tracking-[.22em] text-black/35">
                  Live Trading Terminal
                </span>

                <span className="h-px w-10 bg-black/20" />
              </div>

              {/* LAPTOP */}
              <div className="aspect-[16/10] max-h-[calc(100%-36px)] w-auto max-w-[min(980px,72vw)] overflow-hidden rounded-[18px] border-[7px] border-[#111] bg-[#080808] shadow-[0_35px_80px_rgba(0,0,0,.38)]">
                <div className="relative h-full w-full">

                  {/* CAMERA */}
                  <span className="absolute left-1/2 top-[3px] z-20 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-white/25" />

                  {/* GLASS HIGHLIGHT */}
                  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-white/[.035] via-transparent to-transparent" />

                  <img
                    src="/sol.png"
                    alt="Prediction market trading interface"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* BASE */}
              <div className="h-[7px] w-[270px] shrink-0 rounded-b-full bg-[#161616] sm:w-[330px]" />
            </div>
          </div>

          {/* FOOTER */}
          <div className="absolute bottom-5 left-8 z-30 hidden text-[9px] font-medium uppercase tracking-[.18em] text-black/40 md:block lg:left-16">
            01 — Markets
          </div>

          <div className="absolute bottom-5 right-8 z-30 hidden text-[9px] font-medium uppercase tracking-[.18em] text-black/40 md:block lg:right-16">
            Scroll to explore ↓
          </div>
        </div>
      </div>
    </section>
  )
}
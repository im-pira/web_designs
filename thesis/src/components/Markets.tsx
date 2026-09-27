export default function Markets() {
  return (
    <section
      id="markets"
      className="relative z-20 mt-2 min-h-screen px-1"
    >
      <div className="sticky top-1 h-[calc(100vh-0.5rem)] overflow-hidden rounded-t-[28px] bg-[#F05A28] text-black shadow-[0_-20px_60px_rgba(0,0,0,0.35)]">
        <div className="relative h-full px-8 py-10 md:px-12 lg:px-16">
          {/* top */}
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.28em] text-black/40">
              Thesis Markets
            </p>
          </div>

          {/* heading */}
          <div className="mt-9 max-w-3xl">
            <h2 className="doto text-5xl leading-[0.88] tracking-[-0.08em] md:text-7xl lg:text-[7rem]">
              Price the
              <br />
              future.
            </h2>
          </div>

          {/* monitor */}
          <div className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 md:block">
            <div className="relative w-[64vw] max-w-[950px]">
              {/* display */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] border-[7px] border-[#111] bg-[#080808] shadow-[0_35px_70px_rgba(0,0,0,0.35)]">
                {/* camera */}
                <span className="absolute left-1/2 top-[3px] z-20 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-white/20" />

                <img
                  src="/sol.png"
                  alt="Thesis trading interface"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* base */}
              <div className="mx-auto h-[6px] w-44 rounded-full bg-[#191919] shadow-[0_8px_20px_rgba(0,0,0,0.28)]" />
            </div>
          </div>

          
        </div>
      </div>
    </section>
  )
}
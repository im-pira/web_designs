const letters: Record<string, string[]> = {
  P: ["11110", "10001", "10001", "11110", "10000", "10000", "10000"],
  r: ["00000", "11110", "10001", "10000", "10000", "10000", "10000"],
  i: ["00100", "00000", "01100", "00100", "00100", "00100", "01110"],
  c: ["00000", "01111", "10000", "10000", "10000", "10000", "01111"],
  e: ["00000", "01110", "10001", "11111", "10000", "10000", "01111"],
  t: ["00100", "00100", "11111", "00100", "00100", "00100", "00011"],
  h: ["10000", "10000", "10110", "11001", "10001", "10001", "10001"],
  f: ["00111", "00100", "11110", "00100", "00100", "00100", "00100"],
  u: ["00000", "10001", "10001", "10001", "10001", "10011", "01101"],
  ".": ["00000", "00000", "00000", "00000", "00000", "00100", "00100"],
  " ": ["000", "000", "000", "000", "000", "000", "000"],
}

function SquareText({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-[8px]">
      {text.split("").map((char, i) => {
        const pattern = letters[char] || letters[" "]

        return (
          <div key={i} className="grid grid-rows-7 gap-[3px]">
            {pattern.map((row, r) => (
              <div key={r} className="flex gap-[3px]">
                {row.split("").map((cell, c) => (
                  <span
                    key={c}
                    className={`h-[9px] w-[9px] ${cell === "1" ? "bg-black" : "bg-transparent"
                      }`}
                  />
                ))}
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default function Markets() {
  return (
    <section id="markets" className="relative z-20 mt-2 min-h-screen px-1">
      <div className="sticky top-1 h-[calc(100vh-.5rem)] min-h-[720px] overflow-hidden rounded-t-[28px] bg-[#f15a29] text-black shadow-[0_-20px_60px_rgba(0,0,0,.3)]">

        <div className="pointer-events-none absolute inset-0 opacity-[.1] [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] [background-size:20px_20px] [background-position:center_top] [mask-image:linear-gradient(to_bottom,black_0%,black_16%,rgba(0,0,0,.75)_30%,rgba(0,0,0,.35)_48%,rgba(0,0,0,.08)_64%,transparent_78%)]" />

        <div className="relative mx-auto h-full max-w-[1600px] px-6 py-8 md:px-12 lg:px-16">
          <div className="relative z-30 flex items-center justify-between">
            <div className="mt-2 flex items-center gap-4">
              <span className="hidden h-1 w-1 rounded-full bg-black/30 md:block" />
              <span className="hidden text-[10px] uppercase tracking-[.2em] text-black/35 md:block">
                Prediction Infrastructure
              </span>
            </div>

            <div className="-mt-[7px] flex items-center gap-2 rounded-full border border-black/15 bg-[#f15a29]/60 px-3 py-1.5 backdrop-blur-sm">
              <span className="h-1 w-1.5 rounded-full bg-black" />
              <span className="text-[10px] font-semibold uppercase tracking-[.17em]">
                Markets Live
              </span>
            </div>
          </div>

          <div className="absolute left-1/2 top-[120px] z-20 -translate-x-1/2 text-center">
            <div className="flex flex-col items-center gap-[10px]">
              <SquareText text="Price the" />
              <SquareText text="future." />
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 top-[355px] z-10 flex items-end justify-center px-6 lg:top-[360px] xl:top-[365px]">
            <div className="relative flex max-h-full w-full flex-col items-center pt-10">

              <div className="absolute left-1/2 top-0 hidden h-7 -translate-x-1/2 items-center justify-center gap-3 md:flex">
                <span className="h-px w-10 bg-black/20" />
                <span className="whitespace-nowrap text-[9px] font-medium uppercase tracking-[.22em] text-black/35">
                  Live Trading Terminal
                </span>
                <span className="h-px w-10 bg-black/20" />
              </div>

              <div className="w-[min(880px,66vw)] h-[540px] overflow-hidden rounded-[20px] border-[7px] border-[#111] bg-[#080808] shadow-[0_35px_80px_rgba(0,0,0,.38)]">
                <div className="relative h-full w-full">
                  <span className="absolute left-1/2 top-[3px] z-20 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-white/25" />
                  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-white/[.035] via-transparent to-transparent" />

                  <img
                    src="/sol.png"
                    alt="Prediction market trading interface"
                    className="h-full w-full object-fill"
                  />
                </div>
              </div>

              <div className="h-[8px] w-[280px] shrink-0 rounded-b-full bg-[#161616] sm:w-[330px]" />
            </div>
          </div>

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
const aboutSteps = [
  {
    number: "01",
    title: "Markets turn uncertainty into signal.",
    text: "Instead of asking what people say, Thesis lets you see what they are willing to price.",
  },
  {
    number: "02",
    title: "Every position carries conviction.",
    text: "Information, belief and capital meet in one place — producing a live view of what the crowd expects next.",
  },
  {
    number: "03",
    title: "The future becomes measurable.",
    text: "As new information arrives, markets move. The signal evolves continuously with the world around it.",
  },
]

export default function About() {
  return (
    <section id="about" className="relative bg-black text-white">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 px-6 md:px-12 lg:grid-cols-[42%_58%] lg:px-16">

        {/* LEFT — STAYS FIXED */}
        <div className="relative hidden lg:block">
          <div className="sticky top-0 flex h-screen items-center">

            <div className="relative flex h-[430px] w-[430px] items-center justify-center">

              {/* OUTER RING */}
              <div className="absolute inset-0 rounded-full border border-white/15" />

              {/* SECOND RING */}
              <div className="absolute inset-[42px] rounded-full border border-white/[.08]" />

              {/* INNER RING */}
              <div className="absolute inset-[105px] rounded-full border border-white/[.12]" />

              {/* ORANGE ARC */}
              <div className="about-ring absolute inset-0 rounded-full border-[2px] border-transparent border-t-[#f15a29] border-r-[#f15a29]/20" />

              {/* CENTER */}
              <div className="relative flex h-[120px] w-[120px] items-center justify-center rounded-full bg-[#f15a29]">
                <span className="text-[11px] font-semibold uppercase tracking-[.22em] text-black">
                  Thesis
                </span>
              </div>

              {/* ORBIT DOT */}
              <div className="absolute left-1/2 top-[-5px] h-[10px] w-[10px] -translate-x-1/2 rounded-full bg-[#f15a29]" />
            </div>

          </div>
        </div>

        {/* RIGHT — SCROLLING TEXT */}
        <div>
          {aboutSteps.map((step) => (
            <div
              key={step.number}
              className="flex min-h-screen items-center lg:pl-14"
            >
              <div className="max-w-[720px]">

                <div className="mb-8 flex items-center gap-4">
                  <span className="text-[10px] tracking-[.25em] text-[#f15a29]">
                    {step.number}
                  </span>

                  <span className="h-px w-10 bg-white/20" />

                  <span className="text-[10px] uppercase tracking-[.22em] text-white/30">
                    About Thesis
                  </span>
                </div>

                <h2 className="max-w-[700px] text-[4rem] font-medium leading-[.92] tracking-[-.055em] md:text-[5rem] xl:text-[6rem]">
                  {step.title}
                </h2>

                <p className="mt-8 max-w-[560px] text-[16px] leading-7 text-white/40 md:text-[18px]">
                  {step.text}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
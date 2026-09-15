function ArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="size-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14M13 6l6 6-6 6"
      />
    </svg>
  );
}

export default function CitySection() {
  return (
    <section className="bg-[#171512] px-5 py-20 text-[#f4f1ea] sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
        <div>
          <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/45">
            In the city
          </p>

          <h2 className="max-w-[620px] text-[clamp(3rem,5.4vw,5.8rem)] font-medium leading-[0.9] tracking-[-0.055em] text-[#f4f1ea]">
            Brixtonis
            <br />
            based in moster,
            <br />
            Bosnia.
          </h2>
        </div>

        <div className="flex flex-col gap-8 lg:pb-2">
          <p className="max-w-[430px] text-[16px] leading-[1.5] tracking-[-0.02em] text-white/72 sm:text-[18px]">
            We are building a store for everyday clothing and useful style
            notes. Store address, hours and contact details will appear here
            when they are confirmed.
          </p>

          <a
            href="#store-information"
            className="group inline-flex h-[64px] w-full max-w-[320px] items-center justify-between rounded-[10px] border border-white/20 px-6 text-[15px] font-medium tracking-[-0.02em] text-[#f4f1ea] transition-all duration-300 hover:border-white/35 hover:bg-white/[0.04]"
          >
            <span>Store information</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
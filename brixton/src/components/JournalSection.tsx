const articles = [
  {
    meta: "01 / WARDROBE · 2 min read",
    title: "Building an everyday wardrobe in moster",
    description:
      "A practical way to plan everyday outfits around your routine, preferred fit and the clothes you already own.",
    image: "/jackets.png",
  },
  {
    meta: "02 / FIT NOTES · 2 min read",
    title: "How to choose a T-shirt fit you will actually wear",
    description:
      "Compare regular and oversized T-shirt fits using shoulder position, body length, sleeve shape and movement.",
    image: "/accessories.png",
  },
  {
    meta: "03 / OUTFIT IDEAS · 2 min read",
    title: "Three ways to wear a casual shirt",
    description:
      "Wear the same casual shirt open, untucked or tucked in by changing the layers and proportions around it.",
    image: "/shirt.png",
  },
];

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="size-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 17 17 7M9 7h8v8"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="size-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14M13 6l6 6-6 6"
      />
    </svg>
  );
}

export default function JournalSection() {
  return (
    <section
      id="journal"
      className="bg-[#f8f7f4] px-5 py-20 sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-9 flex items-end justify-between gap-8">
          <div>
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-black/45">
              The journal
            </p>

            <h2 className="text-[clamp(2.8rem,4.5vw,4.6rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-[#11110f]">
              Ideas for getting dressed.
            </h2>
          </div>

          <a
            href="#all-articles"
            className="group hidden items-center gap-2 border-b border-black pb-1 text-[12px] font-medium tracking-[-0.02em] text-black lg:flex"
          >
            Read all articles

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight />
            </span>
          </a>
        </div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-6">
          {articles.map((article) => (
            <a
              key={article.title}
              href="#article"
              className="group block"
            >
              <div className="relative aspect-[1.22] overflow-hidden rounded-[10px] bg-[#efeeea]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />

                <div className="absolute bottom-3 left-3">
                  <span className="rounded-full border border-black/[0.05] bg-[#f8f7f4]/90 px-2.5 py-1 text-[8px] font-medium uppercase tracking-[0.13em] text-black/60 backdrop-blur-md">
                    Style reference
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-[10px] uppercase tracking-[0.06em] text-black/45">
                  {article.meta}
                </p>

                <div className="mt-3 flex items-start justify-between gap-5">
                  <h3 className="max-w-[300px] text-[20px] font-medium leading-[1.08] tracking-[-0.035em] text-[#11110f]">
                    {article.title}
                  </h3>

                  <span className="mt-1 shrink-0 text-black/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowUpRight />
                  </span>
                </div>

                <p className="mt-4 max-w-[340px] text-[13px] leading-[1.55] tracking-[-0.015em] text-black/55">
                  {article.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        <a
          href="#all-articles"
          className="mt-10 inline-flex items-center gap-2 border-b border-black pb-1 text-[12px] font-medium lg:hidden"
        >
          Read all articles
          <ArrowRight />
        </a>
      </div>
    </section>
  );
}
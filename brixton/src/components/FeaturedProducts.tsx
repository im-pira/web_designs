const products = [
  {
    category: "T-shirts",
    name: "Everyday crew T-shirt",
    price: "₹699",
    detail: "Black / White",
    image: "/t-shirts.png",
  },
  {
    category: "Shirts",
    name: "Weekend shirt",
    price: "₹1,299",
    detail: "White / Blue",
    image: "/shirt.png",
  },
  {
    category: "Jackets",
    name: "Lightweight jacket",
    price: "₹2,299",
    detail: "Black / Stone",
    image: "/jackets.png",
  },
  {
    category: "Caps",
    name: "Everyday cap",
    price: "₹599",
    detail: "Black / Stone",
    image: "/caps.png",
  },
];

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="size-3.5"
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
      className="size-3.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14M13 6l6 6-6 6"
      />
    </svg>
  );
}

export default function FeaturedProducts() {
  const [featured, ...rest] = products;

  return (
    <section className="bg-[#f8f7f4] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-[1080px]">
        <div className="mb-8 flex items-end justify-between gap-8">
          <div>
            <p className="mb-2 text-[8px] font-semibold uppercase tracking-[0.24em] text-black/40">
              Sample catalogue
            </p>

            <h2 className="max-w-[650px] text-[clamp(2.4rem,3.8vw,3.8rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-[#11110f]">
              A few good places to start.
            </h2>
          </div>

          <a
            href="#all-styles"
            className="group hidden items-center gap-2 border-b border-black/60 pb-1 text-[11px] font-medium tracking-[-0.02em] lg:flex"
          >
            View all styles

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight />
            </span>
          </a>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <a href="#product" className="group block">
            <div className="relative h-[440px] overflow-hidden rounded-[6px] bg-[#efeeea] lg:h-[500px]">
              <img
                src={featured.image}
                alt={featured.name}
                className="h-full w-full object-contain object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
              />

              <div className="absolute left-4 top-4 flex items-center gap-3">
                <span className="text-[8px] font-semibold tracking-[0.18em] text-black/35">
                  01
                </span>

                <span className="h-px w-7 bg-black/20" />
              </div>

              <div className="absolute bottom-4 left-4">
                <span className="bg-[#f8f7f4]/92 px-2.5 py-1 text-[7px] font-medium uppercase tracking-[0.14em] text-black/55 backdrop-blur-sm">
                  Style reference
                </span>
              </div>
            </div>

            <div className="mt-3 border-t border-black/[0.08] pt-3">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.16em] text-black/40">
                    {featured.category}
                  </p>

                  <h3 className="mt-1.5 text-[19px] font-medium tracking-[-0.035em] text-[#11110f]">
                    {featured.name}
                  </h3>
                </div>

                <span className="mt-1 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight />
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-[15px] font-medium tracking-[-0.025em]">
                  {featured.price}
                </span>

                <span className="text-[10px] text-black/40">
                  {featured.detail}
                </span>
              </div>
            </div>
          </a>

          <div className="flex flex-col">
            {rest.map((product, index) => (
              <a
                key={product.name}
                href="#product"
                className="group grid min-h-[160px] grid-cols-[120px_1fr] gap-5 border-t border-black/[0.08] py-4 first:pt-0 lg:grid-cols-[135px_1fr]"
              >
                <div className="relative h-[145px] overflow-hidden rounded-[5px] bg-[#efeeea]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  <span className="absolute left-2.5 top-2.5 text-[7px] font-semibold tracking-[0.16em] text-black/35">
                    0{index + 2}
                  </span>
                </div>

                <div className="flex min-w-0 flex-col justify-between py-1">
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.16em] text-black/40">
                      {product.category}
                    </p>

                    <div className="mt-2 flex items-start justify-between gap-4">
                      <h3 className="text-[16px] font-medium leading-[1.15] tracking-[-0.03em] text-[#11110f]">
                        {product.name}
                      </h3>

                      <span className="shrink-0 text-black/55 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        <ArrowUpRight />
                      </span>
                    </div>
                  </div>

                  <div className="flex items-end justify-between gap-4">
                    <span className="text-[14px] font-medium tracking-[-0.02em]">
                      {product.price}
                    </span>

                    <span className="text-right text-[10px] text-black/40">
                      {product.detail}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <a
          href="#all-styles"
          className="mt-10 inline-flex items-center gap-2 border-b border-black/60 pb-1 text-[11px] font-medium lg:hidden"
        >
          View all styles
          <ArrowRight />
        </a>
      </div>
    </section>
  );
}
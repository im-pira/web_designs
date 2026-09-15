const categories = [
  { name: "T-shirts", image: "/t-shirts.png" },
  { name: "Shirts", image: "/shirt.png" },
  { name: "Pants", image: "/pants.png" },
  { name: "Jackets", image: "/jackets.png" },
  { name: "Trousers", image: "/trousers.png" },
  { name: "Sweatpants", image: "/sweatpants.png" },
  { name: "Tank tops", image: "/tanks.png" },
  { name: "Caps", image: "/caps.png" },
  { name: "Accessories", image: "/accessories.png" },
  { name: "Socks", image: "/socks.png" },
];
function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
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
      strokeWidth="1.6"
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

export default function Categories() {
  return (
    <section
      id="shop"
      className="bg-[#f8f7f4] px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-8 flex items-end justify-between gap-8">
          <div>
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-black/45">
              Start here
            </p>

            <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-[#11110f]">
              Find your shape.
            </h2>
          </div>

          <a
            href="#all-categories"
            className="group hidden items-center gap-2 border-b border-black pb-1 text-[12px] font-medium tracking-[-0.02em] text-black lg:flex"
          >
            Shop every category

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight />
            </span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-4 lg:gap-y-8">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href={`#${category.name.toLowerCase().replaceAll(" ", "-")}`}
              className="group block"
            >
              <div className="relative aspect-[0.9] overflow-hidden rounded-[10px] bg-[#eeede9]">
                <div className="absolute inset-3 flex items-center justify-center overflow-hidden rounded-[7px]">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading={index < 5 ? "eager" : "lazy"}
                    className="h-full w-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.02]" />

                <div className="absolute bottom-2.5 left-2.5">
                  <span className="rounded-full border border-black/[0.05] bg-[#f8f7f4]/90 px-2.5 py-1 text-[8px] font-medium uppercase tracking-[0.13em] text-black/60 backdrop-blur-md">
                    Style reference
                  </span>
                </div>
              </div>

              <div className="mt-2.5 flex items-center justify-between">
                <h3 className="text-[14px] font-medium tracking-[-0.02em] text-[#11110f]">
                  {category.name}
                </h3>

                <span className="text-black/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black">
                  <ArrowUpRight />
                </span>
              </div>
            </a>
          ))}
        </div>

        <a
          href="#all-categories"
          className="mt-10 inline-flex items-center gap-2 border-b border-black pb-1 text-[12px] font-medium lg:hidden"
        >
          Shop every category
          <ArrowRight />
        </a>
      </div>
    </section>
  );
}
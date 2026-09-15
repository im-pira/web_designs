const navItems = ["Shop", "Journal", "Our story", "Find us"];

function HeartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="size-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="size-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
      />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="size-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 8h12l1 13H5L6 8Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 10V6a3 3 0 0 1 6 0v4"
      />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="flex h-8 items-center justify-center bg-[#1d1915] px-4 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f5f1ea] sm:text-[11px]">
        Brixton Preview · Browse the working store experience
      </div>

      <nav className="border-b border-black/[0.06] bg-[#f8f7f4]/72 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-[#f8f7f4]/62">
        <div className="mx-auto flex h-[68px] max-w-[1500px] items-center px-5 sm:px-8 lg:px-12">
          <a
            href="/"
            className="flex shrink-0 items-center text-black"
            aria-label="Brixton home"
          >
            <span className="text-[23px] font-black uppercase leading-none tracking-[-0.08em] sm:text-[27px]">
              Brixton
            </span>

            <span className="ml-1.5 -translate-y-[5px] text-[8px] font-bold uppercase tracking-[-0.02em] sm:text-[9px]">
              moster
            </span>
          </a>

          <div className="ml-16 hidden items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                className="group relative py-3 text-[14px] font-medium tracking-[-0.02em] text-black/80 transition-colors duration-200 hover:text-black"
              >
                {item}

                <span className="absolute inset-x-0 bottom-1 h-px origin-left scale-x-0 bg-black transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              aria-label="Wishlist"
              className="flex size-10 items-center justify-center rounded-full text-black/80 transition-all duration-200 hover:bg-black/[0.05] hover:text-black"
            >
              <HeartIcon />
            </button>

            <button
              type="button"
              aria-label="Toggle theme"
              className="hidden size-10 items-center justify-center rounded-full text-black/80 transition-all duration-200 hover:bg-black/[0.05] hover:text-black sm:flex"
            >
              <MoonIcon />
            </button>

            <button
              type="button"
              aria-label="Shopping bag"
              className="relative flex size-10 items-center justify-center rounded-full text-black/80 transition-all duration-200 hover:bg-black/[0.05] hover:text-black"
            >
              <BagIcon />

              <span className="absolute -right-0.5 -top-0.5 flex size-[17px] items-center justify-center rounded-full bg-[#c94727] text-[9px] font-bold text-white">
                0
              </span>
            </button>

            <button
              type="button"
              aria-label="Open menu"
              className="ml-1 flex size-10 flex-col items-center justify-center gap-[5px] rounded-full transition-colors hover:bg-black/[0.05] lg:hidden"
            >
              <span className="h-px w-[18px] bg-black" />
              <span className="h-px w-[18px] bg-black" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
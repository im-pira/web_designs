import { useEffect, useRef, useState } from "react";

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

export default function Hero() {
  const [visible, setVisible] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 80);

    let ticking = false;

    const updateParallax = () => {
      if (
        !sectionRef.current ||
        !textRef.current ||
        !imageRef.current
      ) {
        ticking = false;
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const progress = viewportHeight * 0.35 - rect.top;

      const clamped = Math.max(
        0,
        Math.min(progress, 1200)
      );

      const textY = clamped * 0.1;
      const imageY = clamped * 0.3;

      const imageScale =
        1.05 + Math.min(clamped * 0.00005, 0.035);

      textRef.current.style.transform = `
        translate3d(-50%, calc(-50% + ${textY}px), 0)
      `;

      imageRef.current.style.transform = `
        translate3d(-50%, calc(-50% + ${imageY}px), 0)
        scale(${imageScale})
      `;

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    updateParallax();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100dvh-100px)] overflow-hidden bg-[#f4f3f0]"
    >
      <div className="relative mx-auto min-h-[calc(100dvh-100px)] max-w-[1700px] px-5 sm:px-8 lg:px-12">

        {/* Brixton TEXT */}
        <div
          ref={textRef}
          className={`pointer-events-none absolute left-1/2 top-[50%] z-0 w-full will-change-transform transition-opacity duration-1000 ease-out ${visible ? "opacity-100" : "opacity-0"
            }`}
        >
          <h1 className="select-none whitespace-nowrap text-center text-[clamp(6.8rem,16.8vw,16rem)] font-black uppercase leading-[0.7] tracking-[-0.075em] text-[#0d0d0c]">
            Brixton
          </h1>
        </div>

        {/* MODEL IMAGE */}
        <div
          ref={imageRef}
          className={`absolute left-1/2 top-[51%] z-20 h-[98%] max-h-[960px] min-h-[660px] will-change-transform transition-opacity delay-150 duration-[1200ms] ease-out ${visible ? "opacity-100" : "opacity-0"
            }`}
        >
          <img
            src="/hero.png"
            alt="Brixton menswear campaign"
            className="h-full w-auto object-contain drop-shadow-[0_26px_36px_rgba(0,0,0,0.12)]"
          />
        </div>

        {/* LEFT COPY */}
        <div
          className={`absolute bottom-8 left-5 z-30 max-w-[285px] transition-all delay-300 duration-700 ease-out sm:left-8 lg:bottom-10 lg:left-12 ${visible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
            }`}
        >
          <p className="text-[13px] leading-[1.45] tracking-[-0.02em] text-black/75 sm:text-[14px]">
            Born in moster. Built for everyday movement. Brixton is clothing
            without the noise — simple pieces, strong shape, no compromise.
          </p>

          <a
            href="#shop"
            className="group mt-5 inline-flex items-center gap-2 rounded-full bg-[#11110f] px-4 py-2.5 text-[11px] font-medium text-white transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#ca3919]"
          >
            <span>Shop now</span>

            <span className="flex size-6 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight />
            </span>
          </a>
        </div>

        {/* STYLE INSPIRATION */}
        <div
          className={`absolute left-1/2 top-[72%] z-30 hidden -translate-x-1/2 transition-all delay-[500ms] duration-700 lg:block ${visible ? "opacity-100" : "opacity-0"
            }`}
        >
          <a
            href="#credits"
            className="group flex items-center gap-2 rounded-full border border-black/[0.08] bg-[#f4f3f0]/80 px-3 py-1.5 text-[8px] font-medium uppercase tracking-[0.12em] text-black/55 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
          >
            <span>Style inspiration</span>

            <span className="transition-transform duration-300 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]">
              ↗
            </span>
          </a>
        </div>

        {/* TOP LEFT */}
        <div className="absolute left-5 top-7 z-30 hidden items-center gap-3 lg:flex">
          <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/40">
            Brixton / moster
          </span>

          <span className="h-px w-8 bg-black/20" />
        </div>

        {/* TOP RIGHT */}
        <div className="absolute right-5 top-7 z-30 hidden lg:block">
          <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/40">
            © 2026 / 01
          </span>
        </div>
      </div>
    </section>
  );
}
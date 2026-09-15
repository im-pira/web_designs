import { useEffect, useRef, useState } from "react";

const exploreLinks = [
    "Shop all",
    "The journal",
    "Our story",
    "Our moster store",
];

const helpLinks = [
    "Size guide",
    "Shipping & returns",
    "Frequently asked questions",
    "Your cart",
];

const categories = ["T-shirts", "Shirts", "Pants", "Jackets", "Trousers"];

const legalLinks = [
    "Store details",
    "Privacy",
    "Cookies",
    "Image credits",
    "Terms",
    "Sitemap",
];

function FooterLink({ children }: { children: React.ReactNode }) {
    return (
        <a
            href="#"
            className="group relative w-fit text-[14px] tracking-[-0.025em] text-[#1a1917]/75 transition-colors duration-300 hover:text-[#11110f]"
        >
            {children}

            <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-[#11110f] transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
        </a>
    );
}

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = footerRef.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.15,
            },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const reveal = visible
        ? "translate-y-0 opacity-100"
        : "translate-y-6 opacity-0";

    return (
        <footer
            ref={footerRef}
            className="border-t border-black/[0.07] bg-[#f8f7f4] px-5 pb-8 pt-20 sm:px-8 lg:px-12 lg:pb-10 lg:pt-24"
        >
            <div className="mx-auto max-w-[1400px]">
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1.05fr_0.7fr] lg:gap-20">
                    <div
                        className={`transition-all duration-700 ease-out ${reveal}`}
                    >
                        <a
                            href="#"
                            className="inline-flex items-center"
                            aria-label="Brixton"
                        >
                            <span className="text-[17px] font-black uppercase leading-[0.70] tracking-[-0.040em] text-[#11110f]">
                                Brixton
                            </span>
                        </a>

                        <div className="mt-5 space-y-1.5">
                            <p className="text-[15px] tracking-[-0.03em] text-[#1a1917]/80">
                                Everyday style.
                            </p>

                            <p className="text-[15px] tracking-[-0.03em] text-[#1a1917]/80">
                                moster, Bosnia.
                            </p>
                        </div>
                    </div>

                    <div
                        className={`transition-all delay-75 duration-700 ease-out ${reveal}`}
                    >
                        <h3 className="mb-5 text-[16px] font-semibold tracking-[-0.035em] text-[#11110f]">
                            Explore
                        </h3>

                        <div className="flex flex-col gap-3">
                            {exploreLinks.map((link) => (
                                <FooterLink key={link}>{link}</FooterLink>
                            ))}
                        </div>
                    </div>

                    <div
                        className={`transition-all delay-150 duration-700 ease-out ${reveal}`}
                    >
                        <h3 className="mb-5 text-[16px] font-semibold tracking-[-0.035em] text-[#11110f]">
                            Shopping help
                        </h3>

                        <div className="flex flex-col gap-3">
                            {helpLinks.map((link) => (
                                <FooterLink key={link}>{link}</FooterLink>
                            ))}
                        </div>
                    </div>

                    <div
                        className={`transition-all delay-[225ms] duration-700 ease-out ${reveal}`}
                    >
                        <h3 className="mb-5 text-[16px] font-semibold tracking-[-0.035em] text-[#11110f]">
                            Categories
                        </h3>

                        <div className="flex flex-col gap-3">
                            {categories.map((link) => (
                                <FooterLink key={link}>{link}</FooterLink>
                            ))}
                        </div>
                    </div>
                </div>

                <div
                    className={`mt-20 flex flex-col gap-6 border-t border-black/[0.06] pt-6 transition-all delay-300 duration-700 ease-out lg:mt-24 lg:flex-row lg:items-center lg:justify-between ${reveal}`}
                >
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                        <span className="text-[12px] tracking-[-0.02em] text-black/45">
                            India · INR ₹
                        </span>

                        {legalLinks.map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="text-[12px] tracking-[-0.02em] text-black/45 transition-colors duration-200 hover:text-black"
                            >
                                {link}
                            </a>
                        ))}
                    </div>

                    <p className="text-[12px] tracking-[-0.02em] text-black/45">
                        © 2026 Brixton
                    </p>
                </div>
            </div>
        </footer>
    );
}
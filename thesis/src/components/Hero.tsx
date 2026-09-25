const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-black">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src="/car.mov" />
            </video>

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 flex min-h-screen items-end px-6 pb-16 md:px-12 lg:px-16">
                <div className="max-w-4xl">
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/60">
                        Prediction Markets
                    </p>

                    <h1 className="text-5xl font-medium leading-[0.95] tracking-[-0.05em] text-white md:text-7xl lg:text-8xl">
                        Trade what
                        <br />
                        happens next.
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-7 text-white/70 md:text-lg">
                        Trade real-world outcomes, follow live probabilities, and watch
                        markets move in real time.
                    </p>

                    <div className="mt-8 flex gap-3">
                        <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black">
                            Explore Markets
                        </button>

                        <button className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
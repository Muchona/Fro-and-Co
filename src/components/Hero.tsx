import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AppBadges from './AppBadges';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax for the big text
            gsap.to(".big-text", {
                y: 100,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Image float
            gsap.to(".hero-img", {
                y: -50,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-[110vh] w-full pt-32 pb-20 overflow-hidden flex flex-col items-center justify-start bg-fro-bg">

            {/* Background Text Layer */}
            <div ref={textRef} className="absolute top-[15%] w-full text-center z-0 pointer-events-none big-text px-4">
                <h1 className="text-[18vw] leading-[0.8] font-black text-white mix-blend-overlay tracking-tighter">
                    ROASTY<br />
                    AROMA
                </h1>
            </div>

            {/* Central Image Layer */}
            <div className="relative z-10 mt-10 hero-img">
                {/* Main Cup */}
                <img
                    src="hero-cup.png"
                    alt="Fro & Co Special"
                    className="w-[350px] md:w-[500px] object-contain drop-shadow-2xl"
                />

                {/* Floating Elements (Decorative) */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-fro-dark/20 rounded-full blur-xl animate-pulse"></div>
            </div>

            {/* Foreground Elements */}
            <div className="relative z-20 mt-10 flex flex-col items-center gap-10">
                <p className="max-w-md text-center text-white/80 text-sm md:text-base font-medium px-4">
                    From warm breads to delightful pastries, made with love and the finest ingredients.
                </p>

                <div className="flex flex-col items-center mt-48 md:mt-10">
                    <AppBadges size="lg" className="justify-center" />
                </div>
            </div>

            {/* Tape Strip */}
            <div className="absolute bottom-[15%] w-[110%] -rotate-3 bg-fro-dark py-4 z-30 flex shadow-xl overflow-hidden">
                {/* Track 1 */}
                <div className="flex gap-12 whitespace-nowrap animate-marquee-reverse shrink-0 min-w-full justify-around px-6">
                    {[...Array(6)].map((_, i) => (
                        <span key={i} className="text-2xl md:text-4xl font-black text-transparent stroke-text uppercase">
                            COFFEE ROASTED BLACK
                        </span>
                    ))}
                </div>
                {/* Track 2 (Clone) */}
                <div className="flex gap-12 whitespace-nowrap animate-marquee-reverse shrink-0 min-w-full justify-around px-6">
                    {[...Array(6)].map((_, i) => (
                        <span key={i} className="text-2xl md:text-4xl font-black text-transparent stroke-text uppercase">
                            COFFEE ROASTED BLACK
                        </span>
                    ))}
                </div>
            </div>

            {/* Custom style for outlines text in tape */}
            <style>{`
         .stroke-text {
            -webkit-text-stroke: 1px rgba(255,255,255,0.8);
         }
       `}</style>
        </section>
    );
}

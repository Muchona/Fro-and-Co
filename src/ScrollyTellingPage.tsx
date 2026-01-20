import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import ScrollCanvas from './components/ScrollCanvas';

export default function ScrollyTellingPage() {
    const containerRef = useRef<HTMLDivElement>(null);

    // We need to track the same scroll progress as the canvas to sync text
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Helper for Opacity/Y transforms based on scroll ranges
    const useBeat = (start: number, end: number) => {
        const opacity = useTransform(
            scrollYProgress,
            [start, start + 0.1, end - 0.1, end],
            [0, 1, 1, 0]
        );
        const y = useTransform(
            scrollYProgress,
            [start, end],
            [20, -20]
        );
        return { opacity, y };
    };

    const beatA = useBeat(0, 0.20);
    const beatB = useBeat(0.25, 0.45);
    const beatC = useBeat(0.50, 0.70);
    const beatD = useBeat(0.75, 0.95);

    return (
        <main ref={containerRef} className="bg-charcoal min-h-screen">
            {/* The Canvas acts as the background/visual anchor */}
            <div className="fixed inset-0 z-0">
                <ScrollCanvas />
            </div>

            {/* Scroll Height Spacer - Same as Canvas Container */}
            <div className="relative z-10 h-[400vh] pointer-events-none">

                {/* BEAT A: 0-20% */}
                <div className="absolute top-0 w-full h-screen flex flex-col items-center justify-center text-center p-6">
                    <motion.div style={beatA}>
                        <h1 className="text-7xl md:text-9xl font-bold text-white/90 tracking-tighter mb-4">
                            ORIGIN
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 font-light font-sans max-w-lg mx-auto">
                            Every great journey begins with a single bean.
                        </p>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-10 text-white/40 text-xs font-mono uppercase tracking-widest"
                        style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                    >
                        Scroll to Explore
                    </motion.div>
                </div>

                {/* BEAT B: 25-45% (Left Aligned) */}
                <div className="absolute top-[100vh] w-full h-screen flex items-center justify-start p-6 md:pl-32">
                    <motion.div style={beatB} className="max-w-xl text-left">
                        <h2 className="text-6xl md:text-8xl font-bold text-white/90 tracking-tighter mb-4">
                            ROAST
                        </h2>
                        <p className="text-xl text-white/60 font-sans border-l-2 border-toasted-gold pl-6">
                            Heat meets potential. Unlocking flavors hidden deep within the structure.
                        </p>
                        <p className="mt-4 text-sm text-toasted-gold font-mono uppercase tracking-widest">
                            * Maillard Reaction in Progress
                        </p>
                    </motion.div>
                </div>

                {/* BEAT C: 50-70% (Right Aligned) */}
                <div className="absolute top-[200vh] w-full h-screen flex items-center justify-end p-6 md:pr-32">
                    <motion.div style={beatC} className="max-w-xl text-right">
                        <h2 className="text-6xl md:text-8xl font-bold text-white/90 tracking-tighter mb-4">
                            BREW
                        </h2>
                        <p className="text-xl text-white/60 font-sans border-r-2 border-toasted-gold pr-6">
                            Precision extraction. controlled variables. The perfect cup emerging from chaos.
                        </p>
                        <p className="mt-4 text-sm text-toasted-gold font-mono uppercase tracking-widest">
                            * 9 Bars of Pressure
                        </p>
                    </motion.div>
                </div>

                {/* BEAT D: 75-95% (Centered CTA) */}
                <div className="absolute top-[300vh] w-full h-screen flex flex-col items-center justify-center text-center p-6">
                    <motion.div style={beatD}>
                        <h2 className="text-6xl md:text-8xl font-bold text-white/90 tracking-tighter mb-8">
                            TASTE
                        </h2>
                        <p className="text-2xl text-white/60 font-sans mb-12">
                            Experience the pinnacle of coffee engineering.
                        </p>
                        <button className="bg-toasted-gold text-charcoal text-lg font-bold uppercase tracking-widest py-6 px-12 rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_40px_rgba(196,164,132,0.4)] pointer-events-auto">
                            Shop Collection
                        </button>
                    </motion.div>
                </div>

            </div>
        </main>
    );
}

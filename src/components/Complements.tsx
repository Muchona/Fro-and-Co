import { motion } from 'framer-motion';

export default function Complements() {
    const snacks = [
        { name: "Croissants", src: "/snacks/croissant.png", angle: 0 },
        { name: "Cookies", src: "/snacks/cookies.png", angle: 72 },
        { name: "Doughnuts", src: "/snacks/donuts.png", angle: 144 },
        { name: "Muffins", src: "/snacks/muffin.png", angle: 216 },
        { name: "Cinnamon Rolls", src: "/snacks/cinnamon.png", angle: 288 },
    ];

    const radius = 280;

    return (
        <section className="py-24 bg-[#FDFBF7] overflow-hidden relative min-h-screen flex flex-col items-center justify-center">
            <h2 className="text-5xl md:text-6xl font-script font-bold text-fro-dark mb-8 z-10 drop-shadow-sm">Best to go with coffee</h2>

            <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center">

                {/* Center Piece: White Cup + Saucer + Coffee Beans */}
                {/* We use a specific image that mimics the reference (Cup on saucer) */}
                <div className="relative z-20 w-56 h-56 md:w-80 md:h-80 flex items-center justify-center">
                    <img
                        src="/latte-center.png"
                        alt="Latte Art"
                        // multiply blend to remove white bg if present, or just rounded
                        className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Orbit Container */}
                <motion.div
                    className="absolute inset-0 z-10 w-full h-full pointer-events-none"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                >
                    {snacks.map((snack, i) => {
                        return (
                            <div
                                key={i}
                                className="absolute top-1/2 left-1/2 -ml-16 -mt-16 w-32 h-32 flex flex-col items-center justify-center"
                                style={{
                                    transform: `rotate(${snack.angle}deg) translate(${radius}px) rotate(-${snack.angle}deg)`
                                }}
                            >
                                {/* Counter-Rotation */}
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                                    className="flex flex-col items-center gap-3 relative group pointer-events-auto cursor-pointer"
                                >
                                    {/* Connector Doodle (Fades in on hover) */}
                                    <svg className="absolute top-1/2 left-1/2 -z-10 w-32 h-32 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-fro-dark">
                                        <path d="M16,64 Q64,32 112,64" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                                    </svg>

                                    {/* Image - Floating, No Frame */}
                                    {/* mix-blend-multiply makes the white bg of the stock photo invisible on the cream page */}
                                    <div className="w-32 h-32 md:w-40 md:h-40 transition-transform duration-300 group-hover:scale-110">
                                        <img
                                            src={snack.src}
                                            alt={snack.name}
                                            className="w-full h-full object-contain contrast-110 drop-shadow-lg"
                                        />
                                    </div>

                                    {/* Floating Label */}
                                    <span className="text-fro-dark font-bold text-xs uppercase tracking-wide opacity-100 mt-3 drop-shadow-sm">
                                        {snack.name}
                                    </span>
                                </motion.div>
                            </div>
                        )
                    })}
                </motion.div>

            </div>
        </section>
    );
}

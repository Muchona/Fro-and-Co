import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Star, Heart, Coffee } from 'lucide-react';

export default function AboutPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div ref={containerRef} className="bg-fro-bg min-h-screen text-white overflow-hidden relative">

            {/* Parallax Hero */}
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-[url('/gallery/item_5.jpg')] bg-cover bg-center opacity-40 blur-sm scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-fro-bg" />
                </motion.div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-32">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-fro-pink font-mono text-sm tracking-[0.4em] uppercase mb-6 block"
                    >
                        Est. 2021
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-6xl md:text-8xl font-serif font-black mb-8 leading-tight"
                    >
                        Crafting Moments,<br />Brewing Dreams.
                    </motion.h1>
                </div>
            </div>

            {/* Our Story Content */}
            <section className="py-32 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                        {/* Image Composition */}
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-lg overflow-hidden border border-white/10 relative z-10">
                                <img src="gallery/item_1.jpg" alt="Interior" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute top-10 -right-10 w-2/3 aspect-square rounded-lg overflow-hidden border border-white/10 z-20 shadow-2xl hidden md:block">
                                <img src="gallery/item_2.jpg" alt="Coffee Detail" className="w-full h-full object-cover" />
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-fro-pink/10 rounded-full blur-3xl" />
                        </div>

                        {/* Text Content - User Provided */}
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Story</h2>

                            <div className="space-y-6 text-white/70 text-lg leading-relaxed font-sans">
                                <p>
                                    Fro & Co opened on Glaslough Street in Monaghan Town at the end of May 2021.
                                    The cafe specialises in frozen yogurt, as well as barista coffee, baked goods,
                                    and toasties. Fro & Co is your ultimate destination for a warm and inviting
                                    coffee experience, serving up beautiful coffee, rich hot chocolate, and so much more.
                                </p>
                                <p>
                                    This charming café exudes Italian-style coffee excellence, offering many delightful
                                    coffee creations that cater to every palate. From their expertly crafted coffee to
                                    indulgent hot chocolate, Fro & Co is where every sip is a journey through Italian
                                    coffee artistry.
                                </p>
                                <p>
                                    With its inviting atmosphere and a dedication to culinary excellence, this café stands
                                    as a testament to the perfect blend of great coffee and heartwarming hospitality.
                                    Come and savour the flavours of Fro & Co – where every cup is a masterpiece, and
                                    every visit is a warm, welcoming experience.
                                </p>
                            </div>

                            <div className="pt-8 border-t border-white/10">
                                <p className="font-serif italic text-2xl text-white">"A warm & welcoming experience."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-20 bg-black/20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Coffee,
                                title: "Italian Excellence",
                                desc: "Expertly crafted coffee that serves as a journey through Italian artistry."
                            },
                            {
                                icon: Star,
                                title: "Culinary Dedication",
                                desc: "Specializing in frozen yogurt, baked goods, and toasties made with passion."
                            },
                            {
                                icon: Heart,
                                title: "Warm Hospitality",
                                desc: "An inviting atmosphere where every visit feels like coming home."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                                <item.icon className="w-8 h-8 text-fro-pink mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-serif font-bold mb-4">{item.title}</h3>
                                <p className="text-white/60">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}

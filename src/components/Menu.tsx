import { motion } from 'framer-motion';

export default function Menu() {
    const menuItems = [
        {
            id: 1,
            title: "Original",
            desc: "Signature blend cheese & sourdough",
            price: "5.50"
        },
        {
            id: 2,
            title: "Hambo",
            desc: "Honey baked ham, cheese & sourdough",
            price: "6.50"
        },
        {
            id: 3,
            title: "Pulled Pork",
            desc: "Prime pulled pork, BBQ & sourdough",
            price: "6.50"
        },
        {
            id: 4,
            title: "Chicken Classic",
            desc: "Gourmet chicken & sourdough",
            price: "6.50"
        },
        {
            id: 5,
            title: "Veggie",
            desc: "Rocket, sundried tomatoes, pesto",
            price: "5.50"
        }
    ];

    const toppings = ["Cheese", "Baked Ham", "Chicken", "Rocket", "Pesto", "Sundried Tomatoes", "Red Onion"];
    const sauces = ["Relish", "BBQ", "Mayo", "Garlic Mayo"];

    return (
        <section className="py-20 bg-gradient-to-br from-[#3E2723] to-[#1a0f0d] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 -left-40 w-80 h-80 bg-fro-pink/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 -right-40 w-80 h-80 bg-orange-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">Our Menu</h2>
                    <p className="text-white/60 italic max-w-2xl mx-auto">Freshly made toasties & wraps, grilled to perfection.</p>
                </div>

                <div className="max-w-4xl mx-auto bg-[#251614]/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative">
                    {/* Chalkboard Header */}
                    <div className="text-center mb-12 border-b border-white/10 pb-8">
                        <h3 className="text-4xl font-script text-fro-pink mb-2">Toasties & Wraps</h3>
                        <div className="w-24 h-1 bg-fro-pink mx-auto rounded-full opacity-50" />
                    </div>

                    {/* Menu Items */}
                    <div className="grid grid-cols-1 gap-8 mb-16">
                        {menuItems.map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: item.id * 0.1 }}
                                className="flex justify-between items-end group border-b border-white/5 pb-4 last:border-0 hover:bg-white/5 p-4 rounded-lg transition-colors"
                            >
                                <div>
                                    <div className="flex items-baseline gap-4 mb-1">
                                        <span className="text-white/40 font-mono text-sm">0{item.id}.</span>
                                        <h4 className="text-xl md:text-2xl font-serif font-bold text-white group-hover:text-fro-pink transition-colors">{item.title}</h4>
                                    </div>
                                    <p className="text-white/60 font-mono text-sm tracking-wide uppercase">{item.desc}</p>
                                </div>
                                <div className="text-2xl font-mono text-fro-pink font-bold">
                                    {item.price}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Extras Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-white/10">
                        <div>
                            <h5 className="text-fro-pink font-bold uppercase tracking-widest text-sm mb-6">Additional Toppings</h5>
                            <div className="flex flex-wrap gap-3">
                                {toppings.map((t, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm hover:bg-white/10 transition-colors">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h5 className="text-fro-pink font-bold uppercase tracking-widest text-sm mb-6">Sauces</h5>
                            <div className="flex flex-wrap gap-3">
                                {sauces.map((s, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm hover:bg-white/10 transition-colors">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

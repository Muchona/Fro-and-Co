import { MapPin, Phone, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Location() {
    return (
        <section className="py-32 bg-[#2a1e1d] relative overflow-hidden border-t border-white/5">
            {/* Background Grain/Glow - matching site theme */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fro-pink/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Info & Map */}
                    <div className="space-y-12">

                        {/* Title */}
                        <div>
                            <span className="text-fro-pink font-mono text-xs tracking-[0.3em] uppercase mb-4 block animate-pulse">Visit Us</span>
                            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[0.9] mb-8">
                                The Heart of <br />
                                <span className="text-white/40">Monaghan</span>
                            </h2>
                            <p className="text-white/60 max-w-md text-lg">
                                Experience our award-winning atmosphere in person.
                                Serving the finest roasts and pastries daily.
                            </p>
                        </div>

                        {/* Map Section (Swapped to Left) */}
                        <motion.div
                            id="contact"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="w-full h-64 bg-white/5 border border-white/10 rounded-2xl overflow-hidden relative group"
                        >
                            <iframe
                                src="https://maps.google.com/maps?q=5%20Glaslough%20St%2C%20Roosky%2C%20Monaghan%2C%20H18%20NH60&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(30%) contrast(90%)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full group-hover:filter-none transition-all duration-700 opacity-80 group-hover:opacity-100"
                            ></iframe>
                            {/* Hint */}
                            <div className="absolute bottom-4 left-4 z-20 bg-[#2a1e1d]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-widest text-white pointer-events-none">
                                Find Us
                            </div>
                        </motion.div>

                        {/* Hours & Contact Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Hours */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-fro-pink mb-2">
                                    <Clock className="w-4 h-4" />
                                    <span className="text-xs font-bold uppercase tracking-widest">Opening Hours</span>
                                </div>
                                <ul className="space-y-2 text-sm text-white/70 font-mono">
                                    <li className="flex justify-between">
                                        <span>Mon - Fri</span>
                                        <span className="text-white">08:00 - 18:00</span>
                                    </li>
                                    <li className="flex justify-between text-fro-pink/80">
                                        <span>Saturday</span>
                                        <span className="text-white">09:00 - 17:00</span>
                                    </li>
                                    <li className="flex justify-between text-fro-pink/80">
                                        <span>Sunday</span>
                                        <span className="text-white">10:00 - 17:00</span>
                                    </li>
                                </ul>
                                <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full animate-pulse border border-green-500/30">
                                    Open Now
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 md:gap-6">
                                <div>
                                    <div className="flex items-center gap-2 text-fro-pink mb-2">
                                        <MapPin className="w-4 h-4" />
                                        <span className="text-xs font-bold uppercase tracking-widest">Location</span>
                                    </div>
                                    <address className="not-italic text-white/70 leading-relaxed">
                                        5 Glaslough St, Roosky<br />
                                        Monaghan, H18 NH60
                                    </address>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 text-fro-pink mb-2">
                                        <Phone className="w-4 h-4" />
                                        <span className="text-xs font-bold uppercase tracking-widest">Contact Us</span>
                                    </div>
                                    <p className="text-white/70 mb-1 hover:text-white transition-colors">
                                        <a href="tel:04771531" className="hover:text-fro-pink transition-colors">(047) 71531</a>
                                    </p>
                                    <p className="text-white/70 hover:text-white transition-colors break-all">
                                        <a href="mailto:hello@froandcoofficial.com" className="hover:text-fro-pink transition-colors">hello@froandcoofficial.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Large Award (Swapped) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="h-full min-h-[500px] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#3d2b29]/30 flex flex-col items-center justify-center p-12 text-center group"
                    >
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-3 mb-6 bg-amber-500/10 px-4 py-2 rounded-full border border-amber-500/20">
                                <Award className="w-5 h-5 text-amber-400" />
                                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Award Winning Excellence</span>
                            </div>

                            <img
                                src="awards/best-newcomer-2022.png"
                                alt="Best Newcomer 2022 - Irish Restaurant Awards"
                                className="w-full max-w-md mx-auto object-contain drop-shadow-2xl mb-8 hover:scale-105 transition-transform duration-500"
                            />

                            <h3 className="text-3xl font-serif font-bold text-white mb-2">Best Newcomer</h3>
                            <p className="text-white/50 text-sm tracking-widest uppercase">Irish Restaurant Awards 2022</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

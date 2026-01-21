import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BestSellers() {
    const images = [
        "gallery/item_1.jpg",
        "gallery/item_2.jpg",
        "gallery/item_3.jpg",
        "gallery/item_4.jpg",
        "gallery/item_5.jpg",
    ];

    return (
        <section className="py-20 px-6 bg-fro-bg flex justify-center">
            <div className="bg-fro-dark text-white rounded-[3rem] p-10 md:p-16 max-w-7xl w-full shadow-2xl relative overflow-hidden">

                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <p className="text-fro-pink font-mono text-sm tracking-widest uppercase mb-2">Visuals</p>
                        <h2 className="text-4xl md:text-5xl font-bold">Our Gallery</h2>
                    </div>
                    <Link to="/gallery" className="hidden md:flex items-center gap-2 text-white/60 hover:text-white transition-colors group">
                        <span>View Full Gallery</span>
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {images.map((src, i) => (
                        <div key={i} className="relative rounded-3xl overflow-hidden aspect-square border-2 border-white/5 group bg-white/5">
                            <img
                                src={src}
                                alt="Gallery Shot"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                    ))}

                    {/* Link to Gallery Page Card */}
                    <Link to="/gallery" className="relative rounded-3xl overflow-hidden aspect-square bg-fro-pink flex items-center justify-center cursor-pointer hover:bg-white transition-all group">
                        <div className="flex flex-col items-center gap-2">
                            <div className="p-4 border-2 border-white/20 rounded-full group-hover:border-black/20 transition-colors">
                                <ArrowUpRight className="w-8 h-8 text-white group-hover:text-black transition-colors" />
                            </div>
                            <span className="font-mono uppercase text-xs tracking-widest text-white group-hover:text-black transition-colors">View All</span>
                        </div>
                    </Link>
                </div>

                {/* Decorative Line Art */}
                <div className="absolute top-10 right-10 opacity-10 pointer-events-none rotate-90">
                    <svg width="150" height="150" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                        <circle cx="50" cy="50" r="40" />
                        <path d="M50,10 L50,90" />
                        <path d="M10,50 L90,50" />
                    </svg>
                </div>

            </div>
        </section>
    );
}

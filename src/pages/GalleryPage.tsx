import { motion } from 'framer-motion';

// Generate array of 34 images
const inputs = Array.from({ length: 34 }, (_, i) => ({
    src: `gallery/item_${i + 1}.jpg`,
    id: i + 1,
    title: `Moment ${i + 1}`,
}));

function GalleryImage({ src }: { src: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6 break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer bg-[#1a1a1a]"
        >
            <img
                src={src}
                alt="Gallery"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110 min-h-[200px]"
                loading="lazy"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 border-2 border-white/80 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                </div>
            </div>
        </motion.div>
    );
}

export default function GalleryPage() {
    // Removed complex parallax hooks for stability
    return (
        <div className="min-h-screen bg-black text-white relative z-[50] pt-20">

            {/* Hero Section - Premium */}
            <div className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-[url('gallery/item_34.jpg')] bg-cover bg-center opacity-40 blur-sm scale-105" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black" />

                <div className="relative z-10 text-center px-6 pt-20">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-fro-pink font-mono text-xs uppercase tracking-[0.4em] mb-6"
                    >
                        @fro&co
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-7xl md:text-[10rem] font-serif font-black text-white mb-8 uppercase tracking-tighter leading-none"
                    >
                        The Feed
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-xl mx-auto text-white/60 font-sans text-lg leading-relaxed mix-blend-screen"
                    >
                        A visual journey through our daily grind.
                    </motion.p>
                </div>
            </div>

            {/* Masonry Grid */}
            <div className="container mx-auto px-4 py-20">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {inputs.map((img, i) => (
                        <GalleryImage key={i} src={img.src} />
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="text-center pb-20 opacity-50 font-mono text-xs uppercase tracking-widest">
                End of Gallery
            </div>

        </div>
    );
}

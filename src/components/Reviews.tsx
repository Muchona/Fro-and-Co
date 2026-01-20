import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, MessageSquare, X, Send, Camera } from 'lucide-react';

const initialReviews = [
    {
        name: "Odin Middleton",
        role: "Local Guide",
        text: "I really enjoyed the overnight oats protein bowl with fresh toppings and honey. The frozen yogurt I tried most of them, my favourite flavours are chocolate and natural. Chicken toast is amazing.",
        stars: 5,
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&q=80"
    },
    {
        name: "CasuallyChilled",
        role: "Local Guide",
        text: "This is an absolutely delightful little coffee shop. Serving an array of baked goods as well as fancy ice creams. I am very happy to report that the coffee was absolutely fantastic - really really good.",
        stars: 5,
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80"
    },
    {
        name: "Helena Mc Shea",
        role: "Verified Customer",
        text: "I've just been in for lunch and honestly couldn't fault it. The staff were all super pleasent and helpful. The food was top notch. I recommend the veggie sourdough toastie and soup combo.",
        stars: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
    },
    {
        name: "Vanessa Echeverria",
        role: "Local Guide",
        text: "A great place to enjoy ice cream; it's a really warm atmosphere. Food: 5/5, Service: 5/5, Atmosphere: 5/5.",
        stars: 5,
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80"
    },
    {
        name: "Omaima Al Najjar",
        role: "Local Guide",
        text: "Ordered Mocha .. It is Served with piece of heart shaped milk chocolate. The coffee was excellent. The service was excellent as well. The atmosphere has happy baby pink purple sort of colors.",
        stars: 5,
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&q=80"
    }
];

function ReviewCard({ review }: { review: typeof initialReviews[0] }) {
    return (
        <div className="w-[350px] md:w-[400px] flex-shrink-0 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl mx-4 relative group hover:bg-white/10 transition-colors duration-300">
            <Quote className="absolute top-6 right-6 w-8 h-8 text-fro-pink/20 group-hover:text-fro-pink/40 transition-colors" />

            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-fro-pink/50">
                    <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                    <h4 className="text-white font-serif font-bold">{review.name}</h4>
                    <p className="text-white/40 text-xs uppercase tracking-wider">{review.role}</p>
                </div>
            </div>

            <p className="text-white/80 font-sans leading-relaxed mb-6 italic">
                "{review.text}"
            </p>

            <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.stars ? 'text-amber-400 fill-amber-400' : 'text-white/20'}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function Reviews() {
    const [reviews, setReviews] = useState(initialReviews);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        text: '',
        stars: 5,
        image: '' // Store the image URL here
    });

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setFormData({ ...formData, image: imageUrl });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newReview = {
            ...formData,
            role: "Just Now",
            // Use uploaded image or fallback to default avatar
            image: formData.image || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&q=80"
        };
        setReviews([newReview, ...reviews]);
        setIsModalOpen(false);
        setFormData({ name: '', text: '', stars: 5, image: '' });
    };

    return (
        <section className="py-32 bg-[#111] relative overflow-hidden flex flex-col items-center justify-center z-20">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-fro-pink/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 text-center mb-16 relative z-10 flex flex-col items-center">
                <span className="text-fro-pink font-mono text-xs tracking-[0.3em] uppercase mb-4 block animate-pulse">Community</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">What customers think about us</h2>
                <p className="text-white/50 max-w-2xl mx-auto mb-8">Real stories from the people who make our community special.</p>

                {/* Write Review CTA */}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-3 px-8 py-3 bg-fro-pink text-white rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(235,100,185,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] group"
                >
                    <MessageSquare className="w-4 h-4" />
                    <span>Share Your Experience</span>
                </button>
            </div>

            {/* Infinite Marquee Container */}
            <div className="w-full relative flex overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#111] to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#111] to-transparent z-10 pointer-events-none" />

                {/* Track */}
                <motion.div
                    className="flex"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 80 // Slower for readability
                    }}
                >
                    {/* Double the list for seamless loop */}
                    {[...reviews, ...reviews].map((review, i) => (
                        <ReviewCard key={i} review={review} />
                    ))}
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            onClick={() => setIsModalOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-[#1a1a1a] border border-white/10 p-8 rounded-3xl w-full max-w-md shadow-2xl"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-white/50 hover:text-white"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <h3 className="text-2xl font-serif font-bold text-white mb-6">Write a Review</h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-fro-pink mb-2">Your Name</label>
                                    <input
                                        type="text" required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-fro-pink"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-fro-pink mb-2">Rating</label>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, stars: star })}
                                                className={`transition-transform hover:scale-110 ${star <= formData.stars ? 'text-amber-400' : 'text-white/20'}`}
                                            >
                                                <Star className="w-6 h-6 fill-current" />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-fro-pink mb-2">Your Experience</label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.text}
                                        onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-fro-pink"
                                        placeholder="Tell us what you loved..."
                                    />
                                </div>

                                {/* Image Upload */}
                                <div>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        hidden
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                    />
                                    <div className="flex items-center gap-4">
                                        <button
                                            type="button"
                                            onClick={() => fileInputRef.current?.click()}
                                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white/70 hover:bg-white/10 hover:text-white flex items-center gap-2 transition-colors"
                                        >
                                            <Camera className="w-4 h-4" />
                                            <span>Attach Photo</span>
                                        </button>

                                        {formData.image && (
                                            <div className="relative group">
                                                <img src={formData.image} alt="Preview" className="w-10 h-10 rounded-lg object-cover border border-white/20" />
                                                <button
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, image: '' })}
                                                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                                                >
                                                    <X className="w-3 h-3" />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <button type="submit" className="w-full py-4 bg-fro-pink text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all">
                                    <Send className="w-4 h-4" />
                                    <span>Post Review</span>
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}

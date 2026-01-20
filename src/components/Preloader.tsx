import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
    const [textIndex, setTextIndex] = useState(0);
    const words = ["BREWING", "CRAFTING", "SERVING"];

    useEffect(() => {
        // Cycle words quickly
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % words.length);
        }, 250);

        // End preloader phase
        const timer = setTimeout(() => {
            clearInterval(interval);
            onComplete();
        }, 2200);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0F0F0F] text-fro-pink"
            initial={{ y: 0 }}
            exit={{
                y: "-100%",
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } // Custom bezier for "curtain" feel
            }}
        >
            <div className="relative overflow-hidden text-center">
                {/* Pulsing Logo Element */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 w-16 h-16 mx-auto border-2 border-fro-pink/30 rounded-full flex items-center justify-center"
                >
                    <span className="font-serif font-bold text-2xl">F</span>
                </motion.div>

                {/* Changing Text */}
                <h2 className="text-4xl md:text-6xl font-black font-serif tracking-tighter text-white">
                    {words[textIndex]}...
                </h2>

                {/* Progress Bar Line */}
                <motion.div
                    className="h-1 bg-fro-pink mt-4 mx-auto"
                    initial={{ width: 0 }}
                    animate={{ width: "100px" }}
                    transition={{ duration: 2, ease: "linear" }}
                />
            </div>
        </motion.div>
    );
}

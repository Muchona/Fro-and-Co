import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface MenuItem {
    name: string;
    price: string;
    image: string;
    desc: string;
    ingredients: string[];
    bg: string;
    accent: string;
    gradient: string;
    scale?: number;
    blend?: boolean;
}

// Final Data with User Assets & Ingredients
const menuItems: MenuItem[] = [
    {
        name: "Espresso",
        price: "2.20",
        image: "menu/user_espresso.png",
        desc: "The purest distillation of the bean. A concentrated shot with a rich, golden crema.",
        ingredients: ["18g Coffee Beans", "Hot Water", "Pressure"],
        bg: "bg-[#1a1515]",
        accent: "text-amber-500",
        gradient: "radial-gradient(circle at center, #3d2b1f 0%, #000000 70%)"
    },
    {
        name: "Americano",
        price: "2.60",
        image: "menu/user_americano.png",
        desc: "A smooth, elongated espresso experience. All the flavor, none of the intensity.",
        ingredients: ["Double Espresso", "Hot Water (Ratio 1:4)"],
        bg: "bg-[#121212]",
        accent: "text-stone-400",
        gradient: "radial-gradient(circle at center, #2c2c2c 0%, #080808 70%)",
        scale: 1.25 // Enlarge
    },
    {
        name: "Flat White",
        price: "2.95",
        image: "menu/user_flatwhite.png",
        desc: "Velvety textured milk poured over espresso. The connoisseur's choice.",
        ingredients: ["Double Ristretto", "Microfoam Milk"],
        bg: "bg-[#2e2620]",
        accent: "text-orange-100",
        gradient: "radial-gradient(circle at center, #5d4037 0%, #1a120b 70%)"
    },
    {
        name: "Cappuccino",
        price: "2.95",
        image: "menu/user_cappuccino.png",
        desc: "A perfect balance of espresso, steamed milk, and airy foam. Finished with cocoa.",
        ingredients: ["Espresso", "Steamed Milk", "Thick Milk Foam", "Cocoa Dust"],
        bg: "bg-[#1f1a18]",
        accent: "text-amber-700",
        gradient: "radial-gradient(circle at center, #6d4c41 0%, #1e130c 70%)"
    },
    {
        name: "Mocha",
        price: "3.20",
        image: "menu/user_mocha.png",
        desc: "Where coffee meets dessert. Rich chocolate blended with espresso and milk.",
        ingredients: ["Espresso", "Dark Chocolate Syrup", "Steamed Milk", "Latte Art"],
        bg: "bg-[#181010]",
        accent: "text-red-900",
        gradient: "radial-gradient(circle at center, #3e2723 0%, #0f0505 70%)"
    },
    {
        name: "Latte",
        price: "2.95",
        image: "menu/user_latte.png",
        desc: "Light, creamy, and mild. A gentle espresso hug in a glass.",
        ingredients: ["Espresso", "Steamed Milk (Lots)", "Light Foam"],
        bg: "bg-[#261e1b]",
        accent: "text-creamy-white",
        gradient: "radial-gradient(circle at center, #795548 0%, #151010 70%)",
        scale: 1.25 // Enlarge
    },
];

function JuiceSection({ item }: { item: MenuItem }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax
    const yText = useTransform(scrollYProgress, [0, 1], [300, -300]);
    const yImg = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

    // Side Elements Parallax
    const xLeft = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, -100]);
    const xRight = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, 100]);

    return (
        <section
            ref={ref}
            className="h-screen w-full relative flex items-center justify-center overflow-hidden snap-center"
            style={{ background: item.gradient }}
        >
            {/* 1. GIANT BACKGROUND TEXT (Smaller size, Higher Opacity) */}
            <motion.div
                style={{ y: yText }}
                className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
            >
                <h1 className="text-[13vw] font-black font-serif text-white tracking-tighter whitespace-nowrap opacity-[0.20] uppercase leading-none select-none">
                    {item.name}
                </h1>
            </motion.div>

            {/* 2. CENTRAL PRODUCT (Uniform Size) */}
            <motion.div
                style={{ y: yImg, opacity }}
                className="relative z-20 w-[400px] h-[400px] md:w-[500px] md:h-[500px] flex items-center justify-center"
            >
                {/* Spotlight underneath */}
                <div className="absolute w-full h-[20%] bottom-0 bg-black/60 blur-2xl rounded-full translate-y-10" />

                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain drop-shadow-2xl transition-all duration-500"
                    // Conditionally apply blending if it's the Latte with black background
                    style={{
                        filter: item.blend ? "brightness(1.2) contrast(1.1)" : "brightness(1.1) contrast(1.1)",
                        mixBlendMode: item.blend ? 'screen' : 'normal',
                        transform: item.scale ? `scale(${item.scale})` : 'scale(1)'
                    }}
                />
            </motion.div>

            {/* 3. INFO CONTENT (Left & Right) */}
            <div className="absolute inset-0 z-30 container mx-auto px-6 flex items-center justify-between pointer-events-none">

                {/* LEFT: Description */}
                <motion.div
                    style={{ x: xLeft }}
                    className="w-1/3 hidden md:flex flex-col gap-4 text-left pointer-events-auto"
                >
                    <p className={`font-mono text-sm tracking-[0.2em] uppercase ${item.accent}`}>Description</p>
                    <h2 className="text-4xl lg:text-5xl font-serif text-white leading-tight">
                        {item.desc}
                    </h2>
                    <span className="text-6xl font-sans font-bold text-white/90 mt-4">€{item.price}</span>
                </motion.div>

                {/* RIGHT: Ingredients */}
                <motion.div
                    style={{ x: xRight }}
                    className="w-1/3 hidden md:flex flex-col gap-6 text-right items-end pointer-events-auto"
                >
                    <p className={`font-mono text-sm tracking-[0.2em] uppercase ${item.accent}`}>Ingredients</p>
                    <ul className="flex flex-col gap-2">
                        {item.ingredients.map((ing, i) => (
                            <li key={i} className="text-xl md:text-2xl font-serif text-white/80 border-b border-white/10 pb-2">
                                {ing}
                            </li>
                        ))}
                    </ul>

                </motion.div>

                {/* MOBILE: Stacked Layout */}
                <div className="md:hidden absolute bottom-20 left-0 w-full text-center px-6 pointer-events-auto">
                    <h2 className="text-3xl font-serif text-white mb-2">{item.name}</h2>
                    <p className="text-white/70 text-sm mb-4">{item.desc}</p>
                    <div className="flex justify-center gap-4 items-center">
                        <span className="text-2xl font-bold text-white">€{item.price}</span>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default function MenuPage() {
    return (
        <div className="bg-black min-h-screen text-white snap-y snap-mandatory scroll-smooth font-serif">
            {/* Navigation Spacer */}
            <div className="fixed top-0 left-0 w-full h-24 bg-gradient-to-b from-black/80 to-transparent z-40 pointer-events-none" />

            {menuItems.map((item, index) => (
                <JuiceSection key={index} item={item} />
            ))}
        </div>
    );
}

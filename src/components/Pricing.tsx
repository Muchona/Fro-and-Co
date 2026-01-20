import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const plans = [
    {
        name: 'The Daily Cup',
        price: '$5',
        period: 'per month',
        desc: 'Perfect for the casual enthusiast.',
        features: ['Weekly Newsletter', '10% Off Beans', 'Member Events'],
        highlight: false
    },
    {
        name: 'The Connoisseur',
        price: '$29',
        period: 'per month',
        desc: 'For those who demand excellence.',
        features: ['Priority Shipping', 'Exclusive Micro-lots', 'Virtual Tastings', 'Custom Roasting'],
        highlight: true
    },
    {
        name: 'The Enterprise Roast',
        price: 'Custom',
        period: 'volume based',
        desc: 'Scalable solutions for offices.',
        features: ['Bulk Discounts', 'Equipment Lease', 'Barista Training', 'Dedicated Accit Mgr'],
        highlight: false
    }
];

export default function Pricing() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".pricing-card",
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 bg-charcoal relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-toasted-gold font-mono text-xs tracking-widest uppercase mb-4 block">// INVESTMENT</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Uncompromised Quality</h2>
                    <p className="text-white/60">Select your level of engagement.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`pricing-card glass-panel p-10 rounded-2xl flex flex-col relative group transition-all duration-500 hover:border-toasted-gold/30 hover:shadow-[0_0_50px_rgba(0,0,0,0.5)] ${plan.highlight ? 'border-toasted-gold/40 bg-toasted-gold/5' : ''}`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 right-0 bg-toasted-gold text-charcoal text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-bl-lg rounded-tr-lg">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-serif font-bold text-white mb-2">{plan.name}</h3>
                            <p className="text-sm text-white/50 mb-8 font-sans">{plan.desc}</p>

                            <div className="mb-10">
                                <span className="text-4xl font-mono font-bold text-toasted-gold">{plan.price}</span>
                                <span className="text-sm text-white/40 ml-2">{plan.period}</span>
                            </div>

                            <ul className="space-y-4 mb-10 flex-1">
                                {plan.features.map((feat, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm text-white/80">
                                        <Check className="w-4 h-4 text-toasted-gold" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-4 border border-white/20 rounded-lg text-white font-mono uppercase tracking-widest text-xs hover:bg-toasted-gold hover:text-charcoal hover:border-toasted-gold transition-all duration-300">
                                Select Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bean, Truck, Coffee, Cog, Fingerprint, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const icons = [
    { Icon: Bean, label: 'Sourcing' },
    { Icon: Cog, label: 'Roasting' },
    { Icon: Coffee, label: 'Brewing' },
    { Icon: Truck, label: 'Delivery' },
    { Icon: Fingerprint, label: 'Identity' },
    { Icon: Award, label: 'Quality' },
];

export default function Collaboration() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Staggered Float In
            gsap.fromTo(".collab-icon",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                }
            );

            // Continuous Float
            gsap.to(".collab-icon", {
                y: -10,
                repeat: -1,
                yoyo: true,
                duration: 2,
                ease: "sine.inOut",
                stagger: {
                    each: 0.2,
                    from: "random"
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 bg-espresso relative overflow-hidden">
            {/* Section Title */}
            <div className="container mx-auto px-6 mb-20 text-center">
                <span className="text-toasted-gold font-mono text-xs tracking-widest uppercase mb-4 block">// PROTOCOL: SYNC</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                    The Craft & <span className="text-transparent bg-clip-text bg-gradient-to-r from-toasted-gold to-white">Technology</span>
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto">
                    Synchronizing artisanal traditions with modern logistics.
                </p>
            </div>

            {/* Icon Marquee */}
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {icons.map(({ Icon, label }, i) => (
                        <div key={i} className="collab-icon flex flex-col items-center justify-center gap-4 group cursor-default">
                            <div className="w-20 h-20 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:border-toasted-gold/50 group-hover:shadow-[0_0_30px_rgba(196,164,132,0.1)] relative overflow-hidden">
                                <div className="absolute inset-0 bg-toasted-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <Icon strokeWidth={1.5} className="w-8 h-8 text-creamy-white group-hover:text-toasted-gold transition-colors duration-300 relative z-10" />
                            </div>
                            <span className="text-xs font-mono uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

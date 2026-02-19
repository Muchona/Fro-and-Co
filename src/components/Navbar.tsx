import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Smartphone } from 'lucide-react';
import AppBadges from './AppBadges';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Our Menu", href: "/menu" },
        { name: "About Us", href: "/about" },
        { name: "Our Gallery", href: "/gallery" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className={`fixed top-0 left-0 right-0 z-[100] flex justify-center pt-6 px-4 transition-all duration-300 ${scrolled ? 'pt-2' : 'pt-6'}`}
            >
                {/* Glass Capsule */}
                <div className={`
                    relative flex items-center justify-between 
                    w-full max-w-6xl 
                    px-6 py-3 
                    rounded-full 
                    border border-white/20
                    transition-all duration-500
                    ${scrolled
                        ? 'bg-fro-dark/80 backdrop-blur-xl shadow-lg border-fro-pink/20 py-2'
                        : 'bg-white/10 backdrop-blur-md shadow-sm'
                    }
                `}>

                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-2"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <div className="w-8 h-8 bg-fro-dark text-fro-pink rounded-full flex items-center justify-center font-serif font-bold text-xl">
                            F
                        </div>
                        <span className={`font-serif text-xl font-bold tracking-tight ${scrolled ? 'text-white' : 'text-fro-dark'}`}>
                            Fro & Co.
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link, i) => (
                            <Link
                                key={i}
                                to={link.href}
                                className="relative group px-4 py-2"
                            >
                                <span className={`relative z-10 text-xs font-mono uppercase tracking-widest font-bold transition-colors ${scrolled ? 'text-white/80 group-hover:text-white' : 'text-fro-dark/80 group-hover:text-fro-dark'
                                    } ${location.pathname === link.href ? 'text-white underline decoration-2 underline-offset-4' : ''}`}>
                                    {link.name}
                                </span>
                                {/* Hover Pill */}
                                <span className="absolute inset-0 rounded-full bg-fro-pink/0 group-hover:bg-fro-pink/20 transition-all duration-300 scale-75 group-hover:scale-100"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.icrtouch.tta.froco&pcampaignid=web_share"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                                hidden sm:flex items-center gap-2 
                                px-4 py-2 rounded-full 
                                font-mono text-[10px] font-bold uppercase tracking-widest
                                transition-all duration-300
                                ${scrolled
                                    ? 'bg-fro-pink text-white hover:bg-white hover:text-fro-pink shadow-lg shadow-fro-pink/20'
                                    : 'bg-fro-dark text-white hover:bg-fro-pink'
                                }
                            `}
                        >
                            <Smartphone className="w-3.5 h-3.5" />
                            <span>Get the App</span>
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button
                            className={`md:hidden p-2 transition-colors relative z-[110] ${scrolled || mobileMenuOpen ? 'text-white' : 'text-fro-dark'}`}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[90] bg-fro-dark/95 backdrop-blur-xl flex flex-col items-center justify-center"
                    >
                        {/* Redundant close button removed */}

                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link, i) => (
                                <Link
                                    key={i}
                                    to={link.href}
                                    className="text-3xl font-serif text-white hover:text-fro-pink transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-col items-center gap-8 text-center pt-8">
                            <p className="text-fro-pink font-mono text-[10px] uppercase tracking-widest opacity-60">Get our mobile app</p>
                            <AppBadges className="justify-center scale-90" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

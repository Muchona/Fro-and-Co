import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import AppBadges from './AppBadges';

export default function Footer() {
    return (
        <footer className="bg-[#1a1515] text-white pt-24 pb-10 border-t border-white/5 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-20">

                    {/* Brand Column */}
                    <div className="md:col-span-4 space-y-8">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-white text-fro-dark rounded-full flex items-center justify-center font-serif font-bold text-xl">
                                F
                            </div>
                            <span className="font-serif text-2xl font-bold tracking-tight text-white">
                                Fro & Co.
                            </span>
                        </Link>
                        <p className="text-white/60 leading-relaxed max-w-sm">
                            Crafting moments, brewing dreams. Your ultimate destination for Italian-style coffee, frozen treats, and warm hospitality in the heart of Monaghan.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/froandcoofficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-fro-pink hover:text-white transition-all group">
                                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://www.facebook.com/froandcoofficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-fro-pink hover:text-white transition-all group">
                                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </a>
                        </div>

                        {/* App Badges */}
                        <div className="pt-4">
                            <p className="text-fro-pink font-mono text-[10px] uppercase tracking-widest mb-4">Get the Mobile App</p>
                            <AppBadges size="sm" className="justify-start scale-90 origin-left" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3 md:col-start-6 space-y-8">
                        <h4 className="text-fro-pink font-mono text-sm uppercase tracking-widest">Explore</h4>
                        <ul className="space-y-4 font-serif text-lg text-white/80">
                            <li><Link to="/" className="hover:text-fro-pink transition-colors">Home</Link></li>
                            <li><Link to="/menu" className="hover:text-fro-pink transition-colors">Our Menu</Link></li>
                            <li><Link to="/gallery" className="hover:text-fro-pink transition-colors">Gallery</Link></li>
                            <li><Link to="/about" className="hover:text-fro-pink transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-4 space-y-8">
                        <h4 className="text-fro-pink font-mono text-sm uppercase tracking-widest">Visit Us</h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4 items-start text-white/70">
                                <MapPin className="w-5 h-5 mt-1 shrink-0 text-fro-pink" />
                                <span>
                                    5 Glaslough St, Roosky<br />
                                    Monaghan, H18 NH60
                                </span>
                            </li>
                            <li className="flex gap-4 items-center text-white/70">
                                <Phone className="w-5 h-5 shrink-0 text-fro-pink" />
                                <a href="tel:04771531" className="hover:text-white transition-colors">(047) 71531</a>
                            </li>
                            <li className="flex gap-4 items-center text-white/70">
                                <Mail className="w-5 h-5 shrink-0 text-fro-pink" />
                                <a href="mailto:hello@froandcoofficial.com" className="hover:text-white transition-colors">hello@froandcoofficial.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-white/40 uppercase tracking-widest">
                    <p>© 2026 Fro & Co. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

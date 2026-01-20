import { Upload } from 'lucide-react';

export default function Contact() {
    return (
        <section className="py-32 bg-espresso border-t border-white/5">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-[0.9]">
                            Ready to <br />
                            <span className="text-toasted-gold">Experience</span> <br />
                            Luxury?
                        </h2>
                        <p className="text-lg text-white/60 mb-12">
                            Begin your journey with Fro & Co. Whether for personal indulgence or enterprise solutions, we are ready to serve.
                        </p>

                        <div className="glass-panel p-8 rounded-2xl inline-block">
                            <h4 className="text-toasted-gold font-mono text-xs tracking-widest uppercase mb-4">Headquarters</h4>
                            <p className="text-white">1001 Coffee Lane<br />Seattle, WA 98101</p>
                        </div>
                    </div>

                    <form className="flex flex-col gap-6">
                        <div className="group">
                            <label className="block text-xs font-mono uppercase tracking-widest text-white/40 mb-2 group-focus-within:text-toasted-gold transition-colors">Identify Yourself</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-toasted-gold focus:outline-none transition-colors" placeholder="Name" />
                        </div>

                        <div className="group">
                            <label className="block text-xs font-mono uppercase tracking-widest text-white/40 mb-2 group-focus-within:text-toasted-gold transition-colors">Communication Channel</label>
                            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-toasted-gold focus:outline-none transition-colors" placeholder="Email Address" />
                        </div>

                        <div className="group">
                            <label className="block text-xs font-mono uppercase tracking-widest text-white/40 mb-2 group-focus-within:text-toasted-gold transition-colors">Directives / Inquiries</label>
                            <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-toasted-gold focus:outline-none transition-colors" placeholder="How can we assist?"></textarea>
                        </div>

                        <label className="cursor-pointer border border-dashed border-white/20 hover:border-toasted-gold/50 bg-white/5 p-6 rounded-lg flex items-center justify-center gap-4 group transition-all">
                            <Upload className="w-5 h-5 text-white/40 group-hover:text-toasted-gold transition-colors" />
                            <span className="text-sm text-white/60 group-hover:text-white transition-colors">Attach Wholesale Inquiries (PDF)</span>
                            <input type="file" className="hidden" />
                        </label>

                        <button className="bg-toasted-gold text-charcoal font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-white transition-colors text-sm shadow-[0_0_20px_rgba(196,164,132,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                            Initiate Protocol
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

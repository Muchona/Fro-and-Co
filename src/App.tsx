import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

export default function App() {
    const [lenis, setLenis] = useState<Lenis | null>(null);
    const { hash } = useLocation();

    useEffect(() => {
        // Disable browser's automatic scroll restoration
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        const newLenis = new Lenis({
            lerp: 0.1,
            duration: 1.2,
            smoothWheel: true
        });
        setLenis(newLenis);

        function raf(time: number) {
            newLenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Force scroll to top on mount/refresh
        const resetScroll = () => {
            window.scrollTo(0, 0);
            newLenis.scrollTo(0, { immediate: true });
        };

        // Try immediately
        resetScroll();

        // Try after a short delay to catch browser restoration logic or late rendering
        const timer = setTimeout(resetScroll, 250);

        return () => {
            clearTimeout(timer);
            newLenis.destroy();
        };
    }, []);

    // Handle Hash Scrolling with Lenis compatibility
    useEffect(() => {
        if (lenis && hash) {
            const target = document.querySelector(hash);
            if (target) {
                setTimeout(() => {
                    lenis.scrollTo(target as HTMLElement, { offset: -100 });
                }, 100);
            }
        }
    }, [lenis, hash]);

    return (
        <main className="bg-fro-bg min-h-screen relative font-sans">
            <ScrollToTop />
            {/* Decorative Grain */}
            <div className="grain-overlay"></div>

            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>

            <Footer />
        </main>
    );
}

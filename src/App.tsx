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

// AppContent logic merged into main App component since Router is provided by main.tsx
export default function App() {
    const [lenis, setLenis] = useState<Lenis | null>(null);
    const { hash } = useLocation();

    useEffect(() => {
        const newLenis = new Lenis();
        setLenis(newLenis);

        function raf(time: number) {
            newLenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => newLenis.destroy();
    }, []);

    // Handle Hash Scrolling
    useEffect(() => {
        if (lenis && hash) {
            const target = document.querySelector(hash);
            if (target) {
                // Small delay to ensure render
                setTimeout(() => {
                    lenis.scrollTo(target as HTMLElement, { offset: -100 }); // Offset for navbar
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

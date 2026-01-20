import { useEffect, useRef, useState } from 'react';
import { useScroll, useSpring } from 'framer-motion';

const FRAME_COUNT = 51; // Updated to 51 frames
const FRAME_PATH = '/sequence/ezgif-frame-';
const FRAME_EXT = '.jpg';

export default function ScrollCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Scroll Progress
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100, damping: 30, restDelta: 0.001
    });

    // Preload
    useEffect(() => {
        const imgArray: HTMLImageElement[] = [];
        let loaded = 0;
        // Preload loop
        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            const zeroPad = String(i).padStart(3, '0');
            img.src = `${FRAME_PATH}${zeroPad}${FRAME_EXT}`;
            img.onload = () => {
                loaded++;
                if (loaded === FRAME_COUNT) {
                    setImages(imgArray);
                    setIsLoaded(true);
                }
            }
            img.onerror = () => {
                console.error(`Failed to load frame ${i}`);
                // Continue loading others preventing lock
                loaded++;
                if (loaded === FRAME_COUNT) {
                    setImages(imgArray);
                    setIsLoaded(true);
                }
            }
            imgArray[i - 1] = img;
        }
    }, []);

    // Draw Loop
    useEffect(() => {
        if (!isLoaded || !canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // High DPI / Retina handling
        const dpr = window.devicePixelRatio || 1;
        const resizeCanvas = () => {
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const unsubscribe = smoothProgress.on("change", (latest) => {
            const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(latest * (FRAME_COUNT - 1)));
            const img = images[frameIndex];

            if (img && img.complete && img.naturalHeight !== 0) {
                ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear

                // "Contain" Logic (Preserve aspect ratio, don't crop)
                const hRatio = (canvas.width / dpr) / img.width;
                const vRatio = (canvas.height / dpr) / img.height;
                const ratio = Math.min(hRatio, vRatio);

                const centerShift_x = ((canvas.width / dpr) - img.width * ratio) / 2;
                const centerShift_y = ((canvas.height / dpr) - img.height * ratio) / 2;

                ctx.drawImage(img,
                    0, 0, img.width, img.height,
                    centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
                );
            }
        });

        return () => {
            unsubscribe();
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [isLoaded, images, smoothProgress]);

    if (!isLoaded) return <div className="h-screen bg-charcoal text-white flex items-center justify-center font-mono text-xs tracking-widest">LOADING NEW ASSETS...</div>;

    return (
        <div ref={containerRef} className="relative h-[400vh]">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center bg-[#050505] overflow-hidden">
                <canvas ref={canvasRef} className="w-full h-full block" style={{ width: '100%', height: '100%' }} />

                {/* Texture Overlay for cinematic feel */}
                <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
            </div>
        </div>
    );
}

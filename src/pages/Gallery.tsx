import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// List of all assets found in the directory
const images = [
    "467977722_18025239971565024_931656114775129915_n.jpg",
    "468007161_18025240169565024_5389723896143805666_n.jpg",
    "468007329_18025238762565024_3947314556062210454_n.jpg",
    "468007353_18025237238565024_886180724589325385_n.jpg",
    "468007767_18025243541565024_3710198672119650789_n.jpg",
    "468021200_18025242368565024_3070691624448327606_n.jpg",
    "468033582_18025237757565024_5734714443060330470_n.jpg",
    "468043745_18025241435565024_7622114035772508588_n.jpg",
    "468084918_18025244471565024_5591746358710477279_n.jpg",
    "468088539_18025244411565024_5962582157057638351_n.jpg",
    "468089621_18025241219565024_2183867498929992056_n.jpg",
    "468094123_18025242518565024_8935435403419354945_n.jpg",
    "468095765_18025238585565024_5079947553714403190_n.jpg",
    "468200895_18025238939565024_4157644851473426495_n.jpg",
    "468223417_18025242323565024_22478211241790342_n.jpg",
    "468305393_18025239860565024_7884804791858643026_n.jpg",
    "468306203_18025238801565024_2157522555169528009_n.jpg",
    "468306617_18025240967565024_6381959985013064221_n.jpg",
    "468321099_18025237349565024_9214376150171132968_n.jpg",
    "468321984_18025238672565024_3083445644504597916_n.jpg",
    "468322252_18025239833565024_6395606219484122048_n.jpg",
    "468331793_18025242800565024_5838423951802087035_n.jpg",
    "468349295_18025240070565024_968346959436222323_n.jpg",
    "475648842_953565646876696_737684840243620111_n.jpg",
    "475835264_953559463543981_2428375537872698822_n.jpg",
    "475869511_956280493271878_384110654618725261_n.jpg",
    "475879280_956759136557347_7813580944474094091_n.jpg",
    "476095869_956763686556892_3945344529129861581_n.jpg",
    "480294638_965029209063673_8239981646492291236_n.jpg",
    "480507301_966418632258064_5790161667596793745_n.jpg",
    "480529540_966412252258702_4282952107855847894_n.jpg",
    "480603926_968148985418362_1373630977087245599_n.jpg",
    "481053557_968139848752609_7572835649447083734_n.jpg"
];

export default function Gallery() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".gallery-item",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                }
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <main className="pt-32 px-6 md:px-12 bg-fro-dark min-h-screen">
            <div ref={containerRef} className="max-w-[1920px] mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-serif text-fro-white mb-4">The Collection</h1>
                    <p className="text-fro-gold tracking-widest uppercase text-sm">Moments in Time</p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {images.map((img, i) => (
                        <div key={i} className="gallery-item break-inside-avoid relative group overflow-hidden rounded-lg">
                            <div className="absolute inset-0 bg-fro-gold/0 group-hover:bg-fro-gold/20 transition-colors duration-500 z-10"></div>
                            <img
                                src={`/Assets/${img}`}
                                alt="Gallery Item"
                                className="w-full h-auto object-cover transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                                <span className="text-fro-white font-mono text-xs tracking-widest">IMG_REF_{i + 100}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

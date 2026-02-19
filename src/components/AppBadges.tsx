import { Apple } from 'lucide-react';

interface AppBadgesProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

export default function AppBadges({ className = "", size = "md" }: AppBadgesProps) {
    const playUrl = "https://play.google.com/store/apps/details?id=com.icrtouch.tta.froco&pcampaignid=web_share";
    const appleUrl = "https://apps.apple.com/gb/app/fro-co/id1581740770";

    const sizes = {
        sm: "h-8 px-3 py-1 gap-2",
        md: "h-12 px-4 py-2 gap-3",
        lg: "h-14 px-5 py-2 gap-4"
    };

    const iconSizes = {
        sm: "w-4 h-4",
        md: "w-6 h-6",
        lg: "w-7 h-7"
    };

    const textSizes = {
        sm: { top: "text-[6px]", bottom: "text-[10px]" },
        md: { top: "text-[8px]", bottom: "text-[14px]" },
        lg: { top: "text-[10px]", bottom: "text-[18px]" }
    };

    return (
        <div className={`flex flex-wrap items-center gap-4 ${className}`}>
            {/* App Store Badge */}
            <a
                href={appleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                    flex items-center bg-black text-white rounded-xl border border-white/20
                    hover:bg-zinc-900 transition-all duration-300 hover:scale-105 active:scale-95
                    ${sizes[size]}
                `}
            >
                <Apple className={`${iconSizes[size]} fill-current`} />
                <div className="flex flex-col leading-tight">
                    <span className={`${textSizes[size].top} uppercase font-medium tracking-tight opacity-80`}>Download on the</span>
                    <span className={`${textSizes[size].bottom} font-bold font-sans tracking-tight -mt-0.5`}>App Store</span>
                </div>
            </a>

            {/* Google Play Badge */}
            <a
                href={playUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                    flex items-center bg-black text-white rounded-xl border border-white/20
                    hover:bg-zinc-900 transition-all duration-300 hover:scale-105 active:scale-95
                    ${sizes[size]}
                `}
            >
                <svg
                    viewBox="0 0 24 24"
                    className={`${iconSizes[size]}`}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path fill="#4DB6AC" d="M3.84,2.15L14.41,12.72L12.97,12L3.84,2.15Z" />
                    <path fill="#FFAB00" d="M3.84,21.85L14.41,11.28L12.97,12L3.84,21.85Z" />
                    <path fill="#F44336" d="M3,3.5C3,2.91 3.34,2.39 3.84,2.15L12.97,11.28L12.97,12.72L3.84,21.85C3.34,21.61 3,21.09 3,20.5V3.5Z" />
                    <path fill="#4CAF50" d="M19.05,6.5L14.41,11.28L12.97,12.72L19.05,17.59C19.6,17.27 19.83,16.59 19.5,16L19.05,6.5Z" />
                </svg>
                <div className="flex flex-col leading-tight">
                    <span className={`${textSizes[size].top} uppercase font-medium tracking-tight opacity-80`}>Get it on</span>
                    <span className={`${textSizes[size].bottom} font-bold font-sans tracking-tight -mt-0.5`}>Google Play</span>
                </div>
            </a>
        </div>
    );
}

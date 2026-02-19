import { AppStoreButton } from "@/components/ui/AppStoreButton";
import { PlayStoreButton } from "@/components/ui/PlayStoreButton";

interface AppBadgesProps {
    className?: string;
}

export default function AppBadges({ className = "" }: AppBadgesProps) {
    const playUrl = "https://play.google.com/store/apps/details?id=com.icrtouch.tta.froco&pcampaignid=web_share";
    const appleUrl = "https://apps.apple.com/gb/app/fro-co/id1581740770";

    return (
        <div className={`flex flex-wrap items-center gap-4 ${className}`}>
            <a
                href={appleUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                <AppStoreButton className="w-full sm:w-auto" />
            </a>

            <a
                href={playUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                <PlayStoreButton className="w-full sm:w-auto" />
            </a>
        </div>
    );
}

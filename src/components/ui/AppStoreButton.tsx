import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Apple } from "lucide-react";

type AppStoreButtonProps = React.ComponentProps<typeof Button>;

export function AppStoreButton({
    className,
    ...props
}: Omit<AppStoreButtonProps, "children">) {
    return (
        <Button className={cn("h-11 gap-2 bg-black text-white hover:bg-black/90 rounded-xl px-4 py-2 h-auto", className)} {...props}>
            <Apple className="size-5 fill-current" />
            <div className="text-left flex flex-col items-start justify-center pr-2">
                <span className="text-[10px] leading-none font-light tracking-tighter opacity-80 uppercase">
                    Download on the
                </span>
                <p className="text-base font-bold leading-none font-sans">App Store</p>
            </div>
        </Button>
    );
}

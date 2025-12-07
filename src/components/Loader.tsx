"use client";

import { usePathname } from "next/navigation";
import { GridLoader } from "react-spinners";

export default function LoadingScreen() {
    const pathname = usePathname();
    const isResultPage = pathname === "/results";

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen space-y-4">
            <GridLoader color="#049673" />
            {isResultPage && (
                <p className="text-lg font-medium text-[#049673] opacity-80">
                    Loading results…
                </p>
            )}
        </div>
    );
}

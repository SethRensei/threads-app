import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import "../globals.css";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Bottombar from "@/components/shared/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Threads | Fil de discussions",
    description: "Partagez vous idées dans des fils de discussions.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider
            appearance={{
                baseTheme: dark,
            }}
        >
            <html lang="fr">
                <body className={inter.className}>
                    <Topbar />

                    <main className="flex flex-row">
                        <LeftSidebar />
                        <section className="main-container">
                            <div className="w-full max-w-4xl">{children}</div>
                        </section>
                        {/* @ts-ignore */}
                        <RightSidebar />
                    </main>

                    <Bottombar />
                </body>
            </html>
        </ClerkProvider>
    );
}

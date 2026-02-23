import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from '@/lib/forum/AuthContext';
import { ClientWrappers } from "@/components/layout/ClientWrappers";
import ElectionAlertBanner from "@/components/elections/ElectionAlertBanner";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-montserrat",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-inter",
    display: "swap",
});

export const viewport: Viewport = {
    themeColor: "#1a2742",
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    title: "Pivotal Voice | Your Voice. Your County. Your Future.",
    description: "The comprehensive civic engagement platform connecting Ellis County residents with democracy. Stay informed, get involved, and make your voice heard.",
    keywords: "Ellis County, Texas, civic engagement, political events, candidate tracker, community forum, democracy, local government",
    authors: [{ name: "Pivotal Voice" }],
    openGraph: {
        title: "Pivotal Voice | Your Voice. Your County. Your Future.",
        description: "The comprehensive civic engagement platform connecting Ellis County residents with democracy.",
        type: "website",
        locale: "en_US",
        images: ["/images/logo.png"],
    },
    icons: {
        icon: "/images/logo.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
            <body>
                <a href="#main-content" className="skip-to-content">
                    Skip to content
                </a>
                <ElectionAlertBanner />
                <AuthProvider>
                    {children}
                    <ClientWrappers />
                </AuthProvider>
            </body>
        </html>
    );
}

import type { Metadata } from "next";
import "./globals.css";
import { ClientWrappers } from "@/components/layout/ClientWrappers";

export const metadata: Metadata = {
    title: "Pivotal Voice | Strategic Communication & Civic Engagement",
    description: "Amplifying Leaders, Informing Communities. Strategic PR services and authentic dialogue platforms for Ellis County leaders.",
    keywords: "Ellis County, Texas, political events, debates, civic engagement, strategic communication, PR services",
    authors: [{ name: "Pivotal Voice" }],
    openGraph: {
        title: "Pivotal Voice | Strategic Communication & Civic Engagement",
        description: "Amplifying Leaders, Informing Communities",
        type: "website",
        locale: "en_US",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
                <ClientWrappers />
            </body>
        </html>
    );
}

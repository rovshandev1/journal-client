import {NextIntlClientProvider, hasLocale} from 'next-intl';
import type {Metadata} from "next";
import {routing} from '@/i18n/routing';
import {Geist, Geist_Mono} from "next/font/google";
import "./styles/globals.css";
import {AsyncFooter} from "@/app/widgets/footer";
import {AsyncHeader} from "@/app/widgets/header";
import {notFound} from "next/navigation";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Journal client",
    description: "",
};

export default async function RootLayout({children, params}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>
}>) {
    const {locale} = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale}>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <NextIntlClientProvider>
            <AsyncHeader/>
            {children}
            <AsyncFooter/>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}

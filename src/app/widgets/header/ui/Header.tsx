"use client";

import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {useLocale, useTranslations} from "next-intl";
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Menu, X, ChevronDown} from "lucide-react";

const Header = () => {
    const pathname = usePathname();
    const locale = useLocale();
    const t = useTranslations("Header");
    const [isOpen, setIsOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);

    const navLinks = [
        {href: "/", label: t("home")},
        {href: "/about", label: t("about")},
        {href: "/services", label: t("services")},
        {href: "/contact", label: t("contact")},
    ];

    const languages = [
        {code: "uz", label: "UZ", flag: "🇺🇿"},
        {code: "ru", label: "RU", flag: "🇷🇺"},
        {code: "en", label: "EN", flag: "🇺🇸"},
    ];

    const changeLanguage = (lang: string) => {
        const path = pathname.replace(`/${locale}`, "") || "/";
        window.location.href = `/${lang}${path}`;
    };

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image src="/logo.svg" alt="Logo" width={36} height={36}/>
                    <span className="text-xl font-bold text-gray-800">Andqxai</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={`/${locale}${link.href}`}
                            className={`text-gray-700 hover:text-blue-600 transition ${
                                pathname === `/${locale}${link.href}` ? "font-semibold" : ""
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Language Switcher */}
                    <div className="relative">
                        <button
                            onClick={() => setLangOpen(!langOpen)}
                            className="flex items-center space-x-2 px-3 py-1 border rounded-lg text-gray-700 hover:bg-gray-100 transition cursor-pointer"
                        >
              <span>
                {languages.find((l) => l.code === locale)?.flag}{" "}
                  {languages.find((l) => l.code === locale)?.label}
              </span>
                            <ChevronDown size={16}/>
                        </button>

                        <AnimatePresence>
                            {langOpen && (
                                <motion.ul
                                    initial={{opacity: 0, y: -10}}
                                    animate={{opacity: 1, y: 0}}
                                    exit={{opacity: 0, y: -10}}
                                    className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
                                >
                                    {languages.map((lang) => (
                                        <li key={lang.code}>
                                            <button
                                                onClick={() => changeLanguage(lang.code)}
                                                className={`flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100 transition cursor-pointer ${
                                                    locale === lang.code ? "bg-gray-50 font-semibold text-gray-700" : ""
                                                }`}
                                            >
                                                <span className="mr-2">{lang.flag}</span> {lang.label}
                                            </button>
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28}/> : <Menu size={28}/>}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={`/${locale}${link.href}`}
                                onClick={() => setIsOpen(false)}
                                className="block text-gray-700 hover:text-blue-600 transition"
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Mobile Language */}
                        <div className="pt-4 border-t border-gray-200">
                            <div className="flex flex-col space-y-2">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => changeLanguage(lang.code)}
                                        className={`flex items-center px-3 py-2 text-sm rounded-lg hover:bg-gray-100 ${
                                            locale === lang.code ? "bg-gray-50 font-semibold" : ""
                                        }`}
                                    >
                                        <span className="mr-2">{lang.flag}</span> {lang.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;

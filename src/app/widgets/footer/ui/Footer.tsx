"use client";

import {motion} from "framer-motion";
import {Facebook, Instagram, Youtube, Send} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const socials = [
        {href: "https://t.me/yourchannel", icon: <Send size={22}/>, label: "Telegram"},
        {href: "https://instagram.com/yourpage", icon: <Instagram size={22}/>, label: "Instagram"},
        {href: "https://facebook.com/yourpage", icon: <Facebook size={22}/>, label: "Facebook"},
        {href: "https://youtube.com/yourpage", icon: <Youtube size={22}/>, label: "YouTube"},
    ];

    const links = [
        {href: "/about", label: "About"},
        {href: "/services", label: "Services"},
        {href: "/contact", label: "Contact"},
        {href: "/privacy", label: "Privacy Policy"},
    ];

    return (
        <footer className="bg-white border-t border-gray-200 mt-16">
            <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Logo & Text */}
                <motion.div
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.6}}
                    className="flex flex-col items-start"
                >
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src="/logo.svg"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="rounded-lg"
                        />
                        <span className="text-xl font-bold text-gray-800">Andqxai</span>
                    </Link>
                    <p className="mt-3 text-sm text-gray-600 max-w-xs">
                        Innovative solutions for web, design & technology. We make ideas come alive.
                    </p>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.2}}
                >
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Quick Links</h4>
                    <ul className="space-y-2">
                        {links.map((link, i) => (
                            <li key={i}>
                                <Link
                                    href={link.href}
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Social Media */}
                <motion.div
                    initial={{opacity: 0, x: 20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.6, delay: 0.3}}
                    className="flex flex-col items-start"
                >
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Follow Us</h4>
                    <div className="flex space-x-5">
                        {socials.map((s, i) => (
                            <motion.div
                                key={i}
                                whileHover={{scale: 1.2, y: -3}}
                                whileTap={{scale: 0.9}}
                            >
                                <Link
                                    href={s.href}
                                    target="_blank"
                                    aria-label={s.label}
                                    className="text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                    {s.icon}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Bottom Text */}
            <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
                © 2025 Andqxai. All rights reserved.
            </div>
        </footer>
    );
}

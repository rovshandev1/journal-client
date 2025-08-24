"use client";
import Link from "next/link";
import {useLocale} from "next-intl";
import {motion} from "framer-motion";

export default function NotFound() {
    const locale = useLocale();

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-center px-6">
            {/* 404 Number */}
            <motion.h1
                initial={{scale: 0.8, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{duration: 0.6}}
                className="text-7xl md:text-9xl font-extrabold text-gray-800"
            >
                404
            </motion.h1>

            {/* Title */}
            <motion.h2
                initial={{y: 20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 0.3, duration: 0.6}}
                className="mt-4 text-2xl md:text-3xl font-semibold text-gray-700"
            >
                Oops! Page not found
            </motion.h2>

            {/* Description */}
            <motion.p
                initial={{y: 20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 0.5, duration: 0.6}}
                className="mt-3 text-gray-500 max-w-md"
            >
                The page you’re looking for doesn’t exist or has been moved.
            </motion.p>

            {/* Button */}
            <motion.div
                initial={{y: 20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 0.7, duration: 0.6}}
                className="mt-8"
            >
                <Link
                    href={`/${locale}`}
                    className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition"
                >
                    Return Home
                </Link>
            </motion.div>
        </div>
    );
}

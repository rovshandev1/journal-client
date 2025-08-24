"use client";

import Link from "next/link";
import {motion, Variants} from "framer-motion";

// Hero + Facts Block for: SCIENCE AND EDUCATION IN AGRICULTURE
// Stack: Next.js (App Router), TypeScript, TailwindCSS, Framer Motion

const container: Variants = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

const fadeUp: Variants = {
    hidden: {opacity: 0, y: 24},
    show: {
        opacity: 1,
        y: 0,
        transition: {type: "spring", stiffness: 70, damping: 14},
    },
};

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white"/>
                {/* Soft grid pattern */}
                <svg
                    className="absolute inset-0 h-full w-full opacity-30 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"
                    aria-hidden
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.3"/>
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)"/>
                </svg>
                {/* Glow */}
                <div
                    className="absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-emerald-200/40 blur-3xl"/>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-20 sm:px-6 md:grid-cols-12 md:py-28 lg:px-8"
            >
                {/* Text */}
                <div className="md:col-span-7 lg:col-span-7">
                    <motion.p
                        variants={fadeUp}
                        className="mb-3 inline-block rounded-full border px-3 py-1 text-xs font-medium tracking-wide text-emerald-700"
                    >
                        NATIONAL SCIENTIFIC JOURNAL
                    </motion.p>

                    <motion.h1
                        variants={fadeUp}
                        className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
                    >
                        SCIENCE AND EDUCATION IN AGRICULTURE
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="mt-4 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg"
                    >
                        Qishloq xo‘jaligi va iqtisodiyot yo‘nalishidagi ilmiy-amaliy maqolalar nashri
                    </motion.p>

                    <motion.p
                        variants={fadeUp}
                        className="mt-5 max-w-2xl text-sm text-gray-600 sm:text-base"
                    >
                        Jurnal Andijon qishloq xo‘jaligi va agrotexnologiyalar instituti muassisi bo‘lgan milliy ilmiy
                        nashr
                        bo‘lib, dolzarb ilmiy ishlanmalar, tahlillar va tavsiyalarni e’lon qiladi.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
                        <Link
                            href="/submit"
                            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm ring-1 ring-emerald-600 bg-emerald-600 text-white transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                        >
                            Maqola yuborish
                        </Link>
                        <Link
                            href="/guidelines"
                            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold ring-1 ring-gray-300 bg-white text-gray-900 transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                        >
                            Tahririy talablari
                        </Link>
                        <Link
                            href="/archive"
                            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold ring-1 ring-gray-300 bg-white text-gray-900 transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                        >
                            Arxiv
                        </Link>
                    </motion.div>
                </div>

                {/* Accent / Illustration + Facts */}
                <motion.div variants={fadeUp} className="md:col-span-5 lg:col-span-5">
                    <div className="relative mx-auto w-full max-w-md space-y-4">
                        {/* Illustration */}
                        <div
                            className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm">
                            <div
                                className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15),transparent_35%),radial-gradient(circle_at_80%_50%,rgba(16,185,129,0.1),transparent_35%)]"/>
                            <h3 className="text-lg font-semibold text-emerald-900">Ilm-fan va taʼlim</h3>
                            <p className="mt-2 text-sm leading-relaxed text-emerald-900/80">
                                Qishloq xo‘jaligi va agrotexnologiyalar bo‘yicha innovatsion tadqiqotlar, tahlillar va
                                tavsiyalar.
                            </p>
                        </div>

                        {/* Asosiy faktlar */}
                        <div className="grid gap-3 sm:grid-cols-2">
                            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                                <p className="text-sm font-medium text-gray-500">Muassis</p>
                                <p className="text-base font-semibold text-gray-900">
                                    Andijon qishloq xo‘jaligi va agrotexnologiyalar instituti
                                </p>
                            </div>
                            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                                <p className="text-sm font-medium text-gray-500">Bosh muharrir</p>
                                <p className="text-base font-semibold text-gray-900">Ortiqov Islom Ziyodullo o‘g‘li</p>
                            </div>
                            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                                <p className="text-sm font-medium text-gray-500">Ro‘yxatga olish</p>
                                <p className="text-base font-semibold text-gray-900">АXOА № 039678</p>
                            </div>
                            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                                <p className="text-sm font-medium text-gray-500">OAK tavsiyasi</p>
                                <p className="text-base font-semibold text-gray-900">
                                    OAK Rayosatining Qarori 29.12.2023 й №347/5
                                </p>
                            </div>
                            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:col-span-2">
                                <p className="text-sm font-medium text-gray-500">Qabul qilinadigan tillar</p>
                                <p className="text-base font-semibold text-gray-900">o‘zbek, rus, ingliz</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

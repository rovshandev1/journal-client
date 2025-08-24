"use client";

import {motion} from "framer-motion";
import {useState, useEffect} from "react";

const slides = [
    {
        title: "Xush kelibsiz!",
        info: "SCIENCE AND EDUCATION IN AGRICULTURE – ilmiy-amaliy maqolalarning milliy nashri.",
        bg: "from-emerald-50 to-white",
    },
    {
        title: "Ilm-fan va ta’lim",
        info: "Qishloq xo‘jaligi, agrotexnologiya va iqtisodiyot yo‘nalishlarida dolzarb tadqiqotlar.",
        bg: "from-emerald-100 to-emerald-50",
    },
    {
        title: "Ilmiy hamkorlik",
        info: "OAK tavsiya etgan maqolalarni birga yarating va yangiliklarni kashf eting.",
        bg: "from-white to-emerald-50",
    },
];

export default function Banner() {
    const [index, setIndex] = useState(0);

    // Auto carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 6000); // 6s
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-[80vh] w-full overflow-hidden">
            {/* Slides */}
            <div className="w-full h-full flex items-center justify-center relative">
                {slides.map((slide, i) => (
                    <motion.div
                        key={i}
                        initial={{opacity: 0, scale: 1.02}}
                        animate={{
                            opacity: i === index ? 1 : 0,
                            scale: i === index ? 1 : 1.02,
                        }}
                        transition={{duration: 1}}
                        className={`absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br ${slide.bg}`}
                    >
                        <motion.h2
                            className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight"
                            initial={{y: 40, opacity: 0}}
                            animate={
                                i === index
                                    ? {y: 0, opacity: 1}
                                    : {y: 40, opacity: 0}
                            }
                            transition={{duration: 0.8}}
                        >
                            {slide.title}
                        </motion.h2>
                        <motion.p
                            className="text-lg md:text-2xl text-gray-700 max-w-2xl leading-relaxed"
                            initial={{y: 20, opacity: 0}}
                            animate={
                                i === index
                                    ? {y: 0, opacity: 1}
                                    : {y: 20, opacity: 0}
                            }
                            transition={{duration: 0.8, delay: 0.2}}
                        >
                            {slide.info}
                        </motion.p>
                    </motion.div>
                ))}
            </div>

            {/* Overlay gradient glow */}
            <div
                className="absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-emerald-200/40 blur-3xl z-0"/>

            {/* Dots */}
            <div className="absolute bottom-8 w-full flex justify-center space-x-3 z-20">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            i === index ? "bg-emerald-600 scale-125" : "bg-emerald-300"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}

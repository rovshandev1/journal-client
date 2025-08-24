"use client";
import {motion} from "framer-motion";
import {Button} from "@/app/shared/ui";

export default function CallForPapers() {
    return (
        <section className="bg-green-50 py-12 px-6 md:px-12 rounded-2xl shadow-md mt-10">
            <motion.div
                className="max-w-4xl mx-auto text-center"
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
            >
                <h2 className="text-2xl md:text-3xl font-bold text-green-900">
                    Maqolalar qabul qilinadi!
                </h2>
                <p className="text-gray-700 mt-4 leading-relaxed">
                    Jurnalda qishloq xo‘jaligi hamda iqtisodiyot rivoji va taraqqiyotiga
                    qaratilgan ilmiy-amaliy maqolalar muntazam chop etiladi.
                    Talablarga mos maqolalaringizni yuboring.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <Button className="bg-green-700 hover:bg-green-800 text-white rounded-xl px-6 py-2 shadow">
                        Talablar bilan tanishing
                    </Button>

                    <Button variant="outline" className="border-green-700 text-green-700 rounded-xl px-6 py-2">
                        Maqola yuborish
                    </Button>
                </div>
            </motion.div>
        </section>
    );
}

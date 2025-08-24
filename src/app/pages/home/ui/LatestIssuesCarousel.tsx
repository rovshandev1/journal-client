"use client";

import {Button, Card, CardContent} from "@/app/shared/ui";

const news = [
    {
        title: "Qishloq xo‘jaligida innovatsion usullar",
        author: "Islom Ortiqov",
        desc: "Mazkur maqolada qishloq xo‘jaligi ishlab chiqarishda zamonaviy innovatsion yondashuvlar haqida so‘z yuritiladi...",
    },
    {
        title: "Agroiqtisodiy taraqqiyot yo‘nalishlari",
        author: "Dilshod Karimov",
        desc: "Maqolada agroiqtisodiyotning rivojlanishi va uning mintaqaviy ta’siri haqida ilmiy-amaliy tahlillar keltirilgan...",
    },
];

export default function NewsCarousel() {
    return (
        <section className="py-12">
            <h2 className="text-2xl font-bold text-center mb-8">So‘nggi son / Yangiliklar</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {news.map((item, i) => (
                    <Card key={i}>
                        <CardContent>
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-500">Muallif: {item.author}</p>
                            <p className="text-gray-700 text-sm">{item.desc}</p>
                            <Button variant="outline" className="mt-2">
                                Batafsil o‘qish
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}

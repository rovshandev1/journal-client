"use client";

import {Card, CardContent} from "@/app/shared/ui";

const faqs = [
    {q: "Maqola hajmi qancha bo‘lishi kerak?", a: "10–15 bet atrofida."},
    {q: "Plagiat talablari bormi?", a: "Ha, kamida 80% original bo‘lishi shart."},
    {q: "Ko‘rib chiqish necha bosqichda?", a: "2 bosqich — dastlabki va ekspert ko‘rib chiqish."},
];

export default function FAQ() {
    return (
        <section className="py-12 bg-gray-50">
            <h2 className="text-2xl font-bold text-center mb-8">Ko‘p beriladigan savollar</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {faqs.map((item, i) => (
                    <Card key={i}>
                        <CardContent>
                            <h3 className="font-semibold">{item.q}</h3>
                            <p className="text-gray-600 text-sm">{item.a}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}

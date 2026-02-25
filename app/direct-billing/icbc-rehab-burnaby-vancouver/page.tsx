"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, ReactNode } from "react";
import {
    MoveRight, ShieldCheck, Activity, HeartPulse, Sparkles, UserCheck,
    Stethoscope, CheckCircle2, ChevronDown, HandHeart, Target, Bone,
    MapPin, Users, CreditCard, ActivitySquare, Star
} from "lucide-react";

const coverageItems = [
    { title: "Physiotherapy", sessions: "25", icon: Activity },
    { title: "Massage Therapy (RMT)", sessions: "12", icon: HeartPulse },
    { title: "Chiropractic Care", sessions: "25", icon: Bone },
    { title: "Acupuncture", sessions: "12", icon: Target },
    { title: "Clinical Counseling", sessions: "12", icon: Users },
    { title: "Kinesiology (Active Rehab)", sessions: "12", icon: Stethoscope },
];

const featureCards = [
    {
        title: "Collaborative Care",
        desc: "Physio, RMT, and Chiro working together under one roof for a comprehensive plan.",
        icon: Users
    },
    {
        title: "100% Direct Billing",
        desc: "We handle the ICBC paperwork so you pay exactly $0 out-of-pocket.",
        icon: CreditCard
    },
    {
        title: "Free Parking",
        desc: "Conveniently located in Burnaby with easily accessible free parking context.",
        icon: MapPin
    },
    {
        title: "Experienced Team",
        desc: "Specialized in whiplash, soft tissue injuries, and post-accident recovery.",
        icon: HeartPulse
    },
    {
        title: "Personalized Care",
        desc: "Every treatment plan is perfectly tailored to your specific injuries and goals.",
        icon: ActivitySquare
    },
    {
        title: "No User Fees",
        desc: "Your approved ICBC treatments are fully covered for the first 12 weeks.",
        icon: ShieldCheck
    }
];

const stepProcess = [
    {
        step: "1",
        title: "Report to ICBC",
        desc: "Report your claim to ICBC and get your Claim Number."
    },
    {
        step: "2",
        title: "Book Assessment",
        desc: "Book an assessment with us (No doctor's note needed)."
    },
    {
        step: "3",
        title: "Start Recovery",
        desc: "Begin your customized, fully-covered recovery plan."
    }
];

const testimonials = [
    {
        name: "Sarah L.",
        role: "Car Accident Patient",
        text: "After my accident, I was overwhelmed. Phoenix Rehab handled all the ICBC billing for me and the team was incredibly supportive. I'm finally pain-free!",
        rating: 5,
    },
    {
        name: "Michael T.",
        role: "Whiplash Recovery",
        text: "The collaborative approach here is amazing. Being able to see a physio and a chiropractor under the same roof really sped up my recovery process.",
        rating: 5,
    },
    {
        name: "Jessica M.",
        role: "ICBC Patient",
        text: "The free parking made a huge difference when I was in too much pain to walk far. The staff is welcoming and the 12 weeks of pre-approved coverage was a lifesaver.",
        rating: 5,
    }
];

const faqs: { question: string; answer: ReactNode }[] = [
    {
        question: "Do I have to pay anything upfront?",
        answer: "No. If you've been in a car accident in BC, your first 12 weeks of treatment are pre-approved by ICBC. We bill them directly, so you pay exactly $0 out-of-pocket."
    },
    {
        question: "What if my accident was more than 12 weeks ago?",
        answer: "You are still eligible for treatment! We simply need to request an extension from your ICBC claims adjuster. Our administrative team will handle this process for you."
    },
    {
        question: "Do I need a doctor's referral to start?",
        answer: "No doctor's referral is required. You can begin treatment with our practitioners immediately after reporting your claim and receiving your ICBC claim number."
    },
    {
        question: "Can I see multiple practitioners on the same day?",
        answer: "Yes, ICBC allows you to see different types of practitioners (e.g., a physiotherapist and an RMT) on the same day, which is wonderful for a comprehensive recovery."
    },
    {
        question: "What happens if I miss, cancel late, or arrive late for my appointment?",
        answer: (
            <div className="space-y-4">
                <p>At Phoenix Rehab, your appointment time is reserved exclusively for you. We require a minimum of 24 hours' notice for any cancellations or rescheduling.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Late Cancellations:</strong> If you cancel with less than 24 hours' notice or miss your appointment, a cancellation fee equal to the full cost of the scheduled treatment will be charged to the card on file.</li>
                    <li><strong>Late Arrivals:</strong> If you arrive late, your session may be shortened to accommodate others, but you will be responsible for the full session fee.</li>
                    <li><strong>Insurance Coverage:</strong> Please be aware that insurance providers (including Extended Health Plans and ICBC) do not cover fees for missed appointments or late cancellations. These fees are the sole responsibility of the patient.</li>
                    <li><strong>How to Reschedule:</strong> To avoid fees, please cancel or reschedule via our online booking portal, by calling (778) 379-9888, or by emailing us directly.</li>
                </ul>
            </div>
        )
    }
];

export default function ICBCRehabPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative w-full h-[75vh] min-h-[600px] flex items-center justify-center overflow-hidden pt-40 pb-20">
                <Image
                    src="/images/direct-billing/direct-billing-hero.webp"
                    alt="ICBC Post-Accident Rehab"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117] via-[#0d1117]/80 to-[#0d1117]/40" />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl text-white"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 font-semibold text-sm">
                            <ShieldCheck size={16} className="text-[#e8511a]" />
                            ICBC Pre-Approved
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight">
                            ICBC Physiotherapy & <span className="text-[#e8511a]">Rehab</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-xl">
                            Get pre-approved treatments with zero out-of-pocket costs for your first 12 weeks. We handle the ICBC direct billing so you can focus on recovery.
                        </p>
                        <a
                            href="https://phoenixrehab.janeapp.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-[#e8511a] hover:bg-[#c04010] shadow-xl shadow-orange-500/20 transition-all duration-300"
                        >
                            Book Your First Assessment
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Symptoms & Importance Section */}
            <section className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                                Have You Recently Been in a Car Accident?
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Car accidents can leave you with lingering pain, stiffness, and stress — even from minor collisions. Common symptoms include:
                            </p>

                            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    "Neck pain or whiplash",
                                    "Back or shoulder pain",
                                    "Headaches or migraines",
                                    "Muscle soreness and stiffness",
                                    "Limited mobility",
                                    "Anxiety, stress, or sleep problems",
                                ].map((symptom, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-[#e8511a] shrink-0" />
                                        <span className="text-gray-700 font-medium">{symptom}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />
                                <p className="text-gray-800 font-medium relative z-10">
                                    <strong className="text-[#e8511a]">👉 Important:</strong> Symptoms don't always appear right away. After a collision, you may feel fine at first, but pain and stiffness can develop weeks or even months later.
                                </p>
                                <p className="mt-4 text-gray-800 font-bold relative z-10">
                                    No doctor's referral is required to start your treatment.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/direct-billing/direct-billing-car-accident-physiotherapy-neck-treatment-burnaby.webp"
                                alt="ICBC Physiotherapy Neck Treatment"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <p className="text-white text-xl font-medium">
                                    "At Phoenix Rehab, our team is experienced in helping patients recover from ICBC-covered injuries quickly and safely."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Coverage Grid */}
            <section className="py-20 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                            Your ICBC Coverage – What You Need to Know
                        </h2>
                        <p className="text-lg text-gray-600">
                            If you've been in a motor vehicle accident in BC, you are eligible for pre-approved treatments with no upfront payment within the first 12 weeks.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coverageItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-[#e8511a] mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-black text-[#e8511a]">{item.sessions}</span>
                                    <span className="text-gray-500 font-medium">pre-approved sessions</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 text-center text-gray-500 font-medium">
                        👉 If you need more sessions after this 12-week period, our team can work with ICBC to request extensions on your behalf.
                    </div>
                </div>
            </section>

            {/* Why Choose Us & How It Works */}
            <section className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20">
                        {/* Left: Why Choose Us Feature Grid */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-10">
                                Why Choose Phoenix Rehab?
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {featureCards.map((card, idx) => (
                                    <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-[#e8511a] mb-4">
                                            <card.icon size={20} />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right: Clinic Interior Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative h-full min-h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/direct-billing/direct-billing-multidisciplinary-clinic-interior-burnaby.webp"
                                alt="Phoenix Rehab Clinic Interior"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How It Works (3-Step Process) */}
            <section className="py-20 bg-[#0d1117] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-black mb-6">
                            How It Works
                        </h2>
                        <p className="text-lg text-gray-400">
                            Injured patients are often overwhelmed. We break it down simply.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {stepProcess.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="relative bg-white/5 border border-white/10 rounded-3xl p-8"
                            >
                                <div className="text-6xl font-black text-white/5 absolute top-4 right-6">
                                    {step.step}
                                </div>
                                <div className="w-12 h-12 rounded-full bg-[#e8511a] flex items-center justify-center font-bold text-xl mb-6 relative z-10">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-bold mb-3 relative z-10">{step.title}</h3>
                                <p className="text-gray-400 relative z-10">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <a
                            href="https://phoenixrehab.janeapp.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-[#0d1117] bg-white hover:bg-gray-100 transition-all duration-300"
                        >
                            Book Your Assessment
                        </a>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                            Patient Success Stories
                        </h2>
                        <p className="text-lg text-gray-600">
                            Hear from those who have successfully recovered with our ICBC program.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
                            >
                                <div className="flex gap-1 mb-6 text-[#e8511a]">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={18} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-gray-700 italic mb-8">"{testimonial.text}"</p>
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
                            ICBC Direct Billing FAQs
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white border text-left border-gray-200 rounded-2xl overflow-hidden hover:border-[#e8511a]/50 transition-colors">
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                                >
                                    <span className="font-bold text-gray-900">{faq.question}</span>
                                    <ChevronDown
                                        className={`shrink-0 text-gray-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {openFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="px-6 pb-5 text-gray-600 leading-relaxed"
                                        >
                                            {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

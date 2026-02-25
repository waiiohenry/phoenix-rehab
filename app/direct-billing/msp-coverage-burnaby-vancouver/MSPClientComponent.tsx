"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
    Activity, HeartPulse, Sparkles, UserCheck,
    Stethoscope, CheckCircle2, ChevronDown, HandHeart, Target, Bone,
    MapPin, Users, CreditCard, ActivitySquare, Star, BadgeDollarSign, ShieldCheck
} from "lucide-react";

export default function MSPClientComponent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const coverageItems = [
        { title: "Physiotherapy", subsidy: "$23 portion", icon: Activity },
        { title: "Acupuncture", subsidy: "$23 portion", icon: Target },
        { title: "Chiropractic Care", subsidy: "$23 portion", icon: Bone },
    ];

    const featureCards = [
        {
            title: "10 Subsidized Visits",
            desc: "Eligible patients receive 10 combined visits per calendar year across all approved supplementary services.",
            icon: ActivitySquare
        },
        {
            title: "Automatic Verification",
            desc: "Provide us with your CareCard (PHN) and date of birth, and we can instantly check your MSP eligibility.",
            icon: ShieldCheck
        },
        {
            title: "Direct Billing",
            desc: "For eligible visits, we bill MSP directly for their $23 portion. You only pay the remaining balance.",
            icon: CreditCard
        },
        {
            title: "No Referral Needed",
            desc: "You do not need a doctor's referral to access your MSP supplementary benefits or book an appointment.",
            icon: UserCheck
        }
    ];

    const stepProcess = [
        {
            step: "1",
            title: "Check Eligibility",
            desc: "Verify your MSP Premium Assistance status. You can do this yourself or we can check using your CareCard number."
        },
        {
            step: "2",
            title: "Book & Treat",
            desc: "Book your Physiotherapy, Acupuncture, or Chiropractic session and receive your treatment."
        },
        {
            step: "3",
            title: "Pay The Difference",
            desc: "We bill MSP for $23. You simply pay the remaining clinic user fee for the session."
        }
    ];

    const faqs = [
        {
            question: "Who qualifies for MSP Premium Assistance (Supplementary Benefits)?",
            answer: "MSP Supplementary Benefits are typically available to BC residents with lower incomes. Your eligibility is determined by the Ministry of Health based on your net income from the previous tax year."
        },
        {
            question: "Do I get 10 visits per service, or 10 visits total?",
            answer: "The 10 visits are combined across all eligible supplementary services (Physiotherapy, Chiropractic, Acupuncture, Massage Therapy, Naturopathy, and Podiatry) per calendar year. For example, if you use 4 visits for Physiotherapy, you have 6 remaining for any other eligible service."
        },
        {
            question: "Does MSP cover the full cost of the treatment?",
            answer: "No. MSP contributes $23 towards the cost of each eligible visit. You are responsible for paying the remaining balance (the 'user fee') for the clinic visit."
        },
        {
            question: "Can I use my Extended Health Insurance to cover the remaining balance?",
            answer: "Yes! If you have extended health benefits through your employer or a private plan, we can often direct bill them for the remaining balance after the MSP portion has been applied."
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative w-full h-[75vh] min-h-[600px] flex items-center justify-center overflow-hidden pt-40 pb-20">
                <Image
                    src="/images/direct-billing/ICBC-hero.webp" // Re-using image for now
                    alt="MSP Premium Assistance Rehab"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117]/95 via-[#0d1117]/80 to-[#0d1117]/40" />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl text-white"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 font-semibold text-sm">
                            <BadgeDollarSign size={16} className="text-[#207a5d]" /> {/* Using a green tint for MSP */}
                            Premium Assistance
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight">
                            MSP Supplementary <span className="text-[#207a5d]">Coverage</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-xl">
                            If you qualify for MSP Premium Assistance, you're entitled to 10 partially subsidized treatments per year. We make accessing these benefits easy with direct billing.
                        </p>
                        <a
                            href="https://phoenixrehab.janeapp.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-[#207a5d] hover:bg-[#185e47] shadow-xl shadow-green-500/20 transition-all duration-300"
                        >
                            Book An Appointment
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Coverage Grid */}
            <section className="py-20 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                            Eligible Treatments Under MSP
                        </h2>
                        <p className="text-lg text-gray-600">
                            MSP contributes $23 towards the cost of the following services at our clinic.
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
                                <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-[#207a5d] mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-black text-[#207a5d]">{item.subsidy}</span>
                                    <span className="text-gray-500 font-medium">covered by MSP</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 text-center text-gray-500 font-medium max-w-2xl mx-auto">
                        👉 Note: Registered Massage Therapy (RMT) and Counseling are generally not covered by the MSP $23 contribution at our clinic.
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20">
                        {/* Left: Feature Grid */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-10">
                                How MSP Supplementary Benefits Work
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {featureCards.map((card, idx) => (
                                    <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-[#207a5d] mb-4">
                                            <card.icon size={20} />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right: Steps */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-[#0d1117] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden h-full flex flex-col justify-center"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px]" />

                            <h2 className="text-3xl font-black mb-10 relative z-10">
                                Your 3-Step Process
                            </h2>

                            <div className="space-y-12 relative z-10">
                                {stepProcess.map((item, idx) => (
                                    <div key={idx} className={`relative pl-10 border-l-2 ${idx === stepProcess.length - 1 ? 'border-transparent' : 'border-white/10'}`}>
                                        <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[#207a5d] flex items-center justify-center font-bold shadow-[0_0_0_8px_rgba(13,17,23,1)]">
                                            {item.step}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                        <p className="text-gray-400">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="py-20 bg-gray-50 border-t border-gray-100">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
                            MSP Direct Billing FAQs
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white border text-left border-gray-200 rounded-2xl overflow-hidden hover:border-[#207a5d]/50 transition-colors">
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
                                            <p>{faq.answer}</p>
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

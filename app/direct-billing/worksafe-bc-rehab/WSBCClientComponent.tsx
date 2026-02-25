"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
    MoveRight, ShieldCheck, Activity, HeartPulse, Sparkles, UserCheck,
    Stethoscope, CheckCircle2, ChevronDown, HandHeart, Target, Bone,
    MapPin, Users, CreditCard, ActivitySquare, Star
} from "lucide-react";

export default function WSBCClientComponent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const coverageItems = [
        { title: "Physiotherapy", sessions: "Initial Assessment", icon: Activity },
        { title: "Active Rehab", sessions: "Return to Work", icon: Stethoscope },
        { title: "Work Conditioning", sessions: "Customized", icon: HeartPulse },
    ];

    const featureCards = [
        {
            title: "No User Fees",
            desc: "Approved WSBC physiotherapy treatments are fully covered. You pay exactly $0 out-of-pocket.",
            icon: ShieldCheck
        },
        {
            title: "We Handle The Billing",
            desc: "All WSBC-related treatments are directly billed to WorkSafeBC. No paperwork for you.",
            icon: CreditCard
        },
        {
            title: "Fast Assessment",
            desc: "A Physiotherapy Initial Assessment can usually be done without prior claim owner approval.",
            icon: ActivitySquare
        },
        {
            title: "Return to Work Focus",
            desc: "Our primary goal is to help you safely regain the strength and mobility needed for your job.",
            icon: Target
        }
    ];

    const stepProcess = [
        {
            step: "1",
            title: "Get Your Claim Number",
            desc: "Report your injury to your employer and WorkSafeBC to receive your WSBC claim number."
        },
        {
            step: "2",
            title: "Book Assessment",
            desc: "Book your initial assessment within 60 days of your injury. (No prior approval needed in most cases)."
        },
        {
            step: "3",
            title: "Start Recovery",
            desc: "Begin your customized recovery plan designed to get you back to work safely."
        }
    ];

    const faqs = [
        {
            question: "Do I have to pay anything upfront for my treatment?",
            answer: "No. If you have an active and accepted WorkSafeBC claim for physiotherapy, treatments are fully covered. We bill WorkSafeBC directly."
        },
        {
            question: "Do I need approval from my WSBC claim owner before my first visit?",
            answer: "In most cases, a Physiotherapy Initial Assessment can be completed without prior approval from your claim owner, as long as it takes place within 60 days of your injury date."
        },
        {
            question: "What if I miss an appointment?",
            answer: "Please note that WorkSafeBC does not cover fees for missed appointments or late cancellations. As per our clinic policy, missed appointments without 24 hours' notice will be charged directly to the patient."
        },
        {
            question: "What information do I need to book my appointment?",
            answer: "When booking, please provide your approved WorkSafeBC claim number, your Personal Health Number (CareCard), your date of birth, and the date of your workplace injury."
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative w-full h-[75vh] min-h-[600px] flex items-center justify-center overflow-hidden pt-40 pb-20">
                <Image
                    src="/images/direct-billing/ICBC-hero.webp" // Re-using image for now
                    alt="WorkSafeBC Workplace Injury Rehab"
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
                            <ShieldCheck size={16} className="text-[#0a6c9d]" /> {/* Using WSBC Blue tint */}
                            WorkSafeBC Approved
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight">
                            WorkSafeBC Physiotherapy <span className="text-[#0a6c9d]">Rehab</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-xl">
                            Injured at work? Get expert physiotherapy treatment fully covered by WorkSafeBC. We direct bill so you can focus entirely on your recovery and return to work.
                        </p>
                        <a
                            href="https://phoenixrehab.janeapp.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-[#0a6c9d] hover:bg-[#085a85] shadow-xl shadow-blue-500/20 transition-all duration-300"
                        >
                            Book Your Initial Assessment
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Workplace Injury Section */}
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
                                Recover Safely After a Workplace Injury
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Workplace injuries can happen in any environment—whether you're working at a desk, lifting heavy objects, or operating machinery. Early intervention is crucial for a full recovery. Common work-related injuries include:
                            </p>

                            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    "Back and neck strain",
                                    "Repetitive strain injuries (RSI)",
                                    "Shoulder and joint pain",
                                    "Carpal tunnel syndrome",
                                    "Sprains and muscle tears",
                                    "Post-surgical rehabilitation",
                                ].map((symptom, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-[#0a6c9d] shrink-0" />
                                        <span className="text-gray-700 font-medium">{symptom}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
                                <p className="text-gray-800 font-medium relative z-10">
                                    <strong className="text-[#0a6c9d]">👉 Fast-Track Your Assessment:</strong> In most cases, a Physiotherapy Initial Assessment can be completed <span className="font-bold underline">without prior approval</span> from your claim owner, provided it occurs within 60 days of the injury date.
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
                                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop"
                                alt="Physiotherapy Assessment"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <p className="text-white text-xl font-medium">
                                    "Our objective is to restore your strength and mobility so you can safely and confidently return to your job."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us & How It Works (Layout from ICBC) */}
            <section className="py-20 lg:py-28 bg-gray-50 border-y border-gray-100">
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
                                Why Trust Us With Your Claim?
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {featureCards.map((card, idx) => (
                                    <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0a6c9d] mb-4">
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
                                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop"
                                alt="Modern Clinic Interior"
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
                            How WorkSafeBC Claims Work
                        </h2>
                        <p className="text-lg text-gray-400">
                            Navigating a workplace injury claim doesn't have to be complicated. Here's your path to recovery:
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
                                <div className="w-12 h-12 rounded-full bg-[#0a6c9d] flex items-center justify-center font-bold text-xl mb-6 relative z-10">
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
                            Start Your Recovery Today
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
                            WorkSafeBC FAQs
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white border text-left border-gray-200 rounded-2xl overflow-hidden hover:border-[#0a6c9d]/50 transition-colors">
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

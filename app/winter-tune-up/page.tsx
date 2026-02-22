"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Snowflake,
    ActivitySquare,
    ShieldCheck,
    CalendarCheck,
    Award,
    HeartPulse,
    ArrowRight,
    MapPin,
    Flower2,
    Zap,
    Users
} from "lucide-react";

export default function WinterTuneUpPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden pt-32 pb-20">
                {/* Temporary Image (using about-hero if winter-tune-up is not generated yet) */}
                <Image
                    src="/images/winter-tune-up-hero.png" // Will fallback or need to be replaced
                    alt="Winter Tune-Up Physical Therapy and Rehab"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                    onError={(e) => {
                        // Fallback to a color if image missing
                        e.currentTarget.style.display = 'none';
                    }}
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-[#0d1117]/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent opacity-100" />
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay" /> {/* Subtle winter chill tint */}

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-blue-100 text-sm font-bold tracking-widest uppercase mb-6">
                            <Snowflake size={16} className="text-blue-300" />
                            Winter Season Special
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
                            Winter Tune-Up <span className="block text-blue-300">for Your Body</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-200 font-medium max-w-2xl mx-auto mb-10">
                            Reduce stiffness and prevent flare-ups this winter. Professional physiotherapy, massage, and rehab care designed to keep you moving well.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://phoenixrehab.janeapp.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="w-full sm:w-auto px-8 py-4 bg-[#e8511a] hover:bg-[#c04010] text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 text-lg"
                            >
                                Book Your Tune-Up
                                <ArrowRight size={20} />
                            </a>
                            <p className="text-sm text-gray-300 font-medium mt-2 sm:mt-0 sm:ml-4">
                                Extended health insurance accepted.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* What is it & Who is it for */}
            <section className="py-20 bg-gray-50 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                        {/* What Is It */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="bg-white p-8 lg:p-12 rounded-[2rem] shadow-sm border border-gray-100"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                                <ActivitySquare className="w-7 h-7 text-blue-600" />
                            </div>
                            <h2 className="text-3xl font-black text-gray-900 mb-6">What Is a Winter Tune-Up?</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                A Winter Tune-Up is a proactive approach to physical health. Instead of waiting for symptoms to worsen, our clinicians assess how your body is moving, identify areas of tension or imbalance, and provide individualized treatment to support mobility, comfort, and recovery during the winter months.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Preventing flare-ups of old injuries",
                                    "Reducing stiffness from cold weather",
                                    "Maintaining mobility and strength during lower activity seasons",
                                    "Supporting recovery from work, driving, or sports strain"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-100 italic text-gray-500 text-sm">
                                Care is always guided by professional assessment and clinical judgment.
                            </div>
                        </motion.div>

                        {/* Who is it for */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="bg-[#0d1117] p-8 lg:p-12 rounded-[2rem] shadow-xl text-white relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Users className="w-32 h-32" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                                    <ShieldCheck className="w-7 h-7 text-blue-300" />
                                </div>
                                <h2 className="text-3xl font-black text-white mb-6">Who This Is For</h2>
                                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                    A Winter Tune-Up is suitable for anyone looking to optimize their physical well-being during the colder months.
                                </p>
                                <ul className="space-y-5">
                                    {[
                                        "Individuals experiencing stiffness or discomfort during colder months",
                                        "Office professionals and drivers with neck, shoulder, or lower-back tension",
                                        "Active individuals maintaining fitness through winter",
                                        "Patients managing recurring or chronic musculoskeletal concerns",
                                        "Those with extended health benefits seeking consistent, structured care"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="mt-1 flex-shrink-0">
                                                <ShieldCheck className="w-5 h-5 text-blue-400" />
                                            </div>
                                            <span className="text-gray-200 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Program Details */}
            <section className="py-20 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">The Winter Tune-Up Program</h2>
                        <p className="text-lg text-gray-600">
                            As part of our commitment to holistic care, patients who consistently adhere to their treatment plan may access complimentary wellness sessions to support their recovery.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 lg:p-10 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <Award className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Milestone Access</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Patients completing a series of <span className="font-bold text-gray-900">3+ eligible visits</span> during winter may access a complimentary 30-minute Wellness Session. You may choose a session in Kinesiology, Traditional Chinese Medicine (TCM), or Clinical Counseling.
                            </p>
                        </div>

                        <div className="bg-orange-50 border border-orange-100 rounded-3xl p-8 lg:p-10 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                                <Zap className="w-8 h-8 text-[#e8511a]" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">First-Time Holistic Bonus</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To support both mind and body, when you redeem your first session for Kinesiology or TCM, you will receive an additional one-time <span className="font-bold text-gray-900">30-minute Clinical Counseling discovery session</span> at no cost.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <CalendarCheck className="w-5 h-5 text-blue-500" />
                                    Eligibility & Rules
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" /> Valid for regular treatments in Physiotherapy, Massage Therapy, Chiropractic Care, Kinesiology, Acupuncture/TCM, and Clinical Counseling.</li>
                                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" /> <strong className="text-gray-900">Promotional period: January 1 – March 31, 2026</strong></li>
                                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" /> One-Time Bonus: The additional Counseling session is valid once per patient during the promotional period.</li>
                                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" /> ICBC, WorkSafeBC and MSP treatments are not eligible.</li>
                                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" /> Complimentary sessions are subject to practitioner availability, have no cash value, are non-transferable, and must be used within the promotional period.</li>
                                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" /> Missed or late-cancelled appointments do not count toward eligibility.</li>
                                </ul>
                                <p className="text-xs text-gray-500 mt-4 italic">
                                    Complimentary wellness sessions are provided independently of insured services and are not billable to insurance. Treatment frequency is determined solely by medical necessity, not program eligibility.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-green-500" />
                                    Insurance & Billing
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm">
                                    We work with most major extended health insurance providers.
                                </p>
                                <ul className="space-y-3 text-sm text-gray-600 mb-6">
                                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" /> Direct billing available where applicable.</li>
                                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" /> Coverage depends on your individual plan.</li>
                                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" /> <strong className="text-gray-900">Complimentary wellness sessions are not submitted to insurance.</strong></li>
                                </ul>
                                <div className="bg-white p-4 rounded-xl border border-gray-100 text-sm font-medium text-gray-700">
                                    Our front desk team is happy to assist with benefit questions before your appointment.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Included Services */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">Care Personal to You</h2>
                        <p className="text-lg text-gray-600">
                            Depending on your assessment and individual needs, care may involve one or more of our regulated services.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Physiotherapy", href: "/physiotherapy-burnaby-vancouver", desc: "Movement assessment, pain management, and functional rehabilitation." },
                            { title: "Massage Therapy (RMT)", href: "/massage-therapy-burnaby-vancouver", desc: "Soft-tissue care and tension reduction." },
                            { title: "Acupuncture & TCM", href: "/acupuncture-burnaby-vancouver", desc: "Supportive care for pain, circulation, and recovery." },
                            { title: "Chiropractic Care", href: "/chiropractic-care-burnaby-vancouver", desc: "Joint mobility and spinal function support." },
                            { title: "Kinesiology", href: "/kinesiology-burnaby-vancouver", desc: "Active rehabilitation and movement retraining." },
                            { title: "Clinical Counseling", href: "/clinical-counseling-burnaby-vancouver", desc: "Mental wellness support for stress, pain management, and resilience." },
                        ].map((service, i) => (
                            <Link
                                href={service.href}
                                key={i}
                                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 block"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#e8511a] transition-colors flex items-center justify-between">
                                    {service.title}
                                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#e8511a] group-hover:translate-x-1 transition-all" />
                                </h3>
                                <p className="text-gray-600 text-sm">{service.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#0d1117] relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">How to Participate</h2>
                    <p className="text-xl text-gray-300 mb-10 leading-relaxed font-medium">
                        There is no separate “Winter Tune-Up” appointment type. Start by booking any regular treatment (45 minutes or longer) through our online booking system. Our clinicians will work out your treatment plan specific to your condition.
                    </p>

                    <a
                        href="https://phoenixrehab.janeapp.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 bg-[#e8511a] hover:bg-[#c04010] text-white px-8 py-5 rounded-xl font-bold text-lg transition-colors group"
                    >
                        Book Your First Appointment
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <p className="mt-8 text-gray-500 text-sm">
                        All care is provided based on professional assessment and clinical need.
                    </p>
                </div>
            </section>
        </main>
    );
}

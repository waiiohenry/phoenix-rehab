"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MoveRight, ShieldCheck, Activity, HeartPulse, Sparkles, UserCheck, Stethoscope, CheckCircle2 } from "lucide-react";

const coverageItems = [
    { title: "Physiotherapy", sessions: "25", icon: Activity },
    { title: "Massage Therapy (RMT)", sessions: "12", icon: HeartPulse },
    { title: "Chiropractic Care", sessions: "25", icon: Sparkles },
    { title: "Acupuncture", sessions: "12", icon: MoveRight },
    { title: "Clinical Counseling", sessions: "12", icon: UserCheck },
    { title: "Kinesiology (Active Rehab)", sessions: "12", icon: Stethoscope },
];

const benefits = [
    "All-in-one clinic – physiotherapy, massage therapy, chiropractic, acupuncture, counseling, and kinesiology under one roof.",
    "Collaborative care – practitioners work together across disciplines, ensuring a comprehensive, coordinated treatment plan.",
    "No user fees – approved ICBC treatments are fully covered, with no out-of-pocket costs.",
    "Direct billing – zero upfront payment required.",
    "Experienced practitioners – specialized in whiplash, soft tissue injuries, and post-accident recovery.",
    "Personalized care – every treatment plan is tailored to your specific injuries and recovery goals.",
    "Convenient Burnaby location – easily accessible with free parking context.",
];

export default function ICBCRehabPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative w-full h-[75vh] min-h-[600px] flex items-center justify-center overflow-hidden pt-40 pb-20">
                <Image
                    src="/images/icbc-hero.png"
                    alt="ICBC Post-Accident Rehab"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117]/90 via-[#0d1117]/70 to-[#0d1117]/40" />

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
                        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl">
                            In a car accident? Get pre-approved treatments with no upfront costs and no referral needed. We bill directly to ICBC.
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
                                    <strong className="text-[#e8511a]">👉 Important:</strong> Symptoms don't always appear right away. After a collision, you may feel fine at first, but pain and stiffness can develop weeks or even months later. Untreated injuries may worsen over time, leading to chronic pain or long-term complications.
                                </p>
                                <p className="mt-4 text-gray-700 relative z-10">
                                    That's why it's important to seek treatment as soon as possible. Early care helps reduce pain, speed recovery, and prevent small issues from turning into lasting problems.
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
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2680&auto=format&fit=crop"
                                alt="Clinic Healing Environment"
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

                        {/* Left: Why Choose Us */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-10">
                                Why Choose Phoenix Rehab for ICBC Recovery?
                            </h2>
                            <div className="space-y-6">
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-[#e8511a]/10 flex items-center justify-center shrink-0 mt-1">
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#e8511a]" />
                                        </div>
                                        <p className="text-lg text-gray-700 leading-relaxed">
                                            {benefit.split("–")[0]}
                                            {benefit.includes("–") && (
                                                <span className="text-gray-500"> – {benefit.split("–")[1]}</span>
                                            )}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right: How It Works */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-[#0d1117] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px]" />

                            <h2 className="text-3xl font-black mb-10 relative z-10">
                                How It Works at Phoenix Rehab
                            </h2>

                            <div className="space-y-12 relative z-10">
                                <div className="relative pl-10 border-l-2 border-white/10">
                                    <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[#e8511a] flex items-center justify-center font-bold shadow-[0_0_0_8px_rgba(13,17,23,1)]">
                                        1
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Book Your First Appointment</h3>
                                    <p className="text-gray-400">Call us with your ICBC claim number and the date of your accident. No doctor's referral is required to start treatment.</p>
                                </div>

                                <div className="relative pl-10 border-l-2 border-white/10">
                                    <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[#e8511a] flex items-center justify-center font-bold shadow-[0_0_0_8px_rgba(13,17,23,1)]">
                                        2
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Initial Assessment</h3>
                                    <p className="text-gray-400">We carefully assess your injuries and create a personalized recovery plan tailored to your needs.</p>
                                </div>

                                <div className="relative pl-10 border-l-2 border-transparent">
                                    <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[#e8511a] flex items-center justify-center font-bold shadow-[0_0_0_8px_rgba(13,17,23,1)]">
                                        3
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Treatment & Recovery</h3>
                                    <p className="text-gray-400">Start your sessions right away. We bill ICBC directly while you focus entirely on healing.</p>
                                </div>
                            </div>

                            <div className="mt-12 pt-10 border-t border-white/10 relative z-10">
                                <p className="text-lg font-medium mb-6">
                                    If you've been injured in a car accident, don't wait. The sooner you begin treatment, the faster you can recover and get back to your life.
                                </p>
                                <a
                                    href="https://phoenixrehab.janeapp.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 text-base font-bold rounded-full text-[#0d1117] bg-white hover:bg-gray-100 transition-all duration-300"
                                >
                                    Book Your Assessment
                                </a>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </main>
    );
}

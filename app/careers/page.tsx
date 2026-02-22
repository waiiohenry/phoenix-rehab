"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Users,
    HeartHandshake,
    Laptop,
    Smile,
    CheckCircle2,
    ArrowRight,
    MapPin,
    Stethoscope,
    Activity
} from "lucide-react";

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-32 pb-20">
                <Image
                    src="/images/careers-hero.png" // We will generate this
                    alt="Phoenix Rehab Clinic - Join Our Team"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center scale-[1.02]"
                    onError={(e) => {
                        e.currentTarget.src = '/images/contact-hero.png'; // Fallback
                    }}
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-[#0d1117]/80" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent opacity-100" />

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-widest uppercase mb-6">
                            <Users size={16} className="text-[#e8511a]" />
                            Join Our Team
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
                            Elevate Your Practice <span className="block text-[#e8511a]">With Us</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-300 font-medium max-w-2xl mx-auto mb-10">
                            We are currently looking for passionate Registered Massage Therapists (RMTs) and Physiotherapists to join our growing multidisciplinary clinic in Burnaby / Vancouver.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="#open-roles"
                                className="w-full sm:w-auto px-8 py-4 bg-[#e8511a] hover:bg-[#c04010] text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 text-lg"
                            >
                                View Open Roles
                                <ArrowRight size={20} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="py-20 bg-gray-50 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">Why Phoenix Rehab?</h2>
                        <p className="text-lg text-gray-600">
                            Join a supportive, collaborative environment where you can focus on what you do best: providing exceptional care to patients.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: HeartHandshake,
                                title: "Multidisciplinary Team",
                                desc: "Collaborate with Physiotherapists, RMTs, Chiropractors, Acupuncturists, and Clinical Counselors to provide comprehensive cross-disciplinary care."
                            },
                            {
                                icon: Laptop,
                                title: "Full Admin Support",
                                desc: "We handle the logistics. Enjoy full front-desk support, including online booking via JaneApp, ICBC coordination, and extended health direct billing."
                            },
                            {
                                icon: Smile,
                                title: "Beautiful Environment",
                                desc: "Practice in a modern, clean, and beautifully designed wellness clinic equipped to support both your comfort and your patients' healing journey."
                            }
                        ].map((perk, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
                                    <perk.icon className="w-7 h-7 text-[#e8511a]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{perk.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{perk.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Roles */}
            <section id="open-roles" className="py-24 bg-white border-y border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">Current Openings</h2>
                        <p className="text-lg text-gray-600">
                            We are actively reviewing applications for the following positions.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* RMT Role */}
                        <div className="bg-gray-50 rounded-3xl p-8 lg:p-10 border border-gray-200 hover:border-[#e8511a]/30 transition-colors">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                                        <Activity size={14} /> Immediate Opening
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-2">Registered Massage Therapist (RMT)</h3>
                                    <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                                        <MapPin size={16} /> Burnaby / Vancouver Border
                                    </div>
                                </div>
                                <a
                                    href="mailto:admin@phoenixrehab.ca?subject=Application for RMT Position"
                                    className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0d1117] hover:bg-[#e8511a] text-white font-bold rounded-xl transition-colors"
                                >
                                    Apply Now <ArrowRight size={18} />
                                </a>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">About The Role</h4>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        We are seeking a dedicated and passionate Registered Massage Therapist to join our busy multidisciplinary clinic. You will be taking over an existing patient base and have the opportunity to quickly build your schedule through our active marketing and cross-referrals from our team of Physiotherapists and Chiropractors.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Requirements</h4>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-[#e8511a] shrink-0" /> Registered and in good standing with the CMTBC.</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-[#e8511a] shrink-0" /> Valid liability insurance.</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-[#e8511a] shrink-0" /> Strong communication skills and a patient-first approach.</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-[#e8511a] shrink-0" /> New graduates are welcome to apply!</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">What We Offer</h4>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-[#e8511a] shrink-0" /> Highly competitive percentage split.</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-[#e8511a] shrink-0" /> Flexible scheduling (part-time or full-time availability).</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-[#e8511a] shrink-0" /> All supplies covered (linens, lotions, tables, etc.).</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Physiotherapist Role */}
                        <div className="bg-gray-50 rounded-3xl p-8 lg:p-10 border border-gray-200 hover:border-[#e8511a]/30 transition-colors">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                                        <Stethoscope size={14} /> Active Hiring
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-2">Registered Physiotherapist</h3>
                                    <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                                        <MapPin size={16} /> Burnaby / Vancouver Border
                                    </div>
                                </div>
                                <a
                                    href="mailto:admin@phoenixrehab.ca?subject=Application for Physiotherapist Position"
                                    className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0d1117] hover:bg-[#e8511a] text-white font-bold rounded-xl transition-colors"
                                >
                                    Apply Now <ArrowRight size={18} />
                                </a>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">About The Role</h4>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        We are looking for a Registered Physiotherapist to join our team. The ideal candidate will be passionate about manual therapy, exercise prescription, and holistic patient recovery. You will work alongside our Kinesiologists and other practitioners to provide optimal care timelines for patients, including sports injuries and ICBC cases.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Requirements</h4>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-[#e8511a] shrink-0" /> Registered and in good standing with the CPTBC.</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-[#e8511a] shrink-0" /> Valid professional liability insurance.</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-[#e8511a] shrink-0" /> Evidence-based practice style with strong manual skills.</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-[#e8511a] shrink-0" /> Ability to manage a varied caseload.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application CTA */}
            <section className="py-24 bg-[#0d1117] relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#e8511a]/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Join Us?</h2>
                    <p className="text-xl text-gray-300 mb-10 leading-relaxed font-medium">
                        If you are ready to elevate your practice in a supportive, modern environment, we would love to hear from you.
                    </p>

                    <a
                        href="mailto:admin@phoenixrehab.ca"
                        className="inline-flex items-center gap-3 bg-[#e8511a] hover:bg-[#c04010] text-white px-8 py-5 rounded-xl font-bold text-lg transition-colors group"
                    >
                        Email Your Resume & Cover Letter
                    </a>

                    <p className="mt-8 text-gray-400 text-sm">
                        admin@phoenixrehab.ca
                    </p>
                </div>
            </section>
        </main>
    );
}

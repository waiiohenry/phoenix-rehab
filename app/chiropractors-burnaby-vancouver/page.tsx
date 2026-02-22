"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Activity, Star, Languages, ActivitySquare, ArrowRight, User } from "lucide-react";

// Bio data extracted from reference page
const team = [
    {
        name: "Dr. Dan Sullins",
        role: "Doctor of Chiropractic (D.C.)",
        initials: "DS",
        color: "bg-indigo-100 text-indigo-700",
        languages: "English",
        specialties: [
            "Clinical Neuroscience",
            "Nervous System Regulation",
            "Patient-Centred Chiropractic Care",
            "Injury Prevention",
            "Veterans & Athletes Care"
        ],
        bio: [
            "Dr. Dan Sullins applies a patient-centred approach to chiropractic care, utilizing his knowledge of the nervous system to support the body's natural function. His clinical and personal experience has demonstrated that with proper maintenance, the body can perform efficiently and effectively.",
            "Dr. Sullins holds a Doctor of Chiropractic degree from Parker University and has pursued further education in clinical neuroscience through the Carrick Institute. This extensive training informs his detailed approach to patient assessment and care. He has had the opportunity to work with a diverse range of patients, including international visitors and athletes, and has studied advanced patient cases directly under Dr. Carrick.",
            "He also values his time working with veterans at a veteran's hospital, an experience that expanded his clinical knowledge and deepened his respect for those who have served. Dr. Sullins believes that injury prevention and patient education are key to optimizing the body's performance. He enjoys collaborating with the multidisciplinary team at Phoenix Rehab to provide comprehensive care that helps patients return to doing what they love."
        ]
    }
];

export default function ChiropractorsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-32 pb-16">
                <Image
                    src="/images/chiro-team-hero.png"
                    alt="Phoenix Rehab Chiropractic Clinic"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-[#0d1117]/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-semibold tracking-widest uppercase mb-6">
                            <ActivitySquare size={16} className="text-[#e8511a]" />
                            Alignment & Function
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
                            Meet Our <span className="text-[#e8511a]">Chiropractic</span> Team
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-200 font-medium max-w-2xl mx-auto">
                            Our licensed chiropractors deliver highly skilled spinal adjustments, joint mobilization, and manual therapy to relieve pain, restore alignment, and improve movement.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 lg:py-28 relative z-10 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="bg-gray-50 rounded-[2rem] p-8 lg:p-12 border border-gray-100/80 shadow-sm"
                        >
                            <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

                                {/* Left Column: Avatar & Meta */}
                                <div className="lg:w-1/3 shrink-0 flex flex-col items-center lg:items-start text-center lg:text-left">
                                    <div className={`w-32 h-32 rounded-3xl ${member.color} flex items-center justify-center mb-6 shadow-inner ring-4 ring-white`}>
                                        <span className="text-4xl font-black tracking-tighter">{member.initials}</span>
                                    </div>

                                    <h2 className="text-3xl font-black text-gray-900 mb-2">{member.name}</h2>
                                    <p className="text-[#e8511a] font-bold text-sm tracking-widest uppercase mb-6">
                                        {member.role}
                                    </p>

                                    <div className="w-full bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-5">
                                        <div>
                                            <div className="flex items-center gap-2 text-gray-400 mb-2">
                                                <Languages className="w-4 h-4" />
                                                <span className="text-xs font-bold uppercase tracking-wider">Languages</span>
                                            </div>
                                            <p className="text-gray-900 font-medium text-sm">{member.languages}</p>
                                        </div>
                                        <hr className="border-gray-100" />
                                        <div>
                                            <div className="flex items-center gap-2 text-gray-400 mb-3">
                                                <Star className="w-4 h-4" />
                                                <span className="text-xs font-bold uppercase tracking-wider">Clinical Focus</span>
                                            </div>
                                            <ul className="space-y-2">
                                                {member.specialties.map(spec => (
                                                    <li key={spec} className="text-sm font-medium text-gray-700 flex items-start gap-2">
                                                        <Activity className="w-4 h-4 text-[#e8511a] shrink-0 translate-y-0.5" />
                                                        <span>{spec}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <a
                                        href="https://phoenixrehab.janeapp.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-8 w-full group flex items-center justify-center gap-2 bg-[#0d1117] text-white px-6 py-4 rounded-xl font-bold hover:bg-[#e8511a] transition-colors"
                                    >
                                        Book with {member.name.split(' ')[1]}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>

                                {/* Right Column: Bio */}
                                <div className="lg:w-2/3">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <User className="w-6 h-6 text-gray-300" />
                                        About {member.name.split(' ')[1]}
                                    </h3>
                                    <div className="prose prose-lg prose-gray text-gray-600 font-medium leading-relaxed max-w-none space-y-6">
                                        {member.bio.map((paragraph, i) => (
                                            <p key={i}>{paragraph}</p>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}

                </div>
            </section>
        </main>
    );
}

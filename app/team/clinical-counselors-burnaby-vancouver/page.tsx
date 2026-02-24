"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeartPulse, Star, Languages, HeartHandshake, ArrowRight, User } from "lucide-react";

// Bio data extracted from reference page
const team = [
    {
        name: "Sailas Pui Ha Liu",
        role: "Registered Clinical Counselor",
        initials: "SL",
        color: "bg-purple-100 text-purple-700",
        bookingLink: "https://phoenixrehab.janeapp.com/#/staff_member/16",
        languages: "English, Cantonese, Mandarin",
        specialties: [
            "ICBC & MVA Recovery",
            "Individual Therapy",
            "Couples & Family Therapy",
            "Trauma & EMDR Therapy",
            "Stress & Anxiety Management"
        ],
        bio: [
            "Sailas is an experienced Registered Clinical Counsellor with a special focus on supporting ICBC patients recovering after motor vehicle accidents. She understands the unique emotional and psychological challenges that often arise following a collision and provides compassionate, tailored therapy to help clients manage stress, rebuild resilience, and support their overall recovery journey.",
            "Beyond ICBC care, Sailas works extensively with individuals, couples, and families navigating personal and relational challenges. In individual therapy, she offers a safe space to explore emotions. In couples counselling, she helps partners improve communication and emotional connection. In family therapy, she guides families toward healthier patterns and stronger bonds.",
            "Her practice is grounded in empathy, reflective practice, and evidence-based methods, with particular expertise in family therapy and EMDR therapy. With over fifteen years of experience, including time in Hong Kong and Calgary, Sailas brings a rich, multicultural perspective to her work. She is deeply committed to helping clients uncover insights, embrace resilience, and move toward greater well-being."
        ]
    },
    {
        name: "Dr. Solmaz Ammari",
        role: "Registered Clinical Counselor",
        initials: "SA",
        color: "bg-teal-100 text-teal-700",
        languages: "English, Farsi (Persian)",
        specialties: [
            "Couples & Relationship Therapy",
            "Trauma Recovery & EMDR",
            "Schema Therapy for Adults",
            "Anxiety, Depression & Stress",
            "Refugee & Immigrant Support"
        ],
        bio: [
            "Dr. Solmaz Ammari is a Registered Clinical Counsellor (RCC #23511, BCACC) with over 23 years of professional experience in psychotherapy. She specializes in couples therapy and relationship counselling, trauma recovery, schema therapy for adults, and mental health support for refugees and immigrants. She also provides therapy for anxiety, depression, and stress management.",
            "With a PhD in Psychology, Dr. Ammari brings an extensive academic and clinical background to her work. She has specialized training in Schema Therapy, as well as additional training in trauma-informed care and couples therapy, including Emotionally Focused Therapy (EFT).",
            "Her clinical philosophy emphasizes creating a safe, compassionate, and non-judgmental environment where clients feel understood and supported. Drawing on an integrative and evidence-based approach, she helps clients identify patterns, strengthen resilience, and foster meaningful change. She works with ICBC and Blue Cross under the Interim Federal Health Program (IFHP). Outside of work, she enjoys hiking in BC's natural landscapes and participating in artistic workshops such as pottery and painting."
        ]
    }
];

export default function ClinicalCounselorsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-32 pb-16">
                <Image
                    src="/images/team/counselors-team-hero.png"
                    alt="Phoenix Rehab Clinical Counseling"
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
                            <HeartHandshake size={16} className="text-[#e8511a]" />
                            Compassionate Support
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
                            Meet Our <span className="text-[#e8511a]">Clinical</span> Counselors
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-200 font-medium max-w-2xl mx-auto">
                            Our Registered Clinical Counsellors provide a safe, empathetic space to navigate life's challenges. We specialize in trauma, relationships, and ICBC recovery.
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
                                                        <HeartPulse className="w-4 h-4 text-[#e8511a] shrink-0 translate-y-0.5" />
                                                        <span>{spec}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <a
                                        href={member.bookingLink || "https://phoenixrehab.janeapp.com/"}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-8 w-full group flex items-center justify-center gap-2 bg-[#0d1117] text-white px-6 py-4 rounded-xl font-bold hover:bg-[#e8511a] transition-colors"
                                    >
                                        Book with {member.name.split(' ')[0] === 'Dr.' ? member.name.split(' ')[1] : member.name.split(' ')[0]}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>

                                {/* Right Column: Bio */}
                                <div className="lg:w-2/3">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <User className="w-6 h-6 text-gray-300" />
                                        About {member.name.split(' ')[0] === 'Dr.' ? member.name.split(' ')[1] : member.name.split(' ')[0]}
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

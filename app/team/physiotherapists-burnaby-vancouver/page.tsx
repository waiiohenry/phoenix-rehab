"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Activity, Star, Languages, GraduationCap, ArrowRight, User } from "lucide-react";

// Bio data extracted from reference page
const team = [
    {
        name: "Reshma Mehta",
        role: "Registered Physiotherapist",
        initials: "RM",
        color: "bg-orange-100 text-[#e8511a]",
        languages: "English, Hindi, Gujarati, Marathi",
        specialties: [
            "Certified Mulligan Practitioner",
            "Neurodevelopmental Techniques (NDT)",
            "Dry Needling",
            "Vestibular Rehabilitation",
            "TMJ Disorders"
        ],
        bio: [
            "Reshma Mehta is an experienced Physiotherapist dedicated to providing personalized, one-on-one care to help individuals recover from injury, illness, and chronic conditions. Her primary goal is to reduce pain, restore movement, and empower patients to return to active, independent lifestyles.",
            "Reshma completed her Bachelor's degree in Physiotherapy in 2003, followed by a Master's degree in Musculoskeletal Sciences in Mumbai, India. With a strong foundation in manual therapy, she is a Certified Mulligan Practitioner. This movement-based approach allows her to correct joint restrictions and improve mobility while the patient is active, often yielding effective results for conditions involving the spine and extremities.",
            "Complementing her manual therapy skills, Reshma has advanced training in Neurodevelopmental Techniques (NDT) and motor control, Dry Needling, Vestibular Rehabilitation, and the management of TMJ disorders. She treats a diverse range of patients, including pediatric and geriatric populations, and is experienced in managing sports injuries, post-surgical rehabilitation, and chronic pain. Reshma also works extensively with ICBC, WCB, and short/long-term disability clients.",
            "Patient education is central to Reshma's philosophy. She takes the time to teach patients about posture, ergonomics, and pain management strategies, designing individualized home exercise programs to prevent recurrence and promote long-term wellness. Outside the clinic, Reshma enjoys cooking, dancing, and practicing yoga."
        ]
    },
    {
        name: "Yves Shen-Feng Liu",
        role: "Registered Physiotherapist",
        initials: "YL",
        color: "bg-blue-100 text-blue-600",
        languages: "English, Mandarin",
        specialties: [
            "Sports Medicine",
            "Musculoskeletal Rehabilitation",
            "Geriatric Care",
            "Active Rehabilitation"
        ],
        bio: [
            "Yves is a bilingual physiotherapist fluent in English and Mandarin. Born and raised in Vancouver, he completed his Bachelor of Science in Physical Therapy in Taiwan and later earned a Graduate Certificate in Sports Medicine from the University of Melbourne.",
            "With a strong foundation in musculoskeletal, sports, and geriatric rehabilitation, Yves emphasizes active rehabilitation and therapeutic exercise in his practice. He is dedicated to delivering evidence-based, personalized care that empowers patients of all ages to regain and maintain physical wellness. His approach also highlights the importance of injury prevention and patient education as key components of long-term health.",
            "Outside of the clinic, Yves enjoys playing badminton and squash—activities that reflect his commitment to an active lifestyle. He hopes to inspire his patients and community to embrace movement and pursue healthier, more active lives."
        ]
    },
    {
        name: "Awnee Pandey",
        role: "Registered Physiotherapist",
        initials: "AP",
        color: "bg-emerald-100 text-emerald-600",
        languages: "English, Hindi",
        specialties: [
            "Neurosciences Physiotherapy",
            "Orthopaedic Rehabilitation",
            "ICU & Cardiopulmonary",
            "Manual Therapy"
        ],
        bio: [
            "Awnee is a compassionate, patient-centered physiotherapist with over 10 years of international experience, including hands-on practice in Canadian rehabilitation settings. He holds a Master's degree in Neurosciences Physiotherapy and has clinical expertise in ICU, orthopaedic, cardiopulmonary, and geriatric rehabilitation.",
            "His approach is evidence-based and goal-oriented, emphasizing functional recovery and empowering clients in their healing journey. Awnee also brings strong skills in manual therapy, mobility training, and patient education. He is passionate about helping individuals return to their optimal selves."
        ]
    }
];

export default function PhysiotherapistsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-32 pb-16">
                <Image
                    src="/images/team/physiotherapists-hero.png"
                    alt="Phoenix Rehab Physiotherapy Clinic"
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
                            <Activity size={16} className="text-[#e8511a]" />
                            Movement & Recovery
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
                            Meet Our <span className="text-[#e8511a]">Physiotherapy</span> Team
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-200 font-medium">
                            Our experienced physiotherapists provide personalized care for injury recovery, post-surgical rehab, chronic pain, and mobility improvement.
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
                                        Book with {member.name.split(' ')[0]}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>

                                {/* Right Column: Bio */}
                                <div className="lg:w-2/3">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <User className="w-6 h-6 text-gray-300" />
                                        About {member.name.split(' ')[0]}
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

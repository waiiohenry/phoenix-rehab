"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Star, Languages, Flower2, ArrowRight, User } from "lucide-react";

// Bio data extracted from reference page
const team = [
    {
        name: "Siyu (Rowan) Sun",
        role: "Dr. TCM, Reg. Acupuncturist & TCM Herbalist",
        initials: "RS",
        color: "bg-green-100 text-green-700",
        languages: "English",
        specialties: [
            "Neck & Shoulder Pain",
            "Low Back & Hip Disorders",
            "Insomnia & Menstrual Irregularities",
            "Fu's Subcutaneous Needling",
            "Cupping & Thread Embedding"
        ],
        bio: [
            "Rowan holds both Bachelor's and Master's degrees from Guangzhou University of Chinese Medicine, one of China's top TCM institutions. She completed over eight years of intensive clinical training and holds a national physician license in China. Before relocating to Canada, she served as an outpatient physician at a leading public hospital in Shenzhen.",
            "Rowan is a Registered Doctor of TCM, Acupuncturist, and TCM Herbalist in British Columbia. She specializes in classical Chinese therapies including acupuncture, Fu's subcutaneous needling, moxibustion, cupping, and thread embedding. Her clinical interests include neck and shoulder pain, low back and hip disorders, insomnia, eczema, menstrual irregularities, and various internal and musculoskeletal conditions.",
            "Rowan is dedicated to delivering personalized, holistic care rooted in traditional Chinese medical theory to help restore balance and well-being."
        ]
    },
    {
        name: "Wai Lam (Kelly) Chan",
        role: "TCM Practitioner, Reg. Acupuncturist & Herbalist",
        initials: "KC",
        color: "bg-teal-100 text-teal-700",
        languages: "English, Cantonese, Mandarin",
        specialties: [
            "Women's Health",
            "Stress Management & Sleep Disorders",
            "Digestive Imbalance",
            "Pain Relief & Post-injury Recovery",
            "Five-Element Acupuncture"
        ],
        bio: [
            "Kelly is a Registered Traditional Chinese Medicine Practitioner and Acupuncturist with a deep passion for integrating classical Chinese wisdom with modern clinical practice. She earned her Bachelor of Chinese Medicine from The Chinese University of Hong Kong, completing clinical internships at Beijing Tong Ren Tang and the affiliated teaching hospitals of Guangzhou University of Chinese Medicine. Kelly also received advanced training in Five-Element Acupuncture.",
            "Kelly's practice focuses on women's health, stress management, sleep disorders, digestive imbalance, pain relief, and post-injury recovery. Her treatments draw from Five-Element theory, combining acupuncture, herbal medicine, and lifestyle guidance to restore balance and vitality.",
            "Her approach is gentle, patient-centered, and holistic, emphasizing emotional as well as physical well-being. Kelly strives to create a calm and supportive environment where patients feel heard, understood, and empowered on their path to healing. Outside of practice, Kelly enjoys reading, yoga, and creative projects such as graphic design and crocheting."
        ]
    },
    {
        name: "Kyungeun (Kay) Choi",
        role: "TCM Practitioner, Reg. Acupuncturist & Herbalist",
        initials: "KC",
        color: "bg-emerald-100 text-emerald-700",
        languages: "English, Korean",
        specialties: [
            "Chronic Pain Management",
            "Injury Rehabilitation",
            "ICBC Recovery",
            "Women's Health",
            "Digestive Health"
        ],
        bio: [
            "Kyungeun (Kay) is a Registered Acupuncturist and Doctor of Traditional Chinese Medicine (TCM) who is passionate about helping patients achieve balance and wellness through natural healing. She earned her Diploma of Acupuncture and Doctor of Traditional Chinese Medicine from the Shanghai TCM College of British Columbia, and also holds a Bachelor's degree in Public Administration from Korea.",
            "Kay's areas of focus include chronic pain management, injury rehabilitation, ICBC recovery, women's health, and digestive health. Drawing from both classical Chinese medicine and modern therapeutic approaches, she integrates acupuncture, herbal medicine, and lifestyle guidance to support the body's natural healing process and restore harmony.",
            "Her clinical philosophy is rooted in the belief that health is achieved through balance—of body, mind, and lifestyle. She works closely with each patient to create personalized treatment plans that address both symptoms and their underlying causes. Outside of practice, Kay enjoys hiking and walking with her family and friends, especially through forest trails and along the water, where she finds peace and inspiration."
        ]
    },
    {
        name: "Yufeng (Kenny) Zou",
        role: "TCM Practitioner, Reg. Acupuncturist & Herbalist",
        initials: "KZ",
        color: "bg-blue-100 text-blue-700",
        languages: "English, Mandarin",
        specialties: [
            "ICBC & Sports Injury Recovery",
            "Chronic & Muscle Pain Management",
            "Sleep & Stress-related Conditions",
            "Facial Rejuvenation Acupuncture",
            "Master Tung Style Acupuncture"
        ],
        bio: [
            "Kenny is a Registered Traditional Chinese Medicine Practitioner who is dedicated to helping patients achieve recovery, balance, and long-term wellness through the art and science of TCM. He received his Diploma of Traditional Chinese Medicine Practitioner from Tzu Chi International College of Traditional Chinese Medicine in Vancouver.",
            "Kenny completed an internship in the Neurological Rehabilitation Department at the Affiliated Hospital of Liaoning University of Traditional Chinese Medicine. He further advanced his expertise through specialized training in Master Tung Style Acupuncture and Facial Rejuvenation Acupuncture. His clinical focus includes ICBC and sports injury recovery, chronic and muscle pain management, gynecological and digestive disorders, sleep issues, stress-related conditions, and facial rejuvenation.",
            "Kenny's approach emphasizes creating a calm, caring, and supportive environment where patients feel understood and at ease. Each session often begins with gentle tui-na to open the meridians and help the body relax. He views healing as a holistic journey—reconnecting body, mind, and spirit. Outside of practice, Kenny enjoys music, singing, Tai Chi, Eight Trigrams Palm, and yoga."
        ]
    },
    {
        name: "Pauline Ching Kei Wong",
        role: "TCM Practitioner, Reg. Acupuncturist & Herbalist",
        initials: "PW",
        color: "bg-purple-100 text-purple-700",
        languages: "English",
        specialties: [
            "ICBC Recovery & Sports Injuries",
            "Women's Health & Fertility",
            "Fatigue & Digestive Issues",
            "Facial Rejuvenation",
            "Western Nutrition & TCM Integration"
        ],
        bio: [
            "Pauline is a Registered Acupuncturist and Herbalist with a strong foundation in both Western nutrition and Traditional Chinese Medicine. She holds a Bachelor of Science in Dietetics from the University of British Columbia, a Diploma of Acupuncture from Tzu Chi International College of Traditional Chinese Medicine, and a Diploma of Herbology from Central College.",
            "With over 10 years of experience as a diet technician at Vancouver General Hospital, she brings a unique, integrative perspective to patient care—bridging evidence-based nutrition with the holistic principles of TCM. Her areas of focus include ICBC recovery, sports injuries, chronic pain management, fatigue, digestive issues, insomnia, headaches, stress and anxiety, women's health, facial rejuvenation, and weight management.",
            "In her treatments, she employs a wide range of modalities such as acupuncture, cupping, electrical stimulation, Tui-Na (Chinese massage), nutrition counselling, and lifestyle coaching. Her approach is client-centred and holistic. Outside of her clinical practice, she enjoys cycling with her family, gardening, and playing the Pipa, a traditional Chinese musical instrument."
        ]
    }
];

export default function AcupuncturistsTCMPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-32 pb-16">
                <Image
                    src="/images/tcm-team-hero.png"
                    alt="Phoenix Rehab Acupuncturists & TCM Practitioners"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center scale-[1.02]"
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
                            <Flower2 size={16} className="text-[#e8511a]" />
                            Holistic Healing & Vitality
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
                            Meet Our <span className="text-[#e8511a]">Acupuncturists</span> & TCM Practitioners
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-200 font-medium max-w-2xl mx-auto">
                            Our practitioners offer holistic care through acupuncture, cupping, herbal therapy, and more to support your body's natural healing.
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
                                                        <Leaf className="w-4 h-4 text-[#e8511a] shrink-0 translate-y-0.5" />
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
                                        Book with {member.name.split(' (')[0].split(' ')[0]}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>

                                {/* Right Column: Bio */}
                                <div className="lg:w-2/3">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <User className="w-6 h-6 text-gray-300" />
                                        About {member.name.split(' (')[0].split(' ')[0]}
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

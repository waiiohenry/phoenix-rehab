"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeartPulse, Star, Languages, Activity, ArrowRight, User } from "lucide-react";

// Bio data extracted from reference page
const team = [
    {
        name: "Congcong (Anita) Li",
        preferredName: "Anita",
        role: "Registered Massage Therapist",
        initials: "AL",
        image: "/images/team/pfp/rmt-anita-li-burnaby-phoenix-rehab.webp",
        color: "bg-indigo-100 text-indigo-700",
        bookingLink: "https://phoenixrehab.janeapp.com/#/staff_member/34",
        languages: "English, Mandarin",
        specialties: [
            "Deep Tissue & Swedish Massage",
            "Fascial Release & Trigger Point Therapy",
            "Joint Mobilization",
            "Rotator Cuff Injuries & Tennis Elbow",
            "Stress Management & Relaxation"
        ],
        bio: [
            "Anita is a dedicated Registered Massage Therapist who brings a unique blend of knowledge and life experience to her practice. Originally holding a Bachelor of Arts degree in Economics from the University of British Columbia, she transitioned into massage therapy after discovering a profound passion for helping others through direct, hands-on, and meaningful care. As a graduate of the Pacific Coastal College of Massage Therapy, she is highly committed to understanding the human body and its complexities.",
            "Her clinical approach focuses on both deep tissue work and relaxation massage, aiming to reduce pain while addressing the underlying musculoskeletal issues that cause discomfort. Anita has a special interest in treating musculotendinous conditions, including rotator cuff injuries and tennis elbow. To ensure each client receives the most effective care, she incorporates a variety of techniques into her tailored treatments, such as fascial release, trigger point therapy, joint mobilization, and Swedish massage.",
            "Beyond targeted pain relief, Anita recognizes the vital connection between physical tension and mental well-being. She actively integrates techniques designed to lower stress levels and promote overall rest and recovery. Fluent in both English and Mandarin, Anita is dedicated to providing a safe, welcoming environment and creating personalized treatment plans that empower every patient to feel their absolute best."
        ]
    },
    {
        name: "Anthony Artuso",
        role: "Registered Massage Therapist",
        initials: "AA",
        image: "/images/team/pfp/rmt-anthony-artuso-burnaby-phoenix-rehab.webp",
        color: "bg-rose-100 text-rose-600",
        bookingLink: "https://phoenixrehab.janeapp.com/#/staff_member/10",
        languages: "English",
        specialties: [
            "Sports Injuries",
            "Postural Realignment",
            "Musculoskeletal Imbalances",
            "TMJ Disorders",
            "Craniosacral Dysfunctions"
        ],
        bio: [
            "Anthony Artuso is a dedicated Registered Massage Therapist with a strong focus on restoring function and relieving pain. With experience at Motion Physiotherapy, Anthony has developed a special interest in treating sports injuries, postural realignment issues, and musculoskeletal imbalances. He also provides targeted care for headaches, TMJ (jaw) disorders, craniosacral dysfunctions, and motor vehicle accident (MVA)–related injuries.",
            "Anthony takes a personalized, hands-on approach to therapy, combining evidence-based techniques with a deep understanding of anatomy to support clients in their recovery and long-term wellness. Whether you're managing chronic tension or recovering from injury, his goal is to help you move better and feel your best."
        ]
    },
    {
        name: "Marc Fortin",
        role: "Registered Massage Therapist",
        initials: "MF",
        image: "/images/team/pfp/rmt-marc-fortin-burnaby-phoenix-rehab.webp",
        color: "bg-teal-100 text-teal-700",
        bookingLink: "https://phoenixrehab.janeapp.com/#/staff_member/4",
        languages: "English, French",
        specialties: [
            "Fascia Work & Myofascial Release",
            "Swedish Massage",
            "Trigger Point Therapy",
            "Joint Mobilization",
            "Lymphatic Drainage"
        ],
        bio: [
            "Marc is a Registered Massage Therapist who has been in practice since 2017. With a calm, attentive presence and a deep understanding of the human body, he creates a supportive environment for every client.",
            "Marc specializes in fascia work—an approach that targets the connective tissue to improve mobility, reduce pain, and foster long-lasting relief. He also incorporates techniques such as Swedish massage, trigger point therapy, joint mobilization, lymphatic drainage, and myofascial release to support each client's individual needs. His work often focuses on stress reduction, joint health, chronic pain management, and rehabilitation after injury or surgery.",
            "His therapeutic process begins with listening. Through communication, consent, and assessment, Marc develops treatment plans tailored to each client's unique goals and continually adapts these plans as healing unfolds. He believes that when the client's condition and massage techniques are in the right relationship, massage therapy can truly support the body's natural ability to heal.",
            "Marc has a reverence for the wisdom of the body and the ways it helps us face trauma, discover resilience, and gain self-knowledge. Outside of practice, he draws inspiration from movement disciplines such as Yoga, Qigong, and Aikido, and is currently exploring the ergonomics of low-impact running. Fully bilingual in English and French, Marc is also deeply connected to family life: he is married with two daughters—one a fellow RMT, and the other a high school performing arts student specializing in Aerial Silks."
        ]
    }
];

export default function RMTPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-32 pb-16">
                <Image
                    src="/images/team/rmt-hero.png"
                    alt="Phoenix Rehab Massage Therapy Clinic"
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
                            <HeartPulse size={16} className="text-[#e8511a]" />
                            Relief & Recovery
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
                            Meet Our <span className="text-[#e8511a]">RMT</span> Team
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-200 font-medium max-w-2xl mx-auto">
                            Our registered massage therapists provide personalized therapeutic care to relieve pain, reduce tension, and enhance physical recovery.
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
                                    {member.image ? (
                                        <div className="relative w-32 h-32 rounded-3xl overflow-hidden mb-6 shadow-md ring-4 ring-white shrink-0">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover object-top"
                                            />
                                        </div>
                                    ) : (
                                        <div className={`w-32 h-32 rounded-3xl ${member.color} flex items-center justify-center mb-6 shadow-inner ring-4 ring-white shrink-0`}>
                                            <span className="text-4xl font-black tracking-tighter">{member.initials}</span>
                                        </div>
                                    )}

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
                                        href={member.bookingLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-8 w-full group flex items-center justify-center gap-2 bg-[#0d1117] text-white px-6 py-4 rounded-xl font-bold hover:bg-[#e8511a] transition-colors"
                                    >
                                        Book with {member.preferredName || member.name.split(' ')[0]}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>

                                {/* Right Column: Bio */}
                                <div className="lg:w-2/3">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <User className="w-6 h-6 text-gray-300" />
                                        About {member.preferredName || member.name.split(' ')[0]}
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

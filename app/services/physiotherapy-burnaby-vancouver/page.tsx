"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import {
    Activity,
    Car,
    Briefcase,
    Brain,
    Scissors,
    HelpCircle,
    Bone,
    Hand,
    Zap,
    Shield,
    Thermometer,
    RotateCcw,
    Ear,
    AlignJustify,
    Dumbbell,
    BookOpen,
    ChevronRight,
    CheckCircle,
    CreditCard,
    Clock,
    ClipboardList,
    TrendingUp,
} from "lucide-react";

// ─── Animation helpers ────────────────────────────────────────────────────────

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

function AnimatedSection({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <motion.div
            ref={ref}
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const conditions = [
    {
        icon: Brain,
        title: "Neck & Back Pain",
        description: "Relief from acute strains, chronic stiffness, and postural discomfort to restore pain-free movement.",
    },
    {
        icon: Activity,
        title: "Sports Injuries",
        description: "Targeted rehabilitation for sprains, muscle tears, and ligament damage to get you back in the game safely.",
    },
    {
        icon: Car,
        title: "Motor Vehicle Accidents (ICBC)",
        description: "Specialized, direct-billed recovery plans for whiplash, soft tissue trauma, and crash-related injuries.",
    },
    {
        icon: Briefcase,
        title: "Workplace Injuries (WSBC)",
        description: "Comprehensive, structured care programs designed to safely and efficiently return you to your job.",
    },
    {
        icon: Scissors,
        title: "Post-Surgical Rehab",
        description: "Guided, step-by-step physical therapy to restore mobility, build strength, and reduce scar tissue after an operation.",
    },
    {
        icon: Bone,
        title: "Arthritis & Joint Pain",
        description: "Proven management strategies to reduce joint inflammation, improve lubrication, and maintain daily function.",
    },
    {
        icon: RotateCcw,
        title: "Concussions & Vertigo",
        description: "Specialized vestibular therapy to resolve dizziness, chronic headaches, and balance dysfunctions.",
    },
    {
        icon: AlignJustify,
        title: "TMJ & Jaw Dysfunction",
        description: "Focused treatment to relieve jaw pain, clicking, limited opening, and associated tension headaches.",
    },
];

const modalityRows = [
    {
        category: "Hands-On Therapy",
        items: [
            { label: "Manual Therapy & Joint Mobilization", desc: "Hands-on, clinical techniques used to improve tissue extensibility, align structures, and restore full joint range of motion." },
            { label: "Soft Tissue Release", desc: "Specialized massage and myofascial techniques applied by your physiotherapist to reduce muscle spasms and improve local blood circulation." },
        ],
    },
    {
        category: "Soft Tissue Adjuncts",
        items: [
            { label: "Cupping Therapy", desc: "A therapeutic technique using suction cups to decompress underlying tissue, promote localized blood flow, and relieve severe muscle tension." },
            { label: "Kinesiology Taping", desc: "Strategic, supportive taping methods to stabilize vulnerable joints, reduce localized swelling, and facilitate proper movement patterns." },
        ],
    },
    {
        category: "Clinical Technology",
        items: [
            { label: "Ultrasound Therapy", desc: "Gentle, high-frequency sound waves applied to injured tissues to increase local blood flow, reduce swelling, and speed up the healing process." },
            { label: "Electrotherapy (TENS/NMES)", desc: "Targeted electrical stimulation used for acute pain management, reducing swelling, and promoting muscle re-education." },
        ],
    },
    {
        category: "Active Rehabilitation",
        items: [
            { label: "Custom Exercise Prescription", desc: "Tailored home exercise programs and digital guidance to build lasting structural strength and prevent re-injury between visits." },
            { label: "Postural & Ergonomic Re-education", desc: "Biomechanical assessments to identify and correct the daily movement habits and workstation setups contributing to your pain." },
        ],
    },
];

const steps = [
    {
        number: "01",
        icon: ClipboardList,
        title: "Initial Assessment & Treatment Plan",
        description:
            "Your first visit includes a thorough evaluation of your health history, symptoms, and physical function. Your physiotherapist identifies the root causes of your condition and designs a personalized treatment plan.",
    },
    {
        number: "02",
        icon: Activity,
        title: "Personalized Therapy Sessions",
        description:
            "Sessions may include manual therapy, targeted exercises, and modalities such as electrotherapy or taping. As you progress, your treatment plan is adjusted to maximize recovery.",
    },
    {
        number: "03",
        icon: TrendingUp,
        title: "Ongoing Recovery & Prevention",
        description:
            "Your physiotherapist provides strategies for home exercise, injury prevention, and lifestyle adjustments to maintain results and prevent recurrence.",
    },
];

const expectations = [
    "Initial visits typically last 45–60 minutes (assessment + first treatment).",
    "Follow-up visits are usually 30–45 minutes, focusing on ongoing therapy.",
    "Treatments are always customized to your condition, comfort level, and goals.",
    "Many patients notice improvements after a few sessions, with long-term benefits building over time.",
    "You'll leave each session with practical exercises and strategies to support progress between visits.",
];

const insurers = ["ICBC", "WorkSafeBC", "MSP", "Extended Health"];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PhysiotherapyPage() {
    return (
        <>
            <HeroSection />
            <IntroSection />
            <ConditionsSection />
            <ModalitiesSection />
            <HowItWorksSection />
            <ExpectationsSection />
            <InsuranceSection />
            <CTASection />
        </>
    );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
    return (
        <section className="relative h-[80vh] min-h-[580px] flex items-center overflow-hidden">
            <Image
                src="/images/services/physio-hero.png"
                alt="Physiotherapist performing manual therapy at Phoenix Rehab Burnaby"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-black/30 border border-white/20 text-white/90 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e8511a] animate-pulse" />
                        Burnaby &amp; Vancouver
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight mb-6">
                        MOVE BETTER,{" "}
                        <span className="text-[#e8511a]">RECOVER</span>
                        <br />FASTER
                    </h1>
                    <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                        Evidence-based rehabilitation for pain relief, injury recovery, and
                        improved mobility — tailored to you.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10">
                        <motion.a
                            href="https://phoenixrehab.janeapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="bg-[#e8511a] hover:bg-[#c04010] text-white font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors"
                        >
                            Book a Session
                        </motion.a>
                        <a
                            href="#conditions"
                            className="border border-white/40 hover:border-white text-white font-semibold px-8 py-4 text-sm tracking-widest uppercase transition-colors"
                        >
                            Learn More ↓
                        </a>
                    </div>

                    {/* Billing pill */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs px-4 py-2 rounded-full">
                        <CreditCard size={13} />
                        Direct Billing — ICBC · WorkSafeBC · MSP · Extended Health
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// ─── Intro ────────────────────────────────────────────────────────────────────

function IntroSection() {
    const highlights = [
        { label: "Personalized Plans", sub: "No cookie-cutter protocols" },
        { label: "Direct Billing", sub: "ICBC, WSBC, MSP & more" },
        { label: "6+ Disciplines", sub: "Collaborative care under one roof" },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <AnimatedSection>
                        <motion.div variants={fadeUp}>
                            <span className="text-[#e8511a] text-xs font-bold uppercase tracking-widest">
                                Our Approach
                            </span>
                            <h2 className="mt-3 text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
                                Physiotherapy at{" "}
                                <span className="text-[#e8511a]">Phoenix Rehab</span>
                            </h2>
                        </motion.div>
                        <motion.div variants={fadeUp} className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                Physiotherapy is a healthcare profession focused on restoring movement,
                                reducing pain, and improving physical function. Our physiotherapists use
                                a combination of manual therapy, exercise, and modern treatment modalities
                                to help patients recover from injuries, manage chronic conditions, and
                                prevent future problems.
                            </p>
                            <p>
                                At Phoenix Rehab, we create personalized treatment plans based on your
                                unique needs and goals. Whether you&apos;re recovering from an accident,
                                managing chronic pain, or working toward peak performance — physiotherapy
                                supports your journey back to health and activity.
                            </p>
                        </motion.div>
                        <motion.div variants={fadeUp} className="mt-8">
                            <Link
                                href="https://phoenixrehab.janeapp.com/#/physiotherapy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[#e8511a] font-semibold hover:gap-3 transition-all"
                            >
                                Book your first appointment <ChevronRight size={18} />
                            </Link>
                        </motion.div>
                    </AnimatedSection>

                    <AnimatedSection className="grid grid-cols-1 gap-4">
                        {highlights.map((h) => (
                            <motion.div
                                key={h.label}
                                variants={fadeUp}
                                className="flex items-center gap-5 bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#e8511a]/30 hover:shadow-sm transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#e8511a]/10 flex items-center justify-center flex-shrink-0">
                                    <CheckCircle size={22} className="text-[#e8511a]" />
                                </div>
                                <div>
                                    <p className="font-black text-gray-900">{h.label}</p>
                                    <p className="text-sm text-gray-500 mt-0.5">{h.sub}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}

// ─── Conditions ───────────────────────────────────────────────────────────────

function ConditionsSection() {
    return (
        <section className="py-24 bg-gray-50" id="conditions">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-16">
                    <motion.div variants={fadeUp}>
                        <span className="text-[#e8511a] text-xs font-bold uppercase tracking-widest">
                            What We Treat
                        </span>
                        <h2 className="mt-3 text-4xl sm:text-5xl font-black text-gray-900">
                            Conditions We Treat
                        </h2>
                        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                            Physiotherapy can address a wide range of health concerns — from acute
                            injuries to chronic conditions.
                        </p>
                    </motion.div>
                </AnimatedSection>

                <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {conditions.map((c) => {
                        const Icon = c.icon;
                        return (
                            <motion.div
                                key={c.title}
                                variants={fadeUp}
                                className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#e8511a]/30 hover:shadow-md transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#e8511a]/10 flex items-center justify-center mb-5 group-hover:bg-[#e8511a]/20 transition-colors">
                                    <Icon size={22} className="text-[#e8511a]" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{c.description}</p>
                            </motion.div>
                        );
                    })}
                </AnimatedSection>
            </div>
        </section>
    );
}

// ─── Modalities ───────────────────────────────────────────────────────────────

function ModalitiesSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Heading + intro */}
                    <AnimatedSection>
                        <motion.div variants={fadeUp}>
                            <span className="text-[#e8511a] text-xs font-bold uppercase tracking-widest">
                                How We Help
                            </span>
                            <h2 className="mt-3 text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
                                Modalities &amp;{" "}
                                <span className="text-[#e8511a]">Techniques</span>
                            </h2>
                            <p className="mt-5 text-gray-500 leading-relaxed">
                                Our physiotherapists draw from a wide range of evidence-based
                                clinical tools — selecting and combining techniques based on
                                your specific diagnosis and recovery goals.
                            </p>
                        </motion.div>
                        {/* Decorative stat */}
                        <motion.div
                            variants={fadeUp}
                            className="mt-10 inline-flex items-center gap-4 bg-[#e8511a]/5 border border-[#e8511a]/20 rounded-2xl px-6 py-5"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#e8511a] flex items-center justify-center flex-shrink-0">
                                <CheckCircle size={22} className="text-white" />
                            </div>
                            <div>
                                <p className="font-black text-gray-900">Evidence-Based Only</p>
                                <p className="text-sm text-gray-500 mt-0.5">Every technique is clinically validated and outcome-focused</p>
                            </div>
                        </motion.div>
                    </AnimatedSection>

                    {/* Right: Grouped rows */}
                    <AnimatedSection className="space-y-6">
                        {modalityRows.map((row) => (
                            <motion.div key={row.category} variants={fadeUp}>
                                {/* Row category label */}
                                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#e8511a] mb-3 pl-1">
                                    {row.category}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {row.items.map((m) => (
                                        <div
                                            key={m.label}
                                            className="group flex items-start gap-3 bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-[#e8511a]/30 hover:bg-white hover:shadow-sm transition-all duration-200"
                                        >
                                            <span className="mt-0.5 w-5 h-5 rounded-full bg-[#e8511a]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e8511a]/25 transition-colors">
                                                <CheckCircle size={12} className="text-[#e8511a]" />
                                            </span>
                                            <div>
                                                <p className="font-bold text-gray-900 text-sm leading-snug">{m.label}</p>
                                                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{m.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}

// ─── How It Works ─────────────────────────────────────────────────────────────

function HowItWorksSection() {
    return (
        <section className="py-24 bg-[#111827]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-16">
                    <motion.div variants={fadeUp}>
                        <span className="text-[#e8511a] text-xs font-bold uppercase tracking-widest">
                            Our Process
                        </span>
                        <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">
                            How Physiotherapy Works
                        </h2>
                        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                            A clear, step-by-step approach to ensure effective and lasting care.
                        </p>
                    </motion.div>
                </AnimatedSection>

                <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((s) => {
                        const Icon = s.icon;
                        return (
                            <motion.div
                                key={s.number}
                                variants={fadeUp}
                                className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#e8511a]/40 hover:bg-white/8 transition-all duration-300"
                            >
                                <span className="text-6xl font-black text-white/5 absolute top-6 right-7 select-none leading-none">
                                    {s.number}
                                </span>
                                <div className="w-12 h-12 rounded-xl bg-[#e8511a]/15 flex items-center justify-center mb-6">
                                    <Icon size={22} className="text-[#e8511a]" />
                                </div>
                                <h3 className="font-black text-white text-lg mb-3">{s.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
                            </motion.div>
                        );
                    })}
                </AnimatedSection>
            </div>
        </section>
    );
}

// ─── What to Expect ───────────────────────────────────────────────────────────

function ExpectationsSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <motion.div variants={fadeUp} className="text-center mb-12">
                        <span className="text-[#e8511a] text-xs font-bold uppercase tracking-widest">
                            Your First Visit
                        </span>
                        <h2 className="mt-3 text-4xl sm:text-5xl font-black text-gray-900">
                            What to Expect in a Session
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-[#e8511a]/10 flex items-center justify-center">
                                <Clock size={20} className="text-[#e8511a]" />
                            </div>
                            <h3 className="font-black text-gray-900 text-lg">Session Details</h3>
                        </div>
                        <ul className="space-y-5">
                            {expectations.map((e, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="w-6 h-6 rounded-full bg-[#e8511a]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <CheckCircle size={14} className="text-[#e8511a]" />
                                    </span>
                                    <p className="text-gray-600 leading-relaxed">{e}</p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </AnimatedSection>
            </div>
        </section>
    );
}

// ─── Insurance ────────────────────────────────────────────────────────────────

function InsuranceSection() {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <AnimatedSection>
                    <motion.div variants={fadeUp}>
                        <span className="text-[#e8511a] text-xs font-bold uppercase tracking-widest">
                            Coverage
                        </span>
                        <h2 className="mt-3 text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                            Insurance &amp; Billing
                        </h2>
                        <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
                            Physiotherapy at Phoenix Rehab is covered by the following — and we
                            handle the paperwork so you can focus on healing.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="flex flex-wrap justify-center gap-4 mb-10"
                    >
                        {insurers.map((ins) => (
                            <div
                                key={ins}
                                className="bg-gray-50 border border-gray-200 rounded-full px-7 py-3 font-bold text-gray-800 text-sm hover:border-[#e8511a]/40 hover:bg-[#e8511a]/5 transition-all"
                            >
                                {ins}
                            </div>
                        ))}
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <motion.a
                            href="https://phoenixrehab.janeapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-block bg-[#e8511a] hover:bg-[#c04010] text-white font-bold px-10 py-5 text-sm tracking-widest uppercase transition-colors"
                        >
                            Book Your Physiotherapy Session
                        </motion.a>
                    </motion.div>
                </AnimatedSection>
            </div>
        </section>
    );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CTASection() {
    return (
        <section className="relative py-28 overflow-hidden bg-[#111827]">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#e8511a_0%,_transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#e8511a_0%,_transparent_60%)]" />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <AnimatedSection>
                    <motion.h2
                        variants={fadeUp}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
                    >
                        Ready to Start Your{" "}
                        <span className="text-[#e8511a]">Recovery?</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="text-lg text-gray-400 mb-10 max-w-xl mx-auto"
                    >
                        Book a physiotherapy session at our Burnaby clinic and take the
                        first step toward moving better and feeling stronger.
                    </motion.p>
                    <motion.div
                        variants={fadeUp}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <motion.a
                            href="https://phoenixrehab.janeapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="bg-[#e8511a] hover:bg-[#c04010] text-white font-bold px-10 py-5 text-sm tracking-widest uppercase transition-colors"
                        >
                            Book a Session
                        </motion.a>
                        <Link
                            href="/contact"
                            className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-10 py-5 text-sm tracking-widest uppercase transition-colors"
                        >
                            Contact Us
                        </Link>
                    </motion.div>
                    <p className="mt-6 text-gray-500 text-sm">
                        📍 100B – 3300 Boundary Rd, Burnaby &nbsp;|&nbsp; 📞 778-379-9888
                    </p>
                </AnimatedSection>
            </div>
        </section>
    );
}

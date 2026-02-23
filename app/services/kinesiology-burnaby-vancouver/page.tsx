"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import {
    Activity,
    Car,
    Briefcase,
    Scissors,
    Layers,
    Compass,
    Shield,
    CheckCircle,
    CreditCard,
    Clock,
    ClipboardList,
    TrendingUp,
    ChevronRight,
    Dumbbell,
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
        icon: Activity,
        title: "Sports Injuries",
        description: "Recovery programs to restore performance and prevent re-injury after athletic injuries.",
    },
    {
        icon: Car,
        title: "Motor Vehicle Accidents (ICBC)",
        description: "Structured active rehab programs to rebuild strength and mobility after car accidents — direct billed.",
    },
    {
        icon: Briefcase,
        title: "Work-Related Injuries (WSBC)",
        description: "Rehabilitation for repetitive strain, lifting injuries, and occupational postural concerns.",
    },
    {
        icon: Scissors,
        title: "Post-Surgical Recovery",
        description: "Guided exercise programs after orthopedic or joint surgery to safely regain strength and function.",
    },
    {
        icon: Layers,
        title: "Chronic Pain & Mobility Issues",
        description: "Gentle, progressive programs for arthritis, back pain, and functional limitations.",
    },
    {
        icon: Compass,
        title: "Balance & Coordination Deficits",
        description: "Retraining for improved stability, movement confidence, and fall prevention.",
    },
    {
        icon: Shield,
        title: "General Conditioning & Injury Prevention",
        description: "Programs to improve fitness, posture, and long-term resilience against future injury.",
    },
];

const modalityRows = [
    {
        category: "Core Active Rehab",
        items: [
            { label: "Active Rehabilitation Programs", desc: "Individualized exercise plans to restore strength, balance, and endurance following injury or surgery." },
            { label: "ICBC Active Rehab", desc: "Evidence-based exercise programs approved by ICBC specifically for motor vehicle accident recovery." },
        ],
    },
    {
        category: "Strength & Movement",
        items: [
            { label: "Strength & Conditioning Training", desc: "Progressive resistance and functional training tailored to your recovery stage and personal goals." },
            { label: "Functional Movement Training", desc: "Retraining body mechanics for safe, efficient movement in daily activities and athletic performance." },
        ],
    },
    {
        category: "Education & Prevention",
        items: [
            { label: "Postural & Ergonomic Coaching", desc: "Correcting movement patterns and workplace setups to reduce ongoing strain and prevent re-injury." },
            { label: "Home Exercise Programs", desc: "Clear, structured plans so you can continue making progress between clinic sessions at home." },
        ],
    },
];

const steps = [
    {
        number: "01",
        icon: ClipboardList,
        title: "Initial Assessment & Goal Setting",
        description:
            "Your kinesiologist evaluates your movement, strength, and limitations, while discussing your personal goals. A customized active rehab plan is created around your specific needs.",
    },
    {
        number: "02",
        icon: Dumbbell,
        title: "Guided Exercise Sessions",
        description:
            "One-on-one sessions where your kinesiologist leads you through exercises designed for recovery and prevention. Progress is monitored and the program is adjusted as you improve.",
    },
    {
        number: "03",
        icon: TrendingUp,
        title: "Ongoing Recovery & Long-Term Wellness",
        description:
            "Education, home exercise guidance, and lifestyle strategies help you maintain results and build resilience for the future — keeping you strong and active long-term.",
    },
];

const expectations = [
    "Sessions typically last 45–60 minutes.",
    "Exercises are designed to be safe, progressive, and tailored to your condition.",
    "Programs often combine strength training, mobility work, balance drills, and endurance exercises.",
    "You'll leave with a personalized home exercise plan to support your progress.",
    "Many patients report improved strength, reduced pain, and greater movement confidence within a few weeks.",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function KinesiologyPage() {
    return (
        <>
            <HeroSection />
            <IntroSection />
            <ConditionsSection />
            <ModalitiesSection />
            <HowItWorksSection />
            <ExpectationsSection />
            <FeesSection />
            <CTASection />
        </>
    );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
    return (
        <section className="relative h-[80vh] min-h-[580px] flex items-center overflow-hidden">
            <Image
                src="/images/services/kinesiology-hero.png"
                alt="Kinesiologist guiding patient through active rehabilitation exercise at Phoenix Rehab Burnaby"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/25" />

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
                        ACTIVE REHAB
                        <br />FOR <span className="text-[#e8511a]">RECOVERY</span>
                        <br />&amp; PERFORMANCE
                    </h1>
                    <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                        Personalized exercise-based rehabilitation to support recovery from
                        injuries, accidents, and chronic conditions — guided by Registered
                        Kinesiologists.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10">
                        <motion.a
                            href="https://phoenixrehab.janeapp.com/#/kinesiology"
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

                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs px-4 py-2 rounded-full">
                        <CreditCard size={13} />
                        Direct Billing — ICBC Active Rehab
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// ─── Intro ────────────────────────────────────────────────────────────────────

function IntroSection() {
    const highlights = [
        { label: "Registered Kinesiologists (R.Kin)", sub: "Certified movement and exercise specialists" },
        { label: "ICBC Direct Billing", sub: "Approved active rehab programs billed directly" },
        { label: "Individualized Programs", sub: "Every plan designed around your unique goals" },
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
                                Kinesiology at{" "}
                                <span className="text-[#e8511a]">Phoenix Rehab</span>
                            </h2>
                        </motion.div>
                        <motion.div variants={fadeUp} className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                Kinesiology is the science of human movement, focusing on how the body functions
                                in motion. Kinesiologists are movement specialists who use active, exercise-based
                                therapy to help patients recover from injuries, manage chronic conditions, and
                                improve overall performance.
                            </p>
                            <p>
                                At Phoenix Rehab, our kinesiologists design customized active rehabilitation
                                programs that include therapeutic exercises, strength training, and education.
                                Whether you're recovering from an accident, managing mobility issues, or working
                                toward injury prevention, kinesiology empowers you to move confidently and stay
                                active.
                            </p>
                        </motion.div>
                        <motion.div variants={fadeUp} className="mt-8">
                            <Link
                                href="https://phoenixrehab.janeapp.com/#/kinesiology"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[#e8511a] font-semibold hover:gap-3 transition-all"
                            >
                                Book your kinesiology session <ChevronRight size={18} />
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
                            Conditions We Support
                        </h2>
                        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                            Our kinesiology and active rehab programs support a wide range of
                            recovery and performance goals.
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
                                Our kinesiologists use a range of active, movement-based strategies
                                to promote recovery, build resilience, and optimize long-term health
                                and performance.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={fadeUp}
                            className="mt-10 inline-flex items-center gap-4 bg-[#e8511a]/5 border border-[#e8511a]/20 rounded-2xl px-6 py-5"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#e8511a] flex items-center justify-center flex-shrink-0">
                                <CheckCircle size={22} className="text-white" />
                            </div>
                            <div>
                                <p className="font-black text-gray-900">Registered Kinesiologists (R.Kin)</p>
                                <p className="text-sm text-gray-500 mt-0.5">
                                    Certified by the British Columbia Kinesiology Association (BCAK)
                                </p>
                            </div>
                        </motion.div>
                    </AnimatedSection>

                    {/* Right: Grouped rows */}
                    <AnimatedSection className="space-y-6">
                        {modalityRows.map((row) => (
                            <motion.div key={row.category} variants={fadeUp}>
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
                            How Kinesiology Works
                        </h2>
                        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                            A structured, progressive approach to help you rebuild strength, restore
                            movement, and maintain lasting results.
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
                                className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#e8511a]/40 transition-all duration-300"
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

// ─── Fees & Billing ───────────────────────────────────────────────────────────

function FeesSection() {
    const items = [
        {
            title: "ICBC Active Rehab",
            desc: "If injured in a motor vehicle accident, ICBC often covers Active Rehabilitation with a referral. We bill ICBC directly once your program is approved.",
        },
        {
            title: "Private-Pay Options",
            desc: "For patients without an ICBC claim, kinesiology sessions are available at affordable private rates.",
        },
        {
            title: "Special Programs & Grants",
            desc: "Some civil servant or employer wellness grants may cover kinesiology sessions. Check with your benefits provider for details.",
        },
    ];

    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <AnimatedSection>
                    <motion.div variants={fadeUp}>
                        <span className="text-[#e8511a] text-xs font-bold uppercase tracking-widest">
                            Coverage
                        </span>
                        <h2 className="mt-3 text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                            Fees &amp; Billing
                        </h2>
                        <p className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto">
                            Kinesiology and active rehab services are typically provided on a
                            private-pay basis, with ICBC coverage available for motor vehicle
                            accident clients. Our team helps you navigate your options.
                        </p>
                    </motion.div>

                    <AnimatedSection className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                        {items.map((item) => (
                            <motion.div
                                key={item.title}
                                variants={fadeUp}
                                className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-[#e8511a]/30 hover:shadow-sm text-left transition-all"
                            >
                                <div className="w-10 h-10 rounded-xl bg-[#e8511a]/10 flex items-center justify-center mb-4">
                                    <CheckCircle size={18} className="text-[#e8511a]" />
                                </div>
                                <h3 className="font-black text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </AnimatedSection>

                    <motion.div variants={fadeUp}>
                        <motion.a
                            href="https://phoenixrehab.janeapp.com/#/kinesiology"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-block bg-[#e8511a] hover:bg-[#c04010] text-white font-bold px-10 py-5 text-sm tracking-widest uppercase transition-colors"
                        >
                            Book Your Kinesiology Session
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
                        Ready to Move{" "}
                        <span className="text-[#e8511a]">Better?</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="text-lg text-gray-400 mb-10 max-w-xl mx-auto"
                    >
                        Book a kinesiology session at our Burnaby clinic and take the first
                        step toward stronger movement, reduced pain, and lasting recovery.
                    </motion.p>
                    <motion.div
                        variants={fadeUp}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <motion.a
                            href="https://phoenixrehab.janeapp.com/#/kinesiology"
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

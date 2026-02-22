"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import {
    Activity,
    Car,
    Brain,
    Wind,
    Heart,
    Flower2,
    Salad,
    Sparkles,
    CheckCircle,
    CreditCard,
    Clock,
    ClipboardList,
    TrendingUp,
    ChevronRight,
    Zap,
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
        title: "Pain Relief",
        description: "Chronic back pain, neck stiffness, shoulder tension, knee and joint pain — safely eased with targeted needling.",
    },
    {
        icon: Zap,
        title: "Sports Injuries",
        description: "Faster recovery from strains, sprains, and overuse injuries through improved circulation and reduced inflammation.",
    },
    {
        icon: Car,
        title: "Motor Vehicle Accidents (ICBC)",
        description: "Pain and tension management following car accidents — direct billed to ICBC.",
    },
    {
        icon: Brain,
        title: "Headaches & Migraines",
        description: "Reducing both the frequency and severity of tension headaches and migraines.",
    },
    {
        icon: Wind,
        title: "Stress, Anxiety & Sleep Issues",
        description: "Calming the nervous system and promoting restful sleep for improved mental well-being.",
    },
    {
        icon: Heart,
        title: "Women's Health",
        description: "Menstrual discomfort, fertility support, pregnancy care, and menopause symptom management.",
    },
    {
        icon: Salad,
        title: "Digestive Issues",
        description: "Bloating, irritable bowel symptoms, and stomach discomfort addressed through TCM principles.",
    },
    {
        icon: Sparkles,
        title: "General Wellness",
        description: "Boosting energy, improving circulation, and maintaining holistic balance for preventive care.",
    },
];

const modalityRows = [
    {
        category: "Core Needling & Stimulation",
        items: [
            { label: "Acupuncture", desc: "Precise needle placement at targeted points to restore balance, reduce pain, and promote the body's natural healing response." },
            { label: "Electro-Acupuncture", desc: "Gentle electrical stimulation through acupuncture needles to accelerate tissue healing and enhance treatment effects." },
        ],
    },
    {
        category: "Traditional TCM Therapies",
        items: [
            { label: "Tui Na (Chinese Medical Massage)", desc: "Therapeutic massage techniques to relieve pain, improve circulation, and restore musculoskeletal balance." },
            { label: "Cupping Therapy", desc: "Suction therapy that increases circulation, releases muscle tension, and supports natural detoxification." },
            { label: "Gua Sha (Scraping)", desc: "A scraping technique that promotes healthy blood flow and relieves chronic muscle tightness and stagnation." },
            { label: "Moxibustion", desc: "Heat therapy using dried moxa herbs to warm meridians, stimulate energy flow, and support deep healing." },
        ],
    },
    {
        category: "Specialized Care",
        items: [
            { label: "Auricular (Ear) Acupuncture", desc: "Treating specific reflex points on the ear to influence the whole body — effective for stress, addiction, and pain." },
            { label: "Women's Health Support", desc: "Treatments tailored for menstrual health, fertility, pregnancy care, and menopause symptoms." },
            { label: "Stress & Anxiety Care", desc: "Acupuncture techniques designed to calm the nervous system, improve sleep quality, and reduce emotional tension." },
            { label: "Relaxation & Breathing Guidance", desc: "Supporting stress reduction and mindfulness alongside hands-on treatment for a holistic healing experience." },
        ],
    },
];

const steps = [
    {
        number: "01",
        icon: ClipboardList,
        title: "Initial Assessment & Consultation",
        description:
            "Your first session includes a thorough health intake and consultation. Our acupuncturist discusses your concerns, reviews your health history, and explains how acupuncture can help you achieve your goals.",
    },
    {
        number: "02",
        icon: Flower2,
        title: "Personalized Acupuncture Sessions",
        description:
            "Fine, sterile needles are inserted at carefully chosen points. Many patients describe the experience as deeply calming, with most feeling relaxed during and after treatment. Cupping or gua sha may be included if beneficial.",
    },
    {
        number: "03",
        icon: TrendingUp,
        title: "Ongoing Care & Wellness Support",
        description:
            "Your treatment plan may involve several sessions to achieve lasting results. We provide self-care strategies, lifestyle tips, and follow-up recommendations to help you maintain and build on your progress.",
    },
];

const expectations = [
    "Treatments are gentle, safe, and tailored to your comfort level.",
    "Sessions typically last 45–60 minutes.",
    "You may feel a slight tingling or warmth at needle sites, followed by deep relaxation.",
    "Many patients notice improvement after the first few sessions, with cumulative benefits over time.",
];

const insurers = ["ICBC", "MSP", "WorkSafeBC", "Extended Health Insurers"];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AcupuncturePage() {
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
        <section className="relative h-[90vh] min-h-[740px] flex items-center overflow-hidden pb-20">
            <Image
                src="/images/acupuncture-hero.png"
                alt="Registered acupuncturist performing traditional Chinese medicine acupuncture at Phoenix Rehab Burnaby"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 w-full">
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
                        RELIEVE PAIN,
                        <br /><span className="text-[#e8511a]">REDUCE STRESS,</span>
                        <br />RESTORE BALANCE
                    </h1>
                    <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                        Natural, evidence-informed acupuncture care for pain relief, stress
                        reduction, and holistic wellness — by Registered Acupuncturists (R.Ac).
                    </p>

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                href="https://phoenixrehab.janeapp.com/#/acupuncture"
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
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs px-4 py-2 rounded-full w-fit">
                            <CreditCard size={13} />
                            Direct Billing — ICBC, MSP &amp; Extended Health
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// ─── Intro ────────────────────────────────────────────────────────────────────

function IntroSection() {
    const highlights = [
        { label: "Registered Acupuncturists (R.Ac / Dr.TCM)", sub: "Regulated by the College of TCM Practitioners of BC" },
        { label: "Traditional Wisdom, Modern Care", sub: "Evidence-informed TCM combined with clinical expertise" },
        { label: "Direct Billing for ICBC, MSP & Insurers", sub: "Seamless coverage for motor vehicle accidents and benefits" },
    ];

    const benefits = [
        "Reduce inflammation and promote tissue repair",
        "Release endorphins to naturally relieve pain",
        "Calm the nervous system and reduce stress",
        "Improve energy flow and circulation",
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
                                Acupuncture at{" "}
                                <span className="text-[#e8511a]">Phoenix Rehab</span>
                            </h2>
                        </motion.div>
                        <motion.div variants={fadeUp} className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                Acupuncture is a therapeutic practice rooted in Traditional Chinese Medicine
                                (TCM) that has been used for thousands of years to restore balance and promote
                                healing. By inserting fine, sterile needles at specific points in the body,
                                acupuncture stimulates circulation, releases muscle tension, and supports the
                                body's natural ability to heal.
                            </p>
                            <p className="font-semibold text-gray-700">Modern research has shown that acupuncture can:</p>
                            <ul className="space-y-2">
                                {benefits.map((b) => (
                                    <li key={b} className="flex items-center gap-3">
                                        <span className="w-5 h-5 rounded-full bg-[#e8511a]/10 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle size={12} className="text-[#e8511a]" />
                                        </span>
                                        <span className="text-gray-600 text-sm">{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div variants={fadeUp} className="mt-8">
                            <Link
                                href="https://phoenixrehab.janeapp.com/#/acupuncture"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[#e8511a] font-semibold hover:gap-3 transition-all"
                            >
                                Book your acupuncture session <ChevronRight size={18} />
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
                            Acupuncture is safe and effective for a wide range of conditions — from
                            acute pain to chronic wellness concerns.
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
                                Our acupuncturists tailor each session to your unique needs — often
                                combining traditional acupuncture with complementary TCM therapies
                                for enhanced and lasting results.
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
                                <p className="font-black text-gray-900">Registered Acupuncturists &amp; TCM Practitioners</p>
                                <p className="text-sm text-gray-500 mt-0.5">
                                    R.Ac / R.TCM.P / Dr.TCM
                                </p>
                            </div>
                        </motion.div>
                    </AnimatedSection>

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
                            How Acupuncture Works
                        </h2>
                        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                            A gentle, holistic process designed to help you heal, relax, and restore
                            balance — at your own pace.
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
                            We make care accessible with direct billing for a wide range of insurers.
                            Please check with your provider to confirm your specific coverage details.
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
                            href="https://phoenixrehab.janeapp.com/#/acupuncture"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-block bg-[#e8511a] hover:bg-[#c04010] text-white font-bold px-10 py-5 text-sm tracking-widest uppercase transition-colors"
                        >
                            Book Your Acupuncture Session
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
                        Begin Your{" "}
                        <span className="text-[#e8511a]">Healing Journey</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="text-lg text-gray-400 mb-10 max-w-xl mx-auto"
                    >
                        Book an acupuncture session at our Burnaby clinic and experience the
                        restorative power of natural, evidence-informed care.
                    </motion.p>
                    <motion.div
                        variants={fadeUp}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <motion.a
                            href="https://phoenixrehab.janeapp.com/#/acupuncture"
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

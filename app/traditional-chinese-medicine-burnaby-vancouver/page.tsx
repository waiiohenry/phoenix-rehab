"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import {
    Layers,
    Salad,
    Heart,
    Wind,
    Leaf,
    Shield,
    Activity,
    CheckCircle,
    CreditCard,
    Clock,
    ClipboardList,
    TrendingUp,
    ChevronRight,
    Flame,
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
        icon: Layers,
        title: "Chronic Pain & Fatigue",
        description: "Joint pain, arthritis, muscle stiffness, and persistent low energy addressed through root-cause TCM diagnosis.",
    },
    {
        icon: Salad,
        title: "Digestive Issues",
        description: "Bloating, indigestion, irritable bowel, and poor appetite treated with herbal formulas and dietary guidance.",
    },
    {
        icon: Heart,
        title: "Women's Health & Fertility",
        description: "Menstrual discomfort, irregular cycles, menopause, and fertility support through holistic TCM care.",
    },
    {
        icon: Wind,
        title: "Stress, Anxiety & Sleep",
        description: "Calming the nervous system, promoting emotional balance, and restoring restful sleep patterns.",
    },
    {
        icon: Leaf,
        title: "Respiratory Health",
        description: "Allergies, asthma, and frequent colds managed by strengthening the body's defensive energy (Wei Qi).",
    },
    {
        icon: Shield,
        title: "Immune System Support",
        description: "Building long-term resilience and preventing illness through targeted herbal and lifestyle protocols.",
    },
    {
        icon: Activity,
        title: "Post-Injury & Post-Surgical Recovery",
        description: "Promoting circulation, reducing stagnation, and accelerating tissue healing after injury or surgery.",
    },
];

const modalities = [
    {
        label: "Herbal Medicine",
        desc: "Customized herbal formulas — in teas, powders, or capsules — that address root causes of imbalance and support long-term wellness.",
    },
    {
        label: "Tui Na (Chinese Medical Massage)",
        desc: "Hands-on therapeutic massage to relieve pain, improve circulation, and restore musculoskeletal and energetic balance.",
    },
    {
        label: "Cupping Therapy",
        desc: "Suction cups applied to the skin to release tension, improve blood flow, and support the body's natural detoxification.",
    },
    {
        label: "Gua Sha",
        desc: "A gentle scraping technique to relieve muscle stiffness, improve circulation, and reduce localized inflammation.",
    },
    {
        label: "Moxibustion",
        desc: "Heat therapy using burning moxa (dried mugwort) to stimulate healing, warm meridians, and strengthen the body's vital energy.",
    },
    {
        label: "Dietary & Lifestyle Guidance",
        desc: "TCM-informed recommendations on food, daily habits, and seasonal adjustments to support lasting internal balance.",
    },
];

const steps = [
    {
        number: "01",
        icon: ClipboardList,
        title: "Initial Consultation & Diagnosis",
        description:
            "Our practitioner takes a detailed health history, asks about your lifestyle, and performs a TCM diagnostic exam — including tongue observation and pulse analysis — to identify patterns of imbalance.",
    },
    {
        number: "02",
        icon: Flame,
        title: "Personalized Treatment Plan",
        description:
            "Based on your unique condition, we create a plan that may include herbal formulas, Tui Na massage, cupping, gua sha, moxibustion, or acupuncture. Every plan is tailored to your specific TCM pattern.",
    },
    {
        number: "03",
        icon: TrendingUp,
        title: "Ongoing Care & Balance",
        description:
            "Follow-up sessions and lifestyle guidance help maintain results, prevent relapses, and strengthen long-term health. TCM is a journey of sustained balance and vitality.",
    },
];

const expectations = [
    "Sessions typically last 45–60 minutes depending on the therapy.",
    "Herbal medicine prescriptions may be provided as teas, powders, or capsules.",
    "Cupping and gua sha may leave temporary marks on the skin — a natural sign of improved circulation.",
    "Tui Na and moxibustion treatments are typically comfortable and deeply relaxing.",
    "Many patients report better energy, sleep, and mood alongside physical improvements.",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TCMPage() {
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
        <section className="relative h-[90vh] min-h-[740px] flex items-end overflow-hidden pb-20">
            <Image
                src="/images/tcm-hero.png"
                alt="Traditional Chinese Medicine practitioner preparing herbal medicine at Phoenix Rehab Burnaby"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
                        HOLISTIC HEALING
                        <br />FOR <span className="text-[#e8511a]">BODY</span>
                        <br />&amp; MIND
                    </h1>
                    <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                        Balance your health naturally with herbal medicine, Tui Na massage,
                        cupping, gua sha, and moxibustion — guided by registered TCM practitioners.
                    </p>

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                href="https://phoenixrehab.janeapp.com/#/traditional-chinese-medicine"
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
                            Direct Billing — MSP &amp; Extended Health
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
        { label: "Registered TCM Practitioners (R.TCM / Dr.TCM)", sub: "Regulated by the College of TCM Practitioners of BC" },
        { label: "Thousands of Years of Healing Wisdom", sub: "Evidence-informed traditional therapies for modern health" },
        { label: "Whole-Person Approach", sub: "Physical, emotional, and lifestyle factors addressed together" },
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
                                Traditional Chinese Medicine at{" "}
                                <span className="text-[#e8511a]">Phoenix Rehab</span>
                            </h2>
                        </motion.div>
                        <motion.div variants={fadeUp} className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                Traditional Chinese Medicine (TCM) is a holistic healthcare system practiced for
                                thousands of years. It is based on the principle of restoring balance within the
                                body's natural energy systems (Qi) to promote healing and prevent illness.
                            </p>
                            <p>
                                Unlike symptom-focused treatments, TCM looks at the whole person —
                                physical, emotional, and lifestyle factors — to create a comprehensive approach
                                to health.
                            </p>
                            <p>
                                At Phoenix Rehab, our TCM practitioners integrate time-tested therapies such as
                                herbal medicine, Tui Na massage, cupping, gua sha, and moxibustion to support
                                your recovery, strengthen your body, and enhance overall well-being.
                            </p>
                        </motion.div>
                        <motion.div variants={fadeUp} className="mt-8">
                            <Link
                                href="https://phoenixrehab.janeapp.com/#/traditional-chinese-medicine"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[#e8511a] font-semibold hover:gap-3 transition-all"
                            >
                                Book your TCM session <ChevronRight size={18} />
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
                            Our TCM practitioners provide holistic care for a wide range of physical,
                            emotional, and systemic health concerns.
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
                                Our TCM practitioners use a variety of complementary therapies,
                                personalized to each patient's unique pattern of imbalance. Each
                                treatment plan blends these modalities for a truly holistic approach.
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
                                <p className="font-black text-gray-900">Registered TCM Practitioners</p>
                                <p className="text-sm text-gray-500 mt-0.5">
                                    R.TCM.P / Dr.TCM
                                </p>
                            </div>
                        </motion.div>
                    </AnimatedSection>

                    <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {modalities.map((m) => (
                            <motion.div
                                key={m.label}
                                variants={fadeUp}
                                className="group flex items-start gap-3 bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-[#e8511a]/30 hover:bg-white hover:shadow-sm transition-all duration-200"
                            >
                                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#e8511a]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e8511a]/25 transition-colors">
                                    <CheckCircle size={12} className="text-[#e8511a]" />
                                </span>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm leading-snug">{m.label}</p>
                                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{m.desc}</p>
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
                            Your Journey
                        </span>
                        <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">
                            How TCM Works at Phoenix Rehab
                        </h2>
                        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                            A thoughtful, step-by-step process to diagnose your unique patterns,
                            create a personalized plan, and support lasting balance.
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
            title: "Herbal Medicine (Private Pay)",
            desc: "Herbal medicine consultations and prescriptions are offered on a private-pay basis, as they are not covered by MSP, ICBC, or most extended health plans.",
        },
        {
            title: "Acupuncture Coverage Available",
            desc: "If you're looking for insurance-covered options, acupuncture is often included under extended health, MSP, and ICBC benefits. Visit our Acupuncture page to learn more.",
            link: { href: "/acupuncture-burnaby-vancouver", label: "View Acupuncture Services →" },
        },
        {
            title: "Our Team Can Help",
            desc: "We're happy to clarify costs, discuss your coverage options, and help you choose the TCM service that best fits your needs and benefits plan.",
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
                            Certain TCM services are private pay, while acupuncture within our TCM
                            practice may be covered under your extended health benefits.
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
                                {item.link && (
                                    <Link
                                        href={item.link.href}
                                        className="inline-block mt-3 text-xs font-bold text-[#e8511a] hover:underline"
                                    >
                                        {item.link.label}
                                    </Link>
                                )}
                            </motion.div>
                        ))}
                    </AnimatedSection>

                    <motion.div variants={fadeUp}>
                        <motion.a
                            href="https://phoenixrehab.janeapp.com/#/traditional-chinese-medicine"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-block bg-[#e8511a] hover:bg-[#c04010] text-white font-bold px-10 py-5 text-sm tracking-widest uppercase transition-colors"
                        >
                            Book Your TCM Session
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
                        Restore Your{" "}
                        <span className="text-[#e8511a]">Natural Balance</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="text-lg text-gray-400 mb-10 max-w-xl mx-auto"
                    >
                        Book a TCM session at our Burnaby clinic and take the first step toward
                        holistic healing, lasting balance, and renewed vitality.
                    </motion.p>
                    <motion.div
                        variants={fadeUp}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <motion.a
                            href="https://phoenixrehab.janeapp.com/#/traditional-chinese-medicine"
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

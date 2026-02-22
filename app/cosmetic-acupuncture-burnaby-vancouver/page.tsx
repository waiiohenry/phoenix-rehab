"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import {
    Sparkles,
    Sun,
    TrendingUp,
    Droplets,
    Wind,
    Heart,
    CheckCircle,
    CreditCard,
    Clock,
    ClipboardList,
    ChevronRight,
    Flower2,
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

const benefits = [
    {
        icon: Sparkles,
        title: "Softening Fine Lines & Wrinkles",
        description: "Reduces expression lines and promotes smoother, more supple skin by stimulating collagen production.",
    },
    {
        icon: Sun,
        title: "Brighter, Healthier Complexion",
        description: "Improves circulation and skin texture, leading to a naturally radiant, even-toned glow.",
    },
    {
        icon: TrendingUp,
        title: "Natural Lifting & Firming Effects",
        description: "Supports facial muscles and connective tissues to restore tone and a more youthful contour.",
    },
    {
        icon: Droplets,
        title: "Reduced Puffiness & Dark Circles",
        description: "Promotes lymphatic drainage and reduces stagnation to brighten under-eye areas and reduce swelling.",
    },
    {
        icon: Wind,
        title: "Relaxation & Stress Relief",
        description: "Sessions are profoundly calming — most patients leave feeling deeply refreshed, rested, and centred.",
    },
    {
        icon: Heart,
        title: "Holistic Wellness Benefits",
        description: "By balancing the body's energy systems, patients often notice improvements in sleep, mood, and digestion alongside skin results.",
    },
];

const techniques = [
    {
        label: "Cosmetic (Facial) Acupuncture",
        desc: "Fine, sterile needles placed on the face to stimulate skin, muscles, and underlying tissues — triggering collagen production and improved circulation.",
    },
    {
        label: "Body Acupuncture",
        desc: "Supporting acupuncture points on the body to enhance overall balance and improve the effectiveness of facial treatment.",
    },
    {
        label: "Facial Gua Sha & Massage",
        desc: "Gentle scraping and massage techniques to improve circulation, relieve facial tension, and restore a healthy skin glow.",
    },
    {
        label: "Facial Cupping (Gentle, Small Cups)",
        desc: "Soft suction cups applied to the face to reduce puffiness, encourage blood flow, and lift and tone the skin.",
    },
    {
        label: "Relaxation Techniques",
        desc: "Calming methods integrated into each session to reduce stress, improve energy flow, and deepen the overall rejuvenating effect.",
    },
];

const steps = [
    {
        number: "01",
        icon: ClipboardList,
        title: "Initial Consultation & Treatment Plan",
        description:
            "Your practitioner reviews your skin concerns, overall health history, and aesthetic goals. A personalized cosmetic acupuncture plan is created to address your unique needs.",
    },
    {
        number: "02",
        icon: Flower2,
        title: "Facial Acupuncture Treatment",
        description:
            "Fine, sterile needles are inserted into facial and body acupuncture points. Facial gua sha or gentle cupping may be added to enhance circulation and rejuvenation.",
    },
    {
        number: "03",
        icon: TrendingUp,
        title: "Ongoing Care & Maintenance",
        description:
            "Visible improvements are gradual, with results often noticeable after 4–6 sessions. Regular maintenance treatments help preserve youthful, healthy skin over time.",
    },
];

const expectations = [
    "Sessions last 60–75 minutes.",
    "The treatment is gentle and relaxing — most patients feel minimal sensation.",
    "Improvements are gradual and natural — no artificial fillers or chemicals.",
    "Many patients notice improved skin tone and radiance within a few sessions.",
    "There is no downtime — you can resume your day immediately after treatment.",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CosmeticAcupuncturePage() {
    return (
        <>
            <HeroSection />
            <IntroSection />
            <BenefitsSection />
            <TechniquesSection />
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
        <section className="relative h-[90vh] min-h-[740px] flex items-center overflow-hidden pb-20">
            <Image
                src="/images/cosmetic-acupuncture-hero.png"
                alt="Cosmetic acupuncture facial rejuvenation treatment at Phoenix Rehab Burnaby"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/15" />

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
                        NATURAL
                        <br /><span className="text-[#e8511a]">COSMETIC</span>
                        <br />REJUVENATION
                    </h1>
                    <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                        Safe, non-invasive facial acupuncture to improve skin tone, reduce fine lines,
                        and restore radiance — naturally and without chemicals.
                    </p>

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                href="https://phoenixrehab.janeapp.com/#/cosmetic-acupuncture"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                className="bg-[#e8511a] hover:bg-[#c04010] text-white font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors"
                            >
                                Book a Session
                            </motion.a>
                            <a
                                href="#benefits"
                                className="border border-white/40 hover:border-white text-white font-semibold px-8 py-4 text-sm tracking-widest uppercase transition-colors"
                            >
                                Learn More ↓
                            </a>
                        </div>
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs px-4 py-2 rounded-full w-fit">
                            <CreditCard size={13} />
                            Private Pay — Natural &amp; Non-Invasive
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
        { label: "Registered Acupuncturists & TCM Practitioners", sub: "R.Ac / R.TCM.P / Dr.TCM — regulated by the College of TCM Practitioners of BC" },
        { label: "Natural, Non-Invasive & Side-Effect Free", sub: "No Botox, no fillers — just the body's own healing and rejuvenating response" },
        { label: "Aesthetic & Whole-Body Wellness", sub: "Skin improvements alongside better sleep, mood, and energy" },
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
                                Cosmetic (Facial) Acupuncture at{" "}
                                <span className="text-[#e8511a]">Phoenix Rehab</span>
                            </h2>
                        </motion.div>
                        <motion.div variants={fadeUp} className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                Cosmetic acupuncture — also known as facial acupuncture or facial
                                rejuvenation acupuncture — is a holistic therapy rooted in Traditional
                                Chinese Medicine (TCM). It uses fine, sterile needles placed at specific
                                points on the face and body to stimulate circulation, boost collagen
                                production, and restore natural vitality to the skin.
                            </p>
                            <p>
                                Unlike Botox or fillers, cosmetic acupuncture is completely natural,
                                non-invasive, and side-effect free. It enhances not just your appearance,
                                but your overall health and well-being from within.
                            </p>
                        </motion.div>
                        <motion.div variants={fadeUp} className="mt-8">
                            <Link
                                href="https://phoenixrehab.janeapp.com/#/cosmetic-acupuncture"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[#e8511a] font-semibold hover:gap-3 transition-all"
                            >
                                Book your cosmetic acupuncture session <ChevronRight size={18} />
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

// ─── Benefits ─────────────────────────────────────────────────────────────────

function BenefitsSection() {
    return (
        <section className="py-24 bg-gray-50" id="benefits">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-16">
                    <motion.div variants={fadeUp}>
                        <span className="text-[#e8511a] text-xs font-bold uppercase tracking-widest">
                            Why Patients Choose It
                        </span>
                        <h2 className="mt-3 text-4xl sm:text-5xl font-black text-gray-900">
                            Benefits of Facial Acupuncture
                        </h2>
                        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                            Cosmetic acupuncture delivers real, gradual improvements both to the
                            skin and to your overall sense of vitality and well-being.
                        </p>
                    </motion.div>
                </AnimatedSection>

                <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((b) => {
                        const Icon = b.icon;
                        return (
                            <motion.div
                                key={b.title}
                                variants={fadeUp}
                                className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#e8511a]/30 hover:shadow-md transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#e8511a]/10 flex items-center justify-center mb-5 group-hover:bg-[#e8511a]/20 transition-colors">
                                    <Icon size={22} className="text-[#e8511a]" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{b.description}</p>
                            </motion.div>
                        );
                    })}
                </AnimatedSection>
            </div>
        </section>
    );
}

// ─── Techniques ───────────────────────────────────────────────────────────────

function TechniquesSection() {
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
                                Approaches &amp;{" "}
                                <span className="text-[#e8511a]">Techniques</span>
                            </h2>
                            <p className="mt-5 text-gray-500 leading-relaxed">
                                Facial acupuncture sessions may include a combination of therapies
                                for optimal rejuvenation results. Each session is customized to your
                                skin type, concerns, and wellness goals.
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

                    <AnimatedSection className="grid grid-cols-1 gap-4">
                        {techniques.map((t) => (
                            <motion.div
                                key={t.label}
                                variants={fadeUp}
                                className="group flex items-start gap-3 bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-[#e8511a]/30 hover:bg-white hover:shadow-sm transition-all duration-200"
                            >
                                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#e8511a]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e8511a]/25 transition-colors">
                                    <CheckCircle size={12} className="text-[#e8511a]" />
                                </span>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm leading-snug">{t.label}</p>
                                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{t.desc}</p>
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
                            How Cosmetic Acupuncture Works
                        </h2>
                        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                            A gentle, progressive process designed to reveal your skin's
                            natural radiance while supporting whole-body balance.
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
            title: "Private Pay Service",
            desc: "Cosmetic acupuncture is a wellness and aesthetic service and is not covered by MSP, ICBC, or extended health insurers. Treatments are provided on a private-pay basis.",
        },
        {
            title: "Medical Acupuncture Available",
            desc: "If you're interested in acupuncture for medical conditions — such as pain, stress, or injury recovery — that may be covered by insurance, visit our Acupuncture Services page.",
            link: { href: "/acupuncture-burnaby-vancouver", label: "View Acupuncture Services →" },
        },
        {
            title: "Transparent Pricing",
            desc: "Our team will clearly explain session rates and package options during your consultation. We believe in straightforward, honest pricing with no surprises.",
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
                            Cosmetic acupuncture is a private-pay aesthetic service. We offer
                            transparent pricing and flexible session packages.
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
                            href="https://phoenixrehab.janeapp.com/#/cosmetic-acupuncture"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-block bg-[#e8511a] hover:bg-[#c04010] text-white font-bold px-10 py-5 text-sm tracking-widest uppercase transition-colors"
                        >
                            Book Your Cosmetic Acupuncture Session
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
                        Reveal Your{" "}
                        <span className="text-[#e8511a]">Natural Radiance</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="text-lg text-gray-400 mb-10 max-w-xl mx-auto"
                    >
                        Book a cosmetic acupuncture session at our Burnaby clinic and take
                        a natural, holistic approach to timeless skin health.
                    </motion.p>
                    <motion.div
                        variants={fadeUp}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <motion.a
                            href="https://phoenixrehab.janeapp.com/#/cosmetic-acupuncture"
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

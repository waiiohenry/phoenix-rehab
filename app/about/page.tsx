"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import {
    Flame,
    RefreshCw,
    TrendingUp,
    MapPin,
    Clock,
    Shield,
    Users,
    Heart,
    Leaf,
    Activity,
    Droplets,
    Zap,
    Dumbbell,
    Sun,
    Brain,
} from "lucide-react";

// ─── Animation helpers ────────────────────────────────────────────────────────

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
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

// ─── Data ────────────────────────────────────────────────────────────────────

const values = [
    {
        icon: Flame,
        title: "Rebuild",
        description:
            "Evidence-based care and personalised treatment plans designed around your specific recovery goals — not a one-size-fits-all protocol.",
    },
    {
        icon: RefreshCw,
        title: "Recover",
        description:
            "A collaborative team of 6+ disciplines working together, sharing insights, and building a unified roadmap to your full recovery.",
    },
    {
        icon: TrendingUp,
        title: "Rise",
        description:
            "We focus on long-term wellbeing and resilience, not just short-term pain relief — so you emerge stronger than before.",
    },
];

const teamPlaceholders = [
    { icon: Activity, title: "Physiotherapy", color: "text-[#e8511a] bg-orange-50/80 border-orange-100" },
    { icon: Droplets, title: "Massage Therapy", color: "text-rose-600 bg-rose-50/80 border-rose-100" },
    { icon: Zap, title: "Chiropractic", color: "text-blue-600 bg-blue-50/80 border-blue-100" },
    { icon: Dumbbell, title: "Kinesiology", color: "text-green-700 bg-green-50/80 border-green-100" },
    { icon: Leaf, title: "Acupuncture", color: "text-teal-600 bg-teal-50/80 border-teal-100" },
    { icon: Sun, title: "TCM", color: "text-amber-600 bg-amber-50/80 border-amber-100" },
    { icon: Brain, title: "Clinical Counseling", color: "text-purple-600 bg-purple-50/80 border-purple-100" },
];

const highlights = [
    {
        icon: Shield,
        title: "Private Treatment Rooms",
        description:
            "Every session takes place in a dedicated private room — no open-floor gym settings, no distractions.",
    },
    {
        icon: MapPin,
        title: "Central Burnaby Location",
        description:
            "100B – 3300 Boundary Rd, minutes from Vancouver, Brentwood, and Metrotown. Easy parking on-site.",
    },
    {
        icon: Clock,
        title: "Flexible Hours",
        description:
            "Mon–Fri 9am–6pm · Saturday 10am–6pm. We schedule around your life, not the other way around.",
    },
    {
        icon: Heart,
        title: "Direct Billing",
        description:
            "We handle the paperwork with ICBC, WorkSafeBC, MSP and major private insurers so you can focus on healing.",
    },
    {
        icon: Users,
        title: "Collaborative Care",
        description:
            "Practitioners across disciplines actively communicate and co-create your treatment plan.",
    },
    {
        icon: Leaf,
        title: "Welcoming Atmosphere",
        description:
            "Designed to feel calm and safe from the moment you walk in — because healing starts with how you feel in the space.",
    },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AboutPage() {
    return (
        <>
            <HeroSection />
            <ValuesSection />
            <StorySection />
            <TeamSection />
            <HighlightsSection />
            <StatsBanner />
            <CTASection />
        </>
    );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
    return (
        <section className="relative h-[70vh] min-h-[520px] flex items-center justify-center overflow-hidden">
            <Image
                src="/images/pages/about-hero.webp"
                alt="Phoenix Rehab clinic reception — welcoming and modern"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
            />
            {/* A subtle linear gradient darker at the top and bottom to ensure text pops */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />

            <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="inline-block bg-black/30 border border-white/20 text-white/90 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                        About Us
                    </span>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
                        Who We{" "}
                        <span className="font-serif italic font-medium text-white/95">Are</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
                        A multidisciplinary rehabilitation clinic in Burnaby, built around
                        one belief — true healing requires a unified, collaborative approach.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

// ─── Values ───────────────────────────────────────────────────────────────────

function ValuesSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((v) => {
                        const Icon = v.icon;
                        return (
                            <motion.div
                                key={v.title}
                                variants={fadeUp}
                                className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#e8511a]/30 hover:shadow-md transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-[#e8511a]/10 flex items-center justify-center mx-auto mb-5">
                                    <Icon size={26} className="text-[#e8511a]" />
                                </div>
                                <h2 className="text-2xl font-black text-[#2d2d2d] mb-3">{v.title}</h2>
                                <p className="text-gray-500 leading-relaxed">{v.description}</p>
                            </motion.div>
                        );
                    })}
                </AnimatedSection>
            </div>
        </section>
    );
}

// ─── Story ────────────────────────────────────────────────────────────────────

function StorySection() {
    return (
        <section className="py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text */}
                    <AnimatedSection>
                        <motion.div variants={fadeUp}>
                            <span className="text-[#e8511a] text-xs font-bold uppercase tracking-widest">
                                Our Origins
                            </span>
                            <h2 className="mt-3 text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-8">
                                The Phoenix{" "}
                                <span className="font-serif italic font-medium">Story</span>
                            </h2>
                        </motion.div>

                        <motion.div variants={fadeUp} className="space-y-6 text-gray-600 leading-relaxed">
                            <p>
                                The concept for Phoenix Rehab was born out of a simple, yet powerful
                                realization: true healing requires more than just treating isolated
                                symptoms. Too often, patients find themselves bouncing between different
                                practitioners, seeking relief but missing a unified, collaborative approach
                                to their health.
                            </p>
                            <p>
                                The vision was to build a comprehensive, multidisciplinary space where
                                different modalities could seamlessly intersect to provide complete care
                                under one roof.
                            </p>
                            <h3 className="text-xl font-bold text-[#2d2d2d] mt-8">
                                A Holistic Philosophy: Rising Stronger
                            </h3>
                            <p>
                                Just as the phoenix represents renewal and rising stronger from the ashes,
                                our philosophy is centred on guiding patients through their recovery so they
                                can emerge healthier and more resilient than before. &ldquo;Holistic&rdquo;
                                isn&apos;t just a buzzword for us — it is the foundation of our practice.
                            </p>
                            <p>
                                We believe in treating the whole person. By bridging the gap between Eastern
                                wisdom and Western clinical practice — combining chiropractic care and
                                registered massage therapy with the deep, systemic balancing principles of
                                Traditional Chinese Medicine — we don&apos;t just mask the pain. We work
                                together to identify and treat the root cause of dysfunction.
                            </p>
                            <h3 className="text-xl font-bold text-[#2d2d2d] mt-8">
                                Planting Roots in Burnaby
                            </h3>
                            <p>
                                To bring this vision to life, we needed a location that was accessible and
                                rooted in a vibrant, diverse community. Our welcoming, modern clinic space on
                                Boundary Road in Burnaby provides the perfect central hub — a collaborative
                                healing environment where practitioners communicate, share insights, and build
                                personalised roadmaps to recovery for every individual who walks through our
                                doors.
                            </p>
                        </motion.div>
                    </AnimatedSection>

                    {/* Image */}
                    <AnimatedSection>
                        <div className="relative">
                            {/* Subtle background element to anchor the image */}
                            <div className="absolute -inset-4 bg-gray-200/50 rounded-[40px] -z-10 transform translate-x-3 translate-y-3" />
                            <motion.div
                                variants={fadeUp}
                                className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                            >
                                <Image
                                    src="/images/pages/about-story.webp"
                                    alt="Phoenix Rehab physiotherapist with patient"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover object-center"
                                />
                                {/* Accent badge moved to top-right to avoid overlapping subjects */}
                                <div className="absolute bottom-4 right-4 sm:bottom-auto sm:top-8 sm:right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-5 shadow-xl max-w-[200px] sm:max-w-[220px]">
                                    <p className="text-3xl font-black text-[#e8511a]">6+</p>
                                    <p className="text-sm font-semibold text-[#2d2d2d] mt-1">
                                        Disciplines under one roof
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}

// ─── Team ─────────────────────────────────────────────────────────────────────

function TeamSection() {
    return (
        <section className="py-24 bg-white" id="team">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-16">
                    <motion.div variants={fadeUp}>
                        <span className="text-[#e8511a] text-xs font-bold uppercase tracking-widest">
                            The People
                        </span>
                        <h2 className="mt-3 text-4xl sm:text-5xl font-black text-[#2d2d2d]">
                            Meet Our Team
                        </h2>
                        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                            A diverse group of registered practitioners who collaborate daily
                            to deliver the best possible outcomes for our patients.
                        </p>
                    </motion.div>
                </AnimatedSection>

                <AnimatedSection className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-4 gap-y-10 max-w-5xl mx-auto">
                    {teamPlaceholders.map((member) => {
                        const Icon = member.icon;
                        return (
                            <motion.div
                                key={member.title}
                                variants={fadeUp}
                                className="flex flex-col items-center text-center group"
                            >
                                <div
                                    className={`w-24 h-24 rounded-2xl flex items-center justify-center border transition-all duration-300 shadow-sm ${member.color} group-hover:-translate-y-2 group-hover:shadow-[0_8px_20px_rgba(232,81,26,0.15)] group-hover:border-[#e8511a]/40`}
                                >
                                    <Icon size={32} strokeWidth={1.5} />
                                </div>
                                <p className="text-sm border-b border-transparent group-hover:border-[#e8511a]/30 pb-0.5 justify-center mt-4 font-semibold text-[#2d2d2d] leading-snug transition-colors group-hover:text-[#e8511a]">
                                    {member.title}
                                </p>
                            </motion.div>
                        );
                    })}
                </AnimatedSection>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-sm text-gray-400 mt-12"
                >
                    Full team bios coming soon —{" "}
                    <Link href="/contact" className="text-[#e8511a] hover:underline">
                        reach out
                    </Link>{" "}
                    to meet our practitioners.
                </motion.p>
            </div>
        </section>
    );
}

// ─── Clinic Highlights ───────────────────────────────────────────────────────

function HighlightsSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-16">
                    <motion.div variants={fadeUp}>
                        <span className="text-[#e8511a] text-xs font-bold uppercase tracking-widest">
                            Our Clinic
                        </span>
                        <h2 className="mt-3 text-4xl sm:text-5xl font-black text-[#2d2d2d]">
                            Built for Healing
                        </h2>
                        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto font-light">
                            Every detail of our space and process is designed to make your
                            recovery experience as seamless and comfortable as possible.
                        </p>
                    </motion.div>
                </AnimatedSection>

                <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((h) => {
                        const Icon = h.icon;
                        return (
                            <motion.div
                                key={h.title}
                                variants={fadeUp}
                                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#e8511a]/20 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-orange-50/80 flex items-center justify-center mb-6">
                                    <Icon size={24} strokeWidth={1.5} className="text-[#e8511a]" />
                                </div>
                                <h3 className="font-bold text-[#2d2d2d] text-lg mb-2">{h.title}</h3>
                                <p className="text-sm text-gray-500 font-light leading-relaxed">{h.description}</p>
                            </motion.div>
                        );
                    })}
                </AnimatedSection>
            </div>
        </section>
    );
}

// ─── Stats Banner ─────────────────────────────────────────────────────────────

function StatsBanner() {
    const stats = [
        { value: "6+", label: "Disciplines Under One Roof" },
        { value: "Direct Billing", label: "ICBC, WSBC, MSP & Extended Health" },
        { value: "Top-Rated", label: "Patient-Centered Care" },
        { value: "Boundary Rd", label: "Serving Vancouver & Burnaby" },
    ];
    return (
        <section className="bg-[#0d1117]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-800">
                {stats.map((s) => (
                    <div key={s.label} className="py-12 px-6 text-center group">
                        <p className="text-3xl sm:text-4xl font-black text-[#e8511a] group-hover:scale-105 transition-transform duration-300">{s.value}</p>
                        <p className="text-xs text-gray-400 tracking-widest uppercase mt-3">{s.label}</p>
                    </div>
                ))}
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
                        Ready to Start{" "}
                        <span className="text-[#e8511a]">Your Journey?</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="text-lg text-gray-400 mb-10 max-w-xl mx-auto"
                    >
                        Book a session with one of our practitioners and experience the
                        Phoenix Rehab difference for yourself.
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
                            Book Your Appointment
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

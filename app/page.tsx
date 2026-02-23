"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform, type Variants } from "framer-motion";
import {
  Activity,
  Droplets,
  Heart,
  Zap,
  Brain,
  Dumbbell,
  Leaf,
  Sparkles,
  Sun,
  ChevronRight,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: Activity,
    title: "Physiotherapy",
    description:
      "One-on-one care to help you move better and feel stronger — whether recovering from surgery, chronic pain, or a sports injury.",
    href: "/physiotherapy-burnaby-vancouver",
    color: "from-orange-500/10 to-orange-500/5",
  },
  {
    icon: Droplets,
    title: "Massage Therapy (RMT)",
    description:
      "Registered massage therapists use hands-on techniques to ease muscle tension, reduce pain, and improve circulation.",
    href: "/massage-therapy-burnaby-vancouver",
    color: "from-rose-500/10 to-rose-500/5",
  },
  {
    icon: Zap,
    title: "Chiropractic Care",
    description:
      "Gentle adjustments to keep your spine and joints at their best — reducing pain and improving natural mobility.",
    href: "/chiropractic-care-burnaby-vancouver",
    color: "from-blue-500/10 to-blue-500/5",
  },
  {
    icon: Brain,
    title: "Clinical Counseling",
    description:
      "A supportive space to manage stress, anxiety, and life challenges. Build resilience and improve mental well-being.",
    href: "/clinical-counseling-burnaby-vancouver",
    color: "from-purple-500/10 to-purple-500/5",
  },
  {
    icon: Dumbbell,
    title: "Kinesiology",
    description:
      "Personalized exercise programs to improve strength, posture, and flexibility — whether recovering or staying healthy long-term.",
    href: "/kinesiology-burnaby-vancouver",
    color: "from-green-500/10 to-green-500/5",
  },
  {
    icon: Leaf,
    title: "Acupuncture",
    description:
      "A natural way to relieve pain and support healing — fine needles targeting stress, tension, and chronic pain.",
    href: "/acupuncture-burnaby-vancouver",
    color: "from-teal-500/10 to-teal-500/5",
  },
  {
    icon: Sun,
    title: "Traditional Chinese Medicine",
    description:
      "Holistic care using herbal remedies, cupping, moxibustion, and Tuina massage to restore balance and well-being.",
    href: "/traditional-chinese-medicine-burnaby-vancouver",
    color: "from-amber-500/10 to-amber-500/5",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Acupuncture",
    description:
      "Natural facial rejuvenation using fine acupuncture needles to stimulate collagen, reduce fine lines, and restore a youthful glow.",
    href: "/cosmetic-acupuncture-burnaby-vancouver",
    color: "from-pink-500/10 to-pink-500/5",
  },
];

const insurers = [
  "Pacific Blue Cross",
  "Sun Life",
  "Canada Life",
  "Manulife",
  "Green Shield",
  "ICBC",
  "WorkSafeBC",
  "MSP",
];

// ─── Animation helpers ────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <HeroSection />

      {/* ── STATS STRIP ── */}
      <StatsStrip />

      {/* ── SERVICES GRID ── */}
      <ServicesSection />

      {/* ── ENVIRONMENT / ABOUT ── */}
      <EnvironmentSection />

      {/* ── DIRECT BILLING ── */}
      <BillingSection />

      {/* ── CTA BANNER ── */}
      <CTABanner />
    </>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/homepage-hero.webp"
        alt="Phoenix Rehab clinic — physiotherapy and wellness in Burnaby"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/95 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e8511a] animate-pulse shadow-[0_0_8px_rgba(232,81,26,0.8)]" />
              Burnaby & Vancouver
            </div>

            <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/90 text-xs font-bold px-4 py-2 rounded-full backdrop-blur-md">
              <div className="flex gap-0.5 text-[#F5B041]">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              </div>
              <span className="opacity-90 tracking-wide uppercase">5.0 Google Rating</span>
            </div>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight mb-6">
            YOUR LOCAL{" "}
            <span className="text-[#e8511a]">PARTNER</span>
            <br />
            IN RECOVERY
            <br />
            AND WELLNESS
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-xl mb-10"
          >
            Collaborative care for your body and mind — from science-backed
            therapies to time-tested natural healing, we offer full-spectrum
            rehabilitation to help you rebuild strength, recover from pain, and
            rise to your best self.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="https://phoenixrehab.janeapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#e8511a] hover:bg-[#c04010] text-white font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors"
            >
              Book Your Appointment
            </motion.a>
            <Link
              href="/about"
              className="border border-white/50 hover:border-white text-white font-semibold px-8 py-4 text-sm tracking-widest uppercase transition-colors hover:bg-white/10"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>


    </section>
  );
}

// ─── Stats Strip ──────────────────────────────────────────────────────────────

function StatsStrip() {
  const stats = [
    { value: "7+", label: "Disciplines Under One Roof" },
    { value: "Direct Billing", label: "ICBC, WSBC, MSP & Extended Health" },
    { value: "Top-Rated", label: "Patient-Centered Care" },
    { value: "Boundary Rd", label: "Serving Vancouver & Burnaby" },
  ];
  return (
    <section className="relative z-20 -mt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {stats.map((s, i) => (
              <AnimatedSection key={i}>
                <div className="py-8 px-6 text-center hover:bg-white/5 transition-colors duration-300">
                  <div className="text-3xl font-black text-white mb-2 tracking-tight drop-shadow-sm">{s.value}</div>
                  <div className="text-[11px] text-white/80 font-bold tracking-widest uppercase">
                    {s.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────

function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-[#e8511a] text-xs font-bold uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-[#2d2d2d]">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            We offer personalized care to help you heal, manage pain, and move
            better — no matter where you are on your recovery journey.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <ServiceCard key={svc.href} svc={svc} index={i} />
          ))}
        </div>

        <AnimatedSection className="mt-12 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-[#e8511a] font-semibold hover:gap-3 transition-all"
          >
            More on how it works in our FAQ <ChevronRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ServiceCard({
  svc,
  index,
}: {
  svc: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = svc.icon;

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
    >
      <Link href={svc.href} className="group block h-full">
        <div className="relative overflow-hidden h-full bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#e8511a]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          {/* Subtle gradient mesh background on hover */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${svc.color}`} />

          <div className="relative z-10">
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-[0_8px_16px_rgba(232,81,26,0.15)] transition-all duration-300`}
            >
              <Icon size={22} className="text-[#e8511a]" />
            </div>
            <h3 className="font-bold text-[#2d2d2d] mb-2 group-hover:text-[#e8511a] transition-colors">
              {svc.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">{svc.description}</p>
            <div className="mt-4 flex items-center gap-1 text-[#e8511a] text-xs font-semibold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              Learn more <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Environment ──────────────────────────────────────────────────────────────

function EnvironmentSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section ref={containerRef} className="py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text */}
          <AnimatedSection>
            <span className="text-[#e8511a] text-xs font-bold uppercase tracking-widest">
              Our Clinic
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black text-[#2d2d2d] leading-tight">
              An environment
              <br />
              <span className="text-[#e8511a]">built for healing</span>
            </h2>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              From private treatment rooms to a quiet, welcoming atmosphere,
              every part of our clinic is designed to help you feel safe,
              supported, and cared for throughout your recovery journey.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              <FeatureCard
                icon={MapPin}
                title="Easily Accessible"
                desc="Unit 100B – 3300 Boundary Road, right near Boundary and Canada Way — minutes from Vancouver, Brentwood, and Metrotown."
              />
              <FeatureCard
                icon={Clock}
                title="Convenient Hours"
                desc="Mon–Fri 9am–6pm, Saturday 10am–6pm. Easy scheduling around your life."
              />
              <FeatureCard
                icon={Phone}
                title="Direct Billing"
                desc="We handle paperwork with ICBC, WorkSafeBC, MSP and major private insurers so you don't have to."
              />
              <FeatureCard
                icon={Heart}
                title="Holistic Care"
                desc="All our disciplines work together, sharing insights to create the most effective plan for you."
              />
            </div>
          </AnimatedSection>

          {/* Parallax Image grid */}
          <div className="relative hidden sm:block">
            <div className="grid grid-cols-2 gap-6">
              <motion.div style={{ y: y1 }} className="space-y-6">
                <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=600&q=80&auto=format&fit=crop"
                    alt="Treatment room"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80&auto=format&fit=crop"
                    alt="Massage therapy session"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div style={{ y: y2 }} className="space-y-6 mt-16">
                <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&auto=format&fit=crop"
                    alt="Physiotherapy session"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80&auto=format&fit=crop"
                    alt="Acupuncture treatment"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Glass badge */}
            <motion.div
              style={{ y: y1 }}
              className="absolute bottom-20 -left-6 bg-white/70 backdrop-blur-xl border border-white/40 p-6 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] z-10"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl font-black text-[#e8511a]">7+</div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-gray-700 leading-tight">
                  Disciplines<br />Under One Roof
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Image Fallback (No parallax) */}
          <div className="block sm:hidden space-y-4">
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=600&q=80&auto=format&fit=crop"
                alt="Treatment room"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&auto=format&fit=crop"
                alt="Physiotherapy session"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
        <Icon size={16} className="text-[#e8511a]" />
      </div>
      <div>
        <h4 className="font-bold text-[#2d2d2d] text-sm mb-1">{title}</h4>
        <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

// ─── Direct Billing ───────────────────────────────────────────────────────────

function BillingSection() {
  // Duplicate array so we can scroll it seamlessly
  const marqueeItems = [...insurers, ...insurers];

  return (
    <section className="py-24 bg-[#0d1117] overflow-hidden border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <AnimatedSection>
          <span className="text-[#e8511a] text-xs font-bold uppercase tracking-widest">
            Hassle-Free
          </span>
          <h2 className="mt-3 text-4xl font-black text-white">Direct Billing</h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            We directly bill most major private insurers, ICBC, WorkSafeBC, and MSP —
            so you can focus on getting better, not paperwork.
          </p>
        </AnimatedSection>
      </div>

      <div className="relative flex overflow-x-hidden group py-4">
        {/* Fading edges so it doesn't just cut off sharply */}
        <div className="absolute top-0 left-0 w-16 sm:w-32 h-full bg-gradient-to-r from-[#0d1117] to-transparent z-10" />
        <div className="absolute top-0 right-0 w-16 sm:w-32 h-full bg-gradient-to-l from-[#0d1117] to-transparent z-10" />

        {/* Marquee Track */}
        <div className="flex animate-marquee gap-4 sm:gap-6 whitespace-nowrap min-w-full">
          {marqueeItems.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="inline-flex items-center justify-center bg-white/5 border border-white/10 hover:border-white/20 text-white/90 px-8 py-5 rounded-2xl text-lg font-bold transition-all duration-300 backdrop-blur-sm"
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <AnimatedSection className="flex flex-wrap justify-center gap-8">
          <Link
            href="/insurance-coverage-burnaby-vancouver"
            className="text-[#e8511a] hover:text-orange-400 font-semibold inline-flex items-center gap-1.5 transition-colors"
          >
            View all insurance providers <ChevronRight size={16} />
          </Link>
          <Link
            href="/icbc-rehab-burnaby-vancouver"
            className="text-gray-400 hover:text-gray-200 font-semibold inline-flex items-center gap-1.5 transition-colors"
          >
            ICBC car accident claims <ChevronRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────

function CTABanner() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#111827]">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#e8511a_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#e8511a_0%,_transparent_60%)]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Start Your{" "}
            <span className="text-[#e8511a]">Recovery</span>
            <br />Today
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            Whether you&apos;re recovering from injury or just want to feel your
            best — we&apos;re here to support your path back to what matters most.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
          </div>
          <p className="mt-6 text-gray-500 text-sm">
            📍 100B – 3300 Boundary Rd, Burnaby &nbsp;|&nbsp; 📞 778-379-9888
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

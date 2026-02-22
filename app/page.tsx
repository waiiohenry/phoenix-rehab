"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import {
  Activity,
  Heart,
  Zap,
  Brain,
  Dumbbell,
  Leaf,
  Sparkles,
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
    icon: Heart,
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
    icon: Sparkles,
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
      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
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
            className="inline-flex items-center gap-2 bg-black/30 border border-white/20 text-white/90 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e8511a] animate-pulse" />
            Burnaby & Vancouver
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
    { value: "Direct", label: "Billing — ICBC, MSP & More" },
    { value: "100%", label: "Client-Centred Care" },
    { value: "Burnaby", label: "Easy Access from Vancouver" },
  ];
  return (
    <section className="bg-[#e8511a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-orange-600">
          {stats.map((s, i) => (
            <AnimatedSection key={i}>
              <div className="py-8 px-6 text-center">
                <div className="text-3xl font-black text-white mb-1">{s.value}</div>
                <div className="text-xs text-orange-100 font-medium tracking-wide uppercase">
                  {s.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
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
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-gray-900">
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
        <div className="h-full bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#e8511a]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon size={22} className="text-[#e8511a]" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#e8511a] transition-colors">
            {svc.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">{svc.description}</p>
          <div className="mt-4 flex items-center gap-1 text-[#e8511a] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            Learn more <ChevronRight size={14} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Environment ──────────────────────────────────────────────────────────────

function EnvironmentSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <AnimatedSection>
            <span className="text-[#e8511a] text-xs font-bold uppercase tracking-widest">
              Our Clinic
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
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

          {/* Image grid */}
          <AnimatedSection className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=600&q=80&auto=format&fit=crop"
                    alt="Treatment room"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80&auto=format&fit=crop"
                    alt="Massage therapy session"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&auto=format&fit=crop"
                    alt="Physiotherapy session"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80&auto=format&fit=crop"
                    alt="Acupuncture treatment"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Orange accent badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#e8511a] text-white p-5 rounded-2xl shadow-xl">
              <div className="text-3xl font-black">7+</div>
              <div className="text-xs font-medium uppercase tracking-widest opacity-90">
                Disciplines
              </div>
            </div>
          </AnimatedSection>
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
        <h4 className="font-bold text-gray-900 text-sm mb-1">{title}</h4>
        <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

// ─── Direct Billing ───────────────────────────────────────────────────────────

function BillingSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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

        <AnimatedSection>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {insurers.map((name) => (
              <div
                key={name}
                className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-[#e8511a]/50 text-gray-300 px-5 py-2.5 rounded-full text-sm font-medium transition-all"
              >
                {name}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/insurance-coverage-burnaby-vancouver"
              className="text-[#e8511a] hover:text-orange-400 font-semibold inline-flex items-center gap-1 transition-colors"
            >
              View all insurance providers <ChevronRight size={16} />
            </Link>
            <Link
              href="/icbc-rehab-burnaby-vancouver"
              className="text-gray-400 hover:text-gray-200 font-semibold inline-flex items-center gap-1 transition-colors"
            >
              ICBC car accident claims <ChevronRight size={16} />
            </Link>
          </div>
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

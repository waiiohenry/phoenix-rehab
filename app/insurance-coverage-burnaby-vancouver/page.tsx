"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, ShieldAlert, BadgeInfo, Building2, Building, Flame, ShieldPlus, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

const insuranceProviders = [
    "Pacific Blue Cross",
    "Canada Life",
    "Sun Life",
    "Manulife",
    "Green Shield",
    "Desjardins",
    "Equitable Life",
    "ClaimSecure",
    "iA Financial Group",
    "Empire Life",
    "Medavie Blue Cross",
    "BPA",
    "Chambers of Commerce",
    "Cowan",
    "Johnson Inc.",
    "Maximum Benefit",
];

const serviceCoverage = [
    {
        title: "Physiotherapy, RMT, Chiropractic & Acupuncture",
        description: "Usually eligible for direct billing with most extended health plans. Coverage limits vary by your specific policy.",
        status: "Highly Covered",
        color: "bg-emerald-50 text-emerald-700 border-emerald-200",
        iconColor: "text-emerald-500",
    },
    {
        title: "Clinical Counseling (RCC)",
        description: "Coverage varies widely by plan. Many plans cover Registered Clinical Counsellors, but please verify with your provider first.",
        status: "Varies by Plan",
        color: "bg-amber-50 text-amber-700 border-amber-200",
        iconColor: "text-amber-500",
    },
    {
        title: "Kinesiology (Active Rehab)",
        description: "Often not covered by standard extended health, but frequently covered under ICBC active rehab or specialized return-to-work programs.",
        status: "Special Circumstances",
        color: "bg-blue-50 text-blue-700 border-blue-200",
        iconColor: "text-blue-500",
    },
];

const specialPrograms = [
    {
        title: "ICBC (Car Accident Claims)",
        description: "If you've been in a motor vehicle accident, ICBC may cover your treatment costs. We direct bill ICBC so you don't pay out-of-pocket for approved sessions.",
        covered: "Physio, RMT, Chiro, Kinesiology, Counseling, Acupuncture",
        bring: "ICBC claim number, date of accident, photo ID",
        linkText: "ICBC Health Care Services",
        linkHref: "https://www.icbc.com/claims/enhanced-care",
        internalLink: "/icbc-rehab-burnaby-vancouver",
        icon: ShieldAlert,
        color: "text-[#e8511a]"
    },
    {
        title: "WorkSafeBC (Workplace Injuries)",
        description: "If you've been injured at work, WorkSafeBC may cover your rehabilitation costs. We help with recovery and early return-to-work planning.",
        covered: "Physio, Chiro, RMT, Acupuncture (most commonly approved)",
        bring: "WorkSafeBC claim number, employer information",
        linkText: "WorkSafeBC Health Care Benefits",
        linkHref: "https://www.worksafebc.com/en/claims/benefits-services/health-care-benefits",
        internalLink: null,
        icon: Building2,
        color: "text-blue-600"
    },
    {
        title: "MSP (Medical Services Plan of BC)",
        description: "MSP provides partial coverage for patients on premium assistance. Coverage is limited, but you may be eligible for reduced rates.",
        covered: "10 combined visits per year for Physio, Chiro, RMT, Acupuncture",
        bring: "BC Services Card (CareCard)",
        linkText: "MSP Supplementary Benefits",
        linkHref: "https://www2.gov.bc.ca/gov/content/health/health-drug-coverage/msp/bc-residents/benefits/services-covered-by-msp/supplementary-benefits",
        internalLink: null,
        icon: ShieldPlus,
        color: "text-purple-600"
    }
];

export default function InsuranceCoveragePage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-[#0d1117] pt-40 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#e8511a_0%,_transparent_50%)] opacity-20" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto"
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm border border-white/10">
                            <ShieldCheck size={16} className="text-[#e8511a]" />
                            Direct Billing Available
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                            Insurance &amp; <span className="text-[#e8511a]">Direct Billing</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-400">
                            We believe that accessing your health benefits should be as stress-free as your treatment. We handle the paperwork and direct bill most major extended health providers, ICBC, and WorkSafeBC.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Providers Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-black text-gray-900 mb-4">Supported Providers</h2>
                        <p className="text-gray-600 text-lg">
                            We are proud to offer direct billing for a wide range of insurance providers. If you don't see your insurer listed, please give us a call — this is not an exhaustive list.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    >
                        {insuranceProviders.map((provider, i) => (
                            <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100 flex items-center gap-3 hover:border-orange-200 hover:shadow-sm transition-all">
                                <ShieldCheck className="w-5 h-5 text-gray-400 shrink-0" />
                                <span className="font-semibold text-gray-700">{provider}</span>
                            </div>
                        ))}
                    </motion.div>

                    <div className="mt-12 bg-orange-50 border border-orange-100 rounded-2xl p-6 text-center max-w-3xl mx-auto">
                        <p className="text-gray-800 font-medium">
                            <strong className="text-[#e8511a]">What to Bring:</strong> To make your first visit smooth, please bring your insurance card (and claim number if applicable). This allows us to quickly verify your benefits and confirm coverage before your appointment begins.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Eligibility */}
            <section className="py-20 lg:py-28 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-black text-gray-900 mb-4">Which Services Can You Direct Bill For?</h2>
                        <p className="text-gray-600 text-lg">
                            Coverage depends entirely on your specific insurance policy. Here is a general guide to what is typically covered under extended health benefits.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {serviceCoverage.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`rounded-3xl p-8 border ${service.color} flex flex-col h-full`}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold">{service.title}</h3>
                                </div>
                                <p className="mb-6 flex-grow text-gray-700/80 leading-relaxed font-medium">
                                    {service.description}
                                </p>
                                <div className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider">
                                    <CheckCircle2 className={`w-5 h-5 ${service.iconColor}`} />
                                    {service.status}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Special Programs */}
            <section className="py-20 lg:py-28 bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Specialized Coverage Programs</h2>
                        <p className="text-gray-600 text-lg max-w-3xl">
                            Beyond standard extended health, we are registered providers for ICBC, WorkSafeBC, and MSP Premium Assistance. We manage the reporting and billing so you can focus entirely on your recovery.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {specialPrograms.map((program, idx) => {
                            const Icon = program.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                                        <div className="lg:w-1/2">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                                                    <Icon className={`w-6 h-6 ${program.color}`} />
                                                </div>
                                                <h3 className="text-2xl font-black text-gray-900">{program.title}</h3>
                                            </div>
                                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                                {program.description}
                                            </p>

                                            {program.internalLink && (
                                                <Link href={program.internalLink} className="inline-flex items-center gap-2 text-[#e8511a] font-bold hover:gap-3 transition-all mb-6">
                                                    Read our full ICBC guide <ArrowRight className="w-4 h-4" />
                                                </Link>
                                            )}
                                        </div>

                                        <div className="lg:w-1/2 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                                            <div className="space-y-6">
                                                <div>
                                                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">What's Covered</h4>
                                                    <p className="font-semibold text-gray-900">{program.covered}</p>
                                                </div>
                                                <div>
                                                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">What To Bring</h4>
                                                    <p className="font-semibold text-gray-900">{program.bring}</p>
                                                </div>
                                                <div className="pt-4 border-t border-gray-100">
                                                    <a
                                                        href={program.linkHref}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors"
                                                    >
                                                        <ExternalLink className="w-4 h-4" />
                                                        {program.linkText}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#e8511a]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                        Ready to Start Your Recovery?
                    </h2>
                    <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
                        Don't let insurance confusion delay your healing. Book your appointment today and our administrative team will help verify your coverage.
                    </p>
                    <a
                        href="https://phoenixrehab.janeapp.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block bg-white text-[#e8511a] font-bold px-10 py-5 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    >
                        Book Your Assessment Now
                    </a>
                </div>
            </section>
        </main>
    );
}

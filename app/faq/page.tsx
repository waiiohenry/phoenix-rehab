"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ChevronRight, Phone, Mail } from "lucide-react";

const faqs = [
    {
        question: "What happens if I miss, cancel late, or arrive late for my appointment?",
        answer: (
            <div className="space-y-4">
                <p>
                    At Phoenix Rehab, your appointment time is reserved exclusively for you. We require
                    a minimum of <strong>24 hours' notice</strong> for any cancellations or rescheduling.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>
                        <strong>Late Cancellations:</strong> If you cancel with less than 24 hours' notice or
                        miss your appointment, a cancellation fee equal to the <em>full cost of the scheduled treatment</em> will be charged to the card on file.
                    </li>
                    <li>
                        <strong>Late Arrivals:</strong> If you arrive late, your session may be shortened to
                        accommodate others, but you will be responsible for the full session fee.
                    </li>
                    <li>
                        <strong>Insurance Coverage:</strong> Please be aware that insurance providers
                        (including Extended Health Plans and ICBC) do not cover fees for missed appointments
                        or late cancellations. These fees are the sole responsibility of the patient.
                    </li>
                </ul>
                <p>
                    <strong>How to Reschedule:</strong> To avoid fees, please cancel or reschedule via our online
                    booking portal, by calling (778) 379-9888, or by emailing us directly.
                </p>
            </div>
        ),
    },
    {
        question: "Planning to use insurance? Here's what you'll need to provide.",
        answer: (
            <div className="space-y-4">
                <p>If you would like us to direct bill your insurance provider, please have the following ready:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Your policy number and member ID as listed on your insurance card</li>
                    <li>Your date of birth</li>
                    <li>
                        If you are not the primary cardholder, please provide the first and last name
                        and date of birth of the primary cardholder
                    </li>
                    <li>
                        A doctor's referral is not usually required; however, some extended health plans
                        may request one for reimbursement.
                    </li>
                </ul>
                <p>
                    Once you've booked your first appointment, you will automatically receive an intake
                    form via email to upload a photo of your insurance card.
                </p>
            </div>
        ),
    },
    {
        question: "Do you offer direct billing for insurance?",
        answer: (
            <div className="space-y-4">
                <p>
                    <strong>Yes!</strong> We offer direct billing to most extended health insurance providers.
                    Once your first appointment is booked, you'll receive an intake form via email that
                    includes a list of insurers we can bill directly.
                </p>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 text-sm text-orange-900">
                    ⚠️ <strong>Note:</strong> Direct billing is not guaranteed for every visit due to insurer
                    policies, benefits plan specifics, or portal issues. If a claim is rejected or
                    partially paid, you are responsible for any outstanding balance.
                </div>
            </div>
        ),
    },
    {
        question: "Do you accept ICBC claims?",
        answer: (
            <div className="space-y-4">
                <p>
                    Yes, we accept <strong>ICBC Enhanced Care</strong> claims for patients injured in
                    motor vehicle accidents.
                </p>
                <p>With an approved claim, you are pre-approved for the following within 12 weeks of your accident date:</p>
                <ul className="grid grid-cols-2 gap-2 list-none p-0">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#e8511a]" /> Physiotherapy: 25 sessions</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#e8511a]" /> Chiropractic: 25 sessions</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#e8511a]" /> Massage (RMT): 12 sessions</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#e8511a]" /> Kinesiology: 12 sessions</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#e8511a]" /> Acupuncture: 12 sessions</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#e8511a]" /> Counselling: 12 sessions</li>
                </ul>
                <p>
                    We bill ICBC directly at their approved rates—no user fees are charged for covered sessions.
                </p>
            </div>
        ),
    },
    {
        question: "Do you accept WorkSafeBC (WSBC) clients?",
        answer: (
            <div className="space-y-4">
                <p>
                    Yes, we accept WSBC clients. Before booking your appointment, please ensure that you
                    have an approved WSBC claim number and that your claim is active and accepted for
                    the type of treatment you're seeking.
                </p>
                <p>
                    In most cases, a <strong>Physiotherapy Initial Assessment</strong> can be completed
                    without prior approval from your claim owner, as long as it takes place within 60 days
                    of your injury date.
                </p>
                <p>
                    All WSBC-related treatments are directly billed to WorkSafeBC. WSBC does not cover
                    missed appointments or late cancellations.
                </p>
            </div>
        ),
    },
    {
        question: "What type of clothing is recommended for my session?",
        answer: (
            <p>
                Clothing will depend on the type of service you are receiving and the location of your
                injury. For initial assessments, we recommend wearing comfortable, activewear-style
                clothing that allows easy access and visibility to the affected area. After your
                assessment, your clinician will provide guidance on appropriate attire for follow-up sessions.
            </p>
        ),
    },
    {
        question: "Can I use MSP Premium Assistance at your clinic?",
        answer: (
            <div className="space-y-4">
                <p>
                    Yes. If you qualify for MSP Supplementary Benefits, you may receive up to 10 partially
                    subsidized visits per calendar year. Covered services include:
                </p>
                <ul className="list-disc pl-5">
                    <li>Physiotherapy</li>
                    <li>Acupuncture</li>
                    <li>Chiropractic care</li>
                </ul>
                <p>
                    MSP provides $23 per visit, and you only pay the remaining user fee. To check your
                    eligibility, please call us at (778) 379-9888.
                </p>
            </div>
        ),
    },
    {
        question: "Do I need a doctor's referral to book or use my insurance?",
        answer: (
            <p>
                A referral is <strong>not required</strong> to book most services. However, some
                insurance plans may require one for reimbursement. We recommend contacting your
                insurance provider directly to confirm.
            </p>
        ),
    },
];

function FAQAccordionItem({
    item,
    isOpen,
    onClick,
}: {
    item: typeof faqs[0];
    isOpen: boolean;
    onClick: () => void;
}) {
    return (
        <div className="border-b border-gray-200 last:border-0">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
            >
                <span className={`text-lg sm:text-xl font-bold transition-colors ${isOpen ? "text-[#e8511a]" : "text-gray-900 group-hover:text-[#e8511a]"}`}>
                    {item.question}
                </span>
                <div className={`ml-6 flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${isOpen ? "border-[#e8511a] bg-[#e8511a] text-white" : "border-gray-300 text-gray-400 group-hover:border-[#e8511a] group-hover:text-[#e8511a]"}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-gray-600 leading-relaxed text-base sm:text-lg pr-12">
                            {item.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

    return (
        <main className="min-h-screen bg-white pt-24 pb-16">
            {/* Hero Section */}
            <section className="relative w-full h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/pages/faq-hero.png"
                    alt="Clinic Reception"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent" />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl text-white"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
                            Frequently Asked <span className="text-[#e8511a]">Questions</span>
                        </h1>
                        <p className="text-xl text-gray-200">
                            Everything you need to know about booking, insurance, ICBC claims, and preparing for your first visit.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Accordion */}
                    <div className="bg-white mb-16 border-t border-gray-200">
                        {faqs.map((faq, index) => (
                            <FAQAccordionItem
                                key={index}
                                item={faq}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        ))}
                    </div>

                    {/* Contact Box (If they still have questions) */}
                    <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm text-center sm:text-left">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Can't find what you're looking for?</h2>
                            <p className="text-gray-600">Our front desk team is always happy to help you navigate your coverage and booking.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
                            <a href="tel:7783799888" className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-full font-bold hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-sm text-sm">
                                <Phone size={16} className="text-[#e8511a]" /> (778) 379-9888
                            </a>
                            <a href="mailto:admin@phoenixrehab.ca" className="inline-flex items-center justify-center gap-2 bg-[#e8511a] text-white px-6 py-3 rounded-full font-bold hover:bg-[#c04010] shadow-md shadow-orange-500/20 transition-all text-sm">
                                <Mail size={16} /> Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="pb-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-[#0d1117] rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent opacity-60" />
                        <div className="relative z-10">
                            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                                Ready to start your recovery?
                            </h2>
                            <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
                                Reclaim your strength, movement, and wellness. Your journey begins here at Phoenix Rehab.
                            </p>
                            <a
                                href="https://phoenixrehab.janeapp.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-[#e8511a] hover:bg-[#c04010] shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1"
                            >
                                Book Your Appointment <ChevronRight className="ml-2 w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

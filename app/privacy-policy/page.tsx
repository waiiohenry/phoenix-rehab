"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Link */}
                <div className="mb-12">
                    <Link href="/" className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-[#e8511a] transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>
                </div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">
                        Privacy <span className="text-[#e8511a]">Policy</span>
                    </h1>
                    <p className="text-gray-500 text-lg">
                        Effective Date: <span className="font-semibold text-gray-900">July 23, 2025</span>
                    </p>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-lg prose-gray max-w-none hover:prose-a:text-[#e8511a] prose-a:transition-colors prose-headings:font-bold prose-headings:text-gray-900"
                >
                    <p>
                        Phoenix Rehab (&#8220;we&#8221;, &#8220;our&#8221;, or &#8220;us&#8221;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{" "}
                        <a href="https://phoenixrehab.ca" className="font-semibold text-[#e8511a]">https://phoenixrehab.ca</a>, use our services, or communicate with us.
                    </p>

                    <h2 className="text-2xl mt-12 mb-6">1. Information We Collect</h2>
                    <p>We may collect the following types of information:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Personal Information</strong> (such as your name, phone number, email address) when you:
                            <ul className="list-circle pl-6 mt-2 space-y-1 text-gray-600">
                                <li>Book an appointment</li>
                                <li>Subscribe to our newsletter or offers</li>
                                <li>Submit a contact form</li>
                                <li>Call or email us</li>
                            </ul>
                        </li>
                        <li><strong>Health-related information</strong> (if provided by you for booking or consultation purposes)</li>
                        <li><strong>Payment and insurance information</strong> (if used during booking or billing)</li>
                        <li>
                            <strong>Usage Data</strong> through cookies, such as:
                            <ul className="list-circle pl-6 mt-2 space-y-1 text-gray-600">
                                <li>IP address</li>
                                <li>Browser type</li>
                                <li>Pages visited</li>
                                <li>Time and date of visit</li>
                            </ul>
                        </li>
                    </ul>

                    <h2 className="text-2xl mt-12 mb-6">2. How We Use Your Information</h2>
                    <p>We use the collected information to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Schedule and manage appointments</li>
                        <li>Respond to inquiries</li>
                        <li>Provide services and process payments</li>
                        <li>Send email updates, wellness tips, and promotions (with your consent)</li>
                        <li>Improve website functionality and user experience</li>
                        <li>Comply with legal and insurance requirements</li>
                    </ul>

                    <h2 className="text-2xl mt-12 mb-6">3. Sharing Your Information</h2>
                    <p>We do not sell your personal information. We may share data with:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Our service providers (e.g., JaneApp, MailerLite, Google, Stripe)</li>
                        <li>Insurance partners (for direct billing purposes, with your consent)</li>
                        <li>Law enforcement or regulatory bodies, if legally required</li>
                    </ul>

                    <h2 className="text-2xl mt-12 mb-6">4. Cookies & Analytics</h2>
                    <p>
                        Our website uses cookies and similar tracking tools to enhance your browsing experience and help us understand how visitors use our site. You can disable cookies in your browser settings.
                    </p>

                    <h2 className="text-2xl mt-12 mb-6">5. Data Security</h2>
                    <p>
                        We take appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse.
                    </p>

                    <h2 className="text-2xl mt-12 mb-6">6. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Access and correct your personal information</li>
                        <li>Withdraw consent to marketing communications</li>
                        <li>Request deletion of your data (subject to legal limitations)</li>
                    </ul>
                    <p className="mt-4">
                        To exercise any of these rights, contact us at:{" "}
                        <a href="mailto:admin@phoenixrehab.ca" className="font-semibold text-[#e8511a]">admin@phoenixrehab.ca</a>
                    </p>

                    <h2 className="text-2xl mt-12 mb-6">7. Third-Party Links</h2>
                    <p>
                        Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.
                    </p>

                    <h2 className="text-2xl mt-12 mb-6">8. SMS Messaging Policy</h2>
                    <p>
                        By providing your mobile number to Phoenix Rehab, you consent to receive SMS messages related to appointment reminders, scheduling updates, clinic announcements, and promotional communications.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mt-4">
                        <li><strong>Consent:</strong> By opting in, you agree to receive SMS messages from Phoenix Rehab.</li>
                        <li><strong>Privacy:</strong> Your personal information will not be shared with third parties for marketing purposes.</li>
                        <li><strong>Message Frequency:</strong> Message frequency may vary and may include recurring messages depending on your interactions with us (e.g., appointment confirmations, reminders, promotions).</li>
                        <li><strong>Opt-Out:</strong> You may opt out of receiving SMS messages at any time by replying STOP.</li>
                        <li><strong>Help:</strong> For assistance, reply HELP.</li>
                        <li><strong>Message and Data Rates:</strong> Standard message and data rates may apply according to your mobile carrier plan.</li>
                        <li><strong>Support:</strong> For more information, contact us at <a href="mailto:admin@phoenixrehab.ca" className="font-semibold text-[#e8511a]">admin@phoenixrehab.ca</a>.</li>
                    </ul>

                    <h2 className="text-2xl mt-12 mb-6">9. Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. Updates will be posted on this page with the &#8220;Effective Date&#8221; at the top.
                    </p>

                    <h2 className="text-2xl mt-12 mb-6">10. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                    <div className="bg-gray-50 rounded-2xl p-6 mt-6 border border-gray-100">
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center gap-3">
                                <span className="text-xl">📍</span> 100B – 3300 Boundary Rd, Burnaby, BC
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-xl">📞</span> (778) 379-9888
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-xl">📧</span>{" "}
                                <a href="mailto:admin@phoenixrehab.ca" className="font-semibold text-[#e8511a] hover:text-[#c04010] transition-colors">
                                    admin@phoenixrehab.ca
                                </a>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}

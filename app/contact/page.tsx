"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CalendarDays, ExternalLink } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white pt-24 pb-16">
            {/* Hero Section */}
            <section className="relative w-full h-[35vh] min-h-[350px] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/pages/contact-hero.png"
                    alt="Clinic Exterior"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117]/90 via-[#0d1117]/70 to-transparent" />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl text-white"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 tracking-tight">
                            Get In <span className="text-[#e8511a]">Touch</span>
                        </h1>
                        <p className="text-xl text-gray-300">
                            We're here to help you get back to feeling your best. Call, email, or visit us today.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Split Layout */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                        {/* Left Column: Contact Details */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-12"
                        >
                            <div>
                                <h2 className="text-3xl font-black text-gray-900 mb-8">Contact Information</h2>

                                <div className="space-y-8 text-gray-700">
                                    {/* Address */}
                                    <div className="flex gap-4 group">
                                        <div className="flex-shrink-0 w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-[#e8511a] group-hover:bg-[#e8511a] group-hover:text-white transition-colors duration-300">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-1">Our Location</h3>
                                            <p className="leading-relaxed">
                                                100B - 3300 Boundary Road<br />
                                                Burnaby, BC V5M 4A4
                                            </p>
                                            <a href="https://maps.google.com/?q=100B+-+3300+Boundary+Road+Burnaby,+BC+V5M+4A4" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 mt-2 text-[#e8511a] font-semibold hover:text-[#c04010] transition-colors">
                                                Get Directions <ExternalLink size={14} />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex gap-4 group">
                                        <div className="flex-shrink-0 w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-[#e8511a] group-hover:bg-[#e8511a] group-hover:text-white transition-colors duration-300">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-1">Phone Number</h3>
                                            <p>(778) 379-9888</p>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex gap-4 group">
                                        <div className="flex-shrink-0 w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-[#e8511a] group-hover:bg-[#e8511a] group-hover:text-white transition-colors duration-300">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-1">Email Address</h3>
                                            <p>
                                                <a href="mailto:admin@phoenixrehab.ca" className="hover:text-[#e8511a] transition-colors">
                                                    admin@phoenixrehab.ca
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hours section */}
                            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <Clock className="text-[#e8511a]" size={28} />
                                    <h3 className="text-2xl font-black text-gray-900">Clinic Hours</h3>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                        <span className="font-medium text-gray-600">Monday – Friday</span>
                                        <span className="font-bold text-gray-900">9:00 am – 6:00 pm</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                        <span className="font-medium text-gray-600">Saturday</span>
                                        <span className="font-bold text-gray-900">10:00 am - 6:00 pm</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-gray-600">Sunday & Holidays</span>
                                        <span className="font-bold text-gray-400">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Interactive Map & CTA */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="h-full flex flex-col"
                        >
                            {/* Boxed CTA */}
                            <div className="bg-[#0d1117] rounded-t-3xl p-8 text-center text-white relative overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent opacity-60" />
                                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                                    <div className="text-left">
                                        <h3 className="text-xl font-bold mb-1">Ready to book?</h3>
                                        <p className="text-gray-400 text-sm">Schedule your next visit easily online.</p>
                                    </div>
                                    <a
                                        href="https://phoenixrehab.janeapp.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex shrink-0 items-center justify-center gap-2 px-6 py-3 text-sm font-bold rounded-full text-white bg-[#e8511a] hover:bg-[#c04010] shadow-md shadow-orange-500/20 transition-all duration-300"
                                    >
                                        <CalendarDays size={18} /> Book Appointment
                                    </a>
                                </div>
                            </div>

                            {/* Google Map Embed */}
                            <div className="flex-grow w-full h-[400px] lg:h-auto min-h-[400px] relative rounded-b-3xl overflow-hidden border-2 border-[#0d1117] shadow-xl">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.204555806437!2d-123.02450892285148!3d49.272491171343714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548677f594fc19fb%3A0xc482cb4ec9e92a2a!2s100B%20-%203300%20Boundary%20Rd%2C%20Burnaby%2C%20BC%20V5M%204A4!5e0!3m2!1sen!2sca!4v1700685600000!5m2!1sen!2sca"
                                    className="absolute inset-0 w-full h-full border-0"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Phoenix Rehab Google Maps Location"
                                />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </main>
    );
}

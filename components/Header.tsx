"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const services = [
    { label: "Physiotherapy", href: "/physiotherapy-burnaby-vancouver" },
    { label: "Massage Therapy – RMT", href: "/massage-therapy-burnaby-vancouver" },
    { label: "Chiropractic Care", href: "/chiropractic-care-burnaby-vancouver" },
    { label: "Clinical Counseling", href: "/clinical-counseling-burnaby-vancouver" },
    { label: "Kinesiology", href: "/kinesiology-burnaby-vancouver" },
    { label: "Acupuncture", href: "/acupuncture-burnaby-vancouver" },
    { label: "Traditional Chinese Medicine", href: "/traditional-chinese-medicine-burnaby-vancouver" },
    { label: "Cosmetic Acupuncture", href: "/cosmetic-acupuncture-burnaby-vancouver" },
];

const team = [
    { label: "Physiotherapists", href: "/physiotherapists-burnaby-vancouver" },
    { label: "Registered Massage Therapists", href: "/rmt-burnaby-vancouver" },
    { label: "Chiropractors", href: "/chiropractors-burnaby-vancouver" },
    { label: "Clinical Counselors", href: "/clinical-counselors-burnaby-vancouver" },
    { label: "Kinesiologists", href: "/kinesiologists-burnaby-vancouver" },
    { label: "Acupuncturists & TCM", href: "/acupuncturists-tcm-burnaby-vancouver" },
];

const billing = [
    { label: "ICBC (Car Accident Claims)", href: "/icbc-rehab-burnaby-vancouver" },
    { label: "Direct Billing & Insurance", href: "/insurance-coverage-burnaby-vancouver" },
];

type DropdownKey = "services" | "team" | "billing" | null;

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState<DropdownKey>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const toggleMobile = (key: DropdownKey) =>
        setMobileExpanded((prev) => (prev === key ? null : key));

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-md"
                    : "bg-white"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/logo-notag.svg"
                            alt="Phoenix Rehab & Holistic Health Centre"
                            className="h-16 w-auto"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        <NavLink href="/winter-tune-up">Winter Tune-Up</NavLink>
                        <NavLink href="/about">About</NavLink>

                        <Dropdown
                            label="Services"
                            items={services}
                            open={openDropdown === "services"}
                            onToggle={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
                            onOpen={() => setOpenDropdown("services")}
                            onClose={() => setOpenDropdown(null)}
                        />
                        <Dropdown
                            label="Our Team"
                            items={team}
                            open={openDropdown === "team"}
                            onToggle={() => setOpenDropdown(openDropdown === "team" ? null : "team")}
                            onOpen={() => setOpenDropdown("team")}
                            onClose={() => setOpenDropdown(null)}
                        />
                        <Dropdown
                            label="Direct Billing"
                            items={billing}
                            open={openDropdown === "billing"}
                            onToggle={() => setOpenDropdown(openDropdown === "billing" ? null : "billing")}
                            onOpen={() => setOpenDropdown("billing")}
                            onClose={() => setOpenDropdown(null)}
                        />

                        <NavLink href="/faq">FAQ</NavLink>
                        <NavLink href="/contact">Contact</NavLink>
                    </nav>

                    {/* Book Now CTA */}
                    <div className="hidden lg:block">
                        <motion.a
                            href="https://phoenixrehab.janeapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="bg-[#e8511a] hover:bg-[#c04010] text-white font-bold px-6 py-3 text-sm tracking-widest uppercase transition-colors"
                        >
                            Book Now
                        </motion.a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(true)}
                        className="lg:hidden p-2 text-gray-700"
                        aria-label="Open menu"
                    >
                        <Menu size={26} />
                    </button>
                </div>
            </header>

            {/* Mobile overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 z-50 lg:hidden"
                            onClick={() => setMobileOpen(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.28 }}
                            className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 lg:hidden overflow-y-auto"
                        >
                            <div className="flex items-center justify-between p-5 border-b border-gray-100">
                                <span className="font-black text-gray-900">Menu</span>
                                <button onClick={() => setMobileOpen(false)}><X size={24} /></button>
                            </div>
                            <nav className="p-4 flex flex-col gap-1">
                                <MobileLink href="/winter-tune-up" close={() => setMobileOpen(false)}>Winter Tune-Up</MobileLink>
                                <MobileLink href="/about" close={() => setMobileOpen(false)}>About</MobileLink>

                                <MobileDropdown
                                    label="Services"
                                    items={services}
                                    open={mobileExpanded === "services"}
                                    onToggle={() => toggleMobile("services")}
                                    close={() => setMobileOpen(false)}
                                />
                                <MobileDropdown
                                    label="Our Team"
                                    items={team}
                                    open={mobileExpanded === "team"}
                                    onToggle={() => toggleMobile("team")}
                                    close={() => setMobileOpen(false)}
                                />
                                <MobileDropdown
                                    label="Direct Billing"
                                    items={billing}
                                    open={mobileExpanded === "billing"}
                                    onToggle={() => toggleMobile("billing")}
                                    close={() => setMobileOpen(false)}
                                />

                                <MobileLink href="/faq" close={() => setMobileOpen(false)}>FAQ</MobileLink>
                                <MobileLink href="/contact" close={() => setMobileOpen(false)}>Contact</MobileLink>

                                <a
                                    href="https://phoenixrehab.janeapp.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 block bg-[#e8511a] text-white font-bold text-center py-4 text-sm tracking-widest uppercase"
                                >
                                    Book Now
                                </a>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#e8511a] transition-colors rounded"
        >
            {children}
        </Link>
    );
}

function Dropdown({
    label,
    items,
    open,
    onToggle,
    onOpen,
    onClose,
}: {
    label: string;
    items: { label: string; href: string }[];
    open: boolean;
    onToggle: () => void;
    onOpen?: () => void;
    onClose: () => void;
}) {
    return (
        <div className="relative py-2" onMouseLeave={onClose}>
            <button
                onMouseEnter={onOpen || onToggle}
                onClick={onToggle}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#e8511a] transition-colors rounded"
            >
                {label}
                <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
                        animate={{ opacity: 1, y: 0, scaleY: 1 }}
                        exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 pt-1 min-w-56 z-50"
                    >
                        <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                            {items.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={onClose}
                                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#e8511a] transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function MobileLink({
    href,
    children,
    close,
}: {
    href: string;
    children: React.ReactNode;
    close: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={close}
            className="block py-3 px-2 text-gray-800 font-medium border-b border-gray-50 hover:text-[#e8511a] transition-colors"
        >
            {children}
        </Link>
    );
}

function MobileDropdown({
    label,
    items,
    open,
    onToggle,
    close,
}: {
    label: string;
    items: { label: string; href: string }[];
    open: boolean;
    onToggle: () => void;
    close: () => void;
}) {
    return (
        <div className="border-b border-gray-50">
            <button
                onClick={onToggle}
                className="flex items-center justify-between w-full py-3 px-2 text-gray-800 font-medium"
            >
                {label}
                <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-2 pl-4 flex flex-col gap-0.5">
                            {items.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={close}
                                    className="block py-2 text-sm text-gray-600 hover:text-[#e8511a] transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

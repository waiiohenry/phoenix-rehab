"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Review = {
    author_name: string;
    profile_photo_url: string;
    rating: number;
    relative_time_description: string;
    text: string;
};

export default function GoogleReviews() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await fetch("/api/reviews");
                if (!res.ok) throw new Error("Failed to fetch");
                const data = await res.json();
                setReviews(data.reviews || []);
            } catch (err) {
                console.error("Error loading reviews:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    // Auto-advance carousel
    useEffect(() => {
        if (reviews.length <= 1) return;

        const timer = setInterval(() => {
            handleNext();
        }, 8000); // 8 seconds per slide

        return () => clearInterval(timer);
    }, [reviews.length, currentIndex]);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64 w-full">
                <div className="w-8 h-8 rounded-full border-4 border-gray-200 border-t-[#e8511a] animate-spin" />
            </div>
        );
    }

    if (!reviews || reviews.length === 0) return null;

    return (
        <section className="bg-white py-16 border-y border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Subheading */}
                <div className="text-center mb-10">
                    <span className="text-[#e8511a] text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
                        <Star size={12} className="fill-[#F5B041] text-[#F5B041]" />
                        5-STAR GOOGLE RATING
                        <Star size={12} className="fill-[#F5B041] text-[#F5B041]" />
                    </span>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-black text-[#2d2d2d] leading-tight">
                        What Our Patients Say
                    </h2>
                </div>

                {/* Main Carousel Body */}
                <div className="relative max-w-3xl mx-auto">

                    {/* Floating Quote Icon Background */}
                    <div className="absolute top-0 left-0 -translate-x-8 -translate-y-6 text-gray-100 hidden sm:block">
                        <Quote size={80} className="rotate-180 opacity-50" />
                    </div>

                    <div className="relative bg-gray-50 rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-100 min-h-[280px] flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="w-full flex justify-center text-center"
                            >
                                <div className="max-w-xl mx-auto flex flex-col items-center">
                                    {/* 5 Stars */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                                            <Star key={i} size={16} className="fill-[#F5B041] text-[#F5B041]" />
                                        ))}
                                    </div>

                                    {/* Review Text */}
                                    <p className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed mb-6 italic line-clamp-6">
                                        "{reviews[currentIndex].text}"
                                    </p>

                                    {/* Reviewer Info */}
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-gray-100">
                                            <Image
                                                src={reviews[currentIndex].profile_photo_url || "/images/team/pfp/default.webp"}
                                                alt={reviews[currentIndex].author_name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900 text-base">
                                                {reviews[currentIndex].author_name}
                                            </div>
                                            <div className="text-xs text-gray-500 font-medium">
                                                {reviews[currentIndex].relative_time_description} on Google
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-6 lg:-left-12 hidden sm:block">
                        <button
                            onClick={handlePrevious}
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 text-gray-600 hover:text-[#e8511a] hover:-translate-x-1 transition-all z-10"
                            aria-label="Previous Review"
                        >
                            <ChevronLeft size={24} />
                        </button>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 lg:-right-12 hidden sm:block">
                        <button
                            onClick={handleNext}
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 text-gray-600 hover:text-[#e8511a] hover:translate-x-1 transition-all z-10"
                            aria-label="Next Review"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to review ${index + 1}`}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? "w-6 bg-[#e8511a]"
                                    : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

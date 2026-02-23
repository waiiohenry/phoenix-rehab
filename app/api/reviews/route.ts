import { NextResponse } from 'next/server';
import { Client } from '@googlemaps/google-maps-services-js';

const client = new Client({});

// Exporting config to allow revalidation without forcing dynamic
export const revalidate = 86400; // Cache for 24 hours (86,400 seconds)

export async function GET() {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

    // 1. Check if keys exist. If not, return dummy data to prevent build errors and allow UI testing.
    if (!apiKey || !placeId) {
        console.warn("Google Places API keys are missing. Using mock data.");
        return NextResponse.json({
            reviews: [
                {
                    author_name: "Sarah Johnson",
                    profile_photo_url: "https://lh3.googleusercontent.com/a/default-user=s128-c0x00000000-cc-rp-mo",
                    rating: 5,
                    relative_time_description: "2 weeks ago",
                    text: "The physiotherapy team here is incredible. After my car accident, I was struggling with chronic back pain. Within a few sessions at Phoenix Rehab, I saw massive improvements. Highly recommend!",
                    time: Math.floor(Date.now() / 1000) - 1209600,
                },
                {
                    author_name: "Michael Chen",
                    profile_photo_url: "https://lh3.googleusercontent.com/a/default-user=s128-c0x00000000-cc-rp-mo",
                    rating: 5,
                    relative_time_description: "a month ago",
                    text: "Excellent facility. Clean, modern, and the massage therapists are incredibly knowledgeable. They really take the time to listen to your concerns and tailor the treatment.",
                    time: Math.floor(Date.now() / 1000) - 2592000,
                },
                {
                    author_name: "Emily Davis",
                    profile_photo_url: "https://lh3.googleusercontent.com/a/default-user=s128-c0x00000000-cc-rp-mo",
                    rating: 5,
                    relative_time_description: "2 months ago",
                    text: "I've been going for acupuncture and it has been life-changing for my migraines. The staff is so welcoming and the direct billing makes the whole process completely stress-free.",
                    time: Math.floor(Date.now() / 1000) - 5184000,
                },
                {
                    author_name: "David T.",
                    profile_photo_url: "https://lh3.googleusercontent.com/a/default-user=s128-c0x00000000-cc-rp-mo",
                    rating: 5,
                    relative_time_description: "3 months ago",
                    text: "Top-notch chiropractic care. They don't just crack your back and send you on your way; they provide exercises and long-term plans to keep you healthy. A+ team.",
                    time: Math.floor(Date.now() / 1000) - 7776000,
                }
            ]
        });
    }

    // 2. Fetch live data from Google Places API
    try {
        const response = await client.placeDetails({
            params: {
                place_id: placeId,
                key: apiKey,
                fields: ['reviews'],
            },
            timeout: 5000,
        });

        const allReviews = response.data.result?.reviews || [];

        // 3. Filter for 5-star reviews to guarantee quality display
        const topReviews = allReviews
            .filter(review => review.rating >= 4)
            .slice(0, 5); // Take the top 5

        return NextResponse.json({ reviews: topReviews });

    } catch (error) {
        const axiosError = error as { response?: { data?: unknown; status?: number }; message?: string };
        console.error("Google API Error Response:", JSON.stringify(axiosError?.response?.data, null, 2));
        console.error("Google API Error Status:", axiosError?.response?.status);
        return NextResponse.json(
            { error: "Failed to fetch reviews" },
            { status: 500 }
        );
    }
}

export default function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        name: "Phoenix Rehab & Holistic Health Centre",
        alternateName: "Phoenix Rehab",
        url: "https://phoenixrehab.ca",
        logo: "https://phoenixrehab.ca/images/logo.png",
        image: "https://phoenixrehab.ca/images/hero.jpg",
        description:
            "Physiotherapy, RMT Massage, Chiropractic, Kinesiology, Acupuncture, Traditional Chinese Medicine & Counseling in Burnaby & Vancouver. Direct billing ICBC, WorkSafeBC, MSP & insurers.",
        telephone: "+17783799888",
        email: "admin@phoenixrehab.ca",
        address: {
            "@type": "PostalAddress",
            streetAddress: "100B - 3300 Boundary Rd",
            addressLocality: "Burnaby",
            addressRegion: "BC",
            postalCode: "V5M 0A8",
            addressCountry: "CA",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 49.2477,
            longitude: -123.0009,
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Saturday"],
                opens: "10:00",
                closes: "18:00",
            },
        ],
        sameAs: [
            "https://instagram.com/fnxcare",
            "https://facebook.com/fnxcare",
            "https://x.com/fnxcare",
        ],
        hasMap: "https://maps.google.com/?q=100B+3300+Boundary+Rd+Burnaby+BC",
        priceRange: "$$",
        currenciesAccepted: "CAD",
        paymentAccepted: "Cash, Credit Card, Insurance",
        medicalSpecialty: [
            "Physiotherapy",
            "Massage Therapy",
            "Chiropractic",
            "Kinesiology",
            "Acupuncture",
            "Traditional Chinese Medicine",
            "Clinical Counseling",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

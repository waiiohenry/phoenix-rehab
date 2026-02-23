import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://phoenixrehab.ca";

    // Base routes
    const routes = [
        "",
        "/about",
        "/contact",
        "/faq",
        "/privacy-policy",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // Direct Billing
    const directBillingRoutes = [
        "/direct-billing/icbc-rehab-burnaby-vancouver",
        "/direct-billing/insurance-coverage-burnaby-vancouver",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    // Promotion
    const promotionRoutes = [
        "/promotion/winter-tune-up",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    // Services
    const services = [
        "/services/acupuncture-burnaby-vancouver",
        "/services/chiropractic-care-burnaby-vancouver",
        "/services/clinical-counseling-burnaby-vancouver",
        "/services/cosmetic-acupuncture-burnaby-vancouver",
        "/services/kinesiology-burnaby-vancouver",
        "/services/massage-therapy-burnaby-vancouver",
        "/services/physiotherapy-burnaby-vancouver",
        "/services/traditional-chinese-medicine-burnaby-vancouver",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    }));

    // Team
    const team = [
        "/team/acupuncturists-tcm-burnaby-vancouver",
        "/team/careers",
        "/team/chiropractors-burnaby-vancouver",
        "/team/clinical-counselors-burnaby-vancouver",
        "/team/kinesiologists-burnaby-vancouver",
        "/team/physiotherapists-burnaby-vancouver",
        "/team/rmt-burnaby-vancouver",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [...routes, ...directBillingRoutes, ...promotionRoutes, ...services, ...team];
}

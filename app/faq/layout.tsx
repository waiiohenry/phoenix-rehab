import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Frequently Asked Questions | Phoenix Rehab Burnaby & Vancouver",
    description:
        "Get answers to common questions about services, insurance, direct billing, ICBC, WSBC, booking, and more at Phoenix Rehab in Burnaby and Vancouver.",
};

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

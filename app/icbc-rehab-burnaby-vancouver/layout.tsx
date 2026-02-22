import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ICBC Physiotherapy & Rehab Burnaby & Vancouver | Phoenix Rehab",
    description:
        "ICBC-covered treatments in Burnaby & Vancouver. Physiotherapy, massage therapy, chiropractic, acupuncture, counseling, and kinesiology. Direct billing, no referral needed.",
};

export default function ICBCRehabLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

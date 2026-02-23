import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kinesiology & Active Rehab in Burnaby & Vancouver | Phoenix Rehab",
    description:
        "Professional kinesiology and active rehabilitation in Burnaby & Vancouver. Recover strength, mobility, and performance. Direct billing for ICBC.",
};

export default function KinesiologyLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

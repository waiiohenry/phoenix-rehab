import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Clinical Counselling in Burnaby & Vancouver | Phoenix Rehab",
    description:
        "Professional clinical counselling in Burnaby & Vancouver. Support for anxiety, depression, trauma, and relationships. Direct billing for ICBC & extended health insurers.",
};

export default function CounsellingLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

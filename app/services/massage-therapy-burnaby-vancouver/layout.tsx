import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Registered Massage Therapy (RMT) in Burnaby & Vancouver | Phoenix Rehab",
    description:
        "Professional RMT massage therapy in Burnaby & Vancouver. Relieve pain, improve mobility, and reduce stress. Direct billing for ICBC, WorkSafeBC, MSP.",
};

export default function RMTLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

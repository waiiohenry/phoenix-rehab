import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Chiropractic Care in Burnaby & Vancouver | Phoenix Rehab",
    description:
        "Professional chiropractic care in Burnaby & Vancouver. Relieve back and neck pain, improve posture, and restore alignment. Direct billing for ICBC, WorkSafeBC, MSP.",
};

export default function ChiropracticLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

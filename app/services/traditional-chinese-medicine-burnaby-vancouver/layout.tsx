import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Traditional Chinese Medicine (TCM) in Burnaby & Vancouver | Phoenix Rehab",
    description:
        "Holistic TCM in Burnaby & Vancouver, including herbal medicine, Tui Na massage, cupping, gua sha, and moxibustion. Direct billing for MSP and extended health insurers.",
};

export default function TCMLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

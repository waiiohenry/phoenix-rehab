import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/acupuncture-burnaby-vancouver',
  },
    title: "Acupuncture in Burnaby & Vancouver | Phoenix Rehab",
    description:
        "Professional acupuncture in Burnaby & Vancouver for pain relief, stress reduction, and holistic healing. Direct billing for ICBC, MSP, WorkSafeBC & extended health insurers.",
};

export default function AcupunctureLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

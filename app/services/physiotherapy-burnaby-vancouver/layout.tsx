import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/physiotherapy-burnaby-vancouver',
  },
    title: "Physiotherapy in Burnaby & Vancouver",
    description:
        "Recover mobility, reduce pain, and rebuild strength with physiotherapy in Burnaby & Vancouver. Direct billing for ICBC, WorkSafeBC, MSP & insurers.",
};

export default function PhysiotherapyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

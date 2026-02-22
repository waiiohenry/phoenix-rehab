import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cosmetic Acupuncture | Facial Rejuvenation in Burnaby & Vancouver | Phoenix Rehab",
    description:
        "Cosmetic acupuncture (facial acupuncture) in Burnaby & Vancouver. Natural, non-invasive treatment to reduce wrinkles, improve skin tone, and restore balance from within.",
};

export default function CosmeticAcupunctureLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

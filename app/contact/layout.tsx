import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: '/contact',
  },
    title: "Contact Phoenix Rehab | Burnaby & Vancouver",
    description:
        "Get in touch with Phoenix Rehab in Burnaby. Call us at (778) 379-9888, email admin@phoenixrehab.ca, or visit our clinic at 100B - 3300 Boundary Road.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

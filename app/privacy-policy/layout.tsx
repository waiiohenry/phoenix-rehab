import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Phoenix Rehab Burnaby & Vancouver",
    description:
        "Learn how Phoenix Rehab collects, uses, and protects your personal information. Read our privacy policy.",
};

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

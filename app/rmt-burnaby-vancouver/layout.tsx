import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Meet Our Registered Massage Therapists (RMT) | Phoenix Rehab Burnaby & Vancouver',
    description: 'Our registered massage therapists in Burnaby provide personalized therapeutic care to relieve pain, reduce tension, and enhance physical recovery at Phoenix Rehab. Meet Anthony Artuso and Marc Fortin.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

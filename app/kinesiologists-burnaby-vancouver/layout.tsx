import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Meet Our Kinesiologists | Phoenix Rehab Burnaby & Vancouver',
    description: 'Our kinesiologists support injury recovery, movement retraining, and functional strength through guided rehabilitation programs tailored to your goals.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

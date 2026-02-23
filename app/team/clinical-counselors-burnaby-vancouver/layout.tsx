import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/team/clinical-counselors-burnaby-vancouver',
  },
    title: 'Meet Our Registered Clinical Counselors | Phoenix Rehab Burnaby & Vancouver',
    description: 'Get compassionate support with our Registered Clinical Counsellors in Burnaby. Specializing in ICBC recovery, workplace counseling, and therapy for individuals, couples, and families.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

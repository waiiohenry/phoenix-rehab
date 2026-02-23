import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/team/careers',
  },
    title: 'Careers | Join Phoenix Rehab in Burnaby & Vancouver',
    description: 'We are hiring! Join our multidisciplinary clinic. We are currently seeking Registered Massage Therapists (RMTs) and Physiotherapists to join our team.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

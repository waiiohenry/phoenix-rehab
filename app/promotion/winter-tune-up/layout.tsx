import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/promotion/winter-tune-up',
  },
    title: 'Winter Tune-Up Rehab & Physiotherapy | Burnaby & Vancouver — Phoenix Rehab',
    description: 'Reduce stiffness and prevent flare-ups this winter. Professional physiotherapy, massage, and rehab care in Burnaby & Vancouver. Extended health insurance accepted.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/team/chiropractors-burnaby-vancouver',
  },
    title: 'Meet Our Chiropractors (DC) | Phoenix Rehab Burnaby & Vancouver',
    description: 'Our licensed chiropractors deliver spinal adjustments, joint mobilization and manual therapy to relieve pain, restore alignment, and improve movement. Meet Dr. Dan Sullins.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

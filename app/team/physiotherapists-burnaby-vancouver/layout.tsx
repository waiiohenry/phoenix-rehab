import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/team/physiotherapists-burnaby-vancouver',
  },
  title: 'Meet Our Physiotherapists (PT) | Phoenix Rehab Burnaby & Vancouver',
  description: 'Our experienced physiotherapists provide personalized care for injury recovery, post-surgical rehab, chronic pain, and mobility improvement. Meet Reshma Mehta, Yves Liu, and Awnee Pandey.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

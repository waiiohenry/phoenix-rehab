import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/team/acupuncturists-tcm-burnaby-vancouver',
  },
    title: 'Meet Our Acupuncturists & TCM Practitioners | Phoenix Rehab Burnaby & Vancouver',
    description: 'Our acupuncture and Traditional Chinese Medicine team offers holistic care through acupuncture, cupping, guasha, tuina, herbal therapy, and more to support your body’s natural healing.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

import { Metadata } from 'next';
import MSPClientComponent from './MSPClientComponent';

export const metadata: Metadata = {
    title: 'MSP Premium Assistance Physiotherapy & Rehab Burnaby',
    description: 'Learn how to use your MSP Premium Assistance for partially subsidized physiotherapy, acupuncture, and chiropractic treatments at Phoenix Rehab in Burnaby.',
    openGraph: {
        title: 'MSP Premium Assistance for Rehab in Burnaby',
        description: 'Qualify for MSP Supplementary Benefits? Get partially subsidized physiotherapy, acupuncture, and chiropractic care at Phoenix Rehab.',
        url: 'https://phoenixrehab.ca/direct-billing/msp-coverage-burnaby-vancouver',
        siteName: 'Phoenix Rehab',
        images: [
            {
                url: '/images/direct-billing/direct-billing-hero.webp', // Can update later
                width: 1200,
                height: 630,
                alt: 'MSP Subsidized Physiotherapy and Rehab',
            },
        ],
        locale: 'en_CA',
        type: 'website',
    },
};

export default function MSPCoveragePage() {
    return <MSPClientComponent />;
}

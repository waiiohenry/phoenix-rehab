import { Metadata } from 'next';
import WSBCClientComponent from './WSBCClientComponent';

export const metadata: Metadata = {
    title: 'WorkSafeBC Physiotherapy & Rehab Burnaby | Phoenix Rehab',
    description: 'Pre-approved WorkSafeBC (WSBC) physiotherapy and rehabilitation treatments in Burnaby. Zero out-of-pocket costs for workplace injuries. Book your assessment today.',
    openGraph: {
        title: 'WorkSafeBC Physiotherapy & Rehab in Burnaby',
        description: 'Injured at work? Get pre-approved WorkSafeBC (WSBC) physiotherapy and rehab treatments with no out-of-pocket costs at Phoenix Rehab in Burnaby.',
        url: 'https://phoenixrehab.ca/direct-billing/worksafe-bc-rehab',
        siteName: 'Phoenix Rehab',
        images: [
            {
                url: '/images/direct-billing/direct-billing-hero.webp', // We can update this specific image later if they provide one
                width: 1200,
                height: 630,
                alt: 'WorkSafeBC Post-Injury Rehab',
            },
        ],
        locale: 'en_CA',
        type: 'website',
    },
};





export default function WorkSafeBCRehabPage() {
    return <WSBCClientComponent />;
}

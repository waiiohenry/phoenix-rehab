import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Direct Billing & Insurance Coverage | Phoenix Rehab Burnaby & Vancouver',
    description: 'Phoenix Rehab offers direct billing for ICBC, WorkSafeBC, MSP, Pacific Blue Cross, Canada Life, Sun Life, and many more extended health insurance providers. Learn about your coverage options for Physiotherapy, RMT, Chiropractic, and Acupuncture.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

import Head from 'next/head';
import OnboardingFlow from '../../components/onboarding/OnboardingFlow';

export default function OnboardingPage() {
    return (
        <>
            <Head>
                <title>Get Started | PMAction</title>
                <meta name="description" content="Begin your journey to mental wellness with PMAction's personalized onboarding." />
            </Head>
            <OnboardingFlow />
        </>
    );
}

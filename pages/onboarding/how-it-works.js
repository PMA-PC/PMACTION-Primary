// pages/onboarding/how-it-works.js
import Head from 'next/head';
import { useRouter } from 'next/router';

const HowItWorksPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <Head>
        <title>How It Works | PMAction</title>
      </Head>

      <div className="w-full max-w-2xl text-center space-y-8">
        {/* Progress Steps */}
        <div className="flex justify-center space-x-4 mb-8">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step === 2
                  ? 'bg-teal-600 text-white'
                  : step < 2
                    ? 'bg-teal-200 text-teal-800'
                    : 'bg-gray-200 text-gray-500'
                }`}
            >
              {step}
            </div>
          ))}
        </div>

        <h1 className="text-3xl font-bold text-gray-900">How It Works</h1>
        <p className="text-xl text-gray-600">
          PMAction combines AI-driven insights with proven therapeutic techniques to help you build resilience and positive mental habits.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="text-teal-600 text-2xl mb-2">1.</div>
            <h3 className="font-bold text-gray-900 mb-2">Track</h3>
            <p className="text-gray-600 text-sm">Log your mood, habits, and thoughts daily.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="text-teal-600 text-2xl mb-2">2.</div>
            <h3 className="font-bold text-gray-900 mb-2">Analyze</h3>
            <p className="text-gray-600 text-sm">Get AI-powered insights into your patterns.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="text-teal-600 text-2xl mb-2">3.</div>
            <h3 className="font-bold text-gray-900 mb-2">Improve</h3>
            <p className="text-gray-600 text-sm">Complete challenges to build better habits.</p>
          </div>
        </div>

        <div className="pt-8">
          <button
            onClick={() => router.push('/onboarding/profile')}
            className="px-8 py-3 bg-teal-600 text-white rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors shadow-lg"
          >
            Next: Set Up Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
// pages/onboarding/welcome.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const WelcomePage = () => {
  const router = useRouter();
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStep(1), 500);
    const timer2 = setTimeout(() => setAnimationStep(2), 1500);
    const timer3 = setTimeout(() => setAnimationStep(3), 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleContinue = () => {
    router.push('/onboarding/how-it-works');
  };

  let introContent = <p className="text-xl text-gray-600">Preparing your journey...</p>;
  if (animationStep >= 1) {
    introContent = <p className="text-xl text-gray-600">Preparing your journey... Done!</p>;
  }
  if (animationStep >= 2) {
    introContent = <p className="text-xl text-gray-600">Done! Your journey starts now.</p>;
  }
  if (animationStep >= 3) {
    introContent = <p className="text-xl text-teal-600 font-semibold">Ready to begin your journey!</p>;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <Head>
        <title>Welcome | PMAction</title>
        <meta name="description" content="Welcome to your mental health journey" />
      </Head>

      <div className="w-full max-w-2xl text-center space-y-8">
        {/* Step Indicator */}
        <div className="flex justify-center space-x-4 mb-12">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step === 1
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-200 text-gray-500'
                }`}
            >
              {step}
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Welcome to Your Positive Mental Action Journey
          </h1>

          <div className="h-24 flex items-center justify-center transition-all duration-500 ease-in-out">
            {introContent}
          </div>
        </div>

        <div className="pt-8">
          <button
            className={`px-8 py-3 rounded-lg text-lg font-semibold text-white transition-all duration-300 ${animationStep >= 3
                ? 'bg-teal-600 hover:bg-teal-700 shadow-lg transform hover:-translate-y-1'
                : 'bg-gray-300 cursor-not-allowed'
              }`}
            onClick={handleContinue}
            disabled={animationStep < 3}
          >
            {animationStep >= 3 ? 'Continue' : 'Loading...'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
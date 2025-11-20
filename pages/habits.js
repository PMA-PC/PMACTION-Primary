import Head from 'next/head';
import { useRouter } from 'next/router';

const HabitsPage = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <Head>
                <title>Habits | PMAction</title>
            </Head>
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={() => router.back()}
                    className="mb-6 text-teal-600 hover:text-teal-700 font-medium flex items-center"
                >
                    ← Back to Dashboard
                </button>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Habits</h1>
                <p className="text-gray-600">Build and track healthy habits.</p>
                <div className="mt-8 border-4 border-dashed border-gray-200 rounded-lg h-64 flex items-center justify-center">
                    <p className="text-gray-400">Habits content coming soon...</p>
                </div>
            </div>
        </div>
    );
};

export default HabitsPage;

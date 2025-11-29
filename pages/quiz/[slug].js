import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useApp } from '../../lib/context';
import { supabase } from '../../lib/supabaseClient';

export default function QuizPage() {
    const router = useRouter();
    const { slug } = router.query;
    const { user } = useApp();

    const [assessment, setAssessment] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [comments, setComments] = useState({}); // Store follow-up comments
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [result, setResult] = useState(null);

    useEffect(() => {
        if (router.isReady && slug) {
            fetchQuizData();
        }
    }, [router.isReady, slug]);

    const fetchQuizData = async () => {
        try {
            setLoading(true);
            // Fetch assessment details
            const { data: assessmentData, error: assessmentError } = await supabase
                .from('assessments')
                .select('*')
                .eq('slug', slug)
                .single();

            if (assessmentError) throw assessmentError;
            setAssessment(assessmentData);

            // Fetch questions
            const { data: questionsData, error: questionsError } = await supabase
                .from('assessment_questions')
                .select('*')
                .eq('assessment_id', assessmentData.id)
                .order('question_number');

            if (questionsError) throw questionsError;
            setQuestions(questionsData);

        } catch (error) {
            console.error('Error fetching quiz:', error);
            alert('Failed to load quiz. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleAnswer = (value) => {
        setAnswers(prev => ({
            ...prev,
            [currentQuestionIndex]: value
        }));
    };

    const handleComment = (text) => {
        setComments(prev => ({
            ...prev,
            [currentQuestionIndex]: text
        }));
    };

    // Parse question text to separate main question from follow-up
    const parseQuestion = (questionText) => {
        const followUpMatch = questionText.match(/\(Follow-up:(.+?)\)/);
        if (followUpMatch) {
            const mainQuestion = questionText.replace(/\(Follow-up:(.+?)\)/, '').trim();
            const followUp = followUpMatch[1].trim();
            return { mainQuestion, followUp };
        }
        return { mainQuestion: questionText, followUp: null };
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            handleSubmit();
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    };

    const calculateScore = () => {
        if (assessment.scoring_method === 'sum') {
            let total = 0;
            questions.forEach((q, index) => {
                const answerValue = answers[index];
                // Assuming answerValue is the numeric value from the option
                // For Likert: 0, 1, 2, 3
                total += parseInt(answerValue) || 0;
            });
            return total;
        }
        return 0; // Default for non-scored
    };

    const getInterpretation = (score) => {
        if (!assessment.interpretation_ranges || !assessment.interpretation_ranges.ranges) return null;

        const ranges = assessment.interpretation_ranges.ranges;
        const interpretation = ranges.find(r => score >= r.min && score <= r.max);
        return interpretation;
    };

    const handleSubmit = async () => {
        try {
            setSubmitting(true);
            const score = calculateScore();
            const interpretationObj = getInterpretation(score);

            const resultData = {
                score,
                interpretation: interpretationObj ? interpretationObj.interpretation : 'Completed'
            };

            // Only save to database if user is logged in
            if (user) {
                const submission = {
                    user_id: user.id,
                    assessment_id: assessment.id,
                    responses: { answers, comments }, // Include both answers and comments
                    total_score: score,
                    interpretation: resultData.interpretation,
                    is_flagged_crisis: false // Implement crisis logic if needed
                };

                const { error } = await supabase
                    .from('user_assessments')
                    .insert([submission]);

                if (error) throw error;
            } else {
                // Show a message that results won't be saved
                console.log('Results not saved - user not logged in');
            }

            setResult(resultData);
            setCompleted(true);

        } catch (error) {
            console.error('Error submitting quiz:', error);
            alert('Failed to submit results. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    if (!assessment) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900">Quiz Not Found</h1>
                    <button onClick={() => router.push('/assessments')} className="mt-4 text-indigo-600 hover:underline">
                        Back to Assessments
                    </button>
                </div>
            </div>
        );
    }

    if (completed) {
        return (
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-indigo-600 px-6 py-8 text-center">
                        <h2 className="text-3xl font-bold text-white">Assessment Completed</h2>
                        <p className="mt-2 text-indigo-100">Thank you for checking in with yourself.</p>
                    </div>
                    <div className="px-6 py-8">
                        <div className="text-center mb-8">
                            {assessment.scoring_method === 'sum' && (
                                <>
                                    <p className="text-sm text-gray-500 uppercase tracking-wide">Your Score</p>
                                    <p className="text-5xl font-bold text-indigo-600 mt-2">{result.score}</p>
                                </>
                            )}
                            <div className="mt-6 p-6 bg-gray-50 rounded-xl border border-gray-100">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Interpretation</h3>
                                <p className="text-gray-700 leading-relaxed">{result.interpretation}</p>
                            </div>
                            {!user && (
                                <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                    <p className="text-sm text-yellow-800">
                                        <strong>Note:</strong> Your results were not saved because you're not logged in.
                                        <a href="/login" className="underline ml-1">Log in</a> to save your assessment history.
                                    </p>
                                </div>
                            )}
                        </div>
                        <div className="flex justify-center">
                            <button
                                onClick={() => router.push('/assessments')}
                                className="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                Back to Assessments
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <Head>
                <title>{assessment.name} | PMAction</title>
            </Head>

            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                    <button
                        onClick={() => router.back()}
                        className="text-gray-500 hover:text-gray-900 font-medium flex items-center"
                    >
                        ← Cancel
                    </button>
                    <span className="text-sm font-medium text-gray-500">
                        Question {currentQuestionIndex + 1} of {questions.length}
                    </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
                    <div
                        className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                {/* Question Card */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-8">
                        {(() => {
                            const { mainQuestion, followUp } = parseQuestion(currentQuestion.question_text);
                            return (
                                <>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 leading-snug">
                                        {mainQuestion}
                                    </h2>

                                    <div className="space-y-4 mb-6">
                                        {currentQuestion.response_options.map((option, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => handleAnswer(option.value)}
                                                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${answers[currentQuestionIndex] === option.value
                                                    ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
                                                    : 'border-gray-100 hover:border-indigo-200 hover:bg-gray-50 text-gray-700'
                                                    }`}
                                            >
                                                <div className="flex items-center">
                                                    <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center mr-4 ${answers[currentQuestionIndex] === option.value
                                                        ? 'border-indigo-600 bg-indigo-600'
                                                        : 'border-gray-300'
                                                        }`}>
                                                        {answers[currentQuestionIndex] === option.value && (
                                                            <div className="h-2.5 w-2.5 rounded-full bg-white"></div>
                                                        )}
                                                    </div>
                                                    <span className="font-medium">{option.label}</span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>

                                    {followUp && (
                                        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                            <p className="text-sm font-semibold text-gray-700 mb-3">
                                                Follow-up: {followUp}
                                            </p>
                                            <textarea
                                                value={comments[currentQuestionIndex] || ''}
                                                onChange={(e) => handleComment(e.target.value)}
                                                placeholder="Your thoughts..."
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none text-sm"
                                                rows={3}
                                            />
                                        </div>
                                    )}
                                </>
                            );
                        })()}
                    </div>

                    <div className="bg-gray-50 px-8 py-6 flex justify-between items-center border-t border-gray-100">
                        <button
                            onClick={handlePrevious}
                            disabled={currentQuestionIndex === 0}
                            className={`text-gray-600 font-medium hover:text-gray-900 ${currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={answers[currentQuestionIndex] === undefined}
                            className={`px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-lg shadow-sm hover:bg-indigo-700 transition-all ${answers[currentQuestionIndex] === undefined
                                ? 'opacity-50 cursor-not-allowed'
                                : 'transform hover:-translate-y-0.5'
                                }`}
                        >
                            {currentQuestionIndex === questions.length - 1 ? (submitting ? 'Submitting...' : 'Complete') : 'Next Question'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

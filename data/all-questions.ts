import { Question } from './types';
import { baseQuestions } from './questions';
import { clinicalQuestions } from './clinical-questions';
import { raadsrQuestions } from './raads-r';
import { catqQuestions } from './cat-q';
import { amenQuestions } from './amen-adhd';
import { executiveFunctionQuestions } from './executive-function';
import { adhdEmotionalQuestions } from './adhd-emotional';

export const questions: Question[] = [
    ...clinicalQuestions, // Part 1 (ASRS)
    ...raadsrQuestions,   // Part 1 (RAADS-R)
    ...amenQuestions,     // Part 2 (Amen Types)
    ...adhdEmotionalQuestions, // Part 2 (Emotional)
    ...baseQuestions.map(q => ({ ...q, section: 3 })), // Part 3 (Base)
    ...catqQuestions,     // Part 4 (CAT-Q)
    ...executiveFunctionQuestions // Part 5 (EF + Reflections)
];

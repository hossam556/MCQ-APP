import * as actionTypes from './actionTypes';

export const shuffleQuestions = (questions) => {
    return {
        type : actionTypes.SHUFFLE_QUESTIONS ,
        questions : questions
    }
}
export const trackCorrect = () => {
    return {
        type : actionTypes.TRACK_CORRECT ,
    }
}
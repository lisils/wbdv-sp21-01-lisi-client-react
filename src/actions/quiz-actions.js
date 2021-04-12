import quizService from '../services/quiz-service';

export const FIND_ALL_QUIZZES = "FIND_ALL_QUIZZES";

export const findAllQuizzes = (dispatch) => {
    quizService.findAllQuizzes().then((quizzes)=> {
        dispatch({
            type: FIND_ALL_QUIZZES,
            quizzes: quizzes
        })
    })
}

export const quizActions = {
    findAllQuizzes
}

export default quizActions;

import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {connect} from "react-redux";
import quizActions from "../actions/quiz-actions";

const QuizzesList = ({quizzes,
                         findAllQuizzes
                     }) => {
    const {courseId} = useParams();
    useEffect(() => {findAllQuizzes()}, [findAllQuizzes])

    return(
        <div>
            <h2>Quizzes ({quizzes.length})</h2>
            <ul>
                {
                    quizzes.map((quiz)=> {
                        return (
                            <li>
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                    {quiz.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const stmp = state => {
    return {
        quizzes: state.quizReducer.quizzes
    }
}

const dtmp = (dispatch) => ({
    findAllQuizzes: () => {
        quizActions.findAllQuizzes(dispatch)
    }
})

export default connect(stmp, dtmp) (QuizzesList)


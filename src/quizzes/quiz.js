import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Question from "../questions/question";
import QuestionService from "../services/question-service";
import QuizService from "../services/quiz-service";

const Quiz = () => {
    const {quizId} = useParams();
    const [questions, setQuestions] = useState([]);

    const [quiz, setQuiz] = useState([]);
    const [curScore, setCurScore] = useState(0);
    const [questionsWithAns, setQuestionsWithAns] = useState([]);
    const [isGraded, setIsGraded] = useState(false);
    const [attempts, setAttempts] = useState([]);
    const [showAttemptHistory, setShowAttemptHistory] = useState(false);
    const [attemptNum, setAttemptNum] = useState(0);

    useEffect(() => {
        QuestionService.findQuestionsForQuiz(quizId).then((questions) => {
            setQuestions(questions)
            setQuestionsWithAns(questions)
        })
        QuizService.findQuizById(quizId).then((quiz) => setQuiz(quiz))

    }, [quizId])

    useEffect(() => {
        QuizService.findAttemptsByQuizId(quizId).then((attempts) => setAttempts(attempts))
    }, [quizId])

    return (
        <div className="container">
            <h3>{quiz.title} ({questions.length})</h3>
            <ul className='list-group'>
                {
                    questions.map((question) => {
                        return (
                            <li>
                                <Question
                                    question={question}
                                    isGraded={isGraded}
                                    setQuestionsWithAns={setQuestionsWithAns}
                                />
                            </li>
                        )
                    })
                }
                <li className="list-group-item">
                    {
                        isGraded &&
                        <span>Score: {curScore}</span>
                    }
                    <button
                        onClick={()=> {
                            setIsGraded(true)
                            if (!isGraded) {
                                QuizService.submitQuiz(quizId, questionsWithAns)
                                    .then(attempt => setCurScore(attempt.score))
                            }
                        }}
                        className="btn btn-success float-right"
                        type = 'button'
                    >
                        Submit
                    </button>
                </li>
                <li className="list-group-item">
                    <button
                        onClick={()=> {
                            setShowAttemptHistory(!showAttemptHistory)
                        }}
                        className="btn btn-primary float-right"
                        type = 'button'
                    >
                        Show History
                    </button>
                </li>

                {
                    showAttemptHistory &&
                    attempts.map((attempt) => {
                        // setAttemptNum(attemptNum + 1)
                        return (
                            <li className="list-group-item">
                                Past Attempt Score: {attempt.score}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Quiz;

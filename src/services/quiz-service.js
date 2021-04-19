const BASE_URL = "https://cs5610wbdv-server-node.herokuapp.com/api"

export const findAllQuizzes = () => {
    return (fetch(`${BASE_URL}/quizzes`)
        .then(response => response.json()))
}

export const findQuizById = (qid) => {
    return fetch(`${BASE_URL}/quizzes/${qid}`).then(response => response.json())
}

export const submitQuiz = (quizId, questions) => {
    return fetch(`${BASE_URL}/quizzes/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

export const findAttemptsByQuizId = (quizId) => {
    return fetch(`${BASE_URL}/quizzes/${quizId}/attempts`)
        .then(response=>response.json())
}

const api = {
    findAllQuizzes, submitQuiz, findQuizById, findAttemptsByQuizId
}

export default api

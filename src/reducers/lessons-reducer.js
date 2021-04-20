const initialState = {
    lessons: [
        // {_id:"123", title: "Lesson 1"},
        // {_id:"456", title: "Lesson 2"},
        // {_id:"789", title: "Lesson 3"}
    ]
}

const lessonReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_LESSON":
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
        case "FIND_LESSONS":
            return {
                ...state,
                lessons: action.lessons
            }
        case "DELETE_LESSON":
            return {
                ...state,
                lessons: state.lessons.filter(lesson => {
                    if (lesson._id !== action.deleteItem._id) {
                        return true
                    } else {
                        return false
                    }
                })
            }
        case "UPDATE_LESSON":
            return {
                ...state,
                lessons: state.lessons.map(lesson => {
                    if (lesson._id === action.updatedLesson._id) {
                        return action.updatedLesson
                    } else {
                        return lesson
                    }
                })
            }
        case "SELECT_LESSON":
            return {
                ...state,
                selected: action.updatedLesson._id
            }
        case "EMPTY_LESSON":
            return {
                ...state,
                lessons:[]
            }
        default:
            return state
    }
}

export default lessonReducer
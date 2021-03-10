import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../services/lesson-service'

const LessonTabs = (
    {
        lessons=[],
        findLessonsForModule,
        createLessonForModule,
        updateLesson,
        deleteLesson,
        selectLesson,
        emptyLesson
    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        } else {
            emptyLesson(moduleId)
        }
    }, [findLessonsForModule, moduleId])
    return(
        <div>
            <ul className="nav nav-tabs">
                {
                    lessons.map(lesson =>
                        <li className="nav-item">
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                item={lesson}
                                updateItem={updateLesson}
                                deleteItem={deleteLesson}
                                selectItem={selectLesson}
                                isActive={lesson._id === lessonId ? "active" : ""}
                            />
                        </li>
                    )
                }
                <li>
                    <i onClick={() => createLessonForModule(moduleId)} className="fas fa-plus"/>
                </li>
            </ul>

        </div>)}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS",
                lessons
            }))
    },
    createLessonForModule: (moduleId) => {
        console.log("CREATE LESSON FOR MODULE: " + moduleId)
        lessonService
            .createLessonForModule(moduleId, {title: "New Lesson"})
            .then(lesson => dispatch({
                type: "CREATE_LESSON",
                lesson
            }))
    },
    deleteLesson: (lessonToDelete) => {
        lessonService.deleteLesson(lessonToDelete._id).then(
            (status) => dispatch({ type: 'DELETE_LESSON', deleteItem: lessonToDelete })
        )
    },
    updateLesson: (lesson) =>
        lessonService.updateLesson(lesson._id, lesson)
            .then(status => dispatch({
                type: "UPDATE_LESSON",
                updatedLesson: lesson
            })),
    selectLesson: (lesson) =>
        dispatch({
            type: "SELECT_LESSON",
            updatedLesson: lesson
        }),

    emptyLesson: (moduleId) => {
        dispatch({
            type: "EMPTY_LESSON",
        })
        lessonService.findLessonsForModule(moduleId).then(lessons => {
            lessons.map(lesson =>
                lessonService.deleteLesson(lesson._id))
        })}
})

export default connect(stpm, dtpm)(LessonTabs)
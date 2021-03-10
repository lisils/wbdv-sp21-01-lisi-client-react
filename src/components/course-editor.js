import React from 'react';
import {Link, useParams} from "react-router-dom";
import moduleReducer from "../reducers/modules-reducer";
import lessonReducer from "../reducers/lessons-reducer";
import topicReducer from "../reducers/topic-reducer";
import courseReducer from "../reducers/course-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import CourseEditorNavbar from "./course-editor-navbar"

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    courseReducer: courseReducer
})

const store = createStore(reducer)



const CourseEditor = ({history}) => {
    // const {courseId, moduleId} = useParams();

    return (
        <Provider store={store}>
            <CourseEditorNavbar/>
            <div>
                <br/>

                <div className="row">
                    <div className="col-4">
                        <ModuleList/>
                    </div>
                    <div className="col-8">
                        <LessonTabs/>
                        <br/>
                        <TopicPills/>
                    </div>
                </div>
            </div>
        </Provider>)}

export default CourseEditor
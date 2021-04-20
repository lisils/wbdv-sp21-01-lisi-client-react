import React, {useState} from 'react';
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
import WidgetList from "./course-editor/widgets/widget-list";
import widgetReducer from "../reducers/widget-reducer";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    courseReducer: courseReducer,
    widgetReducer: widgetReducer
})

const store = createStore(reducer)


// const CourseEditor = ({props}) =>
const CourseEditor = ({history}) => {
    const {courseId, moduleId} = useParams();


    return (
        <Provider store={store}>
            <CourseEditorNavbar/>
    <div>
        <br/>
        {/*<h2>*/}
        {/*    <Link to="/courses/table">*/}
        {/*        <i className="fas fa-arrow-left"></i>*/}
        {/*    </Link>*/}
        {/*    Course Editor*/}
        {/*    <i onClick={() => history.goBack()} className="fas fa-times float-right" ></i>*/}
        {/*    <Link to="">*/}
        {/*        <i className="fas fa-home float-right"></i>*/}
        {/*    </Link>*/}
        {/*</h2>*/}
        {/*<hr/>*/}
        <div className="row">
            <div className="col-3">
                <ModuleList/>
            </div>
            <div className="col-9">
                <LessonTabs/>
                <hr/>
                <TopicPills/>
                <hr/>
                <WidgetList/>
            </div>
        </div>
    </div>
    </Provider>)}

export default CourseEditor
import React, {useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import CourseService from "../services/course-service"
import {connect, Provider} from "react-redux"


const CourseEditorNavbar = ({course, findCourseById}) => {
    const {layout, courseId, moduleId} = useParams();

    useEffect(() => {
        findCourseById(courseId)
    }, [findCourseById, courseId])

    return (
        <div>
            <nav className="navbar row bg-primary sticky-top">
                <div className="col-11">
                    <h2>
                        <Link to={`/courses/${layout}`}>
                            <i className="fas fa-arrow-left" style={{color: 'white'}}></i>
                        </Link>
                        <label className="col-form-table  text-white h2">
                            Course Editor: {course.title}
                        </label>
                    </h2>
                </div>
                <h2>
                    {/*<i onClick={() => history.goBack()} className="fas fa-times float-right" ></i>*/}
                    <Link to="">
                        <i className="fas fa-home float-right" style={{color: 'red'}}></i>
                    </Link>
                </h2>
                <hr/>
            </nav>
            <br/>

        </div>
    )
}
const stpm = state => {
    return {
        course: state.courseReducer.course
    }
}

const dtpm = dispatch => ({
    findCourseById: (courseId) => {
        CourseService.findCourseById(courseId)
            .then(theCourse => dispatch({
                type: "FIND_COURSE",
                course: theCourse
            }))
    }
})


export default connect(stpm, dtpm)(CourseEditorNavbar)
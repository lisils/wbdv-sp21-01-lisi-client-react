import React from 'react';
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Link, Route} from "react-router-dom";
import courseService, {updateCourse} from "../services/course-service";
import './course-manager-style.css';

class CourseManager extends React.Component {
    state = {
        courses: [],
        newCourse: {
        title: "",
        owner: "me",
        lastModified:"6:45 PM"
        }
    }

    onCourseChange = (e) => {
        this.setState({
            newCourse: {
                title: e.target.value,
                owner: "me",
                lastModified:new Date().toLocaleDateString()
            }
        })
    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(c => c._id === course._id ? course : c)
            })))
    }

    componentDidMount = () =>
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))


    addCourse = (event) => {
        let courseToAdd = this.state.newCourse
        if (this.state.newCourse.title.trim() === "") {
            courseToAdd={
                title: "New Course",
                owner: "me",
                lastModified: new Date().toLocaleDateString()
            }
        }

        courseService.createCourse(courseToAdd)
            .then(course => this.setState(
                (prevState) => ({
                ...prevState,
                courses: [
                    ...prevState.courses,
                    course
                ]
            })))
        this.setState({newCourse: {title: "", owner: "me",
                lastModified:new Date().toLocaleDateString()}})
        event.preventDefault()
    }

    deleteCourse = (courseToDelete) => {

        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState)=>{
                    let nextState = {}
                    nextState.courses =
                        prevState.
                            courses
                                .filter(course => course !== courseToDelete)
                    return nextState
                })
            })
    }


    render() {
        return(
            <div>
                {/*<h1>Course Manager</h1>*/}
                {/*<button onClick={this.addCourse}>Add Course</button>*/}
                <body className="bg-light">
                <nav className="navbar row bg-primary sticky-top">
                    <div className="col-md-3">
                        <a href="/">
                            <i className="fas fa-bars fa-2x " style={{color: 'white'}}></i>
                        </a>
                        <label></label>
                        <label></label>
                        <label></label>
                        <label className="col-form-table  text-white h2">
                            Course Manager
                        </label>
                    </div>

                    <div className="col-md-6">
                        <input className=" homepage-input font-italic font-weight-bold text-white"
                               type="text"
                               size="60"
                               placeholder="New Course Title"
                               id="wbdv-new-course-title"
                               onChange={this.onCourseChange}
                               value={this.state.newCourse.title}
                        />
                    </div>
                    <div className="col-md-3">
                        <a href="#">
                        <i onClick={this.addCourse}
                           className="fas fa-plus-circle fa-3x col-md-auto"
                           style={{color: 'red'}}>
                        </i>
                        </a>

                    </div>

                </nav>

                </body>

                <Route path="/courses/table" exact={true}>
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>

                <Route path="/courses/grid" exact={true}>
                <CourseGrid
                    deleteCourse={this.deleteCourse}
                    updateCourse={this.updateCourse}
                    courses={this.state.courses}/>
                </Route>

                {/*<Route path={[*/}
                {/*    "/courses/editor/:courseId",*/}
                {/*    "/courses/editor/:courseId/:moduleId",*/}
                {/*    "/courses/editor/:courseId/:moduleId/:lessonId"]}*/}
                {/*       exact={true}*/}
                {/*       render={(props) => <CourseEditor {...props}/>}>*/}
                {/*</Route>*/}

                {/*<a href="#">*/}
                {/*    <i onClick={this.addCourse}*/}
                {/*       className="fas fa-plus-circle fa-4x float-right"*/}
                {/*       style={{color: 'red'}}></i>*/}
                {/*</a>*/}
            </div>
        )
    }
}


export default CourseManager
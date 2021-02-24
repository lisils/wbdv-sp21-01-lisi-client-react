import React, {useState} from 'react';
import {Link} from "react-router-dom";

const CourseCard = ({course, updateCourse, deleteCourse}) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(course.title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return (
    <div className="card col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="card">
            <img src="https://i.ibb.co/3Y5q2j7/start-small.png"
                 alt="start-small"
                 border="0"/>
            <div className="card-body">
                {
                    !editing &&
                        <Link to="/editor" className="card-title">{course.title}</Link>
                }
                {
                    editing &&
                    <input
                    onChange={(event)=> setNewTitle(event.target.value)}
                    value={newTitle}
                    className="form-control"/>
                }
                <p className="card-text">Some description.</p>

                <Link to="/editor" className="btn btn-primary">
                    {course.title}
                </Link>
                {/*<i className="fas fa-trash"></i>*/}
            </div>
            <div className="card-footer">
                <div className="float-right">
                    {!editing && <i onClick={() => setEditing(true)}
                    className="fas fa-edit"
                    style={{color: 'blue'}}
                    />}
                    {editing && <i onClick={() => (deleteCourse(course), setEditing(false))} className="fas fa-trash"
                    style={{color: 'red'}}
                    />}
                    {editing && <i onClick={() => saveTitle()}
                    className="fas fa-check" style={{color: 'green'}} />}
                </div>
            </div>
        </div>
    </div>)
}
export default CourseCard
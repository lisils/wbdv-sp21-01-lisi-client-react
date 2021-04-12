import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {updateCourse} from "../services/course-service";

const CourseRow = (
    {deleteCourse,
        updateCourse,
        title,
        owner,
        lastModified,
        course
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)
    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title:newTitle
        }
        updateCourse(newCourse)
    }

    return (<tr>
        <td> </td>
        <td  scope="col-2" style={{width: '25%'}}>
            <i className="fas fa-file-alt col-md-auto text-primary"/>
            {
                !editing &&
                <Link to={`/courses/table/edit/${course._id}`}>
                    {title}
                </Link>}
            {editing && <input
                onChange={(event)=> setNewTitle(event.target.value)}
                value={newTitle}
                className="form-control"/>}
        </td>

        <td className="d-none d-md-table-cell" scope="col-2" style={{width: '25%'}}>{owner}</td>
        <td className="d-none d-lg-table-cell">{lastModified}</td>
        <td>
            <Link  to={`/courses/${course._id}/quizzes`}>
                Quizzes
            </Link>
        </td>
        <td >

            {!editing && <i onClick={() => setEditing(true)}
                            className="fas fa-edit"
                            style={{color: '#0275d8'}}
                        />}
            {editing && <i onClick={() => (deleteCourse(course),
                            setEditing(false))} className="fas fa-trash"
                            style={{color: '#d9534f'}}
                        />}
            {editing && <i onClick={() => saveTitle()}
                            className="fas fa-check" style={{color: '#5cb85c'}}
                        />}
        </td>
    </tr>)
}

export default CourseRow

import React, {useState} from 'react';
import {Link} from "react-router-dom";

const CourseRow = (
    {
        deleteCourse,
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

        return (
            <tr>
            <td  scope="col-2" style={{width: '25%'}}>
                <i className="fas fa-file-alt col-md-auto text-primary"/>
                {
                    !editing &&
                    <Link to="/editor">
                        {title}
                </Link>
                }
                {
                    editing &&
                    <input
                    onChange={(event)=> setNewTitle(event.target.value)}
                    value={newTitle}
                    className="form-control"/>
                }
            </td>

            <td className="d-none d-md-table-cell" scope="col-2" style={{width: '25%'}}>{owner}</td>
            <td className="d-none d-lg-table-cell">{lastModified}</td>
            <td >
                {
                    !editing &&
                    <i onClick={() => setEditing(true)}
                    className="fas fa-edit"
                    style={{color: 'blue'}}
                    />
                }
                {
                    editing &&
                    <i onClick={() => (deleteCourse(course),
                    setEditing(false))} className="fas fa-trash" style={{color: 'red'}}
                    />
                }
                {
                    editing &&
                    <i onClick={() => saveTitle()}
                    className="fas fa-check" style={{color: 'green'}
                }
                />
                }
            </td>
        </tr>)
}

export default CourseRow

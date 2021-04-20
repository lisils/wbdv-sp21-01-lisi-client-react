import React from 'react'
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
const TopicPills = () => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams()
    return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <Link href={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/ABC123`} className="nav-link">
                    Topic 1
                </Link>
                <Link href={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/ABC234`} className="nav-link">
                    Topic 2
                </Link>
            </li>
        </ul>
    )
}

export default TopicPills
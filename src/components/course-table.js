import React from 'react';
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable
    extends  React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col-4"
                            className="font-weight-bold" style={{color: 'grey'}}>
                            Title
                        </th>
                        <th scope="col-2"
                            className="font-weight-bold d-none d-md-table-cell" style={{color: 'grey'}}>
                            Owned By
                        </th>
                        <th scope="col-2"
                            className="font-weight-bold d-none d-lg-table-cell" style={{color: 'grey'}}>
                            Last modified
                        </th>
                        <th scope="col-1">
                            <a href="#">
                                <Link to="/courses/grid">
                                    <i className="fas fa-2x fa-th" style={{color: 'grey'}}/>
                                </Link>
                            </a>
                            <a href="#">
                                <i className="fas fa-sort-alpha-up fa-2x " style={{color: 'gray'}}/>
                            </a>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.courses.map((course)=>
                            <CourseRow
                                updateCourse={this.props.updateCourse}
                                deleteCourse = {this.props.deleteCourse}
                                key={course._id}
                                course={course}
                                title={course.title}
                                owner={course.owner}
                                lastModified={course.lastModified}
                            />)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
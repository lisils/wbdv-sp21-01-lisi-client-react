import React from 'react';
import CourseRow from "./course-row";
import {Link} from "react-router-dom";
import {updateCourse} from "../services/course-service";

export default class CourseTable
    extends  React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return (
            <div>
                {/*<h2>Course Table</h2>*/}

                <table className="table table-hover" style={{padding: 0, margin: 0}}>
                    <thead>
                    <tr>
                        <th style={{width:'15%'}}></th>
                        <th scope="col-4"
                            className="font-weight-bold" style={{color: '#808080', width:'25%', font:'15px'}}>
                            Title
                        </th>
                        <th scope="col-2"
                            className="font-weight-bold d-none d-md-table-cell" style={{color: '#808080', width:'20%', font:'15px'}}>
                            Owned By
                        </th>
                        <th scope="col-2"
                            className="font-weight-bold d-none d-lg-table-cell" style={{color: '#808080', width:'15%'}}>
                            Last modified
                        </th>
                        <th scope="col-1">
                            <a href="#">
                                <Link to="/courses/grid">
                                    <i className="fas fa-2x fa-th" style={{color:'#808080'}}></i>
                                </Link>
                            </a>

                            <label></label>
                            <label></label>
                            <label></label>
                            <label></label>
                            <label></label>
                            <a href="#">
                                <i className="fas fa-sort-alpha-down fa-2x " style={{color:'#808080'}}></i>
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

                {/*<table className="table">*/}
                {/*    <tbody>*/}

                {/*    {*/}
                {/*        this.props.courses.map((course, ndx)=>*/}
                {/*            <CourseRow*/}
                {/*                updateCourse={this.props.updateCourse}*/}
                {/*                deleteCourse = {this.props.deleteCourse}*/}
                {/*                key={ndx}*/}
                {/*                course={course}*/}
                {/*                title={course.title}*/}
                {/*                owner={course.owner}*/}
                {/*                lastModified={course.lastModified}*/}
                {/*            />)*/}
                {/*    }*/}
                {/*    </tbody>*/}
                {/*</table>*/}
            </div>
        )
    }
}
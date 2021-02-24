import React from 'react';
import {Link} from "react-router-dom";

const CourseEditor = ({history}) =>
    <div>
        <nav className="navbar navbar-dark row">
            <Link to="/courses/table">
                <i className="fas fa-arrow-left fa-2x" style={{color: "red"}}/>
            </Link>

            <label className="col-form-label col-md-3" >
                Course Editor
            </label>
            <i onClick={() => history.goBack()}
                className="fas fa-times float-right fa-2x"
                style={{color: "red"}}/>
        </nav>

        <div className="container-fluid row">
            <div className="row">
                <nav className="col-md-3 d-none d-md-block ">
                    <div>
                        <ul className="nav flex-column">
                            <div className="container">
                                <label className="row"/>
                                <label className="row"/>
                                <li className="nav-item">
                                    <button type="button" className="btn btn-secondary btn-lg col-md-12">
                                        <div>
                                            <div className="row">
                                                <i className="offset-1 col col-8 align-middle">
                                                    Module 1
                                                </i>
                                                <i className="fas fa-trash-alt col-md-auto" style={{color: 'blue'}}/>
                                            </div>
                                        </div>
                                    </button>
                                </li>
                                <label className="row"/>
                                <label className="row"/>

                                <li className="nav-item wbdv-module-list">
                                    <button type="button" className="btn btn-secondary btn-lg col-md-12">
                                        <div className="row">
                                            <i className="offset-1 col col-8 align-middle">
                                                Module 2
                                            </i>
                                            <i className="fas fa-trash-alt col-md-auto" style={{color: 'blue'}}/>
                                        </div>
                                    </button>
                                </li>
                                <label className="row"/>
                                <label className="row"/>
                                <li className="nav-item wbdv-module-list">
                                    <button type="button" className="btn btn-secondary btn-lg col-md-12">
                                        <div className="row">
                                            <i className="offset-1 col col-8 align-middle">
                                                Module 3
                                            </i>
                                            <i className="fas fa-trash-alt col-md-auto" style={{color: 'blue'}}/>
                                        </div>
                                    </button>
                                </li>
                                <label className="row"/>
                                <label className="row"/>
                                <li className="nav-item wbdv-module-list">
                                    <button type="button" className="btn btn-secondary btn-lg col-md-12">
                                        <div className="row">
                                            <i className="offset-1 col col-8 align-middle">
                                                Module 4
                                            </i>
                                            <i className="fas fa-trash-alt col-md-auto" style={{color: 'blue'}}/>
                                        </div>
                                    </button>
                                </li>
                                <i className="fas fa-plus-circle offset-10 fa-2x col-md-auto" style={{color: 'red'}}/>
                            </div>
                        </ul>
                    </div>
                </nav>
                <div className="row col">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <label className="row"/>
                                <button type="button" className="btn btn-secondary">Topic 1</button>
                                <i className="col col-md-1"/>
                                <button type="button" className="btn btn-secondary">Topic 2</button>
                                <i className="col col-md-1"/>
                                <button type="button" className="btn btn-secondary">Topic 3</button>
                                <i className="col col-md-1"/>
                                <button type="button" className="btn btn-secondary">Topic 4</button>
                                <i className="col col-md-1"/>
                                <i className="fas fa-plus-circle fa-3x align-middle" style={{color: 'red'}}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p style={{font:'50px'}}> <strong> The CourseEditor is meant to be static for now.</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default CourseEditor
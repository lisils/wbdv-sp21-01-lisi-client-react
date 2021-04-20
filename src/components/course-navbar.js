// import React from 'react';
//
// export default class courseNavbar
//     extends React.Component {
//
//     constructor(props) {
//         super(props)
//         console.log(props)
//     }
//
//     onCourseChange = (e) => {
//         this.setState({
//             newCourse: {
//                 title: e.target.value,
//                 owner: "me",
//                 lastModified:"6:45 PM"
//             }
//         })
//     }
//
//     render() {
//         return (
//         <body className="bg-light">
//         <nav className="navbar bg-primary sticky-top">
//             <div className="col-md-3">
//                 <a href="/index">
//                     <i className="fas fa-bars fa-2x " style={{color: 'white'}}></i>
//                 </a>
//                 <label></label>
//                 <label></label>
//                 <label></label>
//                 <label className="col-form-table  text-white h2">
//                     Course Manager
//                 </label>
//             </div>
//
//             <div className="col-md-6">
//                 <input className=" homepage-input font-italic font-weight-bold text-white"
//                        type="text"
//                        size="60"
//                        placeholder="New Course Title"
//                        id="wbdv-new-course-title"
//                        onChange={this.props.onCourseChange}
//                        value={this.props.newCourse.title}
//                 />
//             </div>
//             {/*<div className="col-md-3">*/}
//             {/*    <a href="#">*/}
//             {/*        <i onClick={this.props.addCourse}*/}
//             {/*           className="fas fa-plus-circle fa-3x col-md-auto"*/}
//             {/*           style={{color: 'red'}}>*/}
//             {/*        </i>*/}
//             {/*    </a>*/}
//             {/*</div>*/}
//         </nav>
//         </body>
//         )
//     }
// }


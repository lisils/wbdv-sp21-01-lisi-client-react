import  React, {useState, useEffect} from 'react';
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetActions, {updateWidget} from "../../../actions/widget-actions";
import {connect} from "react-redux";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

const WidgetList = ({
    widgets = [],
    createWidget,
    deleteWidget,
    updateWidget,
    findWidgetsForTopic
}) => {

    //  TODO: move state management to widgets-reducer.js
    // const {topicId} = useParams();
    // const [widgets, setWidgets] = useState([]);
    // const [editingWidget, setEditingWidget] = useState([]);
    //
    // useEffect(() => {
    //      TODO: move server communication to widgets-service.js
    //     // fetch("http://localhost:8080/api/widgets")
    //     fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
    //         .then(response => response.json())
    //         .then(widgets => setWidgets(widgets))
    // }, [topicId])
    //
    // const createWidgetForTopic=() => {
    //      TODO: move server communication to widgets-service.js
    //     fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
    //         method: "POST",
    //         body: JSON.stringify({type: "HEADING", size: 1, text: "NEW WIDGET"}),
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     }).then(response => response.json())
    //         .then(actualWidget => {
    //         setWidgets(widgets => ([...widgets, actualWidget]))
    //     })
    // }
    //
    // const deleteWidget = (wid) => {
    //     fetch(`http://localhost:8080/api/widgets/${wid}`, {
    //         method: "DELETE",
    //     }).then(response => {
    //         setWidgets((widgets) => widgets.filter(w => w.id !== wid))
    //     })
    //
    // }
    // const updateWidget = (wid, widget) => {
    //     fetch(`http://localhost:8080/api/widgets/${wid}`, {
    //         method: "PUT",
    //         body: JSON.stringify(widget),
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     }).then(response => {
    //         setWidgets((widgets) => widgets.map(w => w.id !== wid ? w : widget))
    //         setEditingWidget([])
    //     })
    // }
    const {topicId} = useParams();
    useEffect(() => {findWidgetsForTopic(topicId)}, [findWidgetsForTopic, topicId])


    return (
        <div>
            <i onClick={() => createWidget(topicId)} className="fas fa-plus fa-2x float-right"></i>
            <h2>Widget List({widgets.length})</h2>

            <ul className="list-group">

                {widgets.map(widget =>
                    <li className="list-group-item" key={widget.id}>
                        {/*{*/}
                        {/*    editingWidget.id === widget.id &&*/}
                        {/*        <>*/}
                        {/*            <i onClick={()=>deleteWidget(widget.id)} className="fas fa-2x fa-trash float-right"></i>*/}
                        {/*            <i onClick={()=> {updateWidget(widget.id, editingWidget)}}*/}
                        {/*               className="fas fa-2x fa-check float-right"></i>*/}
                        {/*        </>*/}
                        {/*}*/}
                        {/*{*/}
                        {/*    editingWidget.id !== widget.id &&*/}
                        {/*        <>*/}
                        {/*            <i onClick={()=>setEditingWidget(widget)} className="fas fa-2x fa-cog float-right"></i>*/}
                        {/*        </>*/}
                        {/*}*/}
                        {/*<h1>{widget.id}</h1>*/}
                        {/*<h1>{widget.type}</h1>*/}
                        {
                            widget.type === "HEADING" &&
                        <HeadingWidget
                            updateWidget={updateWidget}
                            deleteWidget={deleteWidget}
                            widget={widget}/>
                        }

                        {
                            widget.type === "PARAGRAPH" &&
                        <ParagraphWidget
                            updateWidget={updateWidget}
                            deleteWidget={deleteWidget}
                            widget={widget}/>
                        }

                        {
                            widget.type === "LIST" &&
                            <ListWidget
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                                widget={widget}/>
                        }
                        {
                            widget.type === "IMAGE" &&
                            <ImageWidget
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                                widget={widget}/>
                        }
                    </li>
                )}
            </ul>
        </div>
    )
}

const stmp = state => {
    return {
        widgets: state.widgetReducer.widgets
    }
}

const dtmp = (dispatch) => ({
    createWidget: (topicId) => {
        if (topicId !== undefined) {
            widgetActions.createWidget(dispatch, topicId)
        } else {
            alert("Please select a topic first")
        }
    },

    updateWidget: (wid, widget) => {
        widgetActions.updateWidget(dispatch, wid, widget)
    },

    deleteWidget:(wid) => {
        widgetActions.deleteWidget(dispatch, wid)
    },

    findWidgetsForTopic: (topicId) => {
        widgetActions.findWidgetsForTopic(dispatch, topicId)
    }
})

export default connect(stmp, dtmp) (WidgetList)
import React, {useState} from 'react'

const ParagraphWidget = ({widget, updateWidget, deleteWidget}) => {
    const [widgetCache, setWidgetCache] = useState(widget)
    const [editing, setEditing] = useState(false)
    return(
        <>
            {
                editing &&
                <>
                    <select value={widgetCache.type}
                            onChange={(e)=>{
                                setWidgetCache(widgetCache=>({...widgetCache, type:e.target.value}))
                            }}
                            className="form-control">
                        <option value={"HEADING"}>HEADING</option>
                        <option value={"PARAGRAPH"}>PARAGRAPH</option>
                    </select>
                    <br/>

                    <textarea value={widgetCache.text}
                              onChange={(e)=>{
                                  setWidgetCache(widgetCache=>({...widgetCache, text: e.target.value}))
                              }}
                              className="form-control"/>
                    <br/>
                    <i
                        onClick={() => {
                            updateWidget(widgetCache.id, widgetCache)
                            setEditing(false)
                        }}
                        className="fas fa-check fa-2x float-right"
                    />

                    <i
                        onClick={() => {
                            deleteWidget(widgetCache.id)
                            setEditing(false)
                        }}
                        className="fas fa-trash fa-2x float-right"
                    />
                </>
            }
            {
                !editing &&
                <>
                    <i onClick={() => setEditing(true)} className="fas fa-cog fa-2x float-right"/>
                    <p>{widget.text}</p>
                </>
            }
        </>
    )
}

export default ParagraphWidget
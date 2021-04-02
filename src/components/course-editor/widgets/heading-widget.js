import React, {useState} from 'react'

const HeadingWidget = ({widget, updateWidget, deleteWidget}) => {
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
                        <option value={"LIST"}>LIST</option>
                        <option value={"IMAGE"}>IMAGE</option>
                    </select>
                    <br/>

                    <input value={widgetCache.text}
                           onChange={(e)=>{
                               setWidgetCache(widgetCache=>({...widgetCache, text: e.target.value}))
                           }}
                           className="form-control"/>
                    <br/>
                    <select value={widgetCache.size}
                            onChange={(e)=>{
                                setWidgetCache(widgetCache=>({...widgetCache, size:parseInt(e.target.value)}))
                            }}
                            className="form-control">
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>
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
                    {widget.size === 1 && <h1>{widget.text}</h1>}
                    {widget.size === 2 && <h2>{widget.text}</h2>}
                    {widget.size === 3 && <h3>{widget.text}</h3>}
                    {widget.size === 4 && <h4>{widget.text}</h4>}
                    {widget.size === 5 && <h5>{widget.text}</h5>}
                    {widget.size === 6 && <h6>{widget.text}</h6>}
                </>
            }
        </>
    )
}

export default HeadingWidget;
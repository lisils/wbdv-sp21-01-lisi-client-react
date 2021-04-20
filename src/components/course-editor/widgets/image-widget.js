import React, {useState} from 'react'

const ImageWidget = ({widget, updateWidget, deleteWidget}) => {
    const [widgetCache, setWidgetCache] = useState(widget)
    const [editing, setEditing] = useState(false)

    return (<div>
        {
            !editing &&
                <>
                    <i onClick={() => setEditing(true)} className="fas fa-cog fa-2x float-right"></i>
                    <img width={widgetCache.width} height={widgetCache.height} src={widgetCache.src}/>
                </>

        }
        {
            editing &&
            <>
                Image URL
                <input value={widgetCache.src}
                       onChange={(e)=>{
                           setWidgetCache(widgetCache=>({...widgetCache, src:e.target.value}))
                       }}
                       className="form-control"
                />
                Image Width
                <input value={widgetCache.width}
                       className="form-control"
                       onChange={(e)=>{
                       setWidgetCache(widgetCache=>({...widgetCache, width:e.target.value}))
                       }}
                />
                Image Height
                <input value={widgetCache.height}
                       className="form-control"
                       onChange={(e)=>{
                           setWidgetCache(widgetCache=>({...widgetCache, height:e.target.value}))
                       }}
                />
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
    </div>)
}

export default ImageWidget
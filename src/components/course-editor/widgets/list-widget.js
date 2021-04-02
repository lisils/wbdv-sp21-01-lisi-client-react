import React, {useState} from 'react';

const ListWidget = ({widget, updateWidget, deleteWidget}) => {
    const [widgetCache, setWidgetCache] = useState(widget)
    const [editing, setEditing] = useState(false)

    return(
        <div>
            {
                editing &&
                <>
                    <input checked={widgetCache.ordered}
                           type="checkbox"
                           onChange={(e)=>{
                               setWidgetCache(widgetCache=>({...widgetCache, ordered:e.target.checked}))
                           }}
                    /> Ordered
                    <br/>

                    Item list
                    <textarea value={widgetCache.text}
                              onChange={(e)=>{
                                  setWidgetCache(widgetCache=>({...widgetCache, text:e.target.value}))
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
                    {
                        widgetCache.ordered &&
                        <>
                            <ol>
                                {
                                    widgetCache.text.split("\n").map((item) => {
                                        return(
                                            <li>
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                        </>

                    }
                    {
                        !widgetCache.ordered &&
                        <ul>
                            {
                                widgetCache.text.split("\n").map((item) => {
                                    return(
                                        <li>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
                </>
            }
        </div>
    )
}

export default ListWidget
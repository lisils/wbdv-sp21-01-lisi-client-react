import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to,
        selectItem,
        deleteItem,
        updateItem,
        item,
        isActive
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)
    return (
        <>
            {
                !editing &&
                <>
                    <div className={`nav-link ${isActive}`}>
                        <Link  to={to}>
                            {item.title}
                        </Link>
                        <i onClick={() => setEditing(true)} className="fas fa-edit float-right"></i>
                    </div>

                </>
            }
            {
                editing &&
                <>
                    <div className={`nav-link ${isActive}`}>
                        <input className="form-control"
                            onChange={(e) =>
                                setCachedItem({
                                    ...item,
                                    title: e.target.value
                                })}
                            value={cachedItem.title}/>

                        <i onClick={() => {
                            setEditing(false);
                            updateItem(cachedItem)
                        }} className="fas fa-check float-right" style={{color:'#5cb85c'}}></i>

                        <i onClick={() => {
                            setEditing(false);
                            deleteItem(item)
                        }} className="fas fa-times float-right" style={{color:'#d9534f'}}></i>
                    </div>
                </>
            }
        </>
    )
}

export default EditableItem
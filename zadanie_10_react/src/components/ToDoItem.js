import React from "react"

function ToDoItem(props) {

    return (
        <div className="todo-item" style={{textDecoration: props.item.done && "line-through"}} >
            <input type="checkbox"
                   checked={props.item.done}
                   onChange={() => props.handleChange(props.item.id)}
            />
            <p>{props.item.text}</p>
        </div>
    )

}

export default ToDoItem

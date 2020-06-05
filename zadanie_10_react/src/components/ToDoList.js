import React from "react"


class ToDoList extends React.Component {

    render() {
        return (
            <div className="todo-list" >
                {this.props.items}
            </div>
        )
    }
}

export default ToDoList
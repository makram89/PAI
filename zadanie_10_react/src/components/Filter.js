import React from "react"

function Filter(props) {
    return (
        <div className="input_fields">
            <input type="checkbox" onChange={() => props.handle()}/>
            <p> Hide done ToDos </p>
        </div>
    )
}

export default Filter
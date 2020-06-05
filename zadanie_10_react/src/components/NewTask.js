import React from "react"

function NewTask(props) {


        return (
            <form className="input_fields" >
                <input type="text" value={props.todoText} name="todoText" onChange={props.handleChange}/>
                <button onClick={props.handleSubmit}>Submit</button>
            </form>
        )

}

export default NewTask
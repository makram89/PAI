import React from 'react';
import './App.css';
import ToDoList from "./components/ToDoList";
import todosData from "./components/todos";
import ToDoItem from "./components/ToDoItem";
import Filter from "./components/Filter";
import NewTask from "./components/NewTask";

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            todos: [],
            filter : false,
            todoText : ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleEvent = this.handleEvent.bind(this)
        this.handleFilter = this.handleFilter.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd(event){
        event.preventDefault()
        if(this.state.todoText.trim().length !==0) {
            const id = this.state.todos.length +1
            let updatedTodos = this.state.todos
            const todo = {"id": id, "text": this.state.todoText, "done": false}
            updatedTodos.push(todo)
            this.setState({todoText : "", todos : updatedTodos})
        }

    }

    handleFilter(){
        this.setState(prevState => {
            return {
                filter: !prevState.filter
            }
        })
    }

    handleEvent(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })

    }

    render() {
        let filteredData
        if(this.state.filter)
        {
            filteredData = this.state.todos.filter(todo => !todo.done).map(todo => todo)
        }
        else
        {
            filteredData = this.state.todos
        }

        let items = filteredData.map(todo => <ToDoItem key={todo.id} item={todo}
                                                           handleChange={this.handleChange}/>)

        return (
            <div className="App">
                <header className="App-header">
                    ToDoApp
                </header>
                <Filter handle = {this.handleFilter} />
                {items.length >0 ? <ToDoList items={items} /> : <div> Nothing to show... :(</div>}
                <NewTask handleSubmit = {this.handleAdd} todoText = {this.state.todoText}  handleChange={this.handleEvent} />
            </div>
        )

    }
}

export default App;

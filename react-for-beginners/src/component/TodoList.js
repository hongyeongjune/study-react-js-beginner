import { useState } from 'react';

function TodoList() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const onSubmit = (event) => {
        event.preventDefault();
        if (todo === "") {
            return;
        }
        setTodos(prev => [...prev, todo]);
        setTodo("");
    }

    return (
        <div>
            <h1>My To Do List : {todos.length}</h1>
            <form onSubmit={onSubmit}>
                <input
                    value={todo}
                    onChange={(event) => setTodo(event.target.value)}
                    type="text"
                    placeholder={"Write your to do..."}
                />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {todos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;
import React from 'react';
import { useState } from 'react';

const Todo = () => {

    const [todo, setTodo] = useState("");
    // const [count, setCount] = useState([]);
    const [EditTodo, setEditTodo] = useState('');
    const [editing, setEditing] = useState("");

    function SubmitHandle(e) {
        e.preventDefault();

        const store = {
            id: new Date().getTime,
            text: todo,
        }

        // setCount("") store update 
        console.log(store);

    }

    function deleteTodo(id) {
        const updatedTodos = [...todo].filter((todo) => todo.id !== id)
        // setCount(updatedTodos)
    }

    function editTodo(id) {

        const Newtodo = "Value";

        const updatedTodos = [...todo].map((todo) => {
            if (todo.id === id) {
                todo.text = Newtodo;
            }
            return todo
        })

        setTodo(updatedTodos);
        setEditing("");
    }
    console.log(todo);

    return (
        <div>
            <div className='Todo'>

                <form onSubmit={SubmitHandle}>
                    <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
                    <button type='submit'>Add Task</button>
                </form>

                {todo.map((todo) =>
                    <div key={todo.id}>
                        {EditTodo == todo.id ?
                            (<input type="text" Value={todo.text} onChange={(e) => setEditing(e.target.value)} />) :
                            (<div>{todo.text}</div>)
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            }
                        {EditTodo == todo.id 
                        ?
                            <button onClick={() => editTodo(todo.id)}>Update</button> :
                            <button onClick={() => editTodo(todo.id)}> Edit</button>}
                    </div>)}
            </div>
        </div>
    )
}

export default Todo;


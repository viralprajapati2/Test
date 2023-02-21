import React from 'react';
import { useState } from 'react';

const Todo = () => {

    const [todo, setTodo] = useState([]);
    const [count, setCount] = useState("");
    const [EditTodo, setEditTodo] = useState(false);
    const [editing, setEditing] = useState("");

    function SubmitHandle(e) {
        e.preventDefault();

        const store = {
            id: new Date().getTime(),
            text: count,
        }
        console.log(store,18);

        setTodo([...todo].concat(store))
        setCount("")
    }

    function deleteTodo(id) {
        const updatedTodos = [...todo].filter((todo) => todo.id !== id)
        setTodo(updatedTodos)
        return todo
    }

    function Toggle(id) {
        const updatedTodos = [...todo].map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })

        setTodo(updatedTodos);
    }


    function editTodo(todo) {

        setCount(todo.text);
        // setTodo(updatedTodos);
        setEditTodo(true);
        setEditing("");
    }

    function update(todo){
        todo.text = count; 
        console.log(count,51);
        console.log(todo,52);
        setEditTodo(false);
        setCount("");
        return todo
    }

    return (
        <>
            <div>
                <form onSubmit={SubmitHandle}>
                    <input type="text" onChange={(e) => setCount(e.target.value)} value={count} />
                    <button type='submit'>Add Task</button>
                </form>
                
                {todo.map((todo) =>
                    <div key={todo.id}>
                        {EditTodo == todo.id ?
                            (<input type="text" Value={todo.text} onChange={(e) => setEditing(e.target.value)} />) :
                            (<div>{todo.text}</div>)
                        }
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        {EditTodo
                            ?
                            <button onClick={() => update(todo)}>Update</button> :
                            <button onClick={() => editTodo(todo)}> Edit</button>}
                    </div>)}
            </div>
        </>
    )
}
export default Todo;
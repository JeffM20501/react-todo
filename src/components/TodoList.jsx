import React from 'react'
import TodoItem from './TodoItem'
function TodoList({todos, onDelete, onUpdate}) {
    const mappedTodo = todos.map(todo=>(
        <TodoItem
            key={todo.id}
            id={todo.id}
            body={todo.body}
            done={todo.done}
            onUpdate={onUpdate}
            onDelete={onDelete}
        />
    ))
    return (
        <div>
            {mappedTodo}
        </div>
    )  
}

export default TodoList

import React from 'react'

function TodoItem({todo, handleChange, delTodo}) {


  return (
    <li>
    <input type="checkbox" checked= {todo.completed} onChange={()=>handleChange(todo.id)}/>
    {todo.title}
    <button onClick={()=>delTodo(todo.id)}>Delete</button>
    </li>
  )
}

export default TodoItem

import React from 'react'

function TodoItem({todo, handleChange}) {


  return (
    <li>
    <input type="checkbox" checked= {todo.completed} onChange={()=>handleChange(todo.id)}/>
    {todo.title}
    </li>
  )
}

export default TodoItem

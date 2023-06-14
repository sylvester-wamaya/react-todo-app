import React, { useState } from 'react'

function TodoItem({todo, handleChange, delTodo, updateTodo}) {

const [edit, setEdit] = useState(false)
const handleEdit = ()=>{
  setEdit(true)
}
let viewMode = {};
  let editMode = {};
  if (edit) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

const exitEdit = (e)=>{
  if(e.key === "Enter"){
    setEdit(false)
  }
}

  return (
    <li>
      <div style={viewMode}>
    <input type="checkbox" checked= {todo.completed} onChange={()=>handleChange(todo.id)}/>
    {todo.title}
    <button onClick={handleEdit}>Edit</button>
    <button onClick={()=>delTodo(todo.id)}>Delete</button>
    </div>
    <input
      type="text"
      defaultValue={todo.title}     
      style={editMode}
      onChange={(e)=>updateTodo(e.target.value, todo.id)}
      onKeyDown={exitEdit}
    />
    </li>
  )
}

export default TodoItem

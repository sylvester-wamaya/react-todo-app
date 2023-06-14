import React, { useState } from 'react'
import styles from '@/styles/TodoItem.module.css';

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

const completedStyle = {
  fontStyle: 'italic',
  color: '#595959',
  opacity: 0.4,
  textDecoration: 'line-through',
};

  return (
    <li className={styles.item}>
      <div style={viewMode} className={styles.content}>
    <input type="checkbox" checked= {todo.completed} onChange={()=>handleChange(todo.id)}/>
    <span style={todo.completed ? completedStyle : null}>
    {todo.title}
    </span>
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

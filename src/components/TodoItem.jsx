import React, { useRef, useState } from 'react'
import styles from '@/styles/TodoItem.module.css';
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";


function TodoItem({todo, handleChange, delTodo, updateTodo}) {

const [edit, setEdit] = useState(false)
const editInputRef = useRef(null)
//const [updateInput, setUpdateInput] = useState(todo.title);
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
    updateTodo(editInputRef.current.value, todo.id)
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
    <button onClick={handleEdit}><AiFillEdit style={{ color: "#5e5e5e", fontSize: "16px" }}/></button>
    <button onClick={()=>delTodo(todo.id)}><FaTrash style={{ color: "#5e5e5e", fontSize: "16px" }}/></button>
    </div>
    <input
      type="text"
      ref={editInputRef}
      defaultValue={todo.title}     
      style={editMode}
      //onChange={(e) =>updateTodo(e.target.value, todo.id)}
      onKeyDown={exitEdit}
    />
    </li>
  )
}

export default TodoItem

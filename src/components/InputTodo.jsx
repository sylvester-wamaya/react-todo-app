
import React, { useState } from 'react'
import { FaPlusCircle } from "react-icons/fa"


function InputTodo({addTodoItem}) {

  const [title, setTitle] = useState('')
  const [messege, setMessege] = useState('')

  const handleChange = (e)=>{
    setTitle(e.target.value)
  }
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(title.trim()){
    addTodoItem(title)
    setTitle('');
    setMessege('')
    } else{
      setMessege("Please add a Todo Item")
    }
  }
  return (
    <>
<form onSubmit={handleSubmit} className="form-container">
<input className="input-text" type="text" name='todo' value={title} placeholder="Add Todo..." onChange={handleChange} />

<button className="input-submit">
  <FaPlusCircle/>
  </button>
</form>
<span className="submit-warning">{messege}</span>
</>
  )
}

export default InputTodo

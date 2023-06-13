
import React, { useState } from 'react'


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
<form onSubmit={handleSubmit}>
<input type="text" name='todo' value={title} placeholder="Add Todo..." onChange={handleChange} />

<button>Submit</button>
</form>
<span>{messege}</span>
</>
  )
}

export default InputTodo

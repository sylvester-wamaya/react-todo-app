
import React, { useState } from 'react'


function InputTodo({addTodoItem}) {

  const [title, setTitle] = useState('')

  const handleChange = (e)=>{
    setTitle(e.target.value)
  }
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    addTodoItem(title)
    setTitle('');
  }
  return (
<form onSubmit={handleSubmit}>
<input type="text" name='todo' value={title} placeholder="Add Todo..." onChange={handleChange} />
<button>Submit</button>
</form>
  )
}

export default InputTodo

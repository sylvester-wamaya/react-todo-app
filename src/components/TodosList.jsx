import React from 'react'
import TodoItem from '@/components/TodoItem'

function TodosList({todo, handleChange}) {
  return (
    <ul>
    {
      todo.map((item)=>(
         <TodoItem todo = {item} key={item.id} handleChange = {handleChange}/>
      ))
    }
  </ul>
  )
}

export default TodosList

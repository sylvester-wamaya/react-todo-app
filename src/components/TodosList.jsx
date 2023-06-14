import React from 'react'
import TodoItem from '@/components/TodoItem'

function TodosList({todo, handleChange, delTodo, updateTodo}) {
  return (
    <ul>
    {
      todo.map((item)=>(
         <TodoItem todo = {item} key={item.id} handleChange = {handleChange} delTodo = {delTodo} updateTodo={updateTodo}/>
      ))
    }
  </ul>
  )
}

export default TodosList

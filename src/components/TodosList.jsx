import React from 'react'
import TodoItem from '@/components/TodoItem'

function TodosList({todo}) {
  return (
    <ul>
    {
      todo.map((item)=>(
         <TodoItem todo = {item} key={item.id}/>
      ))
    }
  </ul>
  )
}

export default TodosList

import React from 'react'

function TodosList({todo}) {
  return (
    <ul>
    {
      todo.map((item)=>(
         <li>{item.title}</li>
      ))
    }
  </ul>
  )
}

export default TodosList

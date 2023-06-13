import React, { useEffect, useState } from 'react'
import InputTodo from '@/components/InputTodo';
import TodosList from '@/components/TodosList';

function TodosLogic() {
  const [ todos, setTodos] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

  const handleChange = (id)=>{
    setTodos((prevState)=>
      prevState.map((todo)=>{
        if(todo.id === id){
          return{
        ...todo,
        completed: !todo.completed
      }
    }
      return todo
    })
    )
  }

  return (
    <>    
    <InputTodo/>
    <TodosList todo = {todos} handleChange = {handleChange}/>    
    </>

  )
}

export default TodosLogic

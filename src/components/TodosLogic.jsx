import React, { useState } from 'react'
import InputTodo from '@/components/InputTodo';
import TodosList from '@/components/TodosList';
import { v4 as uuidv4 } from "uuid";



function TodosLogic() {
  const [ todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: true,
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

  const delTodo = (id)=>{
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  }
  const addTodoItem = (title)=>{
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }
  return (
    <>    
    <InputTodo addTodoItem = {addTodoItem}/>
    <TodosList todo = {todos} handleChange = {handleChange} delTodo= {delTodo}/>    
    </>

  )
}

export default TodosLogic

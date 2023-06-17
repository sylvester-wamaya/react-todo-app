import React, { useEffect, useState } from 'react'
import InputTodo from '@/components/InputTodo';
import TodosList from '@/components/TodosList';
import { v4 as uuidv4 } from "uuid";
import Header from './Header';



function TodosLogic() {
  const [ todos, setTodos] = useState( JSON.parse(localStorage.getItem("todos")) || []);

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])


  
  

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
  const updateTodo = (updatedTitle, id) =>{
      setTodos(
        todos.map((item)=>{
          if(item.id==id){
            item.title = updatedTitle
          }
   
          return item
          
  })
      )

  }
  return (
    <> 
   <Header/>
    <InputTodo addTodoItem = {addTodoItem}/>
    <TodosList todo = {todos} handleChange = {handleChange} delTodo= {delTodo} updateTodo={updateTodo}/>    
    </>

  )
}

export default TodosLogic

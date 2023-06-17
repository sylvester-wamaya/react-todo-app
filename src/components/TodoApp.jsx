import { Routes, Route } from 'react-router-dom';
import '@/styles/App.css'


import TodosLogic from './TodosLogic';
import NavBar from './NavBar';
import About from './About';



const TodoApp = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<TodosLogic/>}/>
      <Route path="about" element={<About/>}/>
    </Routes>
    </>
  );
};
export default TodoApp;

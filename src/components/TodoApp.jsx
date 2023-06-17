import { Routes, Route } from 'react-router-dom';
import '@/styles/App.css'


import TodosLogic from './TodosLogic';
import NavBar from './NavBar';
import About from './About';
import Design from './Design';
import Development from './Development';



const TodoApp = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<TodosLogic/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="design" element={<Design/>}/>
      <Route path="development" element={<Development/>}/>
      <Route path="*" element={<i>The page not found</i>}/>
    </Routes>
    </>
  );
};
export default TodoApp;

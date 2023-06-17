
import TodoItem from '@/components/TodoItem'
import PropTypes from 'prop-types';

function TodosList({todo, handleChange, delTodo, updateTodo}) {
  TodosList.propTypes = {
    todo: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired
  }
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

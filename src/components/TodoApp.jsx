
import '@/styles/App.css'
import Header from '@/components/Header'
import TodosLogic from '@/components/TodosLogic'
import NavBar from '@/components/NavBar'


function App() {


  return (
    <>
    <NavBar/>
      <div className='wrapper'>
      <div className='todo'>
    <Header/>
    <TodosLogic/>
    </div>
    </div>
    </>

  )
}

export default App

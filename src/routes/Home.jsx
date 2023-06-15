
import '@/styles/App.css'
import Header from '@/components/Header'
import TodosLogic from '@/components/TodosLogic'
import NavBar from '@/components/NavBar'


function Home() {


  return (
    <>
    <NavBar/>
  
      <div className='todo'>
    <Header/>
    <TodosLogic/>
    </div>

    </>

  )
}

export default Home
